// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iEi6V":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b5685e277fa0958d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"20vbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCarouselItem", ()=>createCarouselItem);
parcelHelpers.export(exports, "clear", ()=>clear);
parcelHelpers.export(exports, "appendCarousel", ()=>appendCarousel);
parcelHelpers.export(exports, "start", ()=>start);
var _bootstrap = require("bootstrap");
var _indexJs = require("./index.js");
function createCarouselItem(imgSrc, imgAlt, imgId) {
    const template = document.querySelector("#carouselItemTemplate");
    const clone = template.content.firstElementChild.cloneNode(true);
    const img = clone.querySelector("img");
    img.src = imgSrc;
    img.alt = imgAlt;
    const favBtn = clone.querySelector(".favourite-button");
    favBtn.addEventListener("click", ()=>{
        (0, _indexJs.favourite)(imgId);
    });
    return clone;
}
function clear() {
    const carousel = document.querySelector("#carouselInner");
    while(carousel.firstChild)carousel.removeChild(carousel.firstChild);
}
function appendCarousel(element) {
    const carousel = document.querySelector("#carouselInner");
    const activeItem = document.querySelector(".carousel-item.active");
    if (!activeItem) element.classList.add("active");
    carousel.appendChild(element);
}
function start() {
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");
    if (window.matchMedia("(min-width: 768px)").matches) {
        const carousel = new _bootstrap.Carousel(multipleCardCarousel, {
            interval: false
        });
        const carouselWidth = $(".carousel-inner")[0].scrollWidth;
        const cardWidth = $(".carousel-item").width();
        let scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").unbind();
        $("#carouselExampleControls .carousel-control-next").on("click", function() {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate({
                    scrollLeft: scrollPosition
                }, 600);
            }
        });
        $("#carouselExampleControls .carousel-control-prev").unbind();
        $("#carouselExampleControls .carousel-control-prev").on("click", function() {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate({
                    scrollLeft: scrollPosition
                }, 600);
            }
        });
    } else $(multipleCardCarousel).addClass("slide");
}

},{"bootstrap":"h36JB","./index.js":"bB7Pu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h36JB":[function(require,module,exports) {
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", ()=>Alert);
parcelHelpers.export(exports, "Button", ()=>Button);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
parcelHelpers.export(exports, "Collapse", ()=>Collapse);
parcelHelpers.export(exports, "Dropdown", ()=>Dropdown);
parcelHelpers.export(exports, "Modal", ()=>Modal);
parcelHelpers.export(exports, "Offcanvas", ()=>Offcanvas);
parcelHelpers.export(exports, "Popover", ()=>Popover);
parcelHelpers.export(exports, "ScrollSpy", ()=>ScrollSpy);
parcelHelpers.export(exports, "Tab", ()=>Tab);
parcelHelpers.export(exports, "Toast", ()=>Toast);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = "transitionend"; // Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttribute = element.getAttribute("href"); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
         // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector;
};
const getSelectorFromElement = (element)=>{
    const selector = getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
const getElementFromSelector = (element)=>{
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
const getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
     // Get transition-duration of the element
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
     // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const getElement = (object)=>{
    // it's a jQuery object or a node element
    if (isElement(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector(object);
    return null;
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible"; // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest("summary");
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
     // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
     // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = ()=>{
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            for (const callback of DOMContentLoadedCallbacks)callback();
        });
        DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const isRTL = ()=>document.documentElement.dir === "rtl";
const defineJQueryPlugin = (plugin)=>{
    onDOMContentLoaded(()=>{
        const $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const execute = (callback)=>{
    if (typeof callback === "function") callback();
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const nativeEvents = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
]);
/**
 * Private methods
 */ function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string"; // todo: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const handlerKey of Object.keys(storeElementEvent))if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof callable !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const keyHandlers of Object.keys(storeElementEvent)){
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
        }
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        let evt = new Event(event, {
            bubbles,
            cancelable: true
        });
        evt = hydrateObj(evt, args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {}))try {
        obj[key] = value;
    } catch (_unused) {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const elementMap = new Map();
const Data = {
    set (element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!elementMap.has(element)) return;
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key); // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === "" || value === "null") return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
        return value;
    }
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Class definition
 */ class Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {}; // try to parse
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const property of Object.keys(configTypes)){
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const VERSION = "5.2.3";
/**
 * Class definition
 */ class BaseComponent extends Config {
    constructor(element, config){
        super();
        element = getElement(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    static getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const enableDismissTrigger = (component, method = "hide")=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const target = getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$f = "alert";
const DATA_KEY$a = "bs.alert";
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = "fade";
const CLASS_NAME_SHOW$8 = "show";
/**
 * Class definition
 */ class Alert extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$f;
    }
    close() {
        const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
    }
    _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Alert, "close");
/**
 * jQuery
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$e = "button";
const DATA_KEY$9 = "bs.button";
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = ".data-api";
const CLASS_NAME_ACTIVE$3 = "active";
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
/**
 * Class definition
 */ class Button extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$e;
    }
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config === "toggle") data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
        return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$d = "swipe";
const EVENT_KEY$9 = ".bs.swipe";
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = "touch";
const POINTER_TYPE_PEN = "pen";
const CLASS_NAME_POINTER_EVENT = "pointer-event";
const SWIPE_THRESHOLD = 40;
const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
/**
 * Class definition
 */ class Swipe extends Config {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    static get Default() {
        return Default$c;
    }
    static get DefaultType() {
        return DefaultType$c;
    }
    static get NAME() {
        return NAME$d;
    }
    dispose() {
        EventHandler.off(this._element, EVENT_KEY$9);
    }
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        execute(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>this._move(event));
            EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$c = "carousel";
const DATA_KEY$8 = "bs.carousel";
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = ".data-api";
const ARROW_LEFT_KEY$1 = "ArrowLeft";
const ARROW_RIGHT_KEY$1 = "ArrowRight";
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const ORDER_NEXT = "next";
const ORDER_PREV = "prev";
const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE$2 = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";
const SELECTOR_ACTIVE = ".active";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = ".carousel-item img";
const SELECTOR_INDICATORS = ".carousel-indicators";
const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
};
const DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
/**
 * Class definition
 */ class Carousel extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === CLASS_NAME_CAROUSEL) this.cycle();
    }
    static get Default() {
        return Default$b;
    }
    static get DefaultType() {
        return DefaultType$b;
    }
    static get NAME() {
        return NAME$c;
    }
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause() {
        if (this._isSliding) triggerTransitionEnd(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN$1, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            EventHandler.on(this._element, EVENT_MOUSEENTER$1, ()=>this.pause());
            EventHandler.on(this._element, EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && Swipe.isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element))EventHandler.on(img, EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== "hover") return;
             // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder(DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute("aria-current", "true");
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === ORDER_NEXT;
        const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return EventHandler.trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent(EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent(EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
        return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
        if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Carousel.getOrCreateInstance(this, config);
            if (typeof config === "number") {
                data.to(config);
                return;
            }
            if (typeof config === "string") {
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, ()=>{
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels)Carousel.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$b = "collapse";
const DATA_KEY$7 = "bs.collapse";
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = ".data-api";
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";
const CLASS_NAME_COLLAPSED = "collapsed";
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const WIDTH = "width";
const HEIGHT = "height";
const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
    parent: null,
    toggle: true
};
const DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
};
/**
 * Class definition
 */ class Collapse extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for (const elem of toggleList){
            const selector = getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    static get Default() {
        return Default$a;
    }
    static get DefaultType() {
        return DefaultType$a;
    }
    static get NAME() {
        return NAME$b;
    }
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = []; // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>Collapse.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN$6);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        for (const trigger of this._triggerArray){
            const element = getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = getElement(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
        for (const element of children){
            const selected = getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth
        return SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
        }
    }
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    for (const element of selectorElements)Collapse.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$a = "dropdown";
const DATA_KEY$6 = "bs.dropdown";
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = ".data-api";
const ESCAPE_KEY$2 = "Escape";
const TAB_KEY$1 = "Tab";
const ARROW_UP_KEY$1 = "ArrowUp";
const ARROW_DOWN_KEY$1 = "ArrowDown";
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = "show";
const CLASS_NAME_DROPUP = "dropup";
const CLASS_NAME_DROPEND = "dropend";
const CLASS_NAME_DROPSTART = "dropstart";
const CLASS_NAME_DROPUP_CENTER = "dropup-center";
const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = ".dropdown-menu";
const SELECTOR_NAVBAR = ".navbar";
const SELECTOR_NAVBAR_NAV = ".navbar-nav";
const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
const PLACEMENT_TOPCENTER = "top";
const PLACEMENT_BOTTOMCENTER = "bottom";
const Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: "toggle"
};
const DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
/**
 * Class definition
 */ class Dropdown extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode; // dropdown wrapper
        // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
        this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    static get Default() {
        return Default$9;
    }
    static get DefaultType() {
        return DefaultType$9;
    }
    static get NAME() {
        return NAME$a;
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (isDisabled(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper(); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
        if (isDisabled(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    _completeHide(relatedTarget) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) return;
         // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute("aria-expanded", "false");
        Manipulator.removeDataAttribute(this._menu, "popper");
        EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let referenceElement = this._element;
        if (this._config.reference === "parent") referenceElement = this._parent;
        else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
        else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) return PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) return PLACEMENT_BOTTOMCENTER;
         // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        }; // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === "static") {
            Manipulator.setDataAttribute(this._menu, "popper", "static"); // todo:v6 remove
            defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _selectMenuItem({ key, target }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>isVisible(element));
        if (!items.length) return;
         // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) return;
        const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
             // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === "click") relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === ESCAPE_KEY$2;
        const isUpOrDownEvent = [
            ARROW_UP_KEY$1,
            ARROW_DOWN_KEY$1
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
        const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        const instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            // else is escape and we check if it is shown
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
/**
 * Class definition
 */ class ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow");
        this._resetElementAttributes(this._element, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow");
        this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
        const actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
    _resetElementAttributes(selector, styleProperty) {
        const manipulationCallBack = (element)=>{
            const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero
            if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
            }
            Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) {
            callBack(selector);
            return;
        }
        for (const sel of SelectorEngine.find(selector, this._element))callBack(sel);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$9 = "backdrop";
const CLASS_NAME_FADE$4 = "fade";
const CLASS_NAME_SHOW$5 = "show";
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body" // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
};
/**
 * Class definition
 */ class Backdrop extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    static get Default() {
        return Default$8;
    }
    static get DefaultType() {
        return DefaultType$8;
    }
    static get NAME() {
        return NAME$9;
    }
    show(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._append();
        const element = this._getElement();
        if (this._config.isAnimated) reflow(element);
        element.classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            execute(callback);
        });
    }
    dispose() {
        if (!this._isAppended) return;
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement("div");
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = getElement(config.rootElement);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        const element = this._getElement();
        this._config.rootElement.append(element);
        EventHandler.on(element, EVENT_MOUSEDOWN, ()=>{
            execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$8 = "focustrap";
const DATA_KEY$5 = "bs.focustrap";
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = "Tab";
const TAB_NAV_FORWARD = "forward";
const TAB_NAV_BACKWARD = "backward";
const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
};
const DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
};
/**
 * Class definition
 */ class FocusTrap extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    static get Default() {
        return Default$7;
    }
    static get DefaultType() {
        return DefaultType$7;
    }
    static get NAME() {
        return NAME$8;
    }
    activate() {
        if (this._isActive) return;
        if (this._config.autofocus) this._config.trapElement.focus();
        EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
        EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$5);
    }
    _handleFocusin(event) {
        const { trapElement } = this._config;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
        const elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$7 = "modal";
const DATA_KEY$4 = "bs.modal";
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = ".data-api";
const ESCAPE_KEY$1 = "Escape";
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = "modal-open";
const CLASS_NAME_FADE$3 = "fade";
const CLASS_NAME_SHOW$4 = "show";
const CLASS_NAME_STATIC = "modal-static";
const OPEN_SELECTOR$1 = ".modal.show";
const SELECTOR_DIALOG = ".modal-dialog";
const SELECTOR_MODAL_BODY = ".modal-body";
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
};
const DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
};
/**
 * Class definition
 */ class Modal extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
        this._addEventListeners();
    }
    static get Default() {
        return Default$6;
    }
    static get DefaultType() {
        return DefaultType$6;
    }
    static get NAME() {
        return NAME$7;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(()=>this._showElement(relatedTarget));
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
        for (const htmlElement of [
            window,
            this._dialog
        ])EventHandler.off(htmlElement, EVENT_KEY$4);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    _initializeBackDrop() {
        return new Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value,
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _showElement(relatedTarget) {
        // try to append dynamic modal
        if (!document.body.contains(this._element)) document.body.append(this._element);
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.scrollTop = 0;
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) modalBody.scrollTop = 0;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$4, {
                relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (event.key !== ESCAPE_KEY$1) return;
            if (this._config.keyboard) {
                event.preventDefault();
                this.hide();
                return;
            }
            this._triggerBackdropTransition();
        });
        EventHandler.on(window, EVENT_RESIZE$1, ()=>{
            if (this._isShown && !this._isTransitioning) this._adjustDialog();
        });
        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event)=>{
            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
            EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2)=>{
                if (this._element !== event.target || this._element !== event2.target) return;
                if (this._config.backdrop === "static") {
                    this._triggerBackdropTransition();
                    return;
                }
                if (this._config.backdrop) this.hide();
            });
        });
    }
    _hideModal() {
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$4);
        });
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) return;
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed
        if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) this._element.style.overflowY = "hidden";
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            this._element.classList.remove(CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    /**
   * The following methods are used to handle overflowing modals
   */ _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
            const property = isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
        if (!isBodyOverflowing && isModalOverflowing) {
            const property = isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
    }
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$4, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$4, ()=>{
            if (isVisible(this)) this.focus();
        });
    }); // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) Modal.getInstance(alreadyOpen).hide();
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * jQuery
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$6 = "offcanvas";
const DATA_KEY$3 = "bs.offcanvas";
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = ".data-api";
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = "Escape";
const CLASS_NAME_SHOW$3 = "show";
const CLASS_NAME_SHOWING$1 = "showing";
const CLASS_NAME_HIDING = "hiding";
const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
const OPEN_SELECTOR = ".offcanvas.show";
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
};
/**
 * Class definition
 */ class Offcanvas extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    static get Default() {
        return Default$5;
    }
    static get DefaultType() {
        return DefaultType$5;
    }
    static get NAME() {
        return NAME$6;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) new ScrollBarHelper().hide();
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.classList.add(CLASS_NAME_SHOWING$1);
        const completeCallBack = ()=>{
            if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
            this._element.classList.add(CLASS_NAME_SHOW$3);
            this._element.classList.remove(CLASS_NAME_SHOWING$1);
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add(CLASS_NAME_HIDING);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) new ScrollBarHelper().reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    _initializeBackDrop() {
        const clickCallback = ()=>{
            if (this._config.backdrop === "static") {
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        }; // 'static' option will be translated to true, and booleans will keep their value
        const isVisible = Boolean(this._config.backdrop);
        return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible ? clickCallback : null
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
            if (event.key !== ESCAPE_KEY) return;
            if (!this._config.keyboard) {
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        });
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
        // focus on trigger when it is closed
        if (isVisible(this)) this.focus();
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) Offcanvas.getInstance(alreadyOpen).hide();
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
    for (const selector of SelectorEngine.find(OPEN_SELECTOR))Offcanvas.getOrCreateInstance(selector).show();
});
EventHandler.on(window, EVENT_RESIZE, ()=>{
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))if (getComputedStyle(element).position !== "fixed") Offcanvas.getOrCreateInstance(element).hide();
});
enableDismissTrigger(Offcanvas);
/**
 * jQuery
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
]);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
const allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
        return true;
    } // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": [
        "class",
        "dir",
        "id",
        "lang",
        "role",
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        "target",
        "href",
        "title",
        "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        "src",
        "srcset",
        "alt",
        "title",
        "width",
        "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$5 = "TemplateFactory";
const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
};
const DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
};
const DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
/**
 * Class definition
 */ class TemplateFactory extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    static get Default() {
        return Default$4;
    }
    static get DefaultType() {
        return DefaultType$4;
    }
    static get NAME() {
        return NAME$5;
    }
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement("div");
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(" "));
        return template;
    }
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector,
            entry: content
        }, DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = SelectorEngine.findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if (isElement(content)) {
            this._putElementInTemplate(getElement(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return typeof arg === "function" ? arg(this) : arg;
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$4 = "tooltip";
const DISALLOWED_ATTRIBUTES = new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
]);
const CLASS_NAME_FADE$2 = "fade";
const CLASS_NAME_MODAL = "modal";
const CLASS_NAME_SHOW$2 = "show";
const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = "hide.bs.modal";
const TRIGGER_HOVER = "hover";
const TRIGGER_FOCUS = "focus";
const TRIGGER_CLICK = "click";
const TRIGGER_MANUAL = "manual";
const EVENT_HIDE$2 = "hide";
const EVENT_HIDDEN$2 = "hidden";
const EVENT_SHOW$2 = "show";
const EVENT_SHOWN$2 = "shown";
const EVENT_INSERTED = "inserted";
const EVENT_CLICK$1 = "click";
const EVENT_FOCUSIN$1 = "focusin";
const EVENT_FOCUSOUT$1 = "focusout";
const EVENT_MOUSEENTER = "mouseenter";
const EVENT_MOUSELEAVE = "mouseleave";
const AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
};
const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
        "top",
        "right",
        "bottom",
        "left"
    ],
    html: false,
    offset: [
        0,
        0
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
};
const DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
/**
 * Class definition
 */ class Tooltip extends BaseComponent {
    constructor(element, config){
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(element, config); // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null; // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    static get Default() {
        return Default$3;
    }
    static get DefaultType() {
        return DefaultType$3;
    }
    static get NAME() {
        return NAME$4;
    }
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
         // todo v6 remove this OR make it optional
        this._disposePopper();
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        const complete = ()=>{
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) this._disposePopper();
            this._element.removeAttribute("aria-describedby");
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6
        if (!tip) return null;
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = getUID(this.constructor.NAME).toString();
        tip.setAttribute("id", tipId);
        if (this._isAnimated()) tip.classList.add(CLASS_NAME_FADE$2);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new TemplateFactory({
            ...this._config,
            // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
        const placement = typeof this._config.placement === "function" ? this._config.placement.call(this, tip, this._element) : this._config.placement;
        const attachment = AttachmentMap[placement.toUpperCase()];
        return _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return typeof arg === "function" ? arg.call(this._element) : arg;
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: "preSetPlacement",
                    enabled: true,
                    phase: "beforeMain",
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                    context._enter();
                });
                EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute("title");
        if (!title) return;
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
        this._element.setAttribute("data-bs-original-title", title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute("title");
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : getElement(config.container);
        if (typeof config.delay === "number") config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === "number") config.title = config.title.toString();
        if (typeof config.content === "number") config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for(const key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
        config.selector = false;
        config.trigger = "manual"; // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$3 = "popover";
const SELECTOR_TITLE = ".popover-header";
const SELECTOR_CONTENT = ".popover-body";
const Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [
        0,
        8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
};
const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
};
/**
 * Class definition
 */ class Popover extends Tooltip {
    // Getters
    static get Default() {
        return Default$2;
    }
    static get DefaultType() {
        return DefaultType$2;
    }
    static get NAME() {
        return NAME$3;
    }
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
        return {
            [SELECTOR_TITLE]: this._getTitle(),
            [SELECTOR_CONTENT]: this._getContent()
        };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$2 = "scrollspy";
const DATA_KEY$2 = "bs.scrollspy";
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = ".data-api";
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
const CLASS_NAME_ACTIVE$1 = "active";
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = "[href]";
const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const SELECTOR_NAV_LINKS = ".nav-link";
const SELECTOR_NAV_ITEMS = ".nav-item";
const SELECTOR_LIST_ITEMS = ".list-group-item";
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = ".dropdown";
const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
        0.1,
        0.5,
        1
    ]
};
const DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
};
/**
 * Class definition
 */ class ScrollSpy extends BaseComponent {
    constructor(element, config){
        super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper
        this._targetLinks = new Map();
        this._observableSections = new Map();
        this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
        this._activeTarget = null;
        this._observer = null;
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        };
        this.refresh(); // initialize
    }
    static get Default() {
        return Default$1;
    }
    static get DefaultType() {
        return DefaultType$1;
    }
    static get NAME() {
        return NAME$2;
    }
    refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) this._observer.disconnect();
        else this._observer = this._getNewObserver();
        for (const section of this._observableSections.values())this._observer.observe(section);
    }
    dispose() {
        this._observer.disconnect();
        super.dispose();
    }
    _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
        if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value)=>Number.parseFloat(value));
        return config;
    }
    _maybeEnableSmoothScroll() {
        if (!this._config.smoothScroll) return;
         // unregister any previous listeners
        EventHandler.off(this._config.target, EVENT_CLICK);
        EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event)=>{
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
                event.preventDefault();
                const root = this._rootElement || window;
                const height = observableSection.offsetTop - this._element.offsetTop;
                if (root.scrollTo) {
                    root.scrollTo({
                        top: height,
                        behavior: "smooth"
                    });
                    return;
                } // Chrome 60 doesn't support `scrollTo`
                root.scrollTop = height;
            }
        });
    }
    _getNewObserver() {
        const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
    }
    _observerCallback(entries) {
        const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
        const activate = (entry)=>{
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
        };
        const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        for (const entry of entries){
            if (!entry.isIntersecting) {
                this._activeTarget = null;
                this._clearActiveClass(targetElement(entry));
                continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
                activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                if (!parentScrollTop) return;
                continue;
            } // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
        for (const anchor of targetLinks){
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || isDisabled(anchor)) continue;
            const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible
            if (isVisible(observableSection)) {
                this._targetLinks.set(anchor.hash, anchor);
                this._observableSections.set(anchor.hash, observableSection);
            }
        }
    }
    _process(target) {
        if (this._activeTarget === target) return;
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add(CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        EventHandler.trigger(this._element, EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
            SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
            return;
        }
        for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS))item.classList.add(CLASS_NAME_ACTIVE$1);
    }
    _clearActiveClass(parent) {
        parent.classList.remove(CLASS_NAME_ACTIVE$1);
        const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
        for (const node of activeNodes)node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(spy);
});
/**
 * jQuery
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$1 = "tab";
const DATA_KEY$1 = "bs.tab";
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_FADE$1 = "fade";
const CLASS_NAME_SHOW$1 = "show";
const CLASS_DROPDOWN = "dropdown";
const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)";
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = ".nav-item, .list-group-item";
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class Tab extends BaseComponent {
    constructor(element){
        super(element);
        this._parent = this._element.closest(SELECTOR_TAB_PANEL);
        if (!this._parent) return; // todo: should Throw exception on v6
         // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    static get NAME() {
        return NAME$1;
    }
    show() {
        // Shows this elem and deactivate the active sibling if exists
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
         // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add(CLASS_NAME_ACTIVE);
        this._activate(getElementFromSelector(element)); // Search and activate/show the proper section
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.add(CLASS_NAME_SHOW$1);
                return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            EventHandler.trigger(element, EVENT_SHOWN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove(CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.remove(CLASS_NAME_SHOW$1);
                return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            EventHandler.trigger(element, EVENT_HIDDEN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
        if (![
            ARROW_LEFT_KEY,
            ARROW_RIGHT_KEY,
            ARROW_UP_KEY,
            ARROW_DOWN_KEY
        ].includes(event.key)) return;
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        const isNext = [
            ARROW_RIGHT_KEY,
            ARROW_DOWN_KEY
        ].includes(event.key);
        const nextActiveElement = getNextActiveElement(this._getChildren().filter((element)=>!isDisabled(element)), event.target, isNext, true);
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            Tab.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        // collection of inner elements
        return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, "role", "tablist");
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute("aria-selected", isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
        if (!isActive) child.setAttribute("tabindex", "-1");
        this._setAttributeIfNotExists(child, "role", "tab"); // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, "role", "tabpanel");
        if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `#${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains(CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = SelectorEngine.findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
        outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    _getInnerElement(elem) {
        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    _getOuterElement(elem) {
        return elem.closest(SELECTOR_OUTER) || elem;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE))Tab.getOrCreateInstance(element);
});
/**
 * jQuery
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME = "toast";
const DATA_KEY = "bs.toast";
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = "fade";
const CLASS_NAME_HIDE = "hide"; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = "show";
const CLASS_NAME_SHOWING = "showing";
const DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * Class definition
 */ class Toast extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    static get Default() {
        return Default;
    }
    static get DefaultType() {
        return DefaultType;
    }
    static get NAME() {
        return NAME;
    }
    show() {
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOWING);
            EventHandler.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this.isShown()) this._element.classList.remove(CLASS_NAME_SHOW);
        super.dispose();
    }
    isShown() {
        return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = isInteracting;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
        EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Toast);
/**
 * jQuery
 */ defineJQueryPlugin(Toast);

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"lCAq5","./modifiers/index.js":"cap3W","./createPopper.js":"cHuNp","./popper.js":"1PuRF","./popper-lite.js":"gKW1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":"31HFW","./computeStyles.js":"gDlm2","./eventListeners.js":"hBKsL","./flip.js":"fv5wq","./hide.js":"2g4OF","./offset.js":"3GKVY","./popperOffsets.js":"6I679","./preventOverflow.js":"1AMhb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _instanceOfJs.isHTMLElement)(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
        "the arrow."
    ].join(" "));
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            "element."
        ].join(" "));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || "";
    if (adaptive && [
        "transform",
        "top",
        "right",
        "bottom",
        "left"
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        "\n\n",
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        "\n\n",
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations."
    ].join(" "));
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" "));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                (0, _validateModifiersJsDefault.default)(modifiers);
                if ((0, _getBasePlacementJsDefault.default)(state.options.placement) === (0, _enumsJs.auto)) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === "flip";
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work."
                    ].join(" "));
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers."
                ].join(" "));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./dom-utils/getComputedStyle.js":"3mZjB","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/validateModifiers.js":"1S5dQ","./utils/uniqueBy.js":"hhl2M","./utils/getBasePlacement.js":"59Wp3","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":"ltCuw","./dom-utils/instanceOf.js":"gYFUC","./enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1S5dQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>validateModifiers);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    "name",
    "enabled",
    "phase",
    "fn",
    "effect",
    "requires",
    "options"
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case "name":
                    if (typeof modifier.name !== "string") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                    break;
                case "enabled":
                    if (typeof modifier.enabled !== "boolean") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                    break;
                case "phase":
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + (0, _enumsJs.modifierPhases).join(", "), '"' + String(modifier.phase) + '"'));
                    break;
                case "fn":
                    if (typeof modifier.fn !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "effect":
                    if (modifier.effect != null && typeof modifier.effect !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "requires":
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                    break;
                case "requiresIfExists":
                    if (!Array.isArray(modifier.requiresIfExists)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                        return '"' + s + '"';
                    }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error((0, _formatJsDefault.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}

},{"./format.js":"baNIW","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"baNIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>format);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhl2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>uniqueBy);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wqo0":[function(require,module,exports) {
var global = arguments[3];
var process = require("518778640f9bd3fb");
var Buffer = require("7a19421a3047e30a").Buffer;
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(e) {
        var r, n;
        function o(r, n) {
            try {
                var a = e[r](n), s = a.value, u = s instanceof t;
                Promise.resolve(u ? s.v : s).then(function(t) {
                    if (u) {
                        var n = "return" === r ? "return" : "next";
                        if (!s.k || t.done) return o(n, t);
                        t = e[n](t).value;
                    }
                    i(a.done ? "return" : "normal", t);
                }, function(e) {
                    o("throw", e);
                });
            } catch (e) {
                i("throw", e);
            }
        }
        function i(e, t) {
            switch(e){
                case "return":
                    r.resolve({
                        value: t,
                        done: !0
                    });
                    break;
                case "throw":
                    r.reject(t);
                    break;
                default:
                    r.resolve({
                        value: t,
                        done: !1
                    });
            }
            (r = r.next) ? o(r.key, r.arg) : n = null;
        }
        this._invoke = function(e, t) {
            return new Promise(function(i, a) {
                var s = {
                    key: e,
                    arg: t,
                    resolve: i,
                    reject: a,
                    next: null
                };
                n ? n = n.next = s : (r = n = s, o(e, t));
            });
        }, "function" != typeof e.return && (this.return = void 0);
    }
    function t(e, t) {
        this.v = e, this.k = t;
    }
    function r(e) {
        var r = {}, n = !1;
        function o(r, o) {
            return n = !0, o = new Promise(function(t) {
                t(e[r](o));
            }), {
                done: !1,
                value: new t(o, 1)
            };
        }
        return r["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
            return this;
        }, r.next = function(e) {
            return n ? (n = !1, e) : o("next", e);
        }, "function" == typeof e.throw && (r.throw = function(e) {
            if (n) throw n = !1, e;
            return o("throw", e);
        }), "function" == typeof e.return && (r.return = function(e) {
            return n ? (n = !1, e) : o("return", e);
        }), r;
    }
    function n(e) {
        var t, r, n, i = 2;
        for("undefined" != typeof Symbol && (r = Symbol.asyncIterator, n = Symbol.iterator); i--;){
            if (r && null != (t = e[r])) return t.call(e);
            if (n && null != (t = e[n])) return new o(t.call(e));
            r = "@@asyncIterator", n = "@@iterator";
        }
        throw new TypeError("Object is not async iterable");
    }
    function o(e) {
        function t(e) {
            if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
            var t = e.done;
            return Promise.resolve(e.value).then(function(e) {
                return {
                    value: e,
                    done: t
                };
            });
        }
        return o = function(e) {
            this.s = e, this.n = e.next;
        }, o.prototype = {
            s: null,
            n: null,
            next: function() {
                return t(this.n.apply(this.s, arguments));
            },
            return: function(e) {
                var r = this.s.return;
                return void 0 === r ? Promise.resolve({
                    value: e,
                    done: !0
                }) : t(r.apply(this.s, arguments));
            },
            throw: function(e) {
                var r = this.s.return;
                return void 0 === r ? Promise.reject(e) : t(r.apply(this.s, arguments));
            }
        }, new o(e);
    }
    function i(e) {
        return new t(e, 0);
    }
    function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), r.push.apply(r, n);
        }
        return r;
    }
    function s(e) {
        for(var t = 1; t < arguments.length; t++){
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(r), !0).forEach(function(t) {
                y(e, t, r[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
        }
        return e;
    }
    function u() {
        u = function() {
            return t;
        };
        var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
            e[t] = r.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
        function f(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t];
        }
        try {
            f({}, "");
        } catch (e) {
            f = function(e, t, r) {
                return e[t] = r;
            };
        }
        function l(e, t, r, n) {
            var i = t && t.prototype instanceof m ? t : m, a = Object.create(i.prototype), s = new P(n || []);
            return o(a, "_invoke", {
                value: T(e, r, s)
            }), a;
        }
        function h(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        t.wrap = l;
        var p = "suspendedStart", d = "executing", v = "completed", y = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        f(w, a, function() {
            return this;
        });
        var E = Object.getPrototypeOf, O = E && E(E(L([])));
        O && O !== r && n.call(O, a) && (w = O);
        var S = g.prototype = m.prototype = Object.create(w);
        function x(e) {
            [
                "next",
                "throw",
                "return"
            ].forEach(function(t) {
                f(e, t, function(e) {
                    return this._invoke(t, e);
                });
            });
        }
        function R(e, t) {
            function r(o, i, a, s) {
                var u = h(e[o], e, i);
                if ("throw" !== u.type) {
                    var c = u.arg, f = c.value;
                    return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                        r("next", e, a, s);
                    }, function(e) {
                        r("throw", e, a, s);
                    }) : t.resolve(f).then(function(e) {
                        c.value = e, a(c);
                    }, function(e) {
                        return r("throw", e, a, s);
                    });
                }
                s(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function(e, n) {
                    function o() {
                        return new t(function(t, o) {
                            r(e, n, t, o);
                        });
                    }
                    return i = i ? i.then(o, o) : o();
                }
            });
        }
        function T(t, r, n) {
            var o = p;
            return function(i, a) {
                if (o === d) throw new Error("Generator is already running");
                if (o === v) {
                    if ("throw" === i) throw a;
                    return {
                        value: e,
                        done: !0
                    };
                }
                for(n.method = i, n.arg = a;;){
                    var s = n.delegate;
                    if (s) {
                        var u = j(s, n);
                        if (u) {
                            if (u === y) continue;
                            return u;
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (o === p) throw o = v, n.arg;
                        n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = d;
                    var c = h(t, r, n);
                    if ("normal" === c.type) {
                        if (o = n.done ? v : "suspendedYield", c.arg === y) continue;
                        return {
                            value: c.arg,
                            done: n.done
                        };
                    }
                    "throw" === c.type && (o = v, n.method = "throw", n.arg = c.arg);
                }
            };
        }
        function j(t, r) {
            var n = r.method, o = t.iterator[n];
            if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, j(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
            var i = h(o, t.iterator, r.arg);
            if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
            var a = i.arg;
            return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function k(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
        }
        function A(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
        }
        function P(e) {
            this.tryEntries = [
                {
                    tryLoc: "root"
                }
            ], e.forEach(k, this), this.reset(!0);
        }
        function L(t) {
            if (t || "" === t) {
                var r = t[a];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1, i = function r() {
                        for(; ++o < t.length;)if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                        return r.value = e, r.done = !0, r;
                    };
                    return i.next = i;
                }
            }
            throw new TypeError(typeof t + " is not iterable");
        }
        return b.prototype = g, o(S, "constructor", {
            value: g,
            configurable: !0
        }), o(g, "constructor", {
            value: b,
            configurable: !0
        }), b.displayName = f(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, f(e, c, "GeneratorFunction")), e.prototype = Object.create(S), e;
        }, t.awrap = function(e) {
            return {
                __await: e
            };
        }, x(R.prototype), f(R.prototype, s, function() {
            return this;
        }), t.AsyncIterator = R, t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new R(l(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then(function(e) {
                return e.done ? e.value : a.next();
            });
        }, x(S), f(S, c, "Generator"), f(S, a, function() {
            return this;
        }), f(S, "toString", function() {
            return "[object Generator]";
        }), t.keys = function(e) {
            var t = Object(e), r = [];
            for(var n in t)r.push(n);
            return r.reverse(), function e() {
                for(; r.length;){
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, t.values = L, P.prototype = {
            constructor: P,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var r = this;
                function o(n, o) {
                    return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o;
                }
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var a = this.tryEntries[i], s = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var u = n.call(a, "catchLoc"), c = n.call(a, "finallyLoc");
                        if (u && c) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                        } else if (u) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for(var r = this.tryEntries.length - 1; r >= 0; --r){
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break;
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
            },
            finish: function(e) {
                for(var t = this.tryEntries.length - 1; t >= 0; --t){
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), A(r), y;
                }
            },
            catch: function(e) {
                for(var t = this.tryEntries.length - 1; t >= 0; --t){
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            A(r);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(t, r, n) {
                return this.delegate = {
                    iterator: L(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), y;
            }
        }, t;
    }
    function c(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == typeof t ? t : String(t);
    }
    function f(e) {
        return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, f(e);
    }
    function l(e, t, r, n, o, i, a) {
        try {
            var s = e[i](a), u = s.value;
        } catch (e) {
            return void r(e);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, o);
    }
    function h(e) {
        return function() {
            var t = this, r = arguments;
            return new Promise(function(n, o) {
                var i = e.apply(t, r);
                function a(e) {
                    l(i, n, o, a, s, "next", e);
                }
                function s(e) {
                    l(i, n, o, a, s, "throw", e);
                }
                a(void 0);
            });
        };
    }
    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function d(e, t) {
        for(var r = 0; r < t.length; r++){
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n);
        }
    }
    function v(e, t, r) {
        return t && d(e.prototype, t), r && d(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    function y(e, t, r) {
        return (t = c(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    function m(e, t) {
        return g(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var n, o, i, a, s = [], u = !0, c = !1;
                try {
                    if (i = (r = r.call(e)).next, 0 === t) {
                        if (Object(r) !== r) return;
                        u = !1;
                    } else for(; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
                } catch (e) {
                    c = !0, o = e;
                } finally{
                    try {
                        if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return;
                    } finally{
                        if (c) throw o;
                    }
                }
                return s;
            }
        }(e, t) || E(e, t) || S();
    }
    function b(e) {
        return function(e) {
            if (Array.isArray(e)) return O(e);
        }(e) || w(e) || E(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function g(e) {
        if (Array.isArray(e)) return e;
    }
    function w(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }
    function E(e, t) {
        if (e) {
            if ("string" == typeof e) return O(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? O(e, t) : void 0;
        }
    }
    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
        return n;
    }
    function S() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function x(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    e.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
        return this;
    }, e.prototype.next = function(e) {
        return this._invoke("next", e);
    }, e.prototype.throw = function(e) {
        return this._invoke("throw", e);
    }, e.prototype.return = function(e) {
        return this._invoke("return", e);
    };
    var R, T = Object.prototype.toString, j = Object.getPrototypeOf, k = (R = Object.create(null), function(e) {
        var t = T.call(e);
        return R[t] || (R[t] = t.slice(8, -1).toLowerCase());
    }), A = function(e) {
        return e = e.toLowerCase(), function(t) {
            return k(t) === e;
        };
    }, P = function(e) {
        return function(t) {
            return f(t) === e;
        };
    }, L = Array.isArray, N = P("undefined");
    var _ = A("ArrayBuffer");
    var C = P("string"), F = P("function"), U = P("number"), B = function(e) {
        return null !== e && "object" === f(e);
    }, D = function(e) {
        if ("object" !== k(e)) return !1;
        var t = j(e);
        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
    }, I = A("Date"), q = A("File"), M = A("Blob"), z = A("FileList"), H = A("URLSearchParams"), J = m([
        "ReadableStream",
        "Request",
        "Response",
        "Headers"
    ].map(A), 4), W = J[0], G = J[1], K = J[2], V = J[3];
    function X(e, t) {
        var r, n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = o.allOwnKeys, a = void 0 !== i && i;
        if (null != e) {
            if ("object" !== f(e) && (e = [
                e
            ]), L(e)) for(r = 0, n = e.length; r < n; r++)t.call(null, e[r], r, e);
            else {
                var s, u = a ? Object.getOwnPropertyNames(e) : Object.keys(e), c = u.length;
                for(r = 0; r < c; r++)s = u[r], t.call(null, e[s], s, e);
            }
        }
    }
    function $(e, t) {
        t = t.toLowerCase();
        for(var r, n = Object.keys(e), o = n.length; o-- > 0;)if (t === (r = n[o]).toLowerCase()) return r;
        return null;
    }
    var Y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, Q = function(e) {
        return !N(e) && e !== Y;
    };
    var Z, ee = (Z = "undefined" != typeof Uint8Array && j(Uint8Array), function(e) {
        return Z && e instanceof Z;
    }), te = A("HTMLFormElement"), re = function(e) {
        var t = Object.prototype.hasOwnProperty;
        return function(e, r) {
            return t.call(e, r);
        };
    }(), ne = A("RegExp"), oe = function(e, t) {
        var r = Object.getOwnPropertyDescriptors(e), n = {};
        X(r, function(r, o) {
            var i;
            !1 !== (i = t(r, o, e)) && (n[o] = i || r);
        }), Object.defineProperties(e, n);
    }, ie = "abcdefghijklmnopqrstuvwxyz", ae = "0123456789", se = {
        DIGIT: ae,
        ALPHA: ie,
        ALPHA_DIGIT: ie + ie.toUpperCase() + ae
    };
    var ue, ce, fe, le, he = A("AsyncFunction"), pe = (ue = "function" == typeof setImmediate, ce = F(Y.postMessage), ue ? setImmediate : ce ? (fe = "axios@".concat(Math.random()), le = [], Y.addEventListener("message", function(e) {
        var t = e.source, r = e.data;
        t === Y && r === fe && le.length && le.shift()();
    }, !1), function(e) {
        le.push(e), Y.postMessage(fe, "*");
    }) : function(e) {
        return setTimeout(e);
    }), de = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(Y) : "undefined" != typeof process && process.nextTick || pe, ve = {
        isArray: L,
        isArrayBuffer: _,
        isBuffer: function(e) {
            return null !== e && !N(e) && null !== e.constructor && !N(e.constructor) && F(e.constructor.isBuffer) && e.constructor.isBuffer(e);
        },
        isFormData: function(e) {
            var t;
            return e && ("function" == typeof FormData && e instanceof FormData || F(e.append) && ("formdata" === (t = k(e)) || "object" === t && F(e.toString) && "[object FormData]" === e.toString()));
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && _(e.buffer);
        },
        isString: C,
        isNumber: U,
        isBoolean: function(e) {
            return !0 === e || !1 === e;
        },
        isObject: B,
        isPlainObject: D,
        isReadableStream: W,
        isRequest: G,
        isResponse: K,
        isHeaders: V,
        isUndefined: N,
        isDate: I,
        isFile: q,
        isBlob: M,
        isRegExp: ne,
        isFunction: F,
        isStream: function(e) {
            return B(e) && F(e.pipe);
        },
        isURLSearchParams: H,
        isTypedArray: ee,
        isFileList: z,
        forEach: X,
        merge: function e() {
            for(var t = Q(this) && this || {}, r = t.caseless, n = {}, o = function(t, o) {
                var i = r && $(n, o) || o;
                D(n[i]) && D(t) ? n[i] = e(n[i], t) : D(t) ? n[i] = e({}, t) : L(t) ? n[i] = t.slice() : n[i] = t;
            }, i = 0, a = arguments.length; i < a; i++)arguments[i] && X(arguments[i], o);
            return n;
        },
        extend: function(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = n.allOwnKeys;
            return X(t, function(t, n) {
                r && F(t) ? e[n] = x(t, r) : e[n] = t;
            }, {
                allOwnKeys: o
            }), e;
        },
        trim: function(e) {
            return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        stripBOM: function(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
        inherits: function(e, t, r, n) {
            e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), r && Object.assign(e.prototype, r);
        },
        toFlatObject: function(e, t, r, n) {
            var o, i, a, s = {};
            if (t = t || {}, null == e) return t;
            do {
                for(i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;)a = o[i], n && !n(a, e, t) || s[a] || (t[a] = e[a], s[a] = !0);
                e = !1 !== r && j(e);
            }while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
        },
        kindOf: k,
        kindOfTest: A,
        endsWith: function(e, t, r) {
            e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
            var n = e.indexOf(t, r);
            return -1 !== n && n === r;
        },
        toArray: function(e) {
            if (!e) return null;
            if (L(e)) return e;
            var t = e.length;
            if (!U(t)) return null;
            for(var r = new Array(t); t-- > 0;)r[t] = e[t];
            return r;
        },
        forEachEntry: function(e, t) {
            for(var r, n = (e && e[Symbol.iterator]).call(e); (r = n.next()) && !r.done;){
                var o = r.value;
                t.call(e, o[0], o[1]);
            }
        },
        matchAll: function(e, t) {
            for(var r, n = []; null !== (r = e.exec(t));)n.push(r);
            return n;
        },
        isHTMLForm: te,
        hasOwnProperty: re,
        hasOwnProp: re,
        reduceDescriptors: oe,
        freezeMethods: function(e) {
            oe(e, function(t, r) {
                if (F(e) && -1 !== [
                    "arguments",
                    "caller",
                    "callee"
                ].indexOf(r)) return !1;
                var n = e[r];
                F(n) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = function() {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                }));
            });
        },
        toObjectSet: function(e, t) {
            var r = {}, n = function(e) {
                e.forEach(function(e) {
                    r[e] = !0;
                });
            };
            return L(e) ? n(e) : n(String(e).split(t)), r;
        },
        toCamelCase: function(e) {
            return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r;
            });
        },
        noop: function() {},
        toFiniteNumber: function(e, t) {
            return null != e && Number.isFinite(e = +e) ? e : t;
        },
        findKey: $,
        global: Y,
        isContextDefined: Q,
        ALPHABET: se,
        generateString: function() {
            for(var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se.ALPHA_DIGIT, r = "", n = t.length; e--;)r += t[Math.random() * n | 0];
            return r;
        },
        isSpecCompliantForm: function(e) {
            return !!(e && F(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
        },
        toJSONObject: function(e) {
            var t = new Array(10);
            return function e(r, n) {
                if (B(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[n] = r;
                        var o = L(r) ? [] : {};
                        return X(r, function(t, r) {
                            var i = e(t, n + 1);
                            !N(i) && (o[r] = i);
                        }), t[n] = void 0, o;
                    }
                }
                return r;
            }(e, 0);
        },
        isAsyncFn: he,
        isThenable: function(e) {
            return e && (B(e) || F(e)) && F(e.then) && F(e.catch);
        },
        setImmediate: pe,
        asap: de
    };
    function ye(e, t, r, n, o) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
    }
    ve.inherits(ye, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: ve.toJSONObject(this.config),
                code: this.code,
                status: this.status
            };
        }
    });
    var me = ye.prototype, be = {};
    [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
    ].forEach(function(e) {
        be[e] = {
            value: e
        };
    }), Object.defineProperties(ye, be), Object.defineProperty(me, "isAxiosError", {
        value: !0
    }), ye.from = function(e, t, r, n, o, i) {
        var a = Object.create(me);
        return ve.toFlatObject(e, a, function(e) {
            return e !== Error.prototype;
        }, function(e) {
            return "isAxiosError" !== e;
        }), ye.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
    };
    function ge(e) {
        return ve.isPlainObject(e) || ve.isArray(e);
    }
    function we(e) {
        return ve.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function Ee(e, t, r) {
        return e ? e.concat(t).map(function(e, t) {
            return e = we(e), !r && t ? "[" + e + "]" : e;
        }).join(r ? "." : "") : t;
    }
    var Oe = ve.toFlatObject(ve, {}, null, function(e) {
        return /^is[A-Z]/.test(e);
    });
    function Se(e, t, r) {
        if (!ve.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData;
        var n = (r = ve.toFlatObject(r, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(e, t) {
            return !ve.isUndefined(t[e]);
        })).metaTokens, o = r.visitor || c, i = r.dots, a = r.indexes, s = (r.Blob || "undefined" != typeof Blob && Blob) && ve.isSpecCompliantForm(t);
        if (!ve.isFunction(o)) throw new TypeError("visitor must be a function");
        function u(e) {
            if (null === e) return "";
            if (ve.isDate(e)) return e.toISOString();
            if (!s && ve.isBlob(e)) throw new ye("Blob is not supported. Use a Buffer instead.");
            return ve.isArrayBuffer(e) || ve.isTypedArray(e) ? s && "function" == typeof Blob ? new Blob([
                e
            ]) : Buffer.from(e) : e;
        }
        function c(e, r, o) {
            var s = e;
            if (e && !o && "object" === f(e)) {
                if (ve.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), e = JSON.stringify(e);
                else if (ve.isArray(e) && function(e) {
                    return ve.isArray(e) && !e.some(ge);
                }(e) || (ve.isFileList(e) || ve.endsWith(r, "[]")) && (s = ve.toArray(e))) return r = we(r), s.forEach(function(e, n) {
                    !ve.isUndefined(e) && null !== e && t.append(!0 === a ? Ee([
                        r
                    ], n, i) : null === a ? r : r + "[]", u(e));
                }), !1;
            }
            return !!ge(e) || (t.append(Ee(o, r, i), u(e)), !1);
        }
        var l = [], h = Object.assign(Oe, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: ge
        });
        if (!ve.isObject(e)) throw new TypeError("data must be an object");
        return function e(r, n) {
            if (!ve.isUndefined(r)) {
                if (-1 !== l.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                l.push(r), ve.forEach(r, function(r, i) {
                    !0 === (!(ve.isUndefined(r) || null === r) && o.call(t, r, ve.isString(i) ? i.trim() : i, n, h)) && e(r, n ? n.concat(i) : [
                        i
                    ]);
                }), l.pop();
            }
        }(e), t;
    }
    function xe(e) {
        var t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e];
        });
    }
    function Re(e, t) {
        this._pairs = [], e && Se(e, this, t);
    }
    var Te = Re.prototype;
    function je(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    function ke(e, t, r) {
        if (!t) return e;
        var n, o = r && r.encode || je, i = r && r.serialize;
        if (n = i ? i(t, r) : ve.isURLSearchParams(t) ? t.toString() : new Re(t, r).toString(o)) {
            var a = e.indexOf("#");
            -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + n;
        }
        return e;
    }
    Te.append = function(e, t) {
        this._pairs.push([
            e,
            t
        ]);
    }, Te.toString = function(e) {
        var t = e ? function(t) {
            return e.call(this, t, xe);
        } : xe;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1]);
        }, "").join("&");
    };
    var Ae = function() {
        function e() {
            p(this, e), this.handlers = [];
        }
        return v(e, [
            {
                key: "use",
                value: function(e, t, r) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!r && r.synchronous,
                        runWhen: r ? r.runWhen : null
                    }), this.handlers.length - 1;
                }
            },
            {
                key: "eject",
                value: function(e) {
                    this.handlers[e] && (this.handlers[e] = null);
                }
            },
            {
                key: "clear",
                value: function() {
                    this.handlers && (this.handlers = []);
                }
            },
            {
                key: "forEach",
                value: function(e) {
                    ve.forEach(this.handlers, function(t) {
                        null !== t && e(t);
                    });
                }
            }
        ]), e;
    }(), Pe = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }, Le = {
        isBrowser: !0,
        classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Re,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
        },
        protocols: [
            "http",
            "https",
            "file",
            "blob",
            "url",
            "data"
        ]
    }, Ne = "undefined" != typeof window && "undefined" != typeof document, _e = "object" === ("undefined" == typeof navigator ? "undefined" : f(navigator)) && navigator || void 0, Ce = Ne && (!_e || [
        "ReactNative",
        "NativeScript",
        "NS"
    ].indexOf(_e.product) < 0), Fe = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts, Ue = Ne && window.location.href || "http://localhost", Be = s(s({}, Object.freeze({
        __proto__: null,
        hasBrowserEnv: Ne,
        hasStandardBrowserWebWorkerEnv: Fe,
        hasStandardBrowserEnv: Ce,
        navigator: _e,
        origin: Ue
    })), Le);
    function De(e) {
        function t(e, r, n, o) {
            var i = e[o++];
            if ("__proto__" === i) return !0;
            var a = Number.isFinite(+i), s = o >= e.length;
            return i = !i && ve.isArray(n) ? n.length : i, s ? (ve.hasOwnProp(n, i) ? n[i] = [
                n[i],
                r
            ] : n[i] = r, !a) : (n[i] && ve.isObject(n[i]) || (n[i] = []), t(e, r, n[i], o) && ve.isArray(n[i]) && (n[i] = function(e) {
                var t, r, n = {}, o = Object.keys(e), i = o.length;
                for(t = 0; t < i; t++)n[r = o[t]] = e[r];
                return n;
            }(n[i])), !a);
        }
        if (ve.isFormData(e) && ve.isFunction(e.entries)) {
            var r = {};
            return ve.forEachEntry(e, function(e, n) {
                t(function(e) {
                    return ve.matchAll(/\w+|\[(\w*)]/g, e).map(function(e) {
                        return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                }(e), n, r, 0);
            }), r;
        }
        return null;
    }
    var Ie = {
        transitional: Pe,
        adapter: [
            "xhr",
            "http",
            "fetch"
        ],
        transformRequest: [
            function(e, t) {
                var r, n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = ve.isObject(e);
                if (i && ve.isHTMLForm(e) && (e = new FormData(e)), ve.isFormData(e)) return o ? JSON.stringify(De(e)) : e;
                if (ve.isArrayBuffer(e) || ve.isBuffer(e) || ve.isStream(e) || ve.isFile(e) || ve.isBlob(e) || ve.isReadableStream(e)) return e;
                if (ve.isArrayBufferView(e)) return e.buffer;
                if (ve.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) return (function(e, t) {
                        return Se(e, new Be.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, r, n) {
                                return Be.isNode && ve.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
                            }
                        }, t));
                    })(e, this.formSerializer).toString();
                    if ((r = ve.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        var a = this.env && this.env.FormData;
                        return Se(r ? {
                            "files[]": e
                        } : e, a && new a, this.formSerializer);
                    }
                }
                return i || o ? (t.setContentType("application/json", !1), function(e, t, r) {
                    if (ve.isString(e)) try {
                        return (t || JSON.parse)(e), ve.trim(e);
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                    }
                    return (r || JSON.stringify)(e);
                }(e)) : e;
            }
        ],
        transformResponse: [
            function(e) {
                var t = this.transitional || Ie.transitional, r = t && t.forcedJSONParsing, n = "json" === this.responseType;
                if (ve.isResponse(e) || ve.isReadableStream(e)) return e;
                if (e && ve.isString(e) && (r && !this.responseType || n)) {
                    var o = !(t && t.silentJSONParsing) && n;
                    try {
                        return JSON.parse(e);
                    } catch (e) {
                        if (o) {
                            if ("SyntaxError" === e.name) throw ye.from(e, ye.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e;
                        }
                    }
                }
                return e;
            }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: Be.classes.FormData,
            Blob: Be.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    ve.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch"
    ], function(e) {
        Ie.headers[e] = {};
    });
    var qe = Ie, Me = ve.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
    ]), ze = Symbol("internals");
    function He(e) {
        return e && String(e).trim().toLowerCase();
    }
    function Je(e) {
        return !1 === e || null == e ? e : ve.isArray(e) ? e.map(Je) : String(e);
    }
    function We(e, t, r, n, o) {
        return ve.isFunction(n) ? n.call(this, t, r) : (o && (t = r), ve.isString(t) ? ve.isString(n) ? -1 !== t.indexOf(n) : ve.isRegExp(n) ? n.test(t) : void 0 : void 0);
    }
    var Ge = function(e, t) {
        function r(e) {
            p(this, r), e && this.set(e);
        }
        return v(r, [
            {
                key: "set",
                value: function(e, t, r) {
                    var n = this;
                    function o(e, t, r) {
                        var o = He(t);
                        if (!o) throw new Error("header name must be a non-empty string");
                        var i = ve.findKey(n, o);
                        (!i || void 0 === n[i] || !0 === r || void 0 === r && !1 !== n[i]) && (n[i || t] = Je(e));
                    }
                    var i = function(e, t) {
                        return ve.forEach(e, function(e, r) {
                            return o(e, r, t);
                        });
                    };
                    if (ve.isPlainObject(e) || e instanceof this.constructor) i(e, t);
                    else if (ve.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) i(function(e) {
                        var t, r, n, o = {};
                        return e && e.split("\n").forEach(function(e) {
                            n = e.indexOf(":"), t = e.substring(0, n).trim().toLowerCase(), r = e.substring(n + 1).trim(), !t || o[t] && Me[t] || ("set-cookie" === t ? o[t] ? o[t].push(r) : o[t] = [
                                r
                            ] : o[t] = o[t] ? o[t] + ", " + r : r);
                        }), o;
                    }(e), t);
                    else if (ve.isHeaders(e)) {
                        var a, s = function(e, t) {
                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!r) {
                                if (Array.isArray(e) || (r = E(e)) || t && e && "number" == typeof e.length) {
                                    r && (e = r);
                                    var n = 0, o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            };
                                        },
                                        e: function(e) {
                                            throw e;
                                        },
                                        f: o
                                    };
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }
                            var i, a = !0, s = !1;
                            return {
                                s: function() {
                                    r = r.call(e);
                                },
                                n: function() {
                                    var e = r.next();
                                    return a = e.done, e;
                                },
                                e: function(e) {
                                    s = !0, i = e;
                                },
                                f: function() {
                                    try {
                                        a || null == r.return || r.return();
                                    } finally{
                                        if (s) throw i;
                                    }
                                }
                            };
                        }(e.entries());
                        try {
                            for(s.s(); !(a = s.n()).done;){
                                var u = m(a.value, 2), c = u[0];
                                o(u[1], c, r);
                            }
                        } catch (e) {
                            s.e(e);
                        } finally{
                            s.f();
                        }
                    } else null != e && o(t, e, r);
                    return this;
                }
            },
            {
                key: "get",
                value: function(e, t) {
                    if (e = He(e)) {
                        var r = ve.findKey(this, e);
                        if (r) {
                            var n = this[r];
                            if (!t) return n;
                            if (!0 === t) return function(e) {
                                for(var t, r = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; t = n.exec(e);)r[t[1]] = t[2];
                                return r;
                            }(n);
                            if (ve.isFunction(t)) return t.call(this, n, r);
                            if (ve.isRegExp(t)) return t.exec(n);
                            throw new TypeError("parser must be boolean|regexp|function");
                        }
                    }
                }
            },
            {
                key: "has",
                value: function(e, t) {
                    if (e = He(e)) {
                        var r = ve.findKey(this, e);
                        return !(!r || void 0 === this[r] || t && !We(0, this[r], r, t));
                    }
                    return !1;
                }
            },
            {
                key: "delete",
                value: function(e, t) {
                    var r = this, n = !1;
                    function o(e) {
                        if (e = He(e)) {
                            var o = ve.findKey(r, e);
                            !o || t && !We(0, r[o], o, t) || (delete r[o], n = !0);
                        }
                    }
                    return ve.isArray(e) ? e.forEach(o) : o(e), n;
                }
            },
            {
                key: "clear",
                value: function(e) {
                    for(var t = Object.keys(this), r = t.length, n = !1; r--;){
                        var o = t[r];
                        e && !We(0, this[o], o, e, !0) || (delete this[o], n = !0);
                    }
                    return n;
                }
            },
            {
                key: "normalize",
                value: function(e) {
                    var t = this, r = {};
                    return ve.forEach(this, function(n, o) {
                        var i = ve.findKey(r, o);
                        if (i) return t[i] = Je(n), void delete t[o];
                        var a = e ? function(e) {
                            return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function(e, t, r) {
                                return t.toUpperCase() + r;
                            });
                        }(o) : String(o).trim();
                        a !== o && delete t[o], t[a] = Je(n), r[a] = !0;
                    }), this;
                }
            },
            {
                key: "concat",
                value: function() {
                    for(var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)r[n] = arguments[n];
                    return (e = this.constructor).concat.apply(e, [
                        this
                    ].concat(r));
                }
            },
            {
                key: "toJSON",
                value: function(e) {
                    var t = Object.create(null);
                    return ve.forEach(this, function(r, n) {
                        null != r && !1 !== r && (t[n] = e && ve.isArray(r) ? r.join(", ") : r);
                    }), t;
                }
            },
            {
                key: Symbol.iterator,
                value: function() {
                    return Object.entries(this.toJSON())[Symbol.iterator]();
                }
            },
            {
                key: "toString",
                value: function() {
                    return Object.entries(this.toJSON()).map(function(e) {
                        var t = m(e, 2);
                        return t[0] + ": " + t[1];
                    }).join("\n");
                }
            },
            {
                key: Symbol.toStringTag,
                get: function() {
                    return "AxiosHeaders";
                }
            }
        ], [
            {
                key: "from",
                value: function(e) {
                    return e instanceof this ? e : new this(e);
                }
            },
            {
                key: "concat",
                value: function(e) {
                    for(var t = new this(e), r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)n[o - 1] = arguments[o];
                    return n.forEach(function(e) {
                        return t.set(e);
                    }), t;
                }
            },
            {
                key: "accessor",
                value: function(e) {
                    var t = (this[ze] = this[ze] = {
                        accessors: {}
                    }).accessors, r = this.prototype;
                    function n(e) {
                        var n = He(e);
                        t[n] || (!function(e, t) {
                            var r = ve.toCamelCase(" " + t);
                            [
                                "get",
                                "set",
                                "has"
                            ].forEach(function(n) {
                                Object.defineProperty(e, n + r, {
                                    value: function(e, r, o) {
                                        return this[n].call(this, t, e, r, o);
                                    },
                                    configurable: !0
                                });
                            });
                        }(r, e), t[n] = !0);
                    }
                    return ve.isArray(e) ? e.forEach(n) : n(e), this;
                }
            }
        ]), r;
    }();
    Ge.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization"
    ]), ve.reduceDescriptors(Ge.prototype, function(e, t) {
        var r = e.value, n = t[0].toUpperCase() + t.slice(1);
        return {
            get: function() {
                return r;
            },
            set: function(e) {
                this[n] = e;
            }
        };
    }), ve.freezeMethods(Ge);
    var Ke = Ge;
    function Ve(e, t) {
        var r = this || qe, n = t || r, o = Ke.from(n.headers), i = n.data;
        return ve.forEach(e, function(e) {
            i = e.call(r, i, o.normalize(), t ? t.status : void 0);
        }), o.normalize(), i;
    }
    function Xe(e) {
        return !(!e || !e.__CANCEL__);
    }
    function $e(e, t, r) {
        ye.call(this, null == e ? "canceled" : e, ye.ERR_CANCELED, t, r), this.name = "CanceledError";
    }
    function Ye(e, t, r) {
        var n = r.config.validateStatus;
        r.status && n && !n(r.status) ? t(new ye("Request failed with status code " + r.status, [
            ye.ERR_BAD_REQUEST,
            ye.ERR_BAD_RESPONSE
        ][Math.floor(r.status / 100) - 4], r.config, r.request, r)) : e(r);
    }
    function Qe(e, t) {
        e = e || 10;
        var r, n = new Array(e), o = new Array(e), i = 0, a = 0;
        return t = void 0 !== t ? t : 1e3, function(s) {
            var u = Date.now(), c = o[a];
            r || (r = u), n[i] = s, o[i] = u;
            for(var f = a, l = 0; f !== i;)l += n[f++], f %= e;
            if ((i = (i + 1) % e) === a && (a = (a + 1) % e), !(u - r < t)) {
                var h = c && u - c;
                return h ? Math.round(1e3 * l / h) : void 0;
            }
        };
    }
    function Ze(e, t) {
        var r, n, o = 0, i = 1e3 / t, a = function(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            o = i, r = null, n && (clearTimeout(n), n = null), e.apply(null, t);
        };
        return [
            function() {
                for(var e = Date.now(), t = e - o, s = arguments.length, u = new Array(s), c = 0; c < s; c++)u[c] = arguments[c];
                t >= i ? a(u, e) : (r = u, n || (n = setTimeout(function() {
                    n = null, a(r);
                }, i - t)));
            },
            function() {
                return r && a(r);
            }
        ];
    }
    ve.inherits($e, ye, {
        __CANCEL__: !0
    });
    var et = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3, n = 0, o = Qe(50, 250);
        return Ze(function(r) {
            var i = r.loaded, a = r.lengthComputable ? r.total : void 0, s = i - n, u = o(s);
            n = i;
            var c = y({
                loaded: i,
                total: a,
                progress: a ? i / a : void 0,
                bytes: s,
                rate: u || void 0,
                estimated: u && a && i <= a ? (a - i) / u : void 0,
                event: r,
                lengthComputable: null != a
            }, t ? "download" : "upload", !0);
            e(c);
        }, r);
    }, tt = function(e, t) {
        var r = null != e;
        return [
            function(n) {
                return t[0]({
                    lengthComputable: r,
                    total: e,
                    loaded: n
                });
            },
            t[1]
        ];
    }, rt = function(e) {
        return function() {
            for(var t = arguments.length, r = new Array(t), n = 0; n < t; n++)r[n] = arguments[n];
            return ve.asap(function() {
                return e.apply(void 0, r);
            });
        };
    }, nt = Be.hasStandardBrowserEnv ? function() {
        var e, t = Be.navigator && /(msie|trident)/i.test(Be.navigator.userAgent), r = document.createElement("a");
        function n(e) {
            var n = e;
            return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            };
        }
        return e = n(window.location.href), function(t) {
            var r = ve.isString(t) ? n(t) : t;
            return r.protocol === e.protocol && r.host === e.host;
        };
    }() : function() {
        return !0;
    }, ot = Be.hasStandardBrowserEnv ? {
        write: function(e, t, r, n, o, i) {
            var a = [
                e + "=" + encodeURIComponent(t)
            ];
            ve.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), ve.isString(n) && a.push("path=" + n), ve.isString(o) && a.push("domain=" + o), !0 === i && a.push("secure"), document.cookie = a.join("; ");
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5);
        }
    } : {
        write: function() {},
        read: function() {
            return null;
        },
        remove: function() {}
    };
    function it(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        }(e, t) : t;
    }
    var at = function(e) {
        return e instanceof Ke ? s({}, e) : e;
    };
    function st(e, t) {
        t = t || {};
        var r = {};
        function n(e, t, r) {
            return ve.isPlainObject(e) && ve.isPlainObject(t) ? ve.merge.call({
                caseless: r
            }, e, t) : ve.isPlainObject(t) ? ve.merge({}, t) : ve.isArray(t) ? t.slice() : t;
        }
        function o(e, t, r) {
            return ve.isUndefined(t) ? ve.isUndefined(e) ? void 0 : n(void 0, e, r) : n(e, t, r);
        }
        function i(e, t) {
            if (!ve.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
            return ve.isUndefined(t) ? ve.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t);
        }
        function s(r, o, i) {
            return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0;
        }
        var u = {
            url: i,
            method: i,
            data: i,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            withXSRFToken: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: s,
            headers: function(e, t) {
                return o(at(e), at(t), !0);
            }
        };
        return ve.forEach(Object.keys(Object.assign({}, e, t)), function(n) {
            var i = u[n] || o, a = i(e[n], t[n], n);
            ve.isUndefined(a) && i !== s || (r[n] = a);
        }), r;
    }
    var ut, ct, ft = function(e) {
        var t, r, n = st({}, e), o = n.data, i = n.withXSRFToken, a = n.xsrfHeaderName, s = n.xsrfCookieName, u = n.headers, c = n.auth;
        if (n.headers = u = Ke.from(u), n.url = ke(it(n.baseURL, n.url), e.params, e.paramsSerializer), c && u.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))), ve.isFormData(o)) {
            if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv) u.setContentType(void 0);
            else if (!1 !== (t = u.getContentType())) {
                var f = t ? t.split(";").map(function(e) {
                    return e.trim();
                }).filter(Boolean) : [], l = g(r = f) || w(r) || E(r) || S(), h = l[0], p = l.slice(1);
                u.setContentType([
                    h || "multipart/form-data"
                ].concat(b(p)).join("; "));
            }
        }
        if (Be.hasStandardBrowserEnv && (i && ve.isFunction(i) && (i = i(n)), i || !1 !== i && nt(n.url))) {
            var d = a && s && ot.read(s);
            d && u.set(a, d);
        }
        return n;
    }, lt = "undefined" != typeof XMLHttpRequest && function(e) {
        return new Promise(function(t, r) {
            var n, o, i, a, s, u = ft(e), c = u.data, f = Ke.from(u.headers).normalize(), l = u.responseType, h = u.onUploadProgress, p = u.onDownloadProgress;
            function d() {
                a && a(), s && s(), u.cancelToken && u.cancelToken.unsubscribe(n), u.signal && u.signal.removeEventListener("abort", n);
            }
            var v = new XMLHttpRequest;
            function y() {
                if (v) {
                    var n = Ke.from("getAllResponseHeaders" in v && v.getAllResponseHeaders());
                    Ye(function(e) {
                        t(e), d();
                    }, function(e) {
                        r(e), d();
                    }, {
                        data: l && "text" !== l && "json" !== l ? v.response : v.responseText,
                        status: v.status,
                        statusText: v.statusText,
                        headers: n,
                        config: e,
                        request: v
                    }), v = null;
                }
            }
            if (v.open(u.method.toUpperCase(), u.url, !0), v.timeout = u.timeout, "onloadend" in v ? v.onloadend = y : v.onreadystatechange = function() {
                v && 4 === v.readyState && (0 !== v.status || v.responseURL && 0 === v.responseURL.indexOf("file:")) && setTimeout(y);
            }, v.onabort = function() {
                v && (r(new ye("Request aborted", ye.ECONNABORTED, e, v)), v = null);
            }, v.onerror = function() {
                r(new ye("Network Error", ye.ERR_NETWORK, e, v)), v = null;
            }, v.ontimeout = function() {
                var t = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded", n = u.transitional || Pe;
                u.timeoutErrorMessage && (t = u.timeoutErrorMessage), r(new ye(t, n.clarifyTimeoutError ? ye.ETIMEDOUT : ye.ECONNABORTED, e, v)), v = null;
            }, void 0 === c && f.setContentType(null), "setRequestHeader" in v && ve.forEach(f.toJSON(), function(e, t) {
                v.setRequestHeader(t, e);
            }), ve.isUndefined(u.withCredentials) || (v.withCredentials = !!u.withCredentials), l && "json" !== l && (v.responseType = u.responseType), p) {
                var b = m(et(p, !0), 2);
                i = b[0], s = b[1], v.addEventListener("progress", i);
            }
            if (h && v.upload) {
                var g = m(et(h), 2);
                o = g[0], a = g[1], v.upload.addEventListener("progress", o), v.upload.addEventListener("loadend", a);
            }
            (u.cancelToken || u.signal) && (n = function(t) {
                v && (r(!t || t.type ? new $e(null, e, v) : t), v.abort(), v = null);
            }, u.cancelToken && u.cancelToken.subscribe(n), u.signal && (u.signal.aborted ? n() : u.signal.addEventListener("abort", n)));
            var w, E, O = (w = u.url, (E = /^([-+\w]{1,25})(:?\/\/|:)/.exec(w)) && E[1] || "");
            O && -1 === Be.protocols.indexOf(O) ? r(new ye("Unsupported protocol " + O + ":", ye.ERR_BAD_REQUEST, e)) : v.send(c || null);
        });
    }, ht = function(e, t) {
        var r, n = new AbortController, o = function(e) {
            if (!r) {
                r = !0, a();
                var t = e instanceof Error ? e : this.reason;
                n.abort(t instanceof ye ? t : new $e(t instanceof Error ? t.message : t));
            }
        }, i = t && setTimeout(function() {
            o(new ye("timeout ".concat(t, " of ms exceeded"), ye.ETIMEDOUT));
        }, t), a = function() {
            e && (i && clearTimeout(i), i = null, e.forEach(function(e) {
                e && (e.removeEventListener ? e.removeEventListener("abort", o) : e.unsubscribe(o));
            }), e = null);
        };
        e.forEach(function(e) {
            return e && e.addEventListener && e.addEventListener("abort", o);
        });
        var s = n.signal;
        return s.unsubscribe = a, [
            s,
            function() {
                i && clearTimeout(i), i = null;
            }
        ];
    }, pt = u().mark(function e(t, r) {
        var n, o, i;
        return u().wrap(function(e) {
            for(;;)switch(e.prev = e.next){
                case 0:
                    if (n = t.byteLength, r && !(n < r)) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 4, t;
                case 4:
                    return e.abrupt("return");
                case 5:
                    o = 0;
                case 6:
                    if (!(o < n)) {
                        e.next = 13;
                        break;
                    }
                    return i = o + r, e.next = 10, t.slice(o, i);
                case 10:
                    o = i, e.next = 6;
                    break;
                case 13:
                case "end":
                    return e.stop();
            }
        }, e);
    }), dt = function() {
        var t, o = (t = u().mark(function e(t, o, a) {
            var s, c, f, l, h, p;
            return u().wrap(function(e) {
                for(;;)switch(e.prev = e.next){
                    case 0:
                        s = !1, c = !1, e.prev = 2, l = n(t);
                    case 4:
                        return e.next = 6, i(l.next());
                    case 6:
                        if (!(s = !(h = e.sent).done)) {
                            e.next = 27;
                            break;
                        }
                        if (p = h.value, e.t0 = r, e.t1 = n, e.t2 = pt, !ArrayBuffer.isView(p)) {
                            e.next = 15;
                            break;
                        }
                        e.t3 = p, e.next = 18;
                        break;
                    case 15:
                        return e.next = 17, i(a(String(p)));
                    case 17:
                        e.t3 = e.sent;
                    case 18:
                        return e.t4 = e.t3, e.t5 = o, e.t6 = (0, e.t2)(e.t4, e.t5), e.t7 = (0, e.t1)(e.t6), e.t8 = i, e.delegateYield((0, e.t0)(e.t7, e.t8), "t9", 24);
                    case 24:
                        s = !1, e.next = 4;
                        break;
                    case 27:
                        e.next = 33;
                        break;
                    case 29:
                        e.prev = 29, e.t10 = e.catch(2), c = !0, f = e.t10;
                    case 33:
                        if (e.prev = 33, e.prev = 34, !s || null == l.return) {
                            e.next = 38;
                            break;
                        }
                        return e.next = 38, i(l.return());
                    case 38:
                        if (e.prev = 38, !c) {
                            e.next = 41;
                            break;
                        }
                        throw f;
                    case 41:
                        return e.finish(38);
                    case 42:
                        return e.finish(33);
                    case 43:
                    case "end":
                        return e.stop();
                }
            }, e, null, [
                [
                    2,
                    29,
                    33,
                    43
                ],
                [
                    34,
                    ,
                    38,
                    42
                ]
            ]);
        }), function() {
            return new e(t.apply(this, arguments));
        });
        return function(e, t, r) {
            return o.apply(this, arguments);
        };
    }(), vt = function(e, t, r, n, o) {
        var i, a = dt(e, t, o), s = 0, c = function(e) {
            i || (i = !0, n && n(e));
        };
        return new ReadableStream({
            pull: function(e) {
                return h(u().mark(function t() {
                    var n, o, i, f, l;
                    return u().wrap(function(t) {
                        for(;;)switch(t.prev = t.next){
                            case 0:
                                return t.prev = 0, t.next = 3, a.next();
                            case 3:
                                if (n = t.sent, o = n.done, i = n.value, !o) {
                                    t.next = 10;
                                    break;
                                }
                                return c(), e.close(), t.abrupt("return");
                            case 10:
                                f = i.byteLength, r && (l = s += f, r(l)), e.enqueue(new Uint8Array(i)), t.next = 19;
                                break;
                            case 15:
                                throw t.prev = 15, t.t0 = t.catch(0), c(t.t0), t.t0;
                            case 19:
                            case "end":
                                return t.stop();
                        }
                    }, t, null, [
                        [
                            0,
                            15
                        ]
                    ]);
                }))();
            },
            cancel: function(e) {
                return c(e), a.return();
            }
        }, {
            highWaterMark: 2
        });
    }, yt = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response, mt = yt && "function" == typeof ReadableStream, bt = yt && ("function" == typeof TextEncoder ? (ut = new TextEncoder, function(e) {
        return ut.encode(e);
    }) : function() {
        var e = h(u().mark(function e(t) {
            return u().wrap(function(e) {
                for(;;)switch(e.prev = e.next){
                    case 0:
                        return e.t0 = Uint8Array, e.next = 3, new Response(t).arrayBuffer();
                    case 3:
                        return e.t1 = e.sent, e.abrupt("return", new e.t0(e.t1));
                    case 5:
                    case "end":
                        return e.stop();
                }
            }, e);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }()), gt = function(e) {
        try {
            for(var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)r[n - 1] = arguments[n];
            return !!e.apply(void 0, r);
        } catch (e) {
            return !1;
        }
    }, wt = mt && gt(function() {
        var e = !1, t = new Request(Be.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex () {
                return e = !0, "half";
            }
        }).headers.has("Content-Type");
        return e && !t;
    }), Et = mt && gt(function() {
        return ve.isReadableStream(new Response("").body);
    }), Ot = {
        stream: Et && function(e) {
            return e.body;
        }
    };
    yt && (ct = new Response, [
        "text",
        "arrayBuffer",
        "blob",
        "formData",
        "stream"
    ].forEach(function(e) {
        !Ot[e] && (Ot[e] = ve.isFunction(ct[e]) ? function(t) {
            return t[e]();
        } : function(t, r) {
            throw new ye("Response type '".concat(e, "' is not supported"), ye.ERR_NOT_SUPPORT, r);
        });
    }));
    var St = function() {
        var e = h(u().mark(function e(t) {
            return u().wrap(function(e) {
                for(;;)switch(e.prev = e.next){
                    case 0:
                        if (null != t) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", 0);
                    case 2:
                        if (!ve.isBlob(t)) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", t.size);
                    case 4:
                        if (!ve.isSpecCompliantForm(t)) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 7, new Request(t).arrayBuffer();
                    case 7:
                    case 14:
                        return e.abrupt("return", e.sent.byteLength);
                    case 8:
                        if (!ve.isArrayBufferView(t) && !ve.isArrayBuffer(t)) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return", t.byteLength);
                    case 10:
                        if (ve.isURLSearchParams(t) && (t += ""), !ve.isString(t)) {
                            e.next = 15;
                            break;
                        }
                        return e.next = 14, bt(t);
                    case 15:
                    case "end":
                        return e.stop();
                }
            }, e);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), xt = function() {
        var e = h(u().mark(function e(t, r) {
            var n;
            return u().wrap(function(e) {
                for(;;)switch(e.prev = e.next){
                    case 0:
                        return n = ve.toFiniteNumber(t.getContentLength()), e.abrupt("return", null == n ? St(r) : n);
                    case 2:
                    case "end":
                        return e.stop();
                }
            }, e);
        }));
        return function(t, r) {
            return e.apply(this, arguments);
        };
    }(), Rt = yt && function() {
        var e = h(u().mark(function e(t) {
            var r, n, o, i, a, c, f, l, h, p, d, v, y, b, g, w, E, O, S, x, R, T, j, k, A, P, L, N, _, C, F, U, B, D, I, q, M, z;
            return u().wrap(function(e) {
                for(;;)switch(e.prev = e.next){
                    case 0:
                        if (r = ft(t), n = r.url, o = r.method, i = r.data, a = r.signal, c = r.cancelToken, f = r.timeout, l = r.onDownloadProgress, h = r.onUploadProgress, p = r.responseType, d = r.headers, v = r.withCredentials, y = void 0 === v ? "same-origin" : v, b = r.fetchOptions, p = p ? (p + "").toLowerCase() : "text", g = a || c || f ? ht([
                            a,
                            c
                        ], f) : [], w = m(g, 2), E = w[0], O = w[1], R = function() {
                            !S && setTimeout(function() {
                                E && E.unsubscribe();
                            }), S = !0;
                        }, e.prev = 4, e.t0 = h && wt && "get" !== o && "head" !== o, !e.t0) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 9, xt(d, i);
                    case 9:
                        e.t1 = T = e.sent, e.t0 = 0 !== e.t1;
                    case 11:
                        if (!e.t0) {
                            e.next = 15;
                            break;
                        }
                        j = new Request(n, {
                            method: "POST",
                            body: i,
                            duplex: "half"
                        }), ve.isFormData(i) && (k = j.headers.get("content-type")) && d.setContentType(k), j.body && (A = tt(T, et(rt(h))), P = m(A, 2), L = P[0], N = P[1], i = vt(j.body, 65536, L, N, bt));
                    case 15:
                        return ve.isString(y) || (y = y ? "include" : "omit"), _ = "credentials" in Request.prototype, x = new Request(n, s(s({}, b), {}, {
                            signal: E,
                            method: o.toUpperCase(),
                            headers: d.normalize().toJSON(),
                            body: i,
                            duplex: "half",
                            credentials: _ ? y : void 0
                        })), e.next = 20, fetch(x);
                    case 20:
                        return C = e.sent, F = Et && ("stream" === p || "response" === p), Et && (l || F) && (U = {}, [
                            "status",
                            "statusText",
                            "headers"
                        ].forEach(function(e) {
                            U[e] = C[e];
                        }), B = ve.toFiniteNumber(C.headers.get("content-length")), D = l && tt(B, et(rt(l), !0)) || [], I = m(D, 2), q = I[0], M = I[1], C = new Response(vt(C.body, 65536, q, function() {
                            M && M(), F && R();
                        }, bt), U)), p = p || "text", e.next = 26, Ot[ve.findKey(Ot, p) || "text"](C, t);
                    case 26:
                        return z = e.sent, !F && R(), O && O(), e.next = 31, new Promise(function(e, r) {
                            Ye(e, r, {
                                data: z,
                                headers: Ke.from(C.headers),
                                status: C.status,
                                statusText: C.statusText,
                                config: t,
                                request: x
                            });
                        });
                    case 31:
                        return e.abrupt("return", e.sent);
                    case 34:
                        if (e.prev = 34, e.t2 = e.catch(4), R(), !e.t2 || "TypeError" !== e.t2.name || !/fetch/i.test(e.t2.message)) {
                            e.next = 39;
                            break;
                        }
                        throw Object.assign(new ye("Network Error", ye.ERR_NETWORK, t, x), {
                            cause: e.t2.cause || e.t2
                        });
                    case 39:
                        throw ye.from(e.t2, e.t2 && e.t2.code, t, x);
                    case 40:
                    case "end":
                        return e.stop();
                }
            }, e, null, [
                [
                    4,
                    34
                ]
            ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), Tt = {
        http: null,
        xhr: lt,
        fetch: Rt
    };
    ve.forEach(Tt, function(e, t) {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            });
        }
    });
    var jt = function(e) {
        return "- ".concat(e);
    }, kt = function(e) {
        return ve.isFunction(e) || null === e || !1 === e;
    }, At = function(e) {
        for(var t, r, n = (e = ve.isArray(e) ? e : [
            e
        ]).length, o = {}, i = 0; i < n; i++){
            var a = void 0;
            if (r = t = e[i], !kt(t) && void 0 === (r = Tt[(a = String(t)).toLowerCase()])) throw new ye("Unknown adapter '".concat(a, "'"));
            if (r) break;
            o[a || "#" + i] = r;
        }
        if (!r) {
            var s = Object.entries(o).map(function(e) {
                var t = m(e, 2), r = t[0], n = t[1];
                return "adapter ".concat(r, " ") + (!1 === n ? "is not supported by the environment" : "is not available in the build");
            });
            throw new ye("There is no suitable adapter to dispatch the request " + (n ? s.length > 1 ? "since :\n" + s.map(jt).join("\n") : " " + jt(s[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
        }
        return r;
    };
    function Pt(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new $e(null, e);
    }
    function Lt(e) {
        return Pt(e), e.headers = Ke.from(e.headers), e.data = Ve.call(e, e.transformRequest), -1 !== [
            "post",
            "put",
            "patch"
        ].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), At(e.adapter || qe.adapter)(e).then(function(t) {
            return Pt(e), t.data = Ve.call(e, e.transformResponse, t), t.headers = Ke.from(t.headers), t;
        }, function(t) {
            return Xe(t) || (Pt(e), t && t.response && (t.response.data = Ve.call(e, e.transformResponse, t.response), t.response.headers = Ke.from(t.response.headers))), Promise.reject(t);
        });
    }
    var Nt = "1.7.5", _t = {};
    [
        "object",
        "boolean",
        "number",
        "function",
        "string",
        "symbol"
    ].forEach(function(e, t) {
        _t[e] = function(r) {
            return f(r) === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    });
    var Ct = {};
    _t.transitional = function(e, t, r) {
        function n(e, t) {
            return "[Axios v1.7.5] Transitional option '" + e + "'" + t + (r ? ". " + r : "");
        }
        return function(r, o, i) {
            if (!1 === e) throw new ye(n(o, " has been removed" + (t ? " in " + t : "")), ye.ERR_DEPRECATED);
            return t && !Ct[o] && (Ct[o] = !0, console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, o, i);
        };
    };
    var Ft = {
        assertOptions: function(e, t, r) {
            if ("object" !== f(e)) throw new ye("options must be an object", ye.ERR_BAD_OPTION_VALUE);
            for(var n = Object.keys(e), o = n.length; o-- > 0;){
                var i = n[o], a = t[i];
                if (a) {
                    var s = e[i], u = void 0 === s || a(s, i, e);
                    if (!0 !== u) throw new ye("option " + i + " must be " + u, ye.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== r) throw new ye("Unknown option " + i, ye.ERR_BAD_OPTION);
            }
        },
        validators: _t
    }, Ut = Ft.validators, Bt = function() {
        function e(t) {
            p(this, e), this.defaults = t, this.interceptors = {
                request: new Ae,
                response: new Ae
            };
        }
        var t;
        return v(e, [
            {
                key: "request",
                value: (t = h(u().mark(function e(t, r) {
                    var n, o;
                    return u().wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return e.prev = 0, e.next = 3, this._request(t, r);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                if (e.prev = 6, e.t0 = e.catch(0), e.t0 instanceof Error) {
                                    Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error, o = n.stack ? n.stack.replace(/^.+\n/, "") : "";
                                    try {
                                        e.t0.stack ? o && !String(e.t0.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (e.t0.stack += "\n" + o) : e.t0.stack = o;
                                    } catch (e) {}
                                }
                                throw e.t0;
                            case 10:
                            case "end":
                                return e.stop();
                        }
                    }, e, this, [
                        [
                            0,
                            6
                        ]
                    ]);
                })), function(e, r) {
                    return t.apply(this, arguments);
                })
            },
            {
                key: "_request",
                value: function(e, t) {
                    "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                    var r = t = st(this.defaults, t), n = r.transitional, o = r.paramsSerializer, i = r.headers;
                    void 0 !== n && Ft.assertOptions(n, {
                        silentJSONParsing: Ut.transitional(Ut.boolean),
                        forcedJSONParsing: Ut.transitional(Ut.boolean),
                        clarifyTimeoutError: Ut.transitional(Ut.boolean)
                    }, !1), null != o && (ve.isFunction(o) ? t.paramsSerializer = {
                        serialize: o
                    } : Ft.assertOptions(o, {
                        encode: Ut.function,
                        serialize: Ut.function
                    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                    var a = i && ve.merge(i.common, i[t.method]);
                    i && ve.forEach([
                        "delete",
                        "get",
                        "head",
                        "post",
                        "put",
                        "patch",
                        "common"
                    ], function(e) {
                        delete i[e];
                    }), t.headers = Ke.concat(a, i);
                    var s = [], u = !0;
                    this.interceptors.request.forEach(function(e) {
                        "function" == typeof e.runWhen && !1 === e.runWhen(t) || (u = u && e.synchronous, s.unshift(e.fulfilled, e.rejected));
                    });
                    var c, f = [];
                    this.interceptors.response.forEach(function(e) {
                        f.push(e.fulfilled, e.rejected);
                    });
                    var l, h = 0;
                    if (!u) {
                        var p = [
                            Lt.bind(this),
                            void 0
                        ];
                        for(p.unshift.apply(p, s), p.push.apply(p, f), l = p.length, c = Promise.resolve(t); h < l;)c = c.then(p[h++], p[h++]);
                        return c;
                    }
                    l = s.length;
                    var d = t;
                    for(h = 0; h < l;){
                        var v = s[h++], y = s[h++];
                        try {
                            d = v(d);
                        } catch (e) {
                            y.call(this, e);
                            break;
                        }
                    }
                    try {
                        c = Lt.call(this, d);
                    } catch (e) {
                        return Promise.reject(e);
                    }
                    for(h = 0, l = f.length; h < l;)c = c.then(f[h++], f[h++]);
                    return c;
                }
            },
            {
                key: "getUri",
                value: function(e) {
                    return ke(it((e = st(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
                }
            }
        ]), e;
    }();
    ve.forEach([
        "delete",
        "get",
        "head",
        "options"
    ], function(e) {
        Bt.prototype[e] = function(t, r) {
            return this.request(st(r || {}, {
                method: e,
                url: t,
                data: (r || {}).data
            }));
        };
    }), ve.forEach([
        "post",
        "put",
        "patch"
    ], function(e) {
        function t(t) {
            return function(r, n, o) {
                return this.request(st(o || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: r,
                    data: n
                }));
            };
        }
        Bt.prototype[e] = t(), Bt.prototype[e + "Form"] = t(!0);
    });
    var Dt = Bt, It = function() {
        function e(t) {
            if (p(this, e), "function" != typeof t) throw new TypeError("executor must be a function.");
            var r;
            this.promise = new Promise(function(e) {
                r = e;
            });
            var n = this;
            this.promise.then(function(e) {
                if (n._listeners) {
                    for(var t = n._listeners.length; t-- > 0;)n._listeners[t](e);
                    n._listeners = null;
                }
            }), this.promise.then = function(e) {
                var t, r = new Promise(function(e) {
                    n.subscribe(e), t = e;
                }).then(e);
                return r.cancel = function() {
                    n.unsubscribe(t);
                }, r;
            }, t(function(e, t, o) {
                n.reason || (n.reason = new $e(e, t, o), r(n.reason));
            });
        }
        return v(e, [
            {
                key: "throwIfRequested",
                value: function() {
                    if (this.reason) throw this.reason;
                }
            },
            {
                key: "subscribe",
                value: function(e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [
                        e
                    ];
                }
            },
            {
                key: "unsubscribe",
                value: function(e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e);
                        -1 !== t && this._listeners.splice(t, 1);
                    }
                }
            }
        ], [
            {
                key: "source",
                value: function() {
                    var t;
                    return {
                        token: new e(function(e) {
                            t = e;
                        }),
                        cancel: t
                    };
                }
            }
        ]), e;
    }(), qt = It;
    var Mt = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Mt).forEach(function(e) {
        var t = m(e, 2), r = t[0], n = t[1];
        Mt[n] = r;
    });
    var zt = Mt;
    var Ht = function e(t) {
        var r = new Dt(t), n = x(Dt.prototype.request, r);
        return ve.extend(n, Dt.prototype, r, {
            allOwnKeys: !0
        }), ve.extend(n, r, null, {
            allOwnKeys: !0
        }), n.create = function(r) {
            return e(st(t, r));
        }, n;
    }(qe);
    return Ht.Axios = Dt, Ht.CanceledError = $e, Ht.CancelToken = qt, Ht.isCancel = Xe, Ht.VERSION = Nt, Ht.toFormData = Se, Ht.AxiosError = ye, Ht.Cancel = Ht.CanceledError, Ht.all = function(e) {
        return Promise.all(e);
    }, Ht.spread = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    }, Ht.isAxiosError = function(e) {
        return ve.isObject(e) && !0 === e.isAxiosError;
    }, Ht.mergeConfig = st, Ht.AxiosHeaders = Ke, Ht.formToJSON = function(e) {
        return De(ve.isHTMLForm(e) ? new FormData(e) : e);
    }, Ht.getAdapter = At, Ht.HttpStatusCode = zt, Ht.default = Ht, Ht;
});

},{"518778640f9bd3fb":"d5jf4","7a19421a3047e30a":"fCgem"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}]},["iEi6V","20vbv"], "20vbv", "parcelRequire2594")

//# sourceMappingURL=index.7fa0958d.js.map
