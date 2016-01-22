
publish:
	npm run build
	npm publish

sync:
	cnpm sync dora-plugin-json-server
	tnpm sync dora-plugin-json-server

publish-sync:
	make publish
	make sync
