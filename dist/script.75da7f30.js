// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"svg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trashSVG = exports.downvoteSVG = exports.upvoteSVG = exports.archiveSVG = void 0;
var archiveSVG = "\n<svg\nclass=\"w-6 h-6\"\nfill=\"none\"\nstroke=\"currentColor\"\nviewBox=\"0 0 24 24\"\nxmlns=\"http://www.w3.org/2000/svg\"\n>\n<path\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    stroke-width=\"2\"\n    d=\"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4\"\n></path>\n</svg>\n";
exports.archiveSVG = archiveSVG;
var upvoteSVG = "<svg\nclass=\"w-6 h-6\"\nfill=\"none\"\nstroke=\"currentColor\"\nviewBox=\"0 0 24 24\"\nxmlns=\"http://www.w3.org/2000/svg\"\n>\n<path\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    stroke-width=\"2\"\n    d=\"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5\"\n></path>\n</svg>";
exports.upvoteSVG = upvoteSVG;
var downvoteSVG = "<svg\nclass=\"w-6 h-6\"\nfill=\"none\"\nstroke=\"currentColor\"\nviewBox=\"0 0 24 24\"\nxmlns=\"http://www.w3.org/2000/svg\"\n>\n<path\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    stroke-width=\"2\"\n    d=\"M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5\"\n></path>\n</svg>";
exports.downvoteSVG = downvoteSVG;
var trashSVG = "\n<svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"></path></svg>\n";
exports.trashSVG = trashSVG;
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _svg = require("./svg");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var topics = [];

var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var endpoint, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = 'https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json';
            _context.next = 3;
            return fetch(endpoint);

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();

          case 6:
            topics = _context.sent;
            showTopics(topics);
            return _context.abrupt("return", topics);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();
var addTopicForm = document.querySelector('form');
var nextTopicContainer = document.querySelector('.next-topic-container');
var prevTopicContainer = document.querySelector('.prevTopicContainer');

var showTopics = function showTopics(topics) {
  // only use the topics we want to
  var nextTopics = topics.filter(function (topic) {
    return !topic.discussedOn;
  }); // sort them the way we want

  nextTopics = nextTopics.sort(function (topicA, topicB) {
    var ratioA = topicA.upvotes - topicA.downvotes;
    var ratioB = topicB.upvotes - topicB.downvotes;
    return ratioB - ratioA;
  });
  var nextTopicHtml = nextTopics.map(function (topic) {
    return "\n\t\t\t\t<article>\n\t\t\t\t\t<button class=\"archive\" data-id=\"".concat(topic.id, "\">\n\t\t\t\t\t\t").concat(_svg.archiveSVG, "\n\t\t\t\t\t</button>\n\t\t\t\t\t<h5 class=\"topic-text\">").concat(topic.title, "</h5>\n\t\t\t\t\t<div class=\"votes\">\n\t\t\t\t\t\t<button class=\"upvote\" data-id=\"").concat(topic.id, "\">\n\t\t\t\t\t\t\t").concat(_svg.upvoteSVG, "\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<span class=\"upvote-number\">").concat(topic.upvotes, "</span>\n\t\t\t\t\t\t<button class=\"downvote\" data-id=\"").concat(topic.id, "\">\n\t\t\t\t\t\t\t").concat(_svg.downvoteSVG, "\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<span class=\"downvote-number\">").concat(topic.downvotes, "</span>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n    ");
  }).join('');
  nextTopicContainer.innerHTML = nextTopicHtml;
  var prevTopics = topics.filter(function (topic) {
    return topic.discussedOn;
  });
  var prevTopicHtml = prevTopics.map(function (topic) {
    var discussedOnDate = new Date(Number(topic.discussedOn));
    return "\n                <article>\n                    <button class=\"delete\" data-id=\"".concat(topic.id, "\">\n                        ").concat(_svg.trashSVG, "\n                    </button>\n                    <h5 class=\"topic-text\">").concat(topic.title, "</h5>\n                    <p>Discussed on ").concat(discussedOnDate.toLocaleDateString(), "\n                </article>\n            ");
  }).join('');
  prevTopicContainer.innerHTML = prevTopicHtml;
};

var handleClick = function handleClick(e) {
  var archiveBtn = e.target.closest('button.archive');

  if (archiveBtn) {
    archiveTopic(archiveBtn.dataset.id, topics);
  }

  var upvoteBtn = e.target.closest('button.upvote');

  if (upvoteBtn) {
    upvoteTopic(upvoteBtn.dataset.id, topics);
  }

  var downvoteBtn = e.target.closest('button.downvote');

  if (downvoteBtn) {
    downvoteTopic(downvoteBtn.dataset.id, topics);
  }

  var deleteBtn = e.target.closest('button.delete');

  if (deleteBtn) {
    deleteTopic(deleteBtn.dataset.id, topics);
  }
};

var archiveTopic = function archiveTopic(id, topics) {
  var topicToArchive = topics.find(function (topic) {
    return topic.id === id;
  });
  topicToArchive.discussedOn = new Date(); // add a timestamp to the attribute

  showTopics(topics);
};

var upvoteTopic = function upvoteTopic(id, topics) {
  var topicToUpvote = topics.find(function (topic) {
    return topic.id === id;
  });
  topicToUpvote.upvotes++;
  showTopics(topics);
};

var downvoteTopic = function downvoteTopic(id, topics) {
  var topicToDownvote = topics.find(function (topic) {
    return topic.id === id;
  });
  topicToDownvote.downvotes++;
  showTopics(topics);
};

var deleteTopic = function deleteTopic(id, topics) {
  // need to use a mutable method here
  topics.forEach(function (topic, index) {
    if (topic.id === id) {
      topics.splice(index, 1);
    }
  });
  showTopics(topics);
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var newTopic = createNewTopic(e.currentTarget.topic.value);
  topics.push(newTopic);
  showTopics(topics);
  addTopicForm.reset();
};

var createNewTopic = function createNewTopic(title) {
  return {
    upvotes: 0,
    downvotes: 0,
    disussedOn: '',
    title: title,
    id: Date.now()
  };
};

addTopicForm.addEventListener('submit', handleSubmit);
document.body.addEventListener('click', handleClick);
},{"./svg":"svg.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58956" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map