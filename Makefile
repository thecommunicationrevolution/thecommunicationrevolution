WEBPACK=node_modules/webpack/bin/webpack.js

.PHONY: scripts lol
.SILENT:

scripts:
	$(WEBPACK) -p scripts/main.js build/scripts/main.js
