WEBPACK=node_modules/webpack/bin/webpack.js

.PHONY: build scripts
.SILENT:

build: scripts

scripts:
	$(WEBPACK) -p scripts/main.js build/scripts/main.js
