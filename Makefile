.PHONY: serve build docker clean

# Local preview with Ruby installed
serve:
	bundle exec jekyll serve --livereload

# Local preview with Docker only
docker:
	docker run --rm -it -v "$$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll:4 \
		jekyll serve --force_polling --host 0.0.0.0

# Production build into _site/
build:
	JEKYLL_ENV=production bundle exec jekyll build

clean:
	rm -rf _site .jekyll-cache .sass-cache
