Simple webpack usage
========================

Tested under webpack-dev-server 1.7.0.

1. Clone this gist
2. `npm install`
3. `npm start`
4. Visit http://localhost:8080 (or http://192.168.x.x:8080) on multiple devices
5. Edit entry.js and hit save
6. Watch the page updates itself across multiple devices

---

This demo opens up a "backend" server that serves index.html, which can be any web application in the real-world scenario. We use `--content-base-target` option (which is never documented and [will be deprecated soon](https://github.com/webpack/webpack-dev-server/pull/127)) to proxy requests that it can't handle to our backend server.

It is worth noting that we use neither the `--inline` option nor the `<script src="http://localhost:8080/webpack-dev-server.js"` here, because in the both case the socket.io client in the webpack-dev-server runtime tries to connect to localhost, even on 'remote' devices that webpack-dev-server does not run on. Instead, we specify 'webpack-dev-server/client?/' to be the output entry in order to instruct the webpack-dev-server runtime to connect to "/", which is hostname-agnostic and works across multiple devices.
