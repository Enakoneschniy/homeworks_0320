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
})({"js/script.js":[function(require,module,exports) {
fetch('http://localhost:8080/users').then(function (response) {
  return response.json();
}).then(function (users) {
  //users- это массив юзеров
  // console.log(users[0].address.street);
  var tableConteiner = document.getElementById('table_item');
  tableConteiner.innerHTML = getRenderedUsers(users);
  var currentUserIndex;
  var modalContent = document.querySelector('.modal-content');
  modalMaker(users);
  var direction = 'asc';
  var najatayaKnopka = 0;
  document.getElementById('galka1').addEventListener('click', function () {
    najatayaKnopka = 1;
    onClick(najatayaKnopka);
    users = sorterovshik(users, 'name', direction);
    direction = direction === 'asc' ? 'desc' : 'asc';
    tableConteiner.innerHTML = getRenderedUsers(users); //

    modalMaker(users);
  });
  document.getElementById('galka2').addEventListener('click', function () {
    najatayaKnopka = 2;
    onClick(najatayaKnopka);
    users = sorterovshik(users, 'username', direction);
    direction = direction === 'asc' ? 'desc' : 'asc';
    tableConteiner.innerHTML = getRenderedUsers(users); //

    modalMaker(users);
  });
  document.getElementById('galka3').addEventListener('click', function () {
    najatayaKnopka = 3;
    onClick(najatayaKnopka);
    users = sorterovshik(users, 'email', direction);
    direction = direction === 'asc' ? 'desc' : 'asc';
    tableConteiner.innerHTML = getRenderedUsers(users); //

    modalMaker(users);
  });
  document.getElementById('galka4').addEventListener('click', function () {
    najatayaKnopka = 4;
    onClick(najatayaKnopka);
    users = sorterovshik(users, 'website', direction);
    direction = direction === 'asc' ? 'desc' : 'asc';
    tableConteiner.innerHTML = getRenderedUsers(users); //

    modalMaker(users);
  });
  /**/

  function addNewUser() {
    return fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "name": "Denis Sokol",
        "username": "ForTrest",
        "email": "sokold3@gmail.com",
        "address": {
          "street": "Bychmi street",
          "suite": "Suite 879",
          "city": "Kharkiv",
          "zipcode": "61144",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "sokol.com",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      })
    }).then(function (response) {
      return response.json();
    });
  } // addNewUser();


  function deleteUser(number) {
    return fetch("http://localhost:8080/users/".concat(number), {
      method: 'DELETE'
    });
  }

  document.getElementById('add').addEventListener('click', function () {
    addNewUser();
    tableConteiner.innerHTML = getRenderedUsers(users); //

    modalMaker(users);
  });
  document.getElementById('delete').addEventListener('click', function () {
    deleteUser(users.length);
    tableConteiner.innerHTML = getRenderedUsers(users); //

    modalMaker(users);
  });
  /**/

  function modalMaker(users) {
    var modal = document.getElementById('myModal');
    var btns = document.querySelectorAll(".myBtn");
    var span = document.getElementsByClassName('close')[0];
    btns.forEach(function (btn) {
      btn.addEventListener('click', function (elem) {
        modal.style.display = "block";
        var currentElement = elem.target.innerHTML;

        for (var i = 0; i < users.length; i++) {
          if (users[i].name === currentElement) {
            modalContent.innerHTML = getRenderedUsers1(users, i);
          } else if (users[i].username === currentElement) {
            modalContent.innerHTML = getRenderedUsers1(users, i);
          } else if (users[i].email === currentElement) {
            modalContent.innerHTML = getRenderedUsers1(users, i);
          } else if (users[i].website === currentElement) {
            modalContent.innerHTML = getRenderedUsers1(users, i);
          }
        }
      });
    });
    /*span.onclick = function(){
        modal.style.display = "none";
    }*/

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});

function onClick(najatayaKnopka) {
  var strelkaElement = document.querySelectorAll('#strelka');

  if (najatayaKnopka === 1) {
    if (strelkaElement[0].classList.contains('niz')) {
      strelkaElement[0].classList.remove('niz');
      strelkaElement[0].classList.add('verh');
    } else {
      strelkaElement[0].classList.remove('verh');
      strelkaElement[0].classList.add('niz');
    }
  } else if (najatayaKnopka === 2) {
    if (strelkaElement[1].classList.contains('niz')) {
      strelkaElement[1].classList.remove('niz');
      strelkaElement[1].classList.add('verh');
    } else {
      strelkaElement[1].classList.remove('verh');
      strelkaElement[1].classList.add('niz');
    }
  } else if (najatayaKnopka === 3) {
    if (strelkaElement[2].classList.contains('niz')) {
      strelkaElement[2].classList.remove('niz');
      strelkaElement[2].classList.add('verh');
    } else {
      strelkaElement[2].classList.remove('verh');
      strelkaElement[2].classList.add('niz');
    }
  } else if (najatayaKnopka === 4) {
    if (strelkaElement[3].classList.contains('niz')) {
      strelkaElement[3].classList.remove('niz');
      strelkaElement[3].classList.add('verh');
    } else {
      strelkaElement[3].classList.remove('verh');
      strelkaElement[3].classList.add('niz');
    }
  }
}

function getRenderedUsers(users) {
  return users.reduce(function (html, item) {
    return html + "<tr class=\"myBtn\">\n                <td>".concat(item.name, "</td>\n                <td>").concat(item.username, "</td>\n                <td>").concat(item.email, "</td>\n                <td>").concat(item.website, "</td>\n           </tr> ");
  }, '');
}

function getRenderedUsers1(users, number) {
  return "<div>\n<!--<span class=\"close\">&times;</span>-->\n                <p><strong> Street:</strong> ".concat(users[number].address.street, "</p>\n                <p><strong> City:</strong> ").concat(users[number].address.city, "</p>\n                <p><strong> Zipcode:</strong> ").concat(users[number].address.zipcode, "</p>  \n                \n           </div>");
}

function sorterovshik(users, properti) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
  return users.sort(function (userA, userB) {
    if (userA[properti] > userB[properti]) {
      return direction === 'asc' ? 1 : -1;
    } else if (userA[properti] < userB[properti]) {
      return direction === 'asc' ? -1 : 1;
    }
  });
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55976" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map