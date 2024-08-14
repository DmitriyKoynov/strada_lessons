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
})({"kzbYw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
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

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "favoriteList", ()=>favoriteList);
parcelHelpers.export(exports, "chosenLocation", ()=>chosenLocation);
var _uiJs = require("./UI/UI.js");
var _localStorageManagerJs = require("./localStorageManager.js");
var _locationConstructorJs = require("./locationConstructor.js");
var _uibuilderJs = require("./UI/UIBuilder.js");
var _eventHandlersJs = require("./eventHandlers.js");
// import { format } from 'date-fns';
(0, _uiJs.UI).SUBMIT_BUTTON.addEventListener("click", (0, _eventHandlersJs.getLocationInfoBySearch));
(0, _uiJs.UI).SEARCH_FORM.addEventListener("submit", (0, _eventHandlersJs.getLocationInfoBySearch));
(0, _uiJs.UI).FAVORITE_LIST.addEventListener("mouseover", (0, _eventHandlersJs.showRemoveButtonOnRow));
(0, _uiJs.UI).FAVORITE_LIST.addEventListener("click", (0, _eventHandlersJs.chooseFavoriteLocation));
(0, _uiJs.UI).FAVORITE_LIST.addEventListener("click", (0, _eventHandlersJs.removeFavoriteLocationByRemoveButton));
(0, _uiJs.UI).LIKE_BUTTON.addEventListener("click", (0, _eventHandlersJs.likeOrUnlikeLocation));
(0, _uiJs.UI).TEMPERATURE.addEventListener("click", (0, _eventHandlersJs.convertTemperatureValue));
(0, _uiJs.UI).USER_CURRENT_LOCATION_ICON.addEventListener("click", (0, _eventHandlersJs.getCurrentLocationInfoAndChooseIt));
const favoriteList = (0, _localStorageManagerJs.localStorageManager).getFavoritesData();
const chosenLocation = new (0, _locationConstructorJs.Location)();
(0, _uibuilderJs.initializePage)(); // const date = format(new Date(2014, 1, 11), 'dd-MM-yy');
 // console.log(date);

},{"./UI/UI.js":"eqk1K","./localStorageManager.js":"lXvOE","./locationConstructor.js":"58y3e","./UI/UIBuilder.js":"j4Ekl","./eventHandlers.js":"4840f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqk1K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI", ()=>UI);
const UI = {
    SEARCH_FORM: document.body.querySelector(".search-form"),
    SEARCH_INPUT: document.body.querySelector(".search-input"),
    SUBMIT_BUTTON: document.body.querySelector(".submit-button"),
    TEMPERATURE: document.body.querySelector(".current-temperature"),
    TIME: document.body.querySelector(".current-time"),
    FEELS_LIKE: document.body.querySelector(".current-feels-like"),
    SUNRISE: document.body.querySelector(".sunrise"),
    SUNSET: document.body.querySelector(".sunset"),
    WEATHER_ICON: document.body.querySelector(".weather-icon"),
    CHOSEN_LOCATION: document.body.querySelector(".chosen-location"),
    LIKE_BUTTON: document.body.querySelector(".like-button"),
    FORECAST_ELEMENTS_CONTAINER: document.body.querySelector(".forecast-elements-container"),
    USER_CURRENT_LOCATION_ICON: document.body.querySelector(".user-location-icon"),
    FAVORITE_LIST: document.body.querySelector(".location-list")
};

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

},{}],"lXvOE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localStorageManager", ()=>localStorageManager);
const localStorageManager = {
    getFavoritesData: function() {
        const storedData = localStorage.getItem("favoritesData");
        if (!storedData) return new Set();
        return new Set(JSON.parse(storedData));
    },
    setFavoritesData: function(favoritesData) {
        const dataToStore = JSON.stringify([
            ...favoritesData
        ]);
        localStorage.setItem("favoritesData", dataToStore);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58y3e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Location", ()=>Location);
var _utilsJs = require("./utils.js");
function Location() {
    this.weather = {};
    this.forecast = [];
    this.forecastElementsAmount = 5;
    this.temperatureSystem = (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).metric;
    this.isFavorite = false;
}

},{"./utils.js":"eYK4L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYK4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TEMPERATURE_MEASUREMENT_SYSTEMS", ()=>TEMPERATURE_MEASUREMENT_SYSTEMS);
parcelHelpers.export(exports, "formatTemperature", ()=>formatTemperature);
parcelHelpers.export(exports, "formatTime", ()=>formatTime);
var _mainJs = require("./main.js");
const TEMPERATURE_MEASUREMENT_SYSTEMS = {
    standard: {
        units: "standard",
        temperatureSign: "\xb0K"
    },
    metric: {
        units: "metric",
        temperatureSign: "\xb0C"
    },
    imperial: {
        units: "imperial",
        temperatureSign: "\xb0F"
    }
};
function formatTemperature(temperature) {
    return Math.round(temperature) + (0, _mainJs.chosenLocation).temperatureSystem.temperatureSign;
}
function formatTime(timezone, timestamp) {
    const time = new Date(timestamp * 1000 + timezone * 1000);
    return getConvenientTimeInCurrentZone(time);
}
function getConvenientTimeInCurrentZone(date) {
    const currentUTCHours = date.getUTCHours();
    const currentUTCMinutes = date.getMinutes();
    const hours = currentUTCHours < 10 ? "0" + currentUTCHours : currentUTCHours;
    const minutes = currentUTCMinutes < 10 ? "0" + currentUTCMinutes : currentUTCMinutes;
    return `${hours}:${minutes}`;
}

},{"./main.js":"bDbGG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4Ekl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateForecastElements", ()=>updateForecastElements);
parcelHelpers.export(exports, "clearForecastContainer", ()=>clearForecastContainer);
parcelHelpers.export(exports, "clearFavoriteLocationsList", ()=>clearFavoriteLocationsList);
parcelHelpers.export(exports, "createPage", ()=>createPage);
parcelHelpers.export(exports, "initializePage", ()=>initializePage);
var _eventHandlersJs = require("../eventHandlers.js");
var _mainJs = require("../main.js");
var _uiJs = require("./UI.js");
function updateWeatherElements(weather) {
    if (!weather) return;
    (0, _uiJs.UI).CHOSEN_LOCATION.textContent = weather.location;
    (0, _uiJs.UI).WEATHER_ICON.src = getWeatherIconSrc(weather);
    (0, _uiJs.UI).TEMPERATURE.textContent = weather.temperature;
    (0, _uiJs.UI).FEELS_LIKE.textContent = weather.feelsLike;
    (0, _uiJs.UI).TIME.textContent = weather.time;
    (0, _uiJs.UI).SUNRISE.textContent = weather.sunrise;
    (0, _uiJs.UI).SUNSET.textContent = weather.sunset;
}
function getWeatherIconSrc(weather) {
    if (!weather.icon) return `/icons/weatherIcons/empty.gif`;
    const iconPath = `/icons/weatherIcons/${weather.icon}.svg`;
    return iconPath;
}
function updateForecastElements(forecast) {
    clearForecastContainer();
    for(let intervalIndex = 0; intervalIndex < forecast.length; intervalIndex++){
        const forecastElement = createForecastElement(forecast[intervalIndex]);
        (0, _uiJs.UI).FORECAST_ELEMENTS_CONTAINER.append(forecastElement);
    }
}
function createForecastElement(weather) {
    const divContainer = document.createElement("div");
    const timeElement = document.createElement("p");
    const temperatureElement = document.createElement("p");
    const feelsLikeElement = document.createElement("p");
    divContainer.classList.add("forecast-container");
    timeElement.classList.add("forecast-time", "forecast-element", "bold-text");
    temperatureElement.classList.add("forecast-temperature", "forecast-element");
    feelsLikeElement.classList.add("forecast-feels-like", "forecast-element");
    timeElement.textContent = weather.time;
    temperatureElement.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: " + weather.temperature;
    feelsLikeElement.textContent = "\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F: " + weather.feelsLike;
    divContainer.append(timeElement, temperatureElement, feelsLikeElement);
    return divContainer;
}
function clearForecastContainer() {
    (0, _uiJs.UI).FORECAST_ELEMENTS_CONTAINER.textContent = "";
}
function updateFavoriteListElements(favoriteList) {
    if (!favoriteList) return;
    clearFavoriteLocationsList();
    favoriteList.forEach((favoriteLocation)=>{
        const li = document.createElement("li");
        const p = document.createElement("p");
        const removeButton = document.createElement("button");
        li.classList.add("location-list-item");
        p.classList.add("body-text", "location");
        removeButton.type = "button";
        removeButton.classList.add("removeButton");
        removeButton.style.display = "none";
        p.textContent = favoriteLocation;
        li.append(p, removeButton);
        (0, _uiJs.UI).FAVORITE_LIST.append(li);
    });
}
function clearFavoriteLocationsList() {
    (0, _uiJs.UI).FAVORITE_LIST.textContent = "";
}
function createPage(favoriteList, chosenLocation) {
    if (favoriteList) updateFavoriteListElements(favoriteList);
    if (chosenLocation) {
        updateWeatherElements(chosenLocation.weather);
        updateForecastElements(chosenLocation.forecast);
    }
    (0, _eventHandlersJs.updateLikeButton)();
}
async function initializePage() {
    try {
        await (0, _eventHandlersJs.getCurrentLocationInfoAndChooseIt)();
        createPage((0, _mainJs.favoriteList));
    } catch (error) {
        console.error(error);
    }
}

},{"../eventHandlers.js":"4840f","../main.js":"bDbGG","./UI.js":"eqk1K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4840f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocationInfoBySearch", ()=>getLocationInfoBySearch);
parcelHelpers.export(exports, "showRemoveButtonOnRow", ()=>showRemoveButtonOnRow);
parcelHelpers.export(exports, "chooseFavoriteLocation", ()=>chooseFavoriteLocation);
parcelHelpers.export(exports, "removeFavoriteLocationByRemoveButton", ()=>removeFavoriteLocationByRemoveButton);
parcelHelpers.export(exports, "likeOrUnlikeLocation", ()=>likeOrUnlikeLocation);
parcelHelpers.export(exports, "convertTemperatureValue", ()=>convertTemperatureValue);
parcelHelpers.export(exports, "getCurrentLocationInfoAndChooseIt", ()=>getCurrentLocationInfoAndChooseIt);
parcelHelpers.export(exports, "updateLikeButton", ()=>updateLikeButton);
var _weatherApiJs = require("./api/weatherApi.js");
var _mainJs = require("./main.js");
var _weatherParserJs = require("./parsers/weatherParser.js");
var _forecastParserJs = require("./parsers/forecastParser.js");
var _uibuilderJs = require("./UI/UIBuilder.js");
var _uiJs = require("./UI/UI.js");
var _utilsJs = require("./utils.js");
var _geolocationApiJs = require("./api/geolocationApi.js");
var _localStorageManagerJs = require("./localStorageManager.js");
function getLocationInfoBySearch(event) {
    event.preventDefault();
    const locationName = getSearchInputValue();
    updateChosenLocationPageInfo(locationName);
}
function getSearchInputValue() {
    return (0, _uiJs.UI).SEARCH_INPUT.value;
}
async function updateChosenLocationPageInfo(locationName) {
    try {
        const [weatherInfoFromServer, forecastInfoFromServer] = await (0, _weatherApiJs.getLocationInfoFromServer)(locationName, (0, _mainJs.chosenLocation).temperatureSystem);
        (0, _mainJs.chosenLocation).weather = (0, _weatherParserJs.parseWeatherInfo)(weatherInfoFromServer);
        (0, _mainJs.chosenLocation).forecast = (0, _forecastParserJs.parseForecastInfo)(forecastInfoFromServer, (0, _mainJs.chosenLocation).forecastElementsAmount);
        (0, _uibuilderJs.createPage)(undefined, (0, _mainJs.chosenLocation));
    } catch (error) {
        console.error(error);
    }
}
function showRemoveButtonOnRow(event) {
    const hasLocationRowInParent = event.target.closest(".location-list-item");
    if (hasLocationRowInParent) {
        const locationRow = event.target.closest(".location-list-item");
        const removeButton = locationRow.querySelector(".removeButton");
        removeButton.style.display = "block";
        locationRow.addEventListener("mouseleave", hideRemoveButton);
    }
}
function hideRemoveButton() {
    this.querySelector(".removeButton").style.display = "none";
    this.removeEventListener("mouseleave", hideRemoveButton);
}
function chooseFavoriteLocation(event) {
    const hasLocationRowInParent = event.target.closest(".location-list-item");
    const isNotRemoveButton = !event.target.classList.contains("removeButton");
    if (hasLocationRowInParent && isNotRemoveButton) {
        const locationRow = event.target.closest(".location-list-item");
        const locationName = locationRow.querySelector(".location").textContent;
        updateChosenLocationPageInfo(locationName);
    }
}
function removeFavoriteLocationByRemoveButton(event) {
    const isRemoveButton = event.target.classList.contains("removeButton");
    if (isRemoveButton) {
        event.stopPropagation();
        const locationName = event.target.previousSibling.textContent;
        removeLocationFromFavoriteList(locationName);
        (0, _uibuilderJs.createPage)((0, _mainJs.favoriteList));
    }
}
function likeOrUnlikeLocation() {
    const locationName = (0, _mainJs.chosenLocation).weather.location;
    const isFavoriteLocation = (0, _mainJs.favoriteList).has(locationName);
    if (isFavoriteLocation) {
        removeLocationFromFavoriteList(locationName);
        (0, _uibuilderJs.createPage)((0, _mainJs.favoriteList));
        return;
    }
    addLocationToFavoriteList(locationName);
    (0, _uibuilderJs.createPage)((0, _mainJs.favoriteList));
}
function addLocationToFavoriteList(locationName) {
    (0, _mainJs.favoriteList).add(locationName);
    (0, _localStorageManagerJs.localStorageManager).setFavoritesData((0, _mainJs.favoriteList));
    updateLikeButton();
    console.log(SUCCESS_MESSAGES.addSuccess(locationName));
}
function removeLocationFromFavoriteList(locationName) {
    (0, _mainJs.favoriteList).delete(locationName);
    (0, _localStorageManagerJs.localStorageManager).setFavoritesData((0, _mainJs.favoriteList));
    updateLikeButton();
    console.log(SUCCESS_MESSAGES.removeSuccess(locationName));
}
const SUCCESS_MESSAGES = {
    addSuccess: (location)=>`\u{41B}\u{43E}\u{43A}\u{430}\u{446}\u{438}\u{44F} '${location}' \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{430} \u{432} \u{441}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445}`,
    removeSuccess: (location)=>`\u{41B}\u{43E}\u{43A}\u{430}\u{446}\u{438}\u{44F} '${location}' \u{443}\u{434}\u{430}\u{43B}\u{435}\u{43D}\u{430} \u{438}\u{437} \u{441}\u{43F}\u{438}\u{441}\u{43A}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445}`
};
function convertTemperatureValue() {
    switch((0, _mainJs.chosenLocation).temperatureSystem){
        case (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).metric:
            (0, _mainJs.chosenLocation).temperatureSystem = (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).standard;
            break;
        case (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).standard:
            (0, _mainJs.chosenLocation).temperatureSystem = (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).imperial;
            break;
        case (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).imperial:
            (0, _mainJs.chosenLocation).temperatureSystem = (0, _utilsJs.TEMPERATURE_MEASUREMENT_SYSTEMS).metric;
            break;
    }
    updateChosenLocationPageInfo((0, _mainJs.chosenLocation).weather.location);
}
async function getCurrentLocationInfoAndChooseIt() {
    try {
        const currentLocation = await (0, _geolocationApiJs.getCurrentLocation)();
        return updateChosenLocationPageInfo(currentLocation);
    } catch (error) {
        console.error(error);
    }
}
function updateLikeButton() {
    const isCurrentLocationFavorite = (0, _mainJs.favoriteList).has((0, _mainJs.chosenLocation).weather.location);
    if (isCurrentLocationFavorite) (0, _uiJs.UI).LIKE_BUTTON.classList.add("like-button--liked");
    if (!isCurrentLocationFavorite) (0, _uiJs.UI).LIKE_BUTTON.classList.remove("like-button--liked");
}

},{"./api/weatherApi.js":"aCZ9o","./main.js":"bDbGG","./parsers/weatherParser.js":"dsiwE","./parsers/forecastParser.js":"clKQM","./UI/UIBuilder.js":"j4Ekl","./UI/UI.js":"eqk1K","./utils.js":"eYK4L","./api/geolocationApi.js":"edtQt","./localStorageManager.js":"lXvOE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCZ9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "REQUEST_TYPE", ()=>REQUEST_TYPE);
parcelHelpers.export(exports, "getLocationInfoFromServer", ()=>getLocationInfoFromServer);
parcelHelpers.export(exports, "getIconUrl", ()=>getIconUrl);
const WeatherServerInfo = {
    serverUrl: "http://api.openweathermap.org/data/2.5",
    apiKey: "f660a2fb1e4bad108d6160b7f58c555f"
};
const REQUEST_TYPE = {
    WEATHER: "weather",
    FORECAST: "forecast"
};
async function getLocationInfoFromServer(locationName, temperatureSystem) {
    const weatherApiUrl = `${WeatherServerInfo.serverUrl}/${REQUEST_TYPE.WEATHER}?q=${locationName}&units=${temperatureSystem.units}&appid=${WeatherServerInfo.apiKey}&lang=ru`;
    const forecastApiUrl = `${WeatherServerInfo.serverUrl}/${REQUEST_TYPE.FORECAST}?q=${locationName}&units=${temperatureSystem.units}&appid=${WeatherServerInfo.apiKey}&lang=ru`;
    try {
        const [weatherResponse, forecastResponse] = await Promise.all([
            fetch(weatherApiUrl),
            fetch(forecastApiUrl)
        ]);
        if (!weatherResponse.ok || !forecastResponse.ok) console.error(`\u{421}\u{435}\u{440}\u{432}\u{435}\u{440} \u{43E}\u{442}\u{432}\u{435}\u{442}\u{438}\u{43B} \u{441} \u{43E}\u{448}\u{438}\u{431}\u{43A}\u{43E}\u{439}`);
        const [weatherJson, forecastJson] = await Promise.all([
            weatherResponse.json(),
            forecastResponse.json()
        ]);
        return [
            weatherJson,
            forecastJson
        ];
    } catch (error) {
        console.error(error);
    }
}
function getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsiwE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseWeatherInfo", ()=>parseWeatherInfo);
var _utilsJs = require("../utils.js");
function parseWeatherInfo(weatherInfo) {
    return {
        location: weatherInfo.name,
        icon: weatherInfo.weather[0].icon,
        temperature: (0, _utilsJs.formatTemperature)(weatherInfo.main.temp),
        feelsLike: (0, _utilsJs.formatTemperature)(weatherInfo.main.feels_like),
        time: (0, _utilsJs.formatTime)(weatherInfo.timezone, Date.now() / 1000),
        sunrise: (0, _utilsJs.formatTime)(weatherInfo.timezone, weatherInfo.sys.sunrise),
        sunset: (0, _utilsJs.formatTime)(weatherInfo.timezone, weatherInfo.sys.sunset)
    };
}

},{"../utils.js":"eYK4L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clKQM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseForecastInfo", ()=>parseForecastInfo);
var _utilsJs = require("../utils.js");
function parseForecastInfo(forecastInfo, forecastElementsAmount) {
    const forecast = [];
    for(let intervalIndex = 0; intervalIndex < forecastElementsAmount; intervalIndex++){
        const weatherInfo = forecastInfo.list[intervalIndex];
        const weather = {
            time: (0, _utilsJs.formatTime)(forecastInfo.city.timezone, weatherInfo.dt),
            temperature: (0, _utilsJs.formatTemperature)(weatherInfo.main.temp),
            feelsLike: (0, _utilsJs.formatTemperature)(weatherInfo.main.feels_like)
        };
        forecast.push(weather);
    }
    return forecast;
}

},{"../utils.js":"eYK4L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edtQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCurrentLocation", ()=>getCurrentLocation);
const locationServerInfo = {
    url: `https://geocode-maps.yandex.ru/1.x/`,
    apiKey: "bf121326-49a5-4e18-9287-5492dfb03425"
};
const ERRORS_MESSAGES = {
    NOT_SUPPORTED: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u0438 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u044D\u0442\u0438\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u043C"
};
async function getCurrentLocation() {
    try {
        const coordinates = await getCurrentCoordinates();
        return getLocation(coordinates);
    } catch (error) {
        console.error(error);
    }
}
function getCurrentCoordinates() {
    return new Promise((resolve, reject)=>{
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition((position)=>{
            const coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            resolve(coordinates);
        }, (error)=>{
            reject(error);
        });
        else reject(new Error(ERRORS_MESSAGES.NOT_SUPPORTED));
    });
}
async function getLocation(coordinates) {
    try {
        const locationApiUrl = getLocationApiUrl(coordinates);
        const response = await fetch(locationApiUrl);
        if (!response.ok) console.error(`\u{421}\u{435}\u{440}\u{432}\u{435}\u{440} \u{43E}\u{442}\u{432}\u{435}\u{442}\u{438}\u{43B} \u{441} \u{43E}\u{448}\u{438}\u{431}\u{43A}\u{43E}\u{439} ${response.status}`);
        const locationInfo = await response.json();
        return getLocationFromResponse(locationInfo);
    } catch (error) {
        console.error(error);
    }
    function getLocationFromResponse(locationInfo) {
        return locationInfo.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find((component)=>component.kind === "locality").name;
    }
}
function getLocationApiUrl(coordinates) {
    return `${locationServerInfo.url}?apikey=${locationServerInfo.apiKey}&geocode=${coordinates.longitude},${coordinates.latitude}&format=json`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kzbYw","bDbGG"], "bDbGG", "parcelRequirecf15")

//# sourceMappingURL=index.fbb3188c.js.map
