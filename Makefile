WEBPACK=node_modules/webpack/bin/webpack.js

.PHONY: build scripts
.SILENT:

build: clean scripts

clean:
	rm -fr build
	rm -f npm-debug.log

scripts:
	$(WEBPACK) -p scripts/main.js build/scripts/main.js
