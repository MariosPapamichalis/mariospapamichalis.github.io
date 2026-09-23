/* ---------------------------------------------------------------------------
 * backdrop.js — a drifting layered network drawn behind the page.
 *
 * Nodes are seeded in columns and wired only to the column in front of them,
 * so the figure reads as a feed-forward architecture rather than a random
 * scatter. Edge weights breathe slowly and occasional signals travel along
 * the strongest connections.
 *
 * The drawing is decorative: it never receives pointer events, it is erased
 * back behind the reading column so text always wins, it pauses when the tab
 * is hidden, and it collapses to a single static frame when the visitor has
 * asked for reduced motion.
 * ------------------------------------------------------------------------- */
(function () {
  "use strict";

  var canvas = document.getElementById("backdrop");
  if (!canvas || !canvas.getContext) { return; }

  var ctx = canvas.getContext("2d");
  if (!ctx) { return; }

  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var shell = document.querySelector(".shell");

  var W = 0, H = 0;
  var nodes = [], edges = [], pulses = [];
  var recessFrom = 0, recessTo = 0, recessDepth = 0.74;
  var palette = { node: "", edge: "", pulse: "" };

  var started = 0, lastFrame = 0, lastSpawn = 0, frame = null;
  var FPS = 30;                 // gentle on battery; the motion is slow anyway
  var FRAME_MS = 1000 / FPS;

  /* -- palette -------------------------------------------------------------
     Colours come from the stylesheet, so light and dark mode need no special
     handling here. */
  function readPalette() {
    var s = getComputedStyle(document.documentElement);
    palette.node  = (s.getPropertyValue("--net-node")  || "").trim() || "rgba(29,63,99,.70)";
    palette.edge  = (s.getPropertyValue("--net-edge")  || "").trim() || "rgba(41,84,126,.40)";
    palette.pulse = (s.getPropertyValue("--net-pulse") || "").trim() || "rgba(176,125,46,.92)";

    var recess = parseFloat((s.getPropertyValue("--net-recess") || "").trim());
    recessDepth = isNaN(recess) ? 0.74 : Math.min(Math.max(recess, 0), 1);
  }

  /* -- geometry ----------------------------------------------------------- */
  function build() {
    var layers = W < 640 ? 5 : (W < 1024 ? 7 : (W < 1500 ? 9 : 11));
    var rows   = H < 620 ? 5 : (H < 900 ? 6 : 7);

    nodes = [];
    var i, j;

    for (i = 0; i < layers; i++) {
      // Alternating widths give the columns the uneven silhouette of a real
      // architecture instead of a uniform grid.
      var count = rows - (i % 3 === 1 ? 1 : 0);
      var colW  = W / layers;
      var rowH  = H / count;

      for (j = 0; j < count; j++) {
        nodes.push({
          layer: i,
          bx: (i + 0.5) * colW + (Math.random() - 0.5) * colW * 0.34,
          by: (j + 0.5) * rowH + (Math.random() - 0.5) * rowH * 0.38,
          ax: 5 + Math.random() * 13,               // drift amplitude, px
          ay: 4 + Math.random() * 11,
          sx: 0.09 + Math.random() * 0.15,          // drift speed, rad/s
          sy: 0.07 + Math.random() * 0.14,
          ph: Math.random() * Math.PI * 2,
          r:  1.4 + Math.random() * 1.9,
          lit: 0,                                   // brief flash when a pulse lands
          x: 0, y: 0
        });
      }
    }

    // Feed-forward wiring: every node reaches into the next column only, and
    // only as far vertically as a real layer diagram would.
    edges = [];
    var reach = (H / rows) * 1.45;

    for (i = 0; i < nodes.length; i++) {
      for (j = 0; j < nodes.length; j++) {
        if (nodes[j].layer !== nodes[i].layer + 1) { continue; }
        if (Math.abs(nodes[j].by - nodes[i].by) > reach) { continue; }
        edges.push({
          a: i,
          b: j,
          w:  0.18 + Math.random() * 0.82,          // the "weight"
          ph: Math.random() * Math.PI * 2
        });
      }
    }

    pulses = [];
  }

  /* -- sizing ------------------------------------------------------------- */
  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    W = window.innerWidth;
    H = window.innerHeight;

    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Where the reading column sits, so the network can step aside for it.
    if (shell) {
      var b = shell.getBoundingClientRect();
      recessFrom = Math.max(0, b.left - 48);
      recessTo   = Math.min(W, b.right + 48);
    } else {
      recessFrom = W * 0.12;
      recessTo   = W * 0.88;
    }

    readPalette();
    build();
    render(performance.now());
  }

  /* -- drawing ------------------------------------------------------------ */
  function render(now) {
    var t = (now - started) / 1000;
    var i, e, a, b;

    ctx.clearRect(0, 0, W, H);

    // Positions for this frame.
    for (i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x = n.bx + Math.cos(t * n.sx + n.ph) * n.ax;
      n.y = n.by + Math.sin(t * n.sy + n.ph * 1.7) * n.ay;
      if (n.lit > 0) { n.lit = Math.max(0, n.lit - 0.045); }
    }

    // Connections. Each weight breathes on its own slow cycle.
    ctx.strokeStyle = palette.edge;
    ctx.lineWidth = 1;
    for (i = 0; i < edges.length; i++) {
      e = edges[i];
      a = nodes[e.a];
      b = nodes[e.b];
      ctx.globalAlpha = e.w * (0.55 + 0.45 * Math.sin(t * 0.28 + e.ph));
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    // Units.
    ctx.fillStyle = palette.node;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      ctx.globalAlpha = 0.20 + a.lit * 0.30;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r * 3.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 0.85 + a.lit * 0.15;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r + a.lit * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }

    // Signals in flight.
    ctx.fillStyle = palette.pulse;
    for (i = pulses.length - 1; i >= 0; i--) {
      var p = pulses[i];
      e = edges[p.e];
      a = nodes[e.a];
      b = nodes[e.b];

      var px = a.x + (b.x - a.x) * p.t;
      var py = a.y + (b.y - a.y) * p.t;
      var fade = Math.sin(p.t * Math.PI);          // fades in and out along the way

      ctx.globalAlpha = 0.22 * fade;
      ctx.beginPath();
      ctx.arc(px, py, 5.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 0.95 * fade;
      ctx.beginPath();
      ctx.arc(px, py, 1.9, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;

    // Hold the drawing back behind the reading column. A horizontal fade is
    // enough: the column runs the full height of the page.
    if (recessDepth > 0 && recessTo > recessFrom) {
      var g = ctx.createLinearGradient(recessFrom, 0, recessTo, 0);
      g.addColorStop(0.00, "rgba(0,0,0,0)");
      g.addColorStop(0.15, "rgba(0,0,0," + recessDepth + ")");
      g.addColorStop(0.85, "rgba(0,0,0," + recessDepth + ")");
      g.addColorStop(1.00, "rgba(0,0,0,0)");

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = g;
      ctx.fillRect(recessFrom, 0, recessTo - recessFrom, H);
      ctx.globalCompositeOperation = "source-over";
    }
  }

  /* -- signals ------------------------------------------------------------ */
  function spawnPulse() {
    if (!edges.length || pulses.length >= 5) { return; }

    // Prefer the heavier connections, so the traffic follows the strong paths.
    var pick = 0, best = -1;
    for (var k = 0; k < 4; k++) {
      var c = (Math.random() * edges.length) | 0;
      if (edges[c].w > best) { best = edges[c].w; pick = c; }
    }
    pulses.push({ e: pick, t: 0, v: 0.22 + Math.random() * 0.26 });
  }

  function advancePulses(dt) {
    for (var i = pulses.length - 1; i >= 0; i--) {
      pulses[i].t += pulses[i].v * dt;
      if (pulses[i].t >= 1) {
        nodes[edges[pulses[i].e].b].lit = 1;        // the receiving unit flashes
        pulses.splice(i, 1);
      }
    }
  }

  /* -- loop --------------------------------------------------------------- */
  function tick(now) {
    frame = window.requestAnimationFrame(tick);

    var elapsed = now - lastFrame;
    if (elapsed < FRAME_MS) { return; }
    lastFrame = now - (elapsed % FRAME_MS);

    advancePulses(elapsed / 1000);
    if (now - lastSpawn > 820) { lastSpawn = now; spawnPulse(); }

    render(now);
  }

  function start() {
    if (frame !== null || motionQuery.matches) { return; }
    lastFrame = lastSpawn = performance.now();
    frame = window.requestAnimationFrame(tick);
  }

  function stop() {
    if (frame !== null) { window.cancelAnimationFrame(frame); frame = null; }
  }

  /* -- wiring ------------------------------------------------------------- */
  var resizeTimer = null;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 180);
  }, { passive: true });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { stop(); } else { start(); }
  });

  function onMotionChange() {
    if (motionQuery.matches) {
      stop();
      render(performance.now());                    // one still frame, no motion
    } else {
      start();
    }
  }
  if (motionQuery.addEventListener) {
    motionQuery.addEventListener("change", onMotionChange);
  } else if (motionQuery.addListener) {
    motionQuery.addListener(onMotionChange);
  }

  // Follow the system theme without a reload.
  var themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  function onThemeChange() { readPalette(); render(performance.now()); }
  if (themeQuery.addEventListener) {
    themeQuery.addEventListener("change", onThemeChange);
  } else if (themeQuery.addListener) {
    themeQuery.addListener(onThemeChange);
  }

  started = performance.now();
  resize();
  start();
})();
