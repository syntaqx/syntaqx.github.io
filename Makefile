bundle := bundle

install:
	${bundle} install --path vendor/bundle

serve: install
	${bundle} exec jekyll serve --safe --drafts --watch

build: install
	${bundle} exec jekyll build --safe

lint-style:
	${bundle} exec rake rubocop

lint-html:
	${bundle} exec rake html_proofer

verifiers: lint-style lint-html
