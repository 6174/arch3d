webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _App = __webpack_require__(185);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactRedux = __webpack_require__(187);
	
	var _store = __webpack_require__(259);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * render to dom
	 * @type {Object}
	 */
	
	
	// redux
	/**
	 * app root
	 */
	// import 'babel-polyfill';
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(_App2.default, null)
	), document.getElementById('AppRoot'));
	
	// root component
	exports.default = _App2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _immutable = __webpack_require__(186);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _reactRedux = __webpack_require__(187);
	
	var _Arc3d = __webpack_require__(227);
	
	var _Arc3d2 = _interopRequireDefault(_Arc3d);
	
	var _index = __webpack_require__(246);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Detail = __webpack_require__(257);
	
	var _Detail2 = _interopRequireDefault(_Detail);
	
	var _Header = __webpack_require__(258);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	    displayName: 'App',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'app-container' },
	            _react2.default.createElement(
	                'div',
	                { className: 'app-top' },
	                _react2.default.createElement(_Header2.default, { dispatch: this.props.dispatch })
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'app-center' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'app-main' },
	                    _react2.default.createElement(_Arc3d2.default, this.props)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'app-right-toolbar' },
	                    _react2.default.createElement(_Detail2.default, null)
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'app-bottom' },
	                _react2.default.createElement(_index2.default, null)
	            )
	        );
	    }
	});
	
	/**
	 * transform store data to App props
	 * @param  {[type]} state [description]
	 * @return {[type]}       [description]
	 */
	/**
	 * App Component
	 */
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        graphData: state.get('graphData')
	    };
	};
	
	/**
	 * add dispatch to 
	 * @param  {[type]} dispatch [description]
	 * @return {[type]}          [description]
	 */
	var mapDispatchToProps = function mapDispatchToProps(_dispatch) {
	    return {
	        dispatch: function dispatch(type, payload) {
	            _dispatch({
	                type: type,
	                payload: payload
	            });
	        }
	    };
	};
	
	/**
	 * create redux container
	 * @type {[type]}
	 */
	var AppContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = AppContainer;

/***/ }),
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Arc3dTHREE = __webpack_require__(228);
	
	var _Arc3dTHREE2 = _interopRequireDefault(_Arc3dTHREE);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arc3dThree = new _Arc3dTHREE2.default();
	
	var Arc3d = _react2.default.createClass({
	    displayName: 'Arc3d',
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        // if (this.props === nextProps) {
	        //     return false;
	        // }
	        return true;
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	        this.updateArc3d();
	    },
	    componentDidMount: function componentDidMount() {
	        this.updateArc3d();
	    },
	    updateArc3d: function updateArc3d() {
	        arc3dThree.mount({
	            graphData: this.props.graphData,
	            $container: _reactDom2.default.findDOMNode(this)
	        });
	    },
	    render: function render() {
	        return _react2.default.createElement('div', { className: 'arc3d-react-wrapper' });
	    }
	});
	
	exports.default = Arc3d;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * app root
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import getGraphData from '../services/getGraphData';
	// import UI from './UI';
	
	
	var _Layer = __webpack_require__(229);
	
	var _Layer2 = _interopRequireDefault(_Layer);
	
	var _LayerConnect = __webpack_require__(240);
	
	var _LayerConnect2 = _interopRequireDefault(_LayerConnect);
	
	var _CameraManager = __webpack_require__(241);
	
	var _CameraManager2 = _interopRequireDefault(_CameraManager);
	
	var _LightManager = __webpack_require__(242);
	
	var _LightManager2 = _interopRequireDefault(_LightManager);
	
	var _AssetsLoader = __webpack_require__(243);
	
	var _AssetsLoader2 = _interopRequireDefault(_AssetsLoader);
	
	var _Director = __webpack_require__(244);
	
	var _Director2 = _interopRequireDefault(_Director);
	
	var _MouseEventManager = __webpack_require__(245);
	
	var _MouseEventManager2 = _interopRequireDefault(_MouseEventManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Arc3d = function () {
	  function Arc3d() {
	    _classCallCheck(this, Arc3d);
	
	    this.update = this.update.bind(this);
	    this.daeModels = {};
	    this.initialization();
	    // refs
	    this.layers = [];
	  }
	
	  _createClass(Arc3d, [{
	    key: "initialization",
	    value: function initialization(params) {
	      var renderer = void 0,
	          camera = void 0,
	          scene = void 0,
	          light = void 0,
	          width = void 0,
	          height = void 0,
	          orbitControl = void 0,
	          cameraManager = void 0;
	      var _this = this;
	
	      initThree();
	      initScene();
	      initCamera();
	      initLight();
	      initDirector();
	
	      this.mouseEventManager = new _MouseEventManager2.default({
	        stage: this
	      });
	
	      window.addEventListener("resize", this.updateSize.bind(this), false);
	
	      function initThree() {
	        renderer = new THREE.WebGLRenderer({
	          antialias: true,
	          alpha: true
	        });
	
	        renderer.setPixelRatio(window.devicePixelRatio);
	        renderer.setClearColor(0x000000, 0);
	
	        // 解决透明层渲染问题
	        // 不过会导致 renderDepth 的配置失效
	        // 物体的渲染顺序永远是 add 的顺序
	        renderer.sortObjects = false;
	
	        // shadow
	        renderer.shadowMap.enabled = true;
	        renderer.shadowMapSoft = true;
	        renderer.shadowCameraNear = 1;
	        renderer.shadowCameraFar = 10000;
	        renderer.shadowCameraFov = 50;
	        renderer.shadowMapBias = 0.0039;
	        renderer.shadowMapDarkness = 0.5;
	        renderer.shadowMapWidth = 1024;
	        renderer.shadowMapHeight = 1024;
	
	        _this.width = width;
	        _this.height = height;
	        _this.renderer = renderer;
	      }
	
	      function initScene() {
	        window.scene = _this.scene = scene = new THREE.Scene();
	        // scene.add( new THREE.GridHelper( 1000, 40 ) );
	      }
	
	      function initCamera() {
	        _this.cameraManager = cameraManager = new _CameraManager2.default(_this);
	        _this.camera = camera = cameraManager.camera;
	        scene.add(cameraManager.el);
	      }
	
	      function initLight() {
	        _LightManager2.default.lightup(scene);
	      }
	
	      function initDirector() {
	        _this.director = new _Director2.default({
	          stage: _this
	        });
	      }
	    }
	  }, {
	    key: "mount",
	    value: function mount(params) {
	      var $container = params.$container,
	          graphData = params.graphData;
	
	
	      this.$container = $container;
	      this.updateSize();
	      $container.appendChild(this.renderer.domElement);
	
	      if (!graphData) {
	        return;
	      } else {
	        this.graphData = graphData;
	        // if (!this.__started) {
	        this.start();
	        // }
	      }
	    }
	  }, {
	    key: "updateSize",
	    value: function updateSize() {
	      var width = this.width = this.$container.offsetWidth;
	      var height = this.height = this.$container.offsetHeight;
	
	      this.cameraManager.resize({
	        width: width,
	        height: height
	      });
	
	      this.renderer.setSize(width, height);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      var loadThenStart = function () {
	        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	          var map;
	          return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	              switch (_context.prev = _context.next) {
	                case 0:
	                  _context.next = 2;
	                  return (0, _AssetsLoader2.default)(daePaths);
	
	                case 2:
	                  map = _context.sent;
	
	
	                  _this.daeModels = map;
	                  _this.render();
	                  _this.update();
	                  _this.mouseEventManager.initObjects();
	                  _this.mouseEventManager.bindEvent();
	
	                  setTimeout(function () {
	                    // 出场动画
	                    _this.director.playInitialAnimation();
	                  }, 0);
	
	                case 9:
	                case "end":
	                  return _context.stop();
	              }
	            }
	          }, _callee, this);
	        }));
	
	        return function loadThenStart() {
	          return _ref.apply(this, arguments);
	        };
	      }();
	
	      this.__started = true;
	      /**
	           * dae objects
	           */
	      var daePaths = {
	        "test-icon": "/assets/dae/3dicon_db.dae"
	      };
	      var _this = this;
	
	      loadThenStart();
	    }
	  }, {
	    key: "render",
	    value: function render(props) {
	      var scene = this.scene;
	
	      if (this.group) {
	        scene.remove(this.group);
	      }
	
	      var group = this.group = new THREE.Group();
	      group.name = "stage-container";
	      scene.add(group);
	      var y = 300;
	      var graphs = this.graphData.graphs;
	      var gridSize = this.graphData.meta.gridSize;
	
	      var layerPoses = initialLayerPos(gridSize);
	
	      for (var i = 0; i < graphs.length; i++) {
	        var graph = graphs[i];
	        var layer = new _Layer2.default({
	          stage: this,
	          graphData: graph
	        });
	        layer.el.name = "layer-" + i;
	
	        var pos = layerPoses[graph.pos];
	        group.add(layer.render({
	          left: pos.x,
	          top: pos.y
	        }));
	
	        this.layers.push(layer);
	      }
	
	      var layerConnect = new _LayerConnect2.default({
	        stage: this,
	        connects: this.graphData.layerConnects
	      });
	
	      group.add(layerConnect.render());
	    }
	  }, {
	    key: "updateLoop",
	    value: function updateLoop() {
	      var renderer = this.renderer,
	          scene = this.scene,
	          camera = this.camera,
	          cameraManager = this.cameraManager,
	          mouseEventManager = this.mouseEventManager;
	
	      renderer.clear();
	      cameraManager.update();
	      scene.updateMatrixWorld();
	      this.layers = [];
	
	      renderer.render(scene, camera);
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      this.updateLoop();
	      requestAnimationFrame(this.update);
	    }
	  }]);
	
	  return Arc3d;
	}();
	
	function initialLayerPos(gridSize) {
	  var width = gridSize[0];
	  var height = gridSize[1];
	  var layerWidth = 800;
	  var layerHeight = 200;
	  var layerMarginHorizontal = 40;
	  var layerMarginVertical = 100;
	  var ret = [];
	
	  var marginBox = {
	    width: layerWidth + layerMarginHorizontal,
	    height: layerHeight + layerMarginVertical
	  };
	
	  var centerIndex = null;
	  var size = width * height;
	
	  for (var i = 0; i < size; i++) {
	    var pos = {
	      x: i % width,
	      y: Math.floor(i / width)
	    };
	
	    ret.push({
	      x: marginBox.width * pos.x,
	      y: marginBox.height * pos.y
	    });
	  }
	
	  // shift to center
	  var last = ret[size - 1];
	  var first = ret[0];
	
	  var shift = {
	    x: (last.x - first.x) / 2,
	    y: (last.y - first.y) / 2
	  };
	
	  ret.forEach(function (it) {
	    it.x = it.x - shift.x;
	    it.y = it.y - shift.y;
	  });
	
	  return ret;
	}
	
	exports.default = Arc3d;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _svgpath = __webpack_require__(230);
	
	var _svgpath2 = _interopRequireDefault(_svgpath);
	
	var _util = __webpack_require__(235);
	
	var _BaseGraph = __webpack_require__(236);
	
	var _BaseGraph2 = _interopRequireDefault(_BaseGraph);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Layer class
	 */
	var Layer = function () {
		function Layer(props) {
			_classCallCheck(this, Layer);
	
			this.state = {
				margin: {
					top: 10,
					bottom: 10
				},
				width: 800,
				height: 800,
				thick: 68,
				opacity: .9,
				color: 0xcccccc
			};
	
			this.stage = props.stage;
			this.el = new THREE.Group();
			this.el.name = "layer";
			this.graph = new _BaseGraph2.default(props);
		}
	
		_createClass(Layer, [{
			key: 'render',
			value: function render(props) {
				var layer = this.el;
	
				var grid = new THREE.GridHelper(this.state.width / 2 - 2, 20);
				grid.position.y = 2;
				// layer.add(grid);
				layer.add(this.renderPlane());
				layer.add(this.graph.render());
	
				layer.position.y = props.top;
				layer.position.x = props.left;
				return layer;
			}
		}, {
			key: 'renderPlane',
			value: function renderPlane() {
				var _state = this.state,
				    width = _state.width,
				    height = _state.height,
				    thick = _state.thick,
				    opacity = _state.opacity,
				    color = _state.color;
	
	
				var materials = {
					lambert: new THREE.MeshLambertMaterial({
						color: color,
						opacity: opacity,
						transparent: false
					}),
					basic: new THREE.MeshBasicMaterial({
						color: 0xdddddd,
						wireframe: true
					}),
					lineBasic: new THREE.LineBasicMaterial({
						color: 0x999999,
						opacity: 0.25,
						transparent: true
					})
				};
	
				var boxGeometry = new THREE.BoxBufferGeometry(width, thick, height);
				// var sphere = new THREE.SphereGeometry();
				var object = new THREE.Mesh(boxGeometry);
				var box = new THREE.BoxHelper(object);
				box.material = new THREE.LineBasicMaterial({
					color: 0xaaaaaa,
					opacity: 0.5,
					transparent: true
				});
				box.name = "boxHelper";
	
				box.name = "layer-box";
				return box;
				// var box = new THREE.BoxHelper(sphere);
				//    box.aNumber = num + 1;
	
				// let plane = new THREE.Mesh(
				// 	new THREE.BoxBufferGeometry(width, thick, height), 
				// 	materials.lineBasic
				// );
	
				// plane.receiveShadow = true;
	
				// return plane;
			}
		}]);
	
		return Layer;
	}();
	
	exports.default = Layer;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _bezierCurve = __webpack_require__(231);
	
	var _bezierCurve2 = _interopRequireDefault(_bezierCurve);
	
	var _normalize = __webpack_require__(232);
	
	var _normalize2 = _interopRequireDefault(_normalize);
	
	var _parser = __webpack_require__(233);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	var _abs = __webpack_require__(234);
	
	var _abs2 = _interopRequireDefault(_abs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * [svgPathPoints description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function svgPathPoints(path) {
	    var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	    var svgSegments = (0, _normalize2.default)((0, _abs2.default)((0, _parser2.default)(path)));
	    var points = [];
	
	    var pen = [0, 0];
	
	    svgSegments.forEach(function (segment, i) {
	        if (segment[0] === 'M') {
	            var current = segment.slice(1);
	            points.push(copy([0, 0], current));
	            copy(pen, current);
	        } else if (segment[0] === 'C') {
	            bezierTo(points, scale, pen, segment);
	            copy(pen, [segment[5], segment[6]]);
	        } else {
	            throw new Error('illegal type in SVG: ' + segment[0]);
	        }
	    });
	
	    return points;
	}
	
	var tmp1 = [0, 0],
	    tmp2 = [0, 0],
	    tmp3 = [0, 0];
	
	function bezierTo(points, scale, start, seg) {
	    (0, _bezierCurve2.default)(start, copy(tmp1, [seg[1], seg[2]]), copy(tmp2, [seg[3], seg[4]]), copy(tmp3, [seg[5], seg[6]]), scale, points);
	}
	
	function copy(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	}
	
	exports.default = svgPathPoints;

/***/ }),
/* 231 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * https://github.com/mattdesl/adaptive-bezier-curve
	 * 
	 * [clone description]
	 * 
	 *  var bezier = require('adaptive-bezier-curve')
	 *  var start = [20, 20],
	 *      c1 = [100, 159],
	 *      c2 = [50, 200],
	 *      end = [200, 20],
	 *      scale = 2;
	 *  var points = bezier(start, c1, c2, end, scale)
	 */
	
	module.exports = createBezierBuilder();
	
	function createBezierBuilder(opt) {
	    opt = opt || {};
	
	    var RECURSION_LIMIT = typeof opt.recursion === 'number' ? opt.recursion : 8;
	    var FLT_EPSILON = typeof opt.epsilon === 'number' ? opt.epsilon : 1.19209290e-7;
	    var PATH_DISTANCE_EPSILON = typeof opt.pathEpsilon === 'number' ? opt.pathEpsilon : 1.0;
	
	    var curve_angle_tolerance_epsilon = typeof opt.angleEpsilon === 'number' ? opt.angleEpsilon : 0.01;
	    var m_angle_tolerance = opt.angleTolerance || 0;
	    var m_cusp_limit = opt.cuspLimit || 0;
	
	    return function bezierCurve(start, c1, c2, end, scale, points) {
	        if (!points) points = [];
	
	        scale = typeof scale === 'number' ? scale : 1.0;
	        var distanceTolerance = PATH_DISTANCE_EPSILON / scale;
	        distanceTolerance *= distanceTolerance;
	        begin(start, c1, c2, end, points, distanceTolerance);
	        return points;
	    };
	
	    ////// Based on:
	    ////// https://github.com/pelson/antigrain/blob/master/agg-2.4/src/agg_curves.cpp
	
	    function begin(start, c1, c2, end, points, distanceTolerance) {
	        points.push(clone(start));
	        var x1 = start[0],
	            y1 = start[1],
	            x2 = c1[0],
	            y2 = c1[1],
	            x3 = c2[0],
	            y3 = c2[1],
	            x4 = end[0],
	            y4 = end[1];
	        recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, 0);
	        points.push(clone(end));
	    }
	
	    function recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, level) {
	        if (level > RECURSION_LIMIT) return;
	
	        var pi = Math.PI;
	
	        // Calculate all the mid-points of the line segments
	        //----------------------
	        var x12 = (x1 + x2) / 2;
	        var y12 = (y1 + y2) / 2;
	        var x23 = (x2 + x3) / 2;
	        var y23 = (y2 + y3) / 2;
	        var x34 = (x3 + x4) / 2;
	        var y34 = (y3 + y4) / 2;
	        var x123 = (x12 + x23) / 2;
	        var y123 = (y12 + y23) / 2;
	        var x234 = (x23 + x34) / 2;
	        var y234 = (y23 + y34) / 2;
	        var x1234 = (x123 + x234) / 2;
	        var y1234 = (y123 + y234) / 2;
	
	        if (level > 0) {
	            // Enforce subdivision first time
	            // Try to approximate the full cubic curve by a single straight line
	            //------------------
	            var dx = x4 - x1;
	            var dy = y4 - y1;
	
	            var d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx);
	            var d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx);
	
	            var da1, da2;
	
	            if (d2 > FLT_EPSILON && d3 > FLT_EPSILON) {
	                // Regular care
	                //-----------------
	                if ((d2 + d3) * (d2 + d3) <= distanceTolerance * (dx * dx + dy * dy)) {
	                    // If the curvature doesn't exceed the distanceTolerance value
	                    // we tend to finish subdivisions.
	                    //----------------------
	                    if (m_angle_tolerance < curve_angle_tolerance_epsilon) {
	                        points.push(vec2(x1234, y1234));
	                        return;
	                    }
	
	                    // Angle & Cusp Condition
	                    //----------------------
	                    var a23 = Math.atan2(y3 - y2, x3 - x2);
	                    da1 = Math.abs(a23 - Math.atan2(y2 - y1, x2 - x1));
	                    da2 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - a23);
	                    if (da1 >= pi) da1 = 2 * pi - da1;
	                    if (da2 >= pi) da2 = 2 * pi - da2;
	
	                    if (da1 + da2 < m_angle_tolerance) {
	                        // Finally we can stop the recursion
	                        //----------------------
	                        points.push(vec2(x1234, y1234));
	                        return;
	                    }
	
	                    if (m_cusp_limit !== 0.0) {
	                        if (da1 > m_cusp_limit) {
	                            points.push(vec2(x2, y2));
	                            return;
	                        }
	
	                        if (da2 > m_cusp_limit) {
	                            points.push(vec2(x3, y3));
	                            return;
	                        }
	                    }
	                }
	            } else {
	                if (d2 > FLT_EPSILON) {
	                    // p1,p3,p4 are collinear, p2 is considerable
	                    //----------------------
	                    if (d2 * d2 <= distanceTolerance * (dx * dx + dy * dy)) {
	                        if (m_angle_tolerance < curve_angle_tolerance_epsilon) {
	                            points.push(vec2(x1234, y1234));
	                            return;
	                        }
	
	                        // Angle Condition
	                        //----------------------
	                        da1 = Math.abs(Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y2 - y1, x2 - x1));
	                        if (da1 >= pi) da1 = 2 * pi - da1;
	
	                        if (da1 < m_angle_tolerance) {
	                            points.push(vec2(x2, y2));
	                            points.push(vec2(x3, y3));
	                            return;
	                        }
	
	                        if (m_cusp_limit !== 0.0) {
	                            if (da1 > m_cusp_limit) {
	                                points.push(vec2(x2, y2));
	                                return;
	                            }
	                        }
	                    }
	                } else if (d3 > FLT_EPSILON) {
	                    // p1,p2,p4 are collinear, p3 is considerable
	                    //----------------------
	                    if (d3 * d3 <= distanceTolerance * (dx * dx + dy * dy)) {
	                        if (m_angle_tolerance < curve_angle_tolerance_epsilon) {
	                            points.push(vec2(x1234, y1234));
	                            return;
	                        }
	
	                        // Angle Condition
	                        //----------------------
	                        da1 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y3 - y2, x3 - x2));
	                        if (da1 >= pi) da1 = 2 * pi - da1;
	
	                        if (da1 < m_angle_tolerance) {
	                            points.push(vec2(x2, y2));
	                            points.push(vec2(x3, y3));
	                            return;
	                        }
	
	                        if (m_cusp_limit !== 0.0) {
	                            if (da1 > m_cusp_limit) {
	                                points.push(vec2(x3, y3));
	                                return;
	                            }
	                        }
	                    }
	                } else {
	                    // Collinear case
	                    //-----------------
	                    dx = x1234 - (x1 + x4) / 2;
	                    dy = y1234 - (y1 + y4) / 2;
	                    if (dx * dx + dy * dy <= distanceTolerance) {
	                        points.push(vec2(x1234, y1234));
	                        return;
	                    }
	                }
	            }
	        }
	
	        // Continue subdivision
	        //----------------------
	        recursive(x1, y1, x12, y12, x123, y123, x1234, y1234, points, distanceTolerance, level + 1);
	        recursive(x1234, y1234, x234, y234, x34, y34, x4, y4, points, distanceTolerance, level + 1);
	    }
	}
	
	function clone(point) {
	    return [point[0], point[1]];
	}
	
	function vec2(x, y) {
	    return [x, y];
	}

/***/ }),
/* 232 */
/***/ (function(module, exports) {

	'use strict';
	
	var π = Math.PI;
	var _120 = radians(120);
	
	module.exports = normalize;
	
	/**
	 * https://github.com/jkroso/normalize-svg-path
	 * Convert all segments in a path to curves. 
	 * Usefull if you intend to animate one shape to another. 
	 * By defining all segments with curves instead of a mix of lines, arcs, and curves tweening becomes much simpler. 
	 * It could also help you rewrite your SVG code according to the principles of narcissistic design.
	 *
	 * eg: normalize([['L',1,2]]) // => [['C',0,0,1,2,1,2]]
	 * 
	 * describe `path` in terms of cubic bézier
	 * curves and move commands
	 * 
	 * @param {Array} path
	 * @return {Array}
	 */
	
	function normalize(path) {
	  // init state
	  var prev;
	  var result = [];
	  var bezierX = 0;
	  var bezierY = 0;
	  var startX = 0;
	  var startY = 0;
	  var quadX = null;
	  var quadY = null;
	  var x = 0;
	  var y = 0;
	
	  for (var i = 0, len = path.length; i < len; i++) {
	    var seg = path[i];
	    var command = seg[0];
	    switch (command) {
	      case 'M':
	        startX = seg[1];
	        startY = seg[2];
	        break;
	      case 'A':
	        seg = arc(x, y, seg[1], seg[2], radians(seg[3]), seg[4], seg[5], seg[6], seg[7]);
	        // split multi part
	        seg.unshift('C');
	        if (seg.length > 7) {
	          result.push(seg.splice(0, 7));
	          seg.unshift('C');
	        }
	        break;
	      case 'S':
	        // default control point
	        var cx = x;
	        var cy = y;
	        if (prev == 'C' || prev == 'S') {
	          cx += cx - bezierX; // reflect the previous command's control
	          cy += cy - bezierY; // point relative to the current point
	        }
	        seg = ['C', cx, cy, seg[1], seg[2], seg[3], seg[4]];
	        break;
	      case 'T':
	        if (prev == 'Q' || prev == 'T') {
	          quadX = x * 2 - quadX; // as with 'S' reflect previous control point
	          quadY = y * 2 - quadY;
	        } else {
	          quadX = x;
	          quadY = y;
	        }
	        seg = quadratic(x, y, quadX, quadY, seg[1], seg[2]);
	        break;
	      case 'Q':
	        quadX = seg[1];
	        quadY = seg[2];
	        seg = quadratic(x, y, seg[1], seg[2], seg[3], seg[4]);
	        break;
	      case 'L':
	        seg = line(x, y, seg[1], seg[2]);
	        break;
	      case 'H':
	        seg = line(x, y, seg[1], y);
	        break;
	      case 'V':
	        seg = line(x, y, x, seg[1]);
	        break;
	      case 'Z':
	        seg = line(x, y, startX, startY);
	        break;
	    }
	
	    // update state
	    prev = command;
	    x = seg[seg.length - 2];
	    y = seg[seg.length - 1];
	    if (seg.length > 4) {
	      bezierX = seg[seg.length - 4];
	      bezierY = seg[seg.length - 3];
	    } else {
	      bezierX = x;
	      bezierY = y;
	    }
	    result.push(seg);
	  }
	
	  return result;
	}
	
	function line(x1, y1, x2, y2) {
	  return ['C', x1, y1, x2, y2, x2, y2];
	}
	
	function quadratic(x1, y1, cx, cy, x2, y2) {
	  return ['C', x1 / 3 + 2 / 3 * cx, y1 / 3 + 2 / 3 * cy, x2 / 3 + 2 / 3 * cx, y2 / 3 + 2 / 3 * cy, x2, y2];
	}
	
	// This function is ripped from
	// github.com/DmitryBaranovskiy/raphael/blob/4d97d4/raphael.js#L2216-L2304
	// which references w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	// TODO: make it human readable
	
	function arc(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	  if (!recursive) {
	    var xy = rotate(x1, y1, -angle);
	    x1 = xy.x;
	    y1 = xy.y;
	    xy = rotate(x2, y2, -angle);
	    x2 = xy.x;
	    y2 = xy.y;
	    var x = (x1 - x2) / 2;
	    var y = (y1 - y2) / 2;
	    var h = x * x / (rx * rx) + y * y / (ry * ry);
	    if (h > 1) {
	      h = Math.sqrt(h);
	      rx = h * rx;
	      ry = h * ry;
	    }
	    var rx2 = rx * rx;
	    var ry2 = ry * ry;
	    var k = (large_arc_flag == sweep_flag ? -1 : 1) * Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
	    if (k == Infinity) k = 1; // neutralize
	    var cx = k * rx * y / ry + (x1 + x2) / 2;
	    var cy = k * -ry * x / rx + (y1 + y2) / 2;
	    var f1 = Math.asin(((y1 - cy) / ry).toFixed(9));
	    var f2 = Math.asin(((y2 - cy) / ry).toFixed(9));
	
	    f1 = x1 < cx ? π - f1 : f1;
	    f2 = x2 < cx ? π - f2 : f2;
	    if (f1 < 0) f1 = π * 2 + f1;
	    if (f2 < 0) f2 = π * 2 + f2;
	    if (sweep_flag && f1 > f2) f1 = f1 - π * 2;
	    if (!sweep_flag && f2 > f1) f2 = f2 - π * 2;
	  } else {
	    f1 = recursive[0];
	    f2 = recursive[1];
	    cx = recursive[2];
	    cy = recursive[3];
	  }
	  // greater than 120 degrees requires multiple segments
	  if (Math.abs(f2 - f1) > _120) {
	    var f2old = f2;
	    var x2old = x2;
	    var y2old = y2;
	    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	    x2 = cx + rx * Math.cos(f2);
	    y2 = cy + ry * Math.sin(f2);
	    var res = arc(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	  }
	  var t = Math.tan((f2 - f1) / 4);
	  var hx = 4 / 3 * rx * t;
	  var hy = 4 / 3 * ry * t;
	  var curve = [2 * x1 - (x1 + hx * Math.sin(f1)), 2 * y1 - (y1 - hy * Math.cos(f1)), x2 + hx * Math.sin(f2), y2 - hy * Math.cos(f2), x2, y2];
	  if (recursive) return curve;
	  if (res) curve = curve.concat(res);
	  for (var i = 0; i < curve.length;) {
	    var rot = rotate(curve[i], curve[i + 1], angle);
	    curve[i++] = rot.x;
	    curve[i++] = rot.y;
	  }
	  return curve;
	}
	
	function rotate(x, y, rad) {
	  return {
	    x: x * Math.cos(rad) - y * Math.sin(rad),
	    y: x * Math.sin(rad) + y * Math.cos(rad)
	  };
	}
	
	function radians(degress) {
	  return degress * (π / 180);
	}

/***/ }),
/* 233 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * expected argument lengths
	 * @type {Object}
	 */
	
	var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0
	
		/**
	  * segment pattern
	  * @type {RegExp}
	  */
	
	};var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
	
	/**
	 * parse an svg path data string. Generates an Array
	 * of commands where each command is an Array of the
	 * form `[command, arg1, arg2, ...]`
	 *
	 * @param {String} path
	 * @return {Array}
	 */
	
	function parse(path) {
		var data = [];
		path.replace(segment, function (_, command, args) {
			var type = command.toLowerCase();
			args = parseValues(args);
	
			// overloaded moveTo
			if (type == 'm' && args.length > 2) {
				data.push([command].concat(args.splice(0, 2)));
				type = 'l';
				command = command == 'm' ? 'l' : 'L';
			}
	
			while (true) {
				if (args.length == length[type]) {
					args.unshift(command);
					return data.push(args);
				}
				if (args.length < length[type]) throw new Error('malformed path data');
				data.push([command].concat(args.splice(0, length[type])));
			}
		});
		return data;
	}
	
	function parseValues(args) {
		args = args.match(/-?[.0-9]+(?:e[-+]?\d+)?/ig);
		return args ? args.map(Number) : [];
	}
	
	exports.default = parse;

/***/ }),
/* 234 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = absolutize;
	
	/**
	 * https://github.com/jkroso/abs-svg-path
	 * redefine `path` with absolute coordinates
	 *
	 *  eg: 
	 *  	abs([['l',10,20],['l',30,40]]) 
	 *  	
	 *  	to
	 *  	
	 *  	[['L',10,20],['L',40,60]]
	 *
	 * 
			abs([
			  ['q', 1,2, 33,44],
			  ['L', 50,60],
			  ['c', 1,2, 3,4, 33,44]
			]) 
	
		    to
	
			[
				['Q',1,2,33,44],
				['L', 50, 60],
				['C',51,62, 53,64, 83,104]
			]
	 * @param {Array} path
	 * @return {Array}
	 */
	
	function absolutize(path) {
		var startX = 0;
		var startY = 0;
		var x = 0;
		var y = 0;
	
		return path.map(function (seg) {
			seg = seg.slice();
			var type = seg[0];
			var command = type.toUpperCase();
	
			// is relative
			if (type != command) {
				seg[0] = command;
				switch (type) {
					case 'a':
						seg[6] += x;
						seg[7] += y;
						break;
					case 'v':
						seg[1] += y;
						break;
					case 'h':
						seg[1] += x;
						break;
					default:
						for (var i = 1; i < seg.length;) {
							seg[i++] += x;
							seg[i++] += y;
						}
				}
			}
	
			// update cursor state
			switch (command) {
				case 'Z':
					x = startX;
					y = startY;
					break;
				case 'H':
					x = seg[1];
					break;
				case 'V':
					y = seg[1];
					break;
				case 'M':
					x = startX = seg[1];
					y = startY = seg[2];
					break;
				default:
					x = seg[seg.length - 2];
					y = seg[seg.length - 1];
			}
	
			return seg;
		});
	}

/***/ }),
/* 235 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.angle = angle;
	exports.v = v;
	
	var PI = Math.PI;
	
	/**
	 * [angle description]
	 * @param  {[type]} degree [description]
	 * @return {[type]}        [description]
	 */
	function angle(degree) {
	  return PI * (degree / 180);
	}
	
	function v(point) {
	  return new THREE.Vector3(point[0], 0, point[1]);
	}
	
	var PI_2 = exports.PI_2 = PI / 2;
	
	var EPS = exports.EPS = 0.000001;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(235);
	
	var _svgpath = __webpack_require__(230);
	
	var _svgpath2 = _interopRequireDefault(_svgpath);
	
	var _TextSprite = __webpack_require__(237);
	
	var _TextSprite2 = _interopRequireDefault(_TextSprite);
	
	var _TextPlane = __webpack_require__(239);
	
	var _TextPlane2 = _interopRequireDefault(_TextPlane);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Graph
	 */
	var BaseGraph = function () {
	    function BaseGraph(props) {
	        _classCallCheck(this, BaseGraph);
	
	        this.data = props.graphData;
	        this.stage = props.stage;
	    }
	
	    _createClass(BaseGraph, [{
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            var _data = this.data,
	                nodeDataArray = _data.nodeDataArray,
	                linkDataArray = _data.linkDataArray;
	
	            var group = new THREE.Group();
	            nodeDataArray.forEach(function (node) {
	                if (node.isGroup) {
	                    if (node.text) {
	                        group.add(_this.renderGroup(node));
	                    }
	                    return;
	                }
	                var cube = _this.renderCube(node);
	                group.add(cube);
	            });
	
	            linkDataArray.forEach(function (link) {
	                group.add(_this.renderLink(link));
	            });
	
	            // group.add(this.renderRandomLink());
	            group.position.y = 3;
	            group.castShadow = true;
	            group.position.x = -350;
	            group.position.z = -250;
	            group.name = "graph";
	            return group;
	        }
	    }, {
	        key: 'renderGroup',
	        value: function renderGroup(node) {
	            var _node$bounds = node.bounds,
	                x = _node$bounds.x,
	                y = _node$bounds.y,
	                width = _node$bounds.width,
	                height = _node$bounds.height;
	
	            var group = new THREE.Group();
	            group.add(renderBackgruond());
	            group.add(renderText());
	            group.position.set(x, 0, y);
	
	            return group;
	
	            function renderBackgruond() {
	                // yellow 0xFFC107;
	                // aliceblue 0xF0F8FF
	                // blue 0x1EADFF;
	                var color = 0x1EADFF;
	                // 0xdddddd;
	                var borderColor = 0x1EADFF;
	                var group = new THREE.Group();
	
	                var lambertMaterial = new THREE.MeshLambertMaterial({
	                    color: color,
	                    opacity: .2,
	                    transparent: true
	                });
	
	                // const lineDashedMaterial = new THREE.LineDashedMaterial({
	                //     color: color,
	                //     linecap: 'round',
	                //     dashSize: 4, 
	                //     gapSize: 2, 
	                //     linewidth: 2
	                // });
	                // 
	
	                var lineDashedMaterial = new THREE.LineBasicMaterial({
	                    color: borderColor
	                });
	
	                /**
	                 * create cube as ground
	                 * @type {THREE}
	                 */
	                var geometry = new THREE.BoxBufferGeometry(width, 14, height);
	                var mesh = new THREE.Mesh(geometry, lambertMaterial);
	                mesh.renderDepth = -1;
	                group.add(mesh);
	
	                /**
	                 * create dashed line
	                 * @type {[type]}
	                 */
	                var points = (0, _svgpath2.default)('M0 0 H ' + width + ' V ' + height + ' H 0 V 0 ');
	                var lineGeometry = new THREE.Geometry();
	                points.forEach(function (point) {
	                    lineGeometry.vertices.push((0, _util.v)(point));
	                });
	                lineGeometry.computeLineDistances();
	                var line = new THREE.Line(lineGeometry, lineDashedMaterial);
	                line.position.set(-width / 2, 2, -height / 2);
	                group.add(line);
	
	                group.position.set(width / 2, 0, height / 2);
	
	                return group;
	            }
	
	            function renderText() {
	                var textSprite = new _TextPlane2.default(node.text, {
	                    fontsize: 24,
	                    borderColor: {
	                        r: 150,
	                        g: 150,
	                        b: 150,
	                        a: 1.0
	                    }
	                });
	
	                var text = textSprite.element;
	
	                var scale = .3;
	                text.position.x = textSprite.bound.width / 2 * scale + 3;
	                text.position.z = 11;
	                text.position.y = 7;
	                text.rotation.x = (0, _util.angle)(-90);
	                text.scale.set(scale, scale, scale);
	                return text;
	            }
	        }
	    }, {
	        key: 'renderCube',
	        value: function renderCube(node) {
	            var loc = node.bounds;
	            var daeModels = this.stage.daeModels;
	
	            // cube.position.addScalar()
	            var group = new THREE.Group();
	            renderCube();
	            renderText();
	
	            group.position.x = loc.x + loc.width / 2 + 53;
	            group.position.z = loc.y;
	
	            return group;
	
	            function renderCube() {
	                var cube = daeModels['test-icon'].scene.clone();
	                var scale = 20;
	                cube.position.set(0, 0, 0);
	                cube.scale.set(scale, scale, scale);
	                cube.updateMatrix();
	                // let cubeGeometry = new THREE.BoxBufferGeometry(30, 20, 30);
	                // let cubeMaterial = new THREE.MeshLambertMaterial({
	                //  color: 0xCC0000
	                // });
	                // let cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
	                // cubeMesh.castShadow = true;
	                cube.position.z += 40;
	
	                /**
	                 * hover effect
	                 * @type {THREE}
	                 */
	                var box = new THREE.BoxHelper(cube);
	                box.material = new THREE.LineBasicMaterial({
	                    color: 0xFF0000,
	                    opacity: 0,
	                    transparent: true
	                });
	
	                /**
	                 * for raycaster
	                 * @type {THREE}
	                 */
	                var sphereGeo = new THREE.SphereGeometry(16, 16, 16);
	                var sphere = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({
	                    transparent: true,
	                    opacity: 0
	                }));
	
	                sphere.name = 'graph-node';
	                sphere.userData = node;
	                sphere.position.set(-47, 4, 40);
	
	                sphere.hover = function () {
	                    box.material.opacity = 1;
	                };
	
	                sphere.unhover = function () {
	                    box.material.opacity = 0;
	                };
	
	                group.add(box);
	                group.add(cube);
	                group.add(sphere);
	
	                node._threeObj = sphere;
	            }
	
	            function renderText() {
	                var textSprite = new _TextSprite2.default(node.name, {
	                    fontsize: 20,
	                    borderColor: {
	                        r: 3,
	                        g: 132,
	                        b: 245,
	                        a: 1.0
	                    },
	                    backgroundColor: {
	                        r: 3,
	                        g: 132,
	                        b: 245,
	                        a: 0.4
	                    }
	                });
	
	                var text = textSprite.element;
	                text.position.x = -45;
	                text.position.z = 70;
	
	                text.position.y = 10;
	
	                group.add(text);
	            }
	        }
	    }, {
	        key: 'renderLink',
	        value: function renderLink(link) {
	            if (!link.points) {
	                console.log(link.points.length);
	                link.points = [[0, 0], [1, 1]];
	            };
	            var SUBDIVISIONS = 20;
	            var pts = link.points;
	            // const curve = new THREE.CubicBezierCurve3(v(points[0]), v(points[1]), v(points[2]), v(points[3]));
	
	            // console.log(points);
	            var geometry = new THREE.Geometry();
	            var pathPoints = (0, _svgpath2.default)('M' + pts[0][0] + ' ' + pts[0][1] + ' L ' + pts[1][0] + ' ' + pts[1][1]);
	            pathPoints.forEach(function (point) {
	                geometry.vertices.push((0, _util.v)(point));
	            });
	
	            // for (let j = 0; j < SUBDIVISIONS; j++) {
	            //     geometry.vertices.push(curve.getPoint(j / SUBDIVISIONS));
	            // }
	            // console.log(geometry.vertices);
	            var lineMaterial = new THREE.LineBasicMaterial({
	                color: 0x0384F5
	            });
	
	            var line = new THREE.Line(geometry, lineMaterial);
	
	            line.position.y = 14;
	            line.position.x = 4;
	            line.position.z = 25;
	            return line;
	        }
	    }, {
	        key: 'renderRandomLink',
	        value: function renderRandomLink() {
	            var points = (0, _svgpath2.default)('M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10');
	            var geometry = new THREE.Geometry();
	            points.forEach(function (point) {
	                geometry.vertices.push((0, _util.v)(point));
	            });
	            var lineMaterial = new THREE.LineBasicMaterial({
	                color: 0x00ee00,
	                linecap: 'round',
	                linewidth: 1
	            });
	            var line = new THREE.Line(geometry, lineMaterial);
	            return line;
	        }
	    }]);
	
	    return BaseGraph;
	}();
	
	exports.default = BaseGraph;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CanvasTexture2 = __webpack_require__(238);
	
	var _CanvasTexture3 = _interopRequireDefault(_CanvasTexture2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [makeTextSprite description]
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param  {[type]} message    [description]
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param  {[type]} parameters [description]
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @return {[type]}            [description]
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TextSprite = function (_CanvasTexture) {
	    _inherits(TextSprite, _CanvasTexture);
	
	    function TextSprite(message, parameters) {
	        _classCallCheck(this, TextSprite);
	
	        // message = 'x';
	        // meseaure text size
	        // and set the canvas size
	        var _this = _possibleConstructorReturn(this, (TextSprite.__proto__ || Object.getPrototypeOf(TextSprite)).call(this));
	
	        var metrics = _this.context.measureText(message);
	        var textWidth = metrics.width;
	        var textHeight = 40;
	        _this.canvas.width = Math.max(metrics.width * 4, 200);
	        _this.canvas.height = textHeight;
	
	        // find the real imageData size
	        _this.draw(message, parameters);
	
	        var bound = _this.measureImageSize();
	        var scale = .4;
	
	        _this.bound = bound;
	        _this.scale = scale;
	
	        // document.body.appendChild(this.canvas);
	        // this.canvas.style = "position: absolute; top: 0; left: 0;"
	
	        // canvas contents will be used for a texture
	        var texture = new THREE.Texture(_this.context.getImageData(0, 0, bound.width, bound.height));
	        texture.needsUpdate = true;
	        texture.nroundRecteedsUpdate = true;
	        texture.minFilter = THREE.LinearFilter;
	        _this.texture = texture;
	
	        var spriteMaterial = new THREE.SpriteMaterial({
	            map: texture,
	            color: 0xffffff,
	            fog: true
	        });
	
	        var sprite = new THREE.Sprite(spriteMaterial);
	        sprite.position.normalize();
	        sprite.scale.set(bound.width * scale, bound.height * scale, 1.0);
	
	        _this.element = sprite;
	        return _this;
	    }
	
	    _createClass(TextSprite, [{
	        key: "draw",
	        value: function draw(message, parameters) {
	            if (parameters === undefined) parameters = {};
	            var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
	            var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
	            var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 2;
	            var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : {
	                r: 0,
	                g: 0,
	                b: 0,
	                a: 1.0
	            };
	            var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : {
	                r: 255,
	                g: 255,
	                b: 255,
	                a: 1.0
	            };
	            var context = this.context;
	            context.font = "Bold " + fontsize + "px " + fontface;
	            // get size data (height depends only on font size)
	            var metrics = context.measureText(message);
	            var textWidth = metrics.width;
	
	            // background color
	            context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
	            // border color
	            context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
	            context.lineWidth = borderThickness;
	            roundRect(context, borderThickness / 2, borderThickness / 2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
	            context.fillStyle = "rgba(0, 0, 0, 1.0)";
	            context.fillText(message, borderThickness, fontsize + borderThickness);
	
	            // function for drawing rounded rectangles
	            function roundRect(ctx, x, y, w, h, r) {
	                ctx.beginPath();
	                ctx.moveTo(x + r, y);
	                ctx.lineTo(x + w - r, y);
	                ctx.quadraticCurveTo(x + w, y, x + w, y + r);
	                ctx.lineTo(x + w, y + h - r);
	                ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
	                ctx.lineTo(x + r, y + h);
	                ctx.quadraticCurveTo(x, y + h, x, y + h - r);
	                ctx.lineTo(x, y + r);
	                ctx.quadraticCurveTo(x, y, x + r, y);
	                ctx.closePath();
	                ctx.fill();
	                ctx.stroke();
	            }
	        }
	    }]);
	
	    return TextSprite;
	}(_CanvasTexture3.default);
	
	exports.default = TextSprite;

/***/ }),
/* 238 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * CanvasTexture
	 */
	
	var CanvasTexture = function () {
		function CanvasTexture() {
			_classCallCheck(this, CanvasTexture);
	
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			this.canvas = canvas;
			this.context = context;
		}
	
		_createClass(CanvasTexture, [{
			key: 'measureImageSize',
			value: function measureImageSize() {
				var context = this.context,
				    canvas = this.canvas;
	
	
				var width = canvas.width;
				var height = canvas.height;
				var imageData = context.getImageData(0, 0, width, height);
				var data = imageData.data;
				var length = data.length;
	
				var bound = {
					width: width,
					height: height
				};
	
				var i = void 0,
				    j = void 0;
	
				// scan from right to left 
				for (i = width; i > 0; i--) {
					for (j = 1; j <= height; j++) {
						var pIndex = (width * (j - 1) + (i - 1)) * 4;
						var p = data[pIndex + 3];
						if (p > 0) {
							bound.width = i;
							i = 0;
							break;
						}
					}
				}
	
				// scan from bottom to top
				for (j = height; j > 0; j--) {
					for (i = 1; i <= width; i++) {
						var _pIndex = (width * (j - 1) + (i - 1)) * 4;
						var _p = [data[_pIndex], data[_pIndex + 1], data[_pIndex + 2], data[_pIndex + 3]];
						if (_p[0] || _p[1] || _p[2] || _p[3]) {
							bound.height = j;
							j = 0;
							break;
						}
					}
				}
	
				return bound;
			}
	
			// default render 
	
		}, {
			key: 'draw',
			value: function draw() {}
		}]);
	
		return CanvasTexture;
	}();
	
	exports.default = CanvasTexture;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CanvasTexture2 = __webpack_require__(238);
	
	var _CanvasTexture3 = _interopRequireDefault(_CanvasTexture2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextPlane = function (_CanvasTexture) {
	      _inherits(TextPlane, _CanvasTexture);
	
	      function TextPlane(message, parameters) {
	            _classCallCheck(this, TextPlane);
	
	            // init canvas size
	            var _this = _possibleConstructorReturn(this, (TextPlane.__proto__ || Object.getPrototypeOf(TextPlane)).call(this));
	
	            var metrics = _this.context.measureText(message);
	            var textWidth = metrics.width;
	            var textHeight = 40;
	            _this.canvas.width = Math.max(metrics.width * 3, 50);
	            _this.canvas.height = textHeight;
	
	            // draw text and measure text real size
	            _this.draw(message, parameters);
	
	            var bound = _this.measureImageSize();
	            _this.bound = bound;
	            // create text plane 
	            var texture = new THREE.Texture(_this.context.getImageData(0, 0, bound.width, bound.height));
	            texture.needsUpdate = true;
	            texture.minFilter = THREE.NearestFilter;
	
	            var material = new THREE.MeshBasicMaterial({
	                  map: texture,
	                  side: THREE.DoubleSide,
	                  transparent: true
	            });
	
	            var mesh = new THREE.Mesh(new THREE.PlaneGeometry(bound.width, bound.height), material);
	
	            _this.element = mesh;
	            return _this;
	      }
	
	      _createClass(TextPlane, [{
	            key: "draw",
	            value: function draw(message, parameters) {
	                  var context = this.context;
	
	                  if (parameters === undefined) parameters = {};
	
	                  var metrics = context.measureText(message);
	                  var textWidth = metrics.width;
	
	                  var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
	                  var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 12;
	                  var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
	                  var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : {
	                        r: 0,
	                        g: 0,
	                        b: 0,
	                        a: 1.0
	                  };
	                  var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : {
	                        r: 255,
	                        g: 255,
	                        b: 255,
	                        a: 1.0
	                  };
	
	                  context.font = "Bold " + fontsize + "px " + fontface;
	                  context.fillStyle = "rgba(0, 0, 0, 1.0)";
	                  context.fillText(message, borderThickness, fontsize + borderThickness);
	            }
	      }]);
	
	      return TextPlane;
	}(_CanvasTexture3.default);
	
	exports.default = TextPlane;

/***/ }),
/* 240 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Layer Stack
	 */
	var LayerConnect = function () {
		function LayerConnect(props) {
			_classCallCheck(this, LayerConnect);
	
			this.state = {
				connects: props.connects,
				stage: props.stage
	
				// self three element instance
			};this.el = new THREE.Group();
		}
	
		// render children
	
	
		_createClass(LayerConnect, [{
			key: "render",
			value: function render(props) {
				var connects = this.state.connects;
				var stage = this.state.stage;
				var el = this.el;
	
				var test = [{
					from: { bounds: { x: 0, y: 1000 } },
					to: { bounds: { x: 100, y: 1000 } }
				}];
				stage.scene.updateMatrixWorld();
				connects.forEach(function (connect) {
					var from = connect.from,
					    to = connect.to;
	
	
					var geometry = new THREE.Geometry();
	
					geometry.vertices.push(getNodePosition(from));
					geometry.vertices.push(getNodePosition(to));
	
					var lineMaterial = new THREE.LineBasicMaterial({
						color: 0xee0000
					});
	
					var line = new THREE.Line(geometry, lineMaterial);
	
					el.add(line);
	
					function getNodePosition(node) {
						var threeObj = node._threeObj;
	
						// threeObj.updateMatrixWorld()
						// v.setFromMatrixPosition(threeObj.matrixWorld)
						var v = new THREE.Vector3();
						v.applyMatrix4(threeObj.matrixWorld);
						return v;
					}
				});
	
				return el;
			}
		}]);
	
		return LayerConnect;
	}();
	
	function update(node) {
	
		var parent = [];
	}
	exports.default = LayerConnect;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(235);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * camera manager
	 */
	var CameraManager = function () {
		function CameraManager(stage) {
			_classCallCheck(this, CameraManager);
	
			this.state = {
				moveForward: false,
				moveBackward: false,
				moveLeft: false,
				moveRight: false,
				canJump: false,
				velocity: new THREE.Vector3(),
				prevTime: performance.now(),
				target: new THREE.Vector3(),
				scale: 1,
				minPolarAngle: 0, // radians
				maxPolarAngle: Math.PI, // radians
				minDistance: 0,
				maxDistance: Infinity
	
			};
	
			this.stage = stage;
	
			this.onKeyDown = this.onKeyDown.bind(this);
			this.onKeyUp = this.onKeyUp.bind(this);
			this.onMouseMove = this.onMouseMove.bind(this);
	
			this.initialization();
			this.addEventListeners();
		}
	
		_createClass(CameraManager, [{
			key: 'initialization',
			value: function initialization() {
				// OrthographicCamera( left, right, top, bottom, near, far )
				// let camera = new THREE.OrthographicCamera( 
				//     window.innerWidth / - 2, 
				//     window.innerWidth / 2,
				//     window.innerHeight/2, 
				//     window.innerHeight / - 2, 
				//     10, 10000 );
	
				var _stage = this.stage,
				    width = _stage.width,
				    height = _stage.height,
				    renderer = _stage.renderer,
				    scene = _stage.scene;
	
				// PerspectiveCamera( fov, aspect, near, far )
	
				var camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
				var cameraHelper = new THREE.CameraHelper(camera);
				var el = this.el;
	
				this.camera = this.el = camera;
				window.cm = this;
	
				this.cameraHelper = cameraHelper;
	
				this.setPosition();
	
				scene.add(camera);
				// scene.add(cameraHelper);
	
				var controls = new THREE.OrbitControls(camera, renderer.domElement);
				// controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
				controls.enableDamping = true;
				controls.dampingFactor = 0.25;
				controls.enableZoom = false;
			}
		}, {
			key: 'setPosition',
			value: function setPosition() {
				var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 5000];
	
				var el = this.el;
				el.position.set.apply(el.position, position);
				el.lookAt(this.state.target);
			}
	
			/**
	   * [rotateWorld description]
	   * @param  {[type]} theta [rotate around y-axis]
	   * @param  {[type]} phi   [rotate around x-axis]
	   * @return {[type]}       [description]
	   */
	
		}, {
			key: 'rotateWorld',
			value: function rotateWorld(thetaDelta, phiDelta) {
				var el = this.el;
				var _state = this.state,
				    target = _state.target,
				    minPolarAngle = _state.minPolarAngle,
				    maxPolarAngle = _state.maxPolarAngle,
				    scale = _state.scale,
				    minDistance = _state.minDistance,
				    maxDistance = _state.maxDistance;
	
	
				var position = el.position;
				var offset = position.clone().sub(target);
	
				var theta = 0,
				    phi = 0;
				// angle from z-axis around y-axis
				theta += Math.atan2(offset.x, offset.z);
				// angle from y-axis
				phi += Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);
	
				theta += (0, _util.angle)(thetaDelta);
				phi += (0, _util.angle)(phiDelta);
	
				// restrict phi to be between desired limits
				phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, phi));
	
				// restrict phi to be betwee EPS and PI-EPS
				phi = Math.max(_util.EPS, Math.min(Math.PI - _util.EPS, phi));
	
				var radius = offset.length() * scale;
				radius = Math.max(minDistance, Math.min(maxDistance, radius));
				// target.add( pan );
	
				offset.x = radius * Math.sin(phi) * Math.sin(theta);
				offset.y = radius * Math.cos(phi);
				offset.z = radius * Math.sin(phi) * Math.cos(theta);
	
				position.copy(target).add(offset);
				el.lookAt(target);
	
				// this.state.scale = 0;
				// this.state.pan.set(0, 0, 0);
			}
		}, {
			key: 'resize',
			value: function resize(size) {
				var camera = this.camera;
				camera.aspect = size.width / size.height;
				camera.updateProjectionMatrix();
			}
		}, {
			key: 'addEventListeners',
			value: function addEventListeners() {
				document.addEventListener('keydown', this.onKeyDown, false);
				document.addEventListener('keyup', this.onKeyUp, false);
				// document.addEventListener( 'mousemove', this.onMouseMove, false );
			}
		}, {
			key: 'onKeyDown',
			value: function onKeyDown(event) {
				var state = this.state;
				switch (event.keyCode) {
					case 38: // up
					case 87:
						// w
						state.moveForward = true;
						break;
	
					case 37: // left
					case 65:
						// a
						state.moveLeft = true;break;
	
					case 40: // down
					case 83:
						// s
						state.moveBackward = true;
						break;
	
					case 39: // right
					case 68:
						// d
						state.moveRight = true;
						break;
	
					case 32:
						// space
						if (state.canJump === true) state.velocity.y += 350;
						state.canJump = false;
						break;
	
				}
			}
		}, {
			key: 'onKeyUp',
			value: function onKeyUp(event) {
				var state = this.state;
				switch (event.keyCode) {
	
					case 38: // up
					case 87:
						// w
						state.moveForward = false;
						break;
	
					case 37: // left
					case 65:
						// a
						state.moveLeft = false;
						break;
	
					case 40: // down
					case 83:
						// s
						state.moveBackward = false;
						break;
	
					case 39: // right
					case 68:
						// d
						state.moveRight = false;
						break;
	
				}
			}
		}, {
			key: 'onMouseMove',
			value: function onMouseMove(event) {
				// if ( scope.enabled === false ) return;
				var el = this.el,
				    camera = this.camera;
	
	
				var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
				var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	
				camera.rotation.y -= movementX * 0.0004;
				camera.rotation.x -= movementY * 0.0004;
	
				camera.rotation.x = Math.max(-_util.PI_2, Math.min(_util.PI_2, camera.rotation.x));
			}
		}, {
			key: 'update',
			value: function update() {
				var _state2 = this.state,
				    velocity = _state2.velocity,
				    moveForward = _state2.moveForward,
				    moveBackward = _state2.moveBackward,
				    moveLeft = _state2.moveLeft,
				    moveRight = _state2.moveRight,
				    prevTime = _state2.prevTime;
				var el = this.el;
	
	
				var time = performance.now();
				var delta = (time - prevTime) / 500;
	
				velocity.x -= velocity.x * 10.0 * delta;
				velocity.z -= velocity.z * 10.0 * delta;
	
				// velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
	
				if (moveForward) velocity.z -= 400.00 * delta;
				if (moveBackward) velocity.z += 400.0 * delta;
	
				if (moveLeft) velocity.x -= 400.0 * delta;
				if (moveRight) velocity.x += 400.0 * delta;
	
				// if ( isOnObject === true ) {
				// 	velocity.y = Math.max( 0, velocity.y );
	
	
				// 	canJump = true;
				// }
	
				el.translateX(velocity.x * delta);
				el.translateY(velocity.y * delta);
				el.translateZ(velocity.z * delta);
				// if (el.position.y < 10 ) {
				// 	velocity.y = 0;
				// 	el.position.y = 0;
				// }
				this.state.prevTime = time;
			}
		}]);
	
		return CameraManager;
	}();
	
	exports.default = CameraManager;

/***/ }),
/* 242 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * light manager
	 */
	var LightManager = function () {
	    function LightManager() {
	        _classCallCheck(this, LightManager);
	    }
	
	    _createClass(LightManager, [{
	        key: "lightup",
	        value: function lightup(scene) {
	            var hemiLight = this.addHemisphereLight(0xffffff, 0xffffff, 1.25, scene);
	            hemiLight.color.setHSL(0.6, 1, 0.75);
	            hemiLight.groundColor.setHSL(0.6, 1, 0.75);
	            hemiLight.position.y = 5100;
	
	            this.addDirectionalLight("#ffffff", 1, { x: 0, y: 0, z: 10 }, scene);
	            this.addDirectionalLight("#ffffff", 1, { x: 0, y: 0, z: -10 }, scene);
	            this.addDirectionalLight("#ffffff", 1, { x: 0, y: 0, z: 1500 }, scene);
	            this.addDirectionalLight("#ffffff", 1, { x: 0, y: 0, z: -1500 }, scene);
	        }
	    }, {
	        key: "addAmbientLight",
	        value: function addAmbientLight(color, scene) {
	            var light = new THREE.AmbientLight(color);
	            scene.add(light);
	            return light;
	        }
	    }, {
	        key: "addDirectionalLight",
	        value: function addDirectionalLight(color, intensity, pos, scene) {
	            var light = new THREE.DirectionalLight(color, intensity);
	            light.position.set(pos.x, pos.y, pos.z);
	            scene.add(light);
	
	            var helper = new THREE.DirectionalLightHelper(light, 3);
	            // scene.add( helper );
	            return light;
	        }
	    }, {
	        key: "addHemisphereLight",
	        value: function addHemisphereLight(skyColorHex, groundColorHex, intensity, scene) {
	            var light = new THREE.HemisphereLight(skyColorHex, groundColorHex, intensity);
	            scene.add(light);
	            return light;
	        }
	    }, {
	        key: "addPointLight",
	        value: function addPointLight(hex, intensity, distance, decay, pos, scene) {
	            var light = new THREE.PointLight(hex, intensity, distance, decay);
	            light.position.set(pos.x, pos.y, pos.z);
	            scene.add(light);
	
	            // let light = new THREE.PointLight(0xffffff, .4, 0);
	            // light.position.set(0, 1000, -200);
	            // light.castShadow = true;
	            // light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 200, 2500 ) );
	            // light.shadow.bias = 0.0001;
	
	            // light.shadow.mapSize.width = 1024;
	            // light.shadow.mapSize.height = 1024;
	
	            var pointLightHelper = new THREE.PointLightHelper(light, 1);
	            scene.add(pointLightHelper);
	            return light;
	        }
	    }, {
	        key: "addSpotLight",
	        value: function addSpotLight(color, pos, castShadow, scene) {
	            var light = new THREE.SpotLight(0xffffff);
	            light.position.set(pos.x, pos.y, pos.z);
	
	            light.castShadow = castShadow;
	
	            light.shadowMapWidth = 1024;
	            light.shadowMapHeight = 1024;
	
	            light.shadowCameraNear = 500;
	            light.shadowCameraFar = 4000;
	            light.shadowCameraFov = 30;
	
	            scene.add(light);
	
	            var spotLightHelper = new THREE.SpotLightHelper(light);
	            scene.add(spotLightHelper);
	
	            return light;
	        }
	    }]);
	
	    return LightManager;
	}();
	
	exports.default = new LightManager();

/***/ }),
/* 243 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var manager = new THREE.LoadingManager();
	var jsonLoader = new THREE.JSONLoader(manager);
	var colladaLoader = new THREE.ColladaLoader();
	colladaLoader.options.convertUpAxis = true;
	
	/**
	 * [load description]
	 * @param [map] [ {key: path}]
	 * @return {Promise} [description]
	 */
	function load(map) {
	
	  manager.onProgress = function (item, loaded, total) {
	    console.log("loading " + loaded + " / " + total + " ");
	  };
	
	  var targets = Object.keys(map).map(function (key) {
	    return loadOneModel(key, map);
	  });
	
	  return Promise.all(targets).then(function () {
	    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    var map = {};
	    arr.forEach(function (it) {
	      map[it.key] = it.obj;
	    });
	    return map;
	  });
	}
	
	/**
	 * There seems to be a known issue when re-using the same instance of the collada loader to load multiple collada files.
	 * https://github.com/mrdoob/three.js/issues/5721
	 * @return {[type]} [description]
	 */
	function loadOneModel(key, map) {
	  var path = map[key];
	  return new Promise(function (resolve, reject) {
	    var ext = path.split(".").pop();
	    var loader = null;
	    if (ext === "js") {
	      loader = jsonLoader;
	    } else if (ext === "dae") {
	      loader = colladaLoader;
	    } else {
	      console.error("error loading " + path + ", extension supported are .dae (collada) and .js (Three.js JSON) ");
	      return reject();
	    }
	
	    loader.load(path, function (obj) {
	      resolve({
	        key: key,
	        obj: obj
	      });
	    });
	  });
	}
	exports.default = load;

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Director control
	 * - objecs animate
	 * - camera move
	 */
	
	var CAMERA_POSITION = {
		initial: [0, 0, 5000],
		normal: [0, 320, 1200]
	};
	
	var LAYERS_POSITION = {
		normal: [[0, 300, 0], [0, 10, 0], [0, -280, 0]]
	};
	
	var Director = function () {
		function Director(param) {
			_classCallCheck(this, Director);
	
			var stage = this.stage = param.stage;
			this.scene = stage.scene;
			this.camera = stage.camera;
			this.cameraManager = stage.cameraManager;
		}
	
		_createClass(Director, [{
			key: 'playInitialAnimation',
			value: function playInitialAnimation() {
				var cameraManager = this.cameraManager;
	
				this.resetCameraPosition();
				this.resetLayersPosition();
	
				var from = {
					x: 0,
					y: 0,
					z: 5000
				};
	
				var tween = TweenLite.to(from, 2, {
					z: 1200,
					y: 320,
					x: 0,
					// ease: Linear.easeNone,
					onUpdate: function onUpdate() {
						cameraManager.setPosition([from.x, from.y, from.z]);
					}
				});
	
				tween.play();
			}
		}, {
			key: 'resetLayersPosition',
			value: function resetLayersPosition() {
				var layers = this.stage.layers;
				// 层位置复原
				layers.forEach(function (layer, i) {
					var pos = LAYERS_POSITION.normal[i];
					layer.el.position.x = pos[0];
					layer.el.position.y = pos[1];
					layer.el.position.z = pos[2];
				});
			}
		}, {
			key: 'resetCameraPosition',
			value: function resetCameraPosition() {
				// 相机复原位置
				this.cameraManager.setPosition(CAMERA_POSITION.normal);
			}
		}, {
			key: 'zoomToLayer',
			value: function zoomToLayer(layerIndex) {
				var layers = this.stage.layers;
				var cameraManager = this.cameraManager;
				var stage = this.stage;
				var tl = new TimelineLite();
	
				this.resetCameraPosition();
				this.resetLayersPosition();
	
				var from = {
					layer1: {
						x: 0
					},
					layer2: {
						x: 0
					},
					layer3: {
						x: 0
					},
					cameraRotation: {
						rotateWorldX: 0
					},
					cameraY: {
						y: cameraManager.camera.position.y
					}
				};
	
				var layer1 = layers[0];
				var layer2 = layers[1];
				var layer3 = layers[2];
	
				tl.to(from.layer1, .8, {
					x: 2000,
					onUpdate: function onUpdate() {
						layer1.el.position.x = from.layer1.x;
					}
				});
	
				tl.to(from.layer2, .8, {
					x: -2000,
					onUpdate: function onUpdate() {
						layer2.el.position.x = from.layer2.x;
					}
				}, '-=0.7');
	
				tl.to(from.cameraRotation, .8, {
					rotateWorldX: 155,
					onUpdate: function onUpdate() {
						cameraManager.rotateWorld(0, -1.5);
					},
					onComplete: function onComplete() {
						from.cameraY.y = cameraManager.camera.position.y;
						from.cameraY.z = cameraManager.camera.position.z;
						tl.to(from.cameraY, .8, {
							y: 450,
							z: 0,
							onUpdate: function onUpdate() {
								var pos = cameraManager.camera.position;
								cameraManager.setPosition([pos.x, from.cameraY.y, from.cameraY.z]);
							},
							onComplete: function onComplete() {
								setTimeout(function () {
									stage.updateLoop();
								}, 10);
							}
						});
					}
				});
			}
		}]);
	
		return Director;
	}();
	
	exports.default = Director;

/***/ }),
/* 245 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * MouseEventManager
	 */
	var MouseEventManager = function () {
	  function MouseEventManager(params) {
	    _classCallCheck(this, MouseEventManager);
	
	    this.stage = params.stage;
	    this.raycaster = new THREE.Raycaster();
	    this.mouse = new THREE.Vector2(-5000, -5000);
	    this.$canvasElement = this.stage.renderer.domElement;
	
	    /**
	    * array of mouse event enbaled object
	    * @type {Array}
	    */
	    this.objectRefs = [];
	
	    /**
	    * current intersect obj
	    * @type {[type]}
	    */
	    this.INTERSECT = null;
	
	    /**
	         * current hovered obj
	         * mouse move is fast, so cant set every INTERSECT object as active
	         * @type {[type]}
	         */
	    this.activeObject = null;
	    this.activeObjects = [];
	
	    /**
	    * [diabled mouse event]
	    * @type {Boolean}
	    */
	    this.diabled = false;
	
	    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
	    this.onDocumentClick = this.onDocumentClick.bind(this);
	    this.onDocumentTouchStart = this.onDocumentTouchStart.bind(this);
	  }
	
	  /**
	     * traverse scene and find all nodes
	     * @return {[type]} [description]
	     */
	
	
	  _createClass(MouseEventManager, [{
	    key: "initObjects",
	    value: function initObjects() {
	      var objects = this.objectRefs = [];
	      this.stage.scene.traverse(function (obj) {
	        if (obj.name === "graph-node") {
	          objects.push(obj);
	        }
	      });
	    }
	  }, {
	    key: "bindEvent",
	    value: function bindEvent() {
	      var ele = this.$canvasElement;
	      $(ele).on("mousemove", this.onDocumentMouseMove);
	      $(ele).on("click", this.onDocumentClick);
	      $(ele).on("touchend", this.onDocumentTouchStart);
	    }
	  }, {
	    key: "onDocumentMouseMove",
	    value: function onDocumentMouseMove(event) {
	      var _this = this;
	
	      event.preventDefault();
	
	      var ele = this.$canvasElement;
	      var mouse = this.mouse;
	
	      var viewportOffset = ele.getBoundingClientRect();
	
	      var top = viewportOffset.top;
	      var left = viewportOffset.left;
	
	      var cX = event.clientX - left,
	          cY = event.clientY - top;
	
	      mouse.x = cX / viewportOffset.width * 2 - 1;
	      mouse.y = -(cY / viewportOffset.height) * 2 + 1;
	      mouse.cx = cX;
	      mouse.cy = cY;
	
	      this.raycasterCheck();
	
	      var INTERSECT = this.INTERSECT;
	      var activeObject = this.activeObject;
	      if (INTERSECT && INTERSECT !== activeObject) {
	        clearTimeout(this.unhoverTimer);
	        clearTimeout(this.hoverTimer);
	
	        this.hoverTimer = setTimeout(function () {
	          _this.hoverElement(INTERSECT);
	        }, 100);
	      } else {
	        if (this.activeObjects.length > 0) {
	          clearTimeout(this.unhoverTimer);
	          clearTimeout(this.hoverTimer);
	          this.unhoverTimer = setTimeout(function () {
	            _this.unhoverElement(activeObject);
	          }, 100);
	        }
	      }
	    }
	  }, {
	    key: "onDocumentTouchStart",
	    value: function onDocumentTouchStart(event) {
	      var _this2 = this;
	
	      event.preventDefault();
	
	      var ele = this.$canvasElement;
	      var mouse = this.mouse;
	
	      var viewportOffset = ele.getBoundingClientRect();
	
	      var top = viewportOffset.top;
	      var left = viewportOffset.left;
	
	      var cX = event.originalEvent.changedTouches[0].clientX - left,
	          cY = event.originalEvent.changedTouches[0].clientY - top;
	
	      mouse.x = cX / viewportOffset.width * 2 - 1;
	      mouse.y = -(cY / viewportOffset.height) * 2 + 1;
	      mouse.cx = cX;
	      mouse.cy = cY;
	
	      setTimeout(function () {
	        if (_this2.INTERSECT) {
	          _this2.clickElement(_this2.INTERSECT);
	        }
	      }, 10);
	    }
	  }, {
	    key: "onDocumentClick",
	    value: function onDocumentClick() {
	      if (this.INTERSECT) {
	        this.clickElement(this.activeObject);
	      }
	    }
	  }, {
	    key: "hoverElement",
	    value: function hoverElement(obj) {
	      document.body.style.cursor = "pointer";
	      this.unhoverAll();
	      if (obj) {
	        obj.hover();
	        // this.stage.ui.showObjectHoverTip(obj, this.mouse);
	        this.activeObject = obj;
	        this.activeObjects.push(obj);
	      }
	    }
	  }, {
	    key: "unhoverElement",
	    value: function unhoverElement(obj) {
	      document.body.style.cursor = "default";
	      this.unhoverAll();
	      // this.stage.ui.hideObjectHoverTip();
	      this.activeObject = null;
	    }
	  }, {
	    key: "unhoverAll",
	    value: function unhoverAll() {
	      /**
	           * 通过数组来管理所有 active 过的对象
	           * 全部都要 unhover, 避免因 setTimeout 漏网之鱼
	           * @param  {[type]} (el [description]
	           * @return {[type]}     [description]
	           */
	      this.activeObjects.forEach(function (el) {
	        el.unhover();
	      });
	
	      this.activeObjects = [];
	    }
	  }, {
	    key: "clickElement",
	    value: function clickElement(obj) {
	      console.log("click ", obj);
	    }
	  }, {
	    key: "raycasterCheck",
	    value: function raycasterCheck() {
	      var raycaster = this.raycaster,
	          mouse = this.mouse,
	          stage = this.stage,
	          objectRefs = this.objectRefs;
	
	
	      var activeObject = this.activeObject;
	      this.raycaster.setFromCamera(mouse, stage.camera);
	      var intersects = raycaster.intersectObjects(objectRefs);
	
	      if (intersects.length && !this.disabled) {
	        if (this.INTERSECT != intersects[0].object) {
	          this.INTERSECT = intersects[0].object;
	        }
	      } else {
	        this.INTERSECT = null;
	      }
	    }
	  }]);
	
	  return MouseEventManager;
	}();
	
	exports.default = MouseEventManager;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Panels = __webpack_require__(247);
	
	var _Panels2 = _interopRequireDefault(_Panels);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Menu = _react2.default.createClass({
		displayName: 'Menu',
		getInitialState: function getInitialState() {
			return {
				currentPanel: 'ViewConfig'
			};
		},
		render: function render() {
			var Panel = _Panels2.default[this.state.currentPanel];
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'app-bottom-plugin-container' },
					_react2.default.createElement(
						'div',
						{ className: 'toggle down' },
						_react2.default.createElement(_antd.Icon, { type: 'forward' })
					),
					_react2.default.createElement(Panel, null)
				),
				_react2.default.createElement(
					'div',
					{ className: 'app-bottom-plugin-list' },
					_react2.default.createElement(
						'ul',
						null,
						this.renderMenuList()
					)
				)
			);
		},
		renderMenuList: function renderMenuList() {
			var _this = this;
	
			var list = [{
				label: '视图配置',
				panel: 'ViewConfig'
			}, {
				label: '配置信息',
				panel: 'ConfigInfo'
			}, {
				label: '警告信息',
				panel: 'WarningInfo'
			}, {
				label: '监控信息',
				panel: 'NightWatch'
			}, {
				label: '故障工单',
				panel: 'Issues'
			}, {
				label: '变更工单',
				panel: 'Change'
			}, {
				label: '应急预案',
				panel: 'Emergency'
			}];
	
			var currentPanel = this.state.currentPanel;
	
			return list.map(function (it) {
				var className = '';
				if (currentPanel === it.panel) {
					className = 'active';
				}
				return _react2.default.createElement(
					'li',
					{
						key: 'panel-' + it.label,
						className: className,
						onClick: _this.switchPanel.bind(null, it.panel)
					},
					it.label
				);
			});
		},
		switchPanel: function switchPanel(panel) {
			this.setState({
				currentPanel: panel
			});
		}
	});
	
	exports.default = Menu;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var context = __webpack_require__(248);
	var keys = context.keys().filter(function (item) {
	  return item !== './index.js';
	});
	var Modules = keys.reduce(function (memo, key) {
	  memo[key.match(/([^\/]+)\.jsx$/)[1]] = context(key).default;
	  return memo;
	}, {});
	
	exports.default = Modules;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Change.jsx": 249,
		"./ConfigInfo.jsx": 251,
		"./Emergency.jsx": 252,
		"./Issues.jsx": 253,
		"./NightWatch.jsx": 254,
		"./ViewConfig.jsx": 255,
		"./WarningInfo.jsx": 256
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 248;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dataSource = [];
	
	var columns = [{
		title: '变更单编号',
		dataIndex: 'name',
		key: 'name'
	}, {
		title: '标题',
		dataIndex: 'age',
		key: 'age'
	}, {
		title: '描述',
		dataIndex: 'address',
		key: 'address'
	}, {
		title: '级别',
		dataIndex: 'level',
		key: 'level'
	}];
	
	var Panel = _react2.default.createClass({
		displayName: 'Panel',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel-change' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-header' },
					'\u53D8\u66F4\u5DE5\u5355'
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(_antd.Table, {
					dataSource: dataSource,
					columns: columns,
					size: 'small',
					pagination: false
				})
			);
		}
	});
	
	exports.default = Panel;

/***/ }),
/* 250 */,
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dataSource = [{
	  status: '生产',
	  institution: '公司及机构系统',
	  name: '企业现金',
	  part: '开放系统应用支持'
	}];
	
	var columns = [{
	  title: '状态',
	  dataIndex: 'status',
	  key: 'status'
	}, {
	  title: '所属单位',
	  dataIndex: 'institution',
	  key: 'institution'
	}, {
	  title: '系统名称',
	  dataIndex: 'name',
	  key: 'name'
	}, {
	  title: '部门名称',
	  dataIndex: 'part',
	  key: 'part'
	}];
	
	var ConfigInfo = _react2.default.createClass({
	  displayName: 'ConfigInfo',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel-config-info' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-header' },
	        '\u914D\u7F6E\u4FE1\u606F'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_antd.Table, {
	        dataSource: dataSource,
	        columns: columns,
	        size: 'small',
	        pagination: false
	      })
	    );
	  }
	});
	
	exports.default = ConfigInfo;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Panel = _react2.default.createClass({
		displayName: 'Panel',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel-config-info' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-header' },
					'\u5E94\u6025\u9884\u6848'
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'p',
					null,
					' \u9884\u68481\uFF1A xxxxxx.jpg '
				),
				_react2.default.createElement(
					'p',
					null,
					' \u9884\u68482\uFF1A xxxxxx.jpg '
				)
			);
		}
	});
	
	exports.default = Panel;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dataSource = [];
	
	var columns = [{
		title: '工单编号',
		dataIndex: 'name',
		key: 'name'
	}, {
		title: '标题',
		dataIndex: 'age',
		key: 'age'
	}, {
		title: '描述',
		dataIndex: 'address',
		key: 'address'
	}, {
		title: '级别',
		dataIndex: 'level',
		key: 'level'
	}];
	
	var Panel = _react2.default.createClass({
		displayName: 'Panel',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel-config-info' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-header' },
					'\u6545\u969C\u5DE5\u5355',
					_react2.default.createElement('i', { className: 'point small point-danger' })
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(_antd.Table, {
					dataSource: dataSource,
					columns: columns,
					size: 'small',
					pagination: false
				})
			);
		}
	});
	
	exports.default = Panel;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dataSource = [{
	  title: '企业现金',
	  klass: '企业现金',
	  target: '交易成功率',
	  instance: '第三方账户管理'
	}, {
	  title: '企业现金',
	  klass: '企业现金',
	  target: '交易量',
	  instance: '第三方账户管理'
	}, {
	  title: '企业现金',
	  klass: '企业现金',
	  target: '响应时间',
	  instance: '第三方账户管理'
	}];
	
	var columns = [{
	  title: 'c1名称',
	  dataIndex: 'title',
	  key: 'title'
	}, {
	  title: '指标类别',
	  dataIndex: 'klass',
	  key: 'klass'
	}, {
	  title: '指标',
	  dataIndex: 'target',
	  key: 'target'
	}, {
	  title: '实例',
	  dataIndex: 'instance',
	  key: 'instance'
	}];
	
	var Panel = _react2.default.createClass({
	  displayName: 'Panel',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel-config-info' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-header' },
	        '\u8B66\u544A\u4FE1\u606F',
	        _react2.default.createElement('i', { className: 'point small point-success' })
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_antd.Table, {
	        dataSource: dataSource,
	        columns: columns,
	        size: 'small',
	        pagination: false
	      })
	    );
	  }
	});
	
	exports.default = Panel;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Panel = _react2.default.createClass({
		displayName: 'Panel',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel-view-setting' },
				_react2.default.createElement(
					'div',
					{ className: 'ant-row' },
					_react2.default.createElement(
						'div',
						{ className: 'ant-col ant-col-6 controls' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_antd.Checkbox,
									null,
									'\u663E\u793A\u5C42\u95F4\u8FDE\u7EBF'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_antd.Checkbox,
									null,
									'\u663E\u793A\u8B66\u544A\u8282\u70B9'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'ant-col ant-col-18 list' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								'2d \u56FE\u5C42\u5217\u8868'
							),
							_react2.default.createElement(
								'li',
								{ className: 'ant-row list-item' },
								_react2.default.createElement(
									'div',
									{ className: 'ant-col ant-col-4 list-item-img' },
									_react2.default.createElement('img', { src: '/assets/img/layer1.png' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'ant-col ant-col-20 list-item-detail' },
									'\u903B\u8F91\u67B6\u6784\u56FE'
								),
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								{ className: 'ant-row list-item' },
								_react2.default.createElement(
									'div',
									{ className: 'ant-col ant-col-4 list-item-img' },
									_react2.default.createElement('img', { src: '/assets/img/layer1.png' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'ant-col ant-col-20 list-item-detail' },
									'\u90E8\u7F72\u67B6\u6784\u56FE'
								),
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								{ className: 'ant-row list-item' },
								_react2.default.createElement(
									'div',
									{ className: 'ant-col ant-col-4 list-item-img' },
									_react2.default.createElement('img', { src: '/assets/img/layer1.png' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'ant-col ant-col-20 list-item-detail' },
									'\u7F51\u8DEF\u67B6\u6784\u56FE'
								),
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							)
						)
					)
				)
			);
		}
	});
	
	exports.default = Panel;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dataSource = [{
	  key: '1',
	  name: 'xxxx故障',
	  age: "23 黄务",
	  address: '2016-8-23'
	}, {
	  key: '2',
	  name: 'xxxx故障',
	  age: "北京",
	  address: '2016-8-23'
	}];
	
	var columns = [{
	  title: '描述',
	  dataIndex: 'name',
	  key: 'name'
	}, {
	  title: '节点',
	  dataIndex: 'age',
	  key: 'age'
	}, {
	  title: '时间',
	  dataIndex: 'address',
	  key: 'address'
	}];
	
	var Panel = _react2.default.createClass({
	  displayName: 'Panel',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel-config-info' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-header' },
	        '\u8B66\u544A\u4FE1\u606F',
	        _react2.default.createElement('i', { className: 'point small point-warning' })
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_antd.Table, {
	        dataSource: dataSource,
	        columns: columns,
	        size: 'small',
	        pagination: false
	      })
	    );
	  }
	});
	
	exports.default = Panel;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Detail = _react2.default.createClass({
		displayName: 'Detail',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel-detail' },
				_react2.default.createElement(
					'div',
					{ className: 'toggle' },
					_react2.default.createElement(_antd.Icon, { type: 'forward' })
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					{ className: 'panel-detail' },
					_react2.default.createElement(
						'div',
						{ className: 'meta' },
						_react2.default.createElement(
							'h3',
							{ style: { marginTop: 5 } },
							' \u57FA\u672C\u4FE1\u606F '
						),
						_react2.default.createElement(
							'p',
							null,
							'\u540D\u79F0\uFF1A23 \u9EC4\u52A1'
						),
						_react2.default.createElement(
							'p',
							null,
							'\u7C7B\u578B\uFF1A\u8282\u70B9\u7C7B\u578B '
						),
						_react2.default.createElement(
							'p',
							null,
							'\u63CF\u8FF0\uFF1A23 \u9EC4\u52A1\u7CFB\u7EDF\u8BE6\u7EC6\u63CF\u8FF0 '
						),
						_react2.default.createElement(
							'p',
							null,
							'\u8282\u70B9\u72B6\u6001\uFF1A\u6B63\u5E38 '
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'relations' },
						_react2.default.createElement(
							'h3',
							null,
							'\u8282\u70B9\u5173\u7CFB'
						),
						_react2.default.createElement(
							'p',
							null,
							'\u5B83\u6307\u5411\u7684\u8282\u70B9'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'\u6307\u5411\u5B83\u7684\u8282\u70B9'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							),
							_react2.default.createElement(
								'li',
								null,
								' \u8282\u70B91 ',
								_react2.default.createElement(_antd.Icon, { type: 'right' })
							)
						)
					)
				)
			);
		}
	});
	
	exports.default = Detail;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _antd = __webpack_require__(250);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Option = _antd.Select.Option;
	
	// <Popover 
	//  	content={this.renderContent()} 
	//  	trigger="click">
	//  	<span>P2P 联合存管系统 <Icon type="down"/></span> 
	// </Popover>
	// renderContent() {
	// 	return (
	// 	  <div>
	// 	    <p>内容</p>
	// 	    <p>内容</p>
	// 	  </div>
	// 	)
	// }
	
	var Header = _react2.default.createClass({
		displayName: 'Header',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'ant-row' },
				_react2.default.createElement(
					'div',
					{ className: 'ant-col ant-col-2' },
					_react2.default.createElement(
						'a',
						{ className: 'logo' },
						' ',
						_react2.default.createElement(_antd.Icon, { type: 'cloud-o' }),
						'3D \u67B6\u6784\u56FE'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-col ant-col-22 title' },
					_react2.default.createElement(
						_antd.Select,
						{ showSearch: true,
							style: { width: 200 },
							placeholder: '\u8BF7\u9009\u62E9\u5E94\u7528\u7CFB\u7EDF',
							optionFilterProp: 'children',
							notFoundContent: '\u65E0\u6CD5\u627E\u5230',
							defaultValue: 'p2p',
							onChange: this.handleChange
						},
						_react2.default.createElement(
							Option,
							{ value: 'it' },
							'IT\u7EFC\u5408\u7BA1\u7406\u7CFB\u7EDF'
						),
						_react2.default.createElement(
							Option,
							{ value: 'p2p' },
							'P2P\u8054\u5408\u5B58\u7BA1\u7CFB\u7EDF'
						),
						_react2.default.createElement(
							Option,
							{ value: 'p2p2' },
							'P2P\u8D44\u91D1\u5B58\u7BA1\u7CFB\u7EDF'
						)
					)
				)
			);
		},
		handleChange: function handleChange(value) {
			this.props.dispatch('graphData/get', {
				id: value
			});
		}
	});
	
	exports.default = Header;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(186);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _redux = __webpack_require__(200);
	
	var _reduxThunk = __webpack_require__(260);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(261);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxSaga = __webpack_require__(262);
	
	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
	
	var _SagaManager = __webpack_require__(278);
	
	var _SagaManager2 = _interopRequireDefault(_SagaManager);
	
	var _reducers = __webpack_require__(283);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// redux default store
	
	
	// redux
	var DefaultStoreData = _immutable2.default.fromJS({
	    graphData: null
	});
	
	// saga middleware
	
	
	// redux reducer
	
	
	// redux middlewares
	var sagaMiddleware = (0, _reduxSaga2.default)();
	
	// create store
	var store = (0, _redux.createStore)(_reducers2.default, DefaultStoreData, (0, _redux.applyMiddleware)(sagaMiddleware, _reduxThunk2.default)); //, createLogger()
	
	// start saga
	_SagaManager2.default.startSagas(sagaMiddleware);
	
	/**
	 * subscribe state change event
	 */
	store.subscribe(function () {
	    // console.log(store.getState());
	});
	
	window.store = store;
	// store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
	//   console.log(store.getState())
	// )
	
	// contextType: {
	//  store: PropTypes.shape({
	//    subscribe: PropTypes.func.isRequired,
	//    dispatch: PropTypes.func.isRequired,
	//    getState: PropTypes.func.isRequired
	//  })
	// }
	
	
	exports.default = store;

/***/ }),
/* 260 */,
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.utils = exports.effects = exports.CANCEL = exports.delay = exports.throttle = exports.takeLatest = exports.takeEvery = exports.buffers = exports.channel = exports.eventChannel = exports.END = exports.runSaga = undefined;
	
	var _runSaga = __webpack_require__(263);
	
	Object.defineProperty(exports, 'runSaga', {
	  enumerable: true,
	  get: function get() {
	    return _runSaga.runSaga;
	  }
	});
	
	var _channel = __webpack_require__(271);
	
	Object.defineProperty(exports, 'END', {
	  enumerable: true,
	  get: function get() {
	    return _channel.END;
	  }
	});
	Object.defineProperty(exports, 'eventChannel', {
	  enumerable: true,
	  get: function get() {
	    return _channel.eventChannel;
	  }
	});
	Object.defineProperty(exports, 'channel', {
	  enumerable: true,
	  get: function get() {
	    return _channel.channel;
	  }
	});
	
	var _buffers = __webpack_require__(272);
	
	Object.defineProperty(exports, 'buffers', {
	  enumerable: true,
	  get: function get() {
	    return _buffers.buffers;
	  }
	});
	
	var _sagaHelpers = __webpack_require__(268);
	
	Object.defineProperty(exports, 'takeEvery', {
	  enumerable: true,
	  get: function get() {
	    return _sagaHelpers.takeEvery;
	  }
	});
	Object.defineProperty(exports, 'takeLatest', {
	  enumerable: true,
	  get: function get() {
	    return _sagaHelpers.takeLatest;
	  }
	});
	Object.defineProperty(exports, 'throttle', {
	  enumerable: true,
	  get: function get() {
	    return _sagaHelpers.throttle;
	  }
	});
	
	var _utils = __webpack_require__(264);
	
	Object.defineProperty(exports, 'delay', {
	  enumerable: true,
	  get: function get() {
	    return _utils.delay;
	  }
	});
	Object.defineProperty(exports, 'CANCEL', {
	  enumerable: true,
	  get: function get() {
	    return _utils.CANCEL;
	  }
	});
	
	var _middleware = __webpack_require__(275);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	var _effects = __webpack_require__(276);
	
	var effects = _interopRequireWildcard(_effects);
	
	var _utils2 = __webpack_require__(277);
	
	var utils = _interopRequireWildcard(_utils2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _middleware2.default;
	exports.effects = effects;
	exports.utils = utils;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.runSaga = runSaga;
	
	var _utils = __webpack_require__(264);
	
	var _proc = __webpack_require__(265);
	
	var _proc2 = _interopRequireDefault(_proc);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
	var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';
	
	function runSaga(storeInterface, saga) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var iterator = void 0;
	
	  if (_utils.is.iterator(storeInterface)) {
	    if (process.env.NODE_ENV === 'development') {
	      (0, _utils.log)('warn', 'runSaga(iterator, storeInterface) has been deprecated in favor of ' + RUN_SAGA_SIGNATURE);
	    }
	    iterator = storeInterface;
	    storeInterface = saga;
	  } else {
	    (0, _utils.check)(saga, _utils.is.func, NON_GENERATOR_ERR);
	    iterator = saga.apply(undefined, args);
	    (0, _utils.check)(iterator, _utils.is.iterator, NON_GENERATOR_ERR);
	  }
	
	  var _storeInterface = storeInterface,
	      subscribe = _storeInterface.subscribe,
	      dispatch = _storeInterface.dispatch,
	      getState = _storeInterface.getState,
	      context = _storeInterface.context,
	      sagaMonitor = _storeInterface.sagaMonitor,
	      logger = _storeInterface.logger,
	      onError = _storeInterface.onError;
	
	
	  var effectId = (0, _utils.uid)();
	
	  if (sagaMonitor) {
	    // monitors are expected to have a certain interface, let's fill-in any missing ones
	    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils.noop;
	    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils.noop;
	    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils.noop;
	    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils.noop;
	    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils.noop;
	
	    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
	  }
	
	  var task = (0, _proc2.default)(iterator, subscribe, (0, _utils.wrapSagaDispatch)(dispatch), getState, context, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, saga.name);
	
	  if (sagaMonitor) {
	    sagaMonitor.effectResolved(effectId, task);
	  }
	
	  return task;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.check = check;
	exports.hasOwn = hasOwn;
	exports.remove = remove;
	exports.deferred = deferred;
	exports.arrayOfDeffered = arrayOfDeffered;
	exports.delay = delay;
	exports.createMockTask = createMockTask;
	exports.autoInc = autoInc;
	exports.makeIterator = makeIterator;
	exports.log = log;
	exports.deprecate = deprecate;
	var sym = exports.sym = function sym(id) {
	  return '@@redux-saga/' + id;
	};
	
	var TASK = exports.TASK = sym('TASK');
	var HELPER = exports.HELPER = sym('HELPER');
	var MATCH = exports.MATCH = sym('MATCH');
	var CANCEL = exports.CANCEL = sym('CANCEL_PROMISE');
	var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
	var SELF_CANCELLATION = exports.SELF_CANCELLATION = sym('SELF_CANCELLATION');
	var konst = exports.konst = function konst(v) {
	  return function () {
	    return v;
	  };
	};
	var kTrue = exports.kTrue = konst(true);
	var kFalse = exports.kFalse = konst(false);
	var noop = exports.noop = function noop() {};
	var ident = exports.ident = function ident(v) {
	  return v;
	};
	
	function check(value, predicate, error) {
	  if (!predicate(value)) {
	    log('error', 'uncaught at check', error);
	    throw new Error(error);
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(object, property) {
	  return is.notUndef(object) && hasOwnProperty.call(object, property);
	}
	
	var is = exports.is = {
	  undef: function undef(v) {
	    return v === null || v === undefined;
	  },
	  notUndef: function notUndef(v) {
	    return v !== null && v !== undefined;
	  },
	  func: function func(f) {
	    return typeof f === 'function';
	  },
	  number: function number(n) {
	    return typeof n === 'number';
	  },
	  string: function string(s) {
	    return typeof s === 'string';
	  },
	  array: Array.isArray,
	  object: function object(obj) {
	    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  },
	  promise: function promise(p) {
	    return p && is.func(p.then);
	  },
	  iterator: function iterator(it) {
	    return it && is.func(it.next) && is.func(it.throw);
	  },
	  iterable: function iterable(it) {
	    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
	  },
	  task: function task(t) {
	    return t && t[TASK];
	  },
	  observable: function observable(ob) {
	    return ob && is.func(ob.subscribe);
	  },
	  buffer: function buffer(buf) {
	    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
	  },
	  pattern: function pattern(pat) {
	    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
	  },
	  channel: function channel(ch) {
	    return ch && is.func(ch.take) && is.func(ch.close);
	  },
	  helper: function helper(it) {
	    return it && it[HELPER];
	  },
	  stringableFunc: function stringableFunc(f) {
	    return is.func(f) && hasOwn(f, 'toString');
	  }
	};
	
	var object = exports.object = {
	  assign: function assign(target, source) {
	    for (var i in source) {
	      if (hasOwn(source, i)) {
	        target[i] = source[i];
	      }
	    }
	  }
	};
	
	function remove(array, item) {
	  var index = array.indexOf(item);
	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}
	
	var array = exports.array = {
	  from: function from(obj) {
	    var arr = Array(obj.length);
	    for (var i in obj) {
	      if (hasOwn(obj, i)) {
	        arr[i] = obj[i];
	      }
	    }
	    return arr;
	  }
	};
	
	function deferred() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var def = _extends({}, props);
	  var promise = new Promise(function (resolve, reject) {
	    def.resolve = resolve;
	    def.reject = reject;
	  });
	  def.promise = promise;
	  return def;
	}
	
	function arrayOfDeffered(length) {
	  var arr = [];
	  for (var i = 0; i < length; i++) {
	    arr.push(deferred());
	  }
	  return arr;
	}
	
	function delay(ms) {
	  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	  var timeoutId = void 0;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(function () {
	      return resolve(val);
	    }, ms);
	  });
	
	  promise[CANCEL] = function () {
	    return clearTimeout(timeoutId);
	  };
	
	  return promise;
	}
	
	function createMockTask() {
	  var _ref;
	
	  var running = true;
	  var _result = void 0,
	      _error = void 0;
	
	  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
	    return running;
	  }, _ref.result = function result() {
	    return _result;
	  }, _ref.error = function error() {
	    return _error;
	  }, _ref.setRunning = function setRunning(b) {
	    return running = b;
	  }, _ref.setResult = function setResult(r) {
	    return _result = r;
	  }, _ref.setError = function setError(e) {
	    return _error = e;
	  }, _ref;
	}
	
	function autoInc() {
	  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	  return function () {
	    return ++seed;
	  };
	}
	
	var uid = exports.uid = autoInc();
	
	var kThrow = function kThrow(err) {
	  throw err;
	};
	var kReturn = function kReturn(value) {
	  return { value: value, done: true };
	};
	function makeIterator(next) {
	  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var isHelper = arguments[3];
	
	  var iterator = { name: name, next: next, throw: thro, return: kReturn };
	
	  if (isHelper) {
	    iterator[HELPER] = true;
	  }
	  if (typeof Symbol !== 'undefined') {
	    iterator[Symbol.iterator] = function () {
	      return iterator;
	    };
	  }
	  return iterator;
	}
	
	/**
	  Print error in a useful way whether in a browser environment
	  (with expandable error stack traces), or in a node.js environment
	  (text-only log output)
	 **/
	function log(level, message) {
	  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	  /*eslint-disable no-console*/
	  if (typeof window === 'undefined') {
	    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
	  } else {
	    console[level](message, error);
	  }
	}
	
	function deprecate(fn, deprecationWarning) {
	  return function () {
	    if (process.env.NODE_ENV === 'development') log('warn', deprecationWarning);
	    return fn.apply(undefined, arguments);
	  };
	}
	
	var updateIncentive = exports.updateIncentive = function updateIncentive(deprecated, preferred) {
	  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
	};
	
	var internalErr = exports.internalErr = function internalErr(err) {
	  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
	};
	
	var createSetContextWarning = exports.createSetContextWarning = function createSetContextWarning(ctx, props) {
	  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
	};
	
	var wrapSagaDispatch = exports.wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
	  return function (action) {
	    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
	  };
	};
	
	var cloneableGenerator = exports.cloneableGenerator = function cloneableGenerator(generatorFunc) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var history = [];
	    var gen = generatorFunc.apply(undefined, args);
	    return {
	      next: function next(arg) {
	        history.push(arg);
	        return gen.next(arg);
	      },
	      clone: function clone() {
	        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
	        history.forEach(function (arg) {
	          return clonedGen.next(arg);
	        });
	        return clonedGen;
	      },
	      return: function _return(value) {
	        return gen.return(value);
	      },
	      throw: function _throw(exception) {
	        return gen.throw(exception);
	      }
	    };
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.TASK_CANCEL = exports.CHANNEL_END = exports.NOT_ITERATOR_ERROR = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = proc;
	
	var _utils = __webpack_require__(264);
	
	var _scheduler = __webpack_require__(266);
	
	var _io = __webpack_require__(267);
	
	var _channel = __webpack_require__(271);
	
	var _buffers = __webpack_require__(272);
	
	function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }
	
	var NOT_ITERATOR_ERROR = exports.NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';
	
	var CHANNEL_END = exports.CHANNEL_END = {
	  toString: function toString() {
	    return '@@redux-saga/CHANNEL_END';
	  }
	};
	var TASK_CANCEL = exports.TASK_CANCEL = {
	  toString: function toString() {
	    return '@@redux-saga/TASK_CANCEL';
	  }
	};
	
	var matchers = {
	  wildcard: function wildcard() {
	    return _utils.kTrue;
	  },
	  default: function _default(pattern) {
	    return (typeof pattern === 'undefined' ? 'undefined' : _typeof(pattern)) === 'symbol' ? function (input) {
	      return input.type === pattern;
	    } : function (input) {
	      return input.type === String(pattern);
	    };
	  },
	  array: function array(patterns) {
	    return function (input) {
	      return patterns.some(function (p) {
	        return matcher(p)(input);
	      });
	    };
	  },
	  predicate: function predicate(_predicate) {
	    return function (input) {
	      return _predicate(input);
	    };
	  }
	};
	
	function matcher(pattern) {
	  // prettier-ignore
	  return (pattern === '*' ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.stringableFunc(pattern) ? matchers.default : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
	}
	
	/**
	  Used to track a parent task and its forks
	  In the new fork model, forked tasks are attached by default to their parent
	  We model this using the concept of Parent task && main Task
	  main task is the main flow of the current Generator, the parent tasks is the
	  aggregation of the main tasks + all its forked tasks.
	  Thus the whole model represents an execution tree with multiple branches (vs the
	  linear execution tree in sequential (non parallel) programming)
	
	  A parent tasks has the following semantics
	  - It completes if all its forks either complete or all cancelled
	  - If it's cancelled, all forks are cancelled as well
	  - It aborts if any uncaught error bubbles up from forks
	  - If it completes, the return value is the one returned by the main task
	**/
	function forkQueue(name, mainTask, cb) {
	  var tasks = [],
	      result = void 0,
	      completed = false;
	  addTask(mainTask);
	
	  function abort(err) {
	    cancelAll();
	    cb(err, true);
	  }
	
	  function addTask(task) {
	    tasks.push(task);
	    task.cont = function (res, isErr) {
	      if (completed) {
	        return;
	      }
	
	      (0, _utils.remove)(tasks, task);
	      task.cont = _utils.noop;
	      if (isErr) {
	        abort(res);
	      } else {
	        if (task === mainTask) {
	          result = res;
	        }
	        if (!tasks.length) {
	          completed = true;
	          cb(result);
	        }
	      }
	    };
	    // task.cont.cancel = task.cancel
	  }
	
	  function cancelAll() {
	    if (completed) {
	      return;
	    }
	    completed = true;
	    tasks.forEach(function (t) {
	      t.cont = _utils.noop;
	      t.cancel();
	    });
	    tasks = [];
	  }
	
	  return {
	    addTask: addTask,
	    cancelAll: cancelAll,
	    abort: abort,
	    getTasks: function getTasks() {
	      return tasks;
	    },
	    taskNames: function taskNames() {
	      return tasks.map(function (t) {
	        return t.name;
	      });
	    }
	  };
	}
	
	function createTaskIterator(_ref) {
	  var context = _ref.context,
	      fn = _ref.fn,
	      args = _ref.args;
	
	  if (_utils.is.iterator(fn)) {
	    return fn;
	  }
	
	  // catch synchronous failures; see #152 and #441
	  var result = void 0,
	      error = void 0;
	  try {
	    result = fn.apply(context, args);
	  } catch (err) {
	    error = err;
	  }
	
	  // i.e. a generator function returns an iterator
	  if (_utils.is.iterator(result)) {
	    return result;
	  }
	
	  // do not bubble up synchronous failures for detached forks
	  // instead create a failed task. See #152 and #441
	  return error ? (0, _utils.makeIterator)(function () {
	    throw error;
	  }) : (0, _utils.makeIterator)(function () {
	    var pc = void 0;
	    var eff = { done: false, value: result };
	    var ret = function ret(value) {
	      return { done: true, value: value };
	    };
	    return function (arg) {
	      if (!pc) {
	        pc = true;
	        return eff;
	      } else {
	        return ret(arg);
	      }
	    };
	  }());
	}
	
	var wrapHelper = function wrapHelper(helper) {
	  return { fn: helper };
	};
	
	function proc(iterator) {
	  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	    return _utils.noop;
	  };
	  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.noop;
	  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils.noop;
	  var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	  var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
	  var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'anonymous';
	  var cont = arguments[8];
	
	  (0, _utils.check)(iterator, _utils.is.iterator, NOT_ITERATOR_ERROR);
	
	  var effectsString = '[...effects]';
	  var runParallelEffect = (0, _utils.deprecate)(runAllEffect, (0, _utils.updateIncentive)(effectsString, 'all(' + effectsString + ')'));
	
	  var sagaMonitor = options.sagaMonitor,
	      logger = options.logger,
	      onError = options.onError;
	
	  var log = logger || _utils.log;
	  var stdChannel = (0, _channel.stdChannel)(subscribe);
	  var taskContext = Object.create(parentContext);
	  /**
	    Tracks the current effect cancellation
	    Each time the generator progresses. calling runEffect will set a new value
	    on it. It allows propagating cancellation to child effects
	  **/
	  next.cancel = _utils.noop;
	
	  /**
	    Creates a new task descriptor for this generator, We'll also create a main task
	    to track the main flow (besides other forked tasks)
	  **/
	  var task = newTask(parentEffectId, name, iterator, cont);
	  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
	  var taskQueue = forkQueue(name, mainTask, end);
	
	  /**
	    cancellation of the main task. We'll simply resume the Generator with a Cancel
	  **/
	  function cancelMain() {
	    if (mainTask.isRunning && !mainTask.isCancelled) {
	      mainTask.isCancelled = true;
	      next(TASK_CANCEL);
	    }
	  }
	
	  /**
	    This may be called by a parent generator to trigger/propagate cancellation
	    cancel all pending tasks (including the main task), then end the current task.
	     Cancellation propagates down to the whole execution tree holded by this Parent task
	    It's also propagated to all joiners of this task and their execution tree/joiners
	     Cancellation is noop for terminated/Cancelled tasks tasks
	  **/
	  function cancel() {
	    /**
	      We need to check both Running and Cancelled status
	      Tasks can be Cancelled but still Running
	    **/
	    if (iterator._isRunning && !iterator._isCancelled) {
	      iterator._isCancelled = true;
	      taskQueue.cancelAll();
	      /**
	        Ending with a Never result will propagate the Cancellation to all joiners
	      **/
	      end(TASK_CANCEL);
	    }
	  }
	  /**
	    attaches cancellation logic to this task's continuation
	    this will permit cancellation to propagate down the call chain
	  **/
	  cont && (cont.cancel = cancel);
	
	  // tracks the running status
	  iterator._isRunning = true;
	
	  // kicks up the generator
	  next();
	
	  // then return the task descriptor to the caller
	  return task;
	
	  /**
	    This is the generator driver
	    It's a recursive async/continuation function which calls itself
	    until the generator terminates or throws
	  **/
	  function next(arg, isErr) {
	    // Preventive measure. If we end up here, then there is really something wrong
	    if (!mainTask.isRunning) {
	      throw new Error('Trying to resume an already finished generator');
	    }
	
	    try {
	      var result = void 0;
	      if (isErr) {
	        result = iterator.throw(arg);
	      } else if (arg === TASK_CANCEL) {
	        /**
	          getting TASK_CANCEL automatically cancels the main task
	          We can get this value here
	           - By cancelling the parent task manually
	          - By joining a Cancelled task
	        **/
	        mainTask.isCancelled = true;
	        /**
	          Cancels the current effect; this will propagate the cancellation down to any called tasks
	        **/
	        next.cancel();
	        /**
	          If this Generator has a `return` method then invokes it
	          This will jump to the finally block
	        **/
	        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
	      } else if (arg === CHANNEL_END) {
	        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
	        result = _utils.is.func(iterator.return) ? iterator.return() : { done: true };
	      } else {
	        result = iterator.next(arg);
	      }
	
	      if (!result.done) {
	        runEffect(result.value, parentEffectId, '', next);
	      } else {
	        /**
	          This Generator has ended, terminate the main task and notify the fork queue
	        **/
	        mainTask.isMainRunning = false;
	        mainTask.cont && mainTask.cont(result.value);
	      }
	    } catch (error) {
	      if (mainTask.isCancelled) {
	        log('error', 'uncaught at ' + name, error.message);
	      }
	      mainTask.isMainRunning = false;
	      mainTask.cont(error, true);
	    }
	  }
	
	  function end(result, isErr) {
	    iterator._isRunning = false;
	    stdChannel.close();
	    if (!isErr) {
	      if (process.env.NODE_ENV === 'development' && result === TASK_CANCEL) {
	        log('info', name + ' has been cancelled', '');
	      }
	      iterator._result = result;
	      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
	    } else {
	      if (result instanceof Error) {
	        result.sagaStack = 'at ' + name + ' \n ' + (result.sagaStack || result.stack);
	      }
	      if (!task.cont) {
	        log('error', 'uncaught', result.sagaStack || result.stack);
	        if (result instanceof Error && onError) {
	          onError(result);
	        }
	      }
	      iterator._error = result;
	      iterator._isAborted = true;
	      iterator._deferredEnd && iterator._deferredEnd.reject(result);
	    }
	    task.cont && task.cont(result, isErr);
	    task.joiners.forEach(function (j) {
	      return j.cb(result, isErr);
	    });
	    task.joiners = null;
	  }
	
	  function runEffect(effect, parentEffectId) {
	    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	    var cb = arguments[3];
	
	    var effectId = (0, _utils.uid)();
	    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });
	
	    /**
	      completion callback and cancel callback are mutually exclusive
	      We can't cancel an already completed effect
	      And We can't complete an already cancelled effectId
	    **/
	    var effectSettled = void 0;
	
	    // Completion callback passed to the appropriate effect runner
	    function currCb(res, isErr) {
	      if (effectSettled) {
	        return;
	      }
	
	      effectSettled = true;
	      cb.cancel = _utils.noop; // defensive measure
	      if (sagaMonitor) {
	        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
	      }
	      cb(res, isErr);
	    }
	    // tracks down the current cancel
	    currCb.cancel = _utils.noop;
	
	    // setup cancellation logic on the parent cb
	    cb.cancel = function () {
	      // prevents cancelling an already completed effect
	      if (effectSettled) {
	        return;
	      }
	
	      effectSettled = true;
	      /**
	        propagates cancel downward
	        catch uncaught cancellations errors; since we can no longer call the completion
	        callback, log errors raised during cancellations into the console
	      **/
	      try {
	        currCb.cancel();
	      } catch (err) {
	        log('error', 'uncaught at ' + name, err.message);
	      }
	      currCb.cancel = _utils.noop; // defensive measure
	
	      sagaMonitor && sagaMonitor.effectCancelled(effectId);
	    };
	
	    /**
	      each effect runner must attach its own logic of cancellation to the provided callback
	      it allows this generator to propagate cancellation downward.
	       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
	      And the setup must occur before calling the callback
	       This is a sort of inversion of control: called async functions are responsible
	      for completing the flow by calling the provided continuation; while caller functions
	      are responsible for aborting the current flow by calling the attached cancel function
	       Library users can attach their own cancellation logic to promises by defining a
	      promise[CANCEL] method in their returned promises
	      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
	    **/
	    var data = void 0;
	    // prettier-ignore
	    return (
	      // Non declarative effect
	      _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb)
	
	      // declarative effects
	      : _utils.is.array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : (data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : (data = _io.asEffect.all(effect)) ? runAllEffect(data, effectId, currCb) : (data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : (data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : (data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : (data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : (data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : (data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : (data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = _io.asEffect.getContext(effect)) ? runGetContextEffect(data, currCb) : (data = _io.asEffect.setContext(effect)) ? runSetContextEffect(data, currCb) : /* anything else returned as is */currCb(effect)
	    );
	  }
	
	  function resolvePromise(promise, cb) {
	    var cancelPromise = promise[_utils.CANCEL];
	    if (_utils.is.func(cancelPromise)) {
	      cb.cancel = cancelPromise;
	    } else if (_utils.is.func(promise.abort)) {
	      cb.cancel = function () {
	        return promise.abort();
	      };
	      // TODO: add support for the fetch API, whenever they get around to
	      // adding cancel support
	    }
	    promise.then(cb, function (error) {
	      return cb(error, true);
	    });
	  }
	
	  function resolveIterator(iterator, effectId, name, cb) {
	    proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
	  }
	
	  function runTakeEffect(_ref2, cb) {
	    var channel = _ref2.channel,
	        pattern = _ref2.pattern,
	        maybe = _ref2.maybe;
	
	    channel = channel || stdChannel;
	    var takeCb = function takeCb(inp) {
	      return inp instanceof Error ? cb(inp, true) : (0, _channel.isEnd)(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
	    };
	    try {
	      channel.take(takeCb, matcher(pattern));
	    } catch (err) {
	      return cb(err, true);
	    }
	    cb.cancel = takeCb.cancel;
	  }
	
	  function runPutEffect(_ref3, cb) {
	    var channel = _ref3.channel,
	        action = _ref3.action,
	        resolve = _ref3.resolve;
	
	    /**
	      Schedule the put in case another saga is holding a lock.
	      The put will be executed atomically. ie nested puts will execute after
	      this put has terminated.
	    **/
	    (0, _scheduler.asap)(function () {
	      var result = void 0;
	      try {
	        result = (channel ? channel.put : dispatch)(action);
	      } catch (error) {
	        // If we have a channel or `put.resolve` was used then bubble up the error.
	        if (channel || resolve) return cb(error, true);
	        log('error', 'uncaught at ' + name, error.stack || error.message || error);
	      }
	
	      if (resolve && _utils.is.promise(result)) {
	        resolvePromise(result, cb);
	      } else {
	        return cb(result);
	      }
	    });
	    // Put effects are non cancellables
	  }
	
	  function runCallEffect(_ref4, effectId, cb) {
	    var context = _ref4.context,
	        fn = _ref4.fn,
	        args = _ref4.args;
	
	    var result = void 0;
	    // catch synchronous failures; see #152
	    try {
	      result = fn.apply(context, args);
	    } catch (error) {
	      return cb(error, true);
	    }
	    return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
	  }
	
	  function runCPSEffect(_ref5, cb) {
	    var context = _ref5.context,
	        fn = _ref5.fn,
	        args = _ref5.args;
	
	    // CPS (ie node style functions) can define their own cancellation logic
	    // by setting cancel field on the cb
	
	    // catch synchronous failures; see #152
	    try {
	      var cpsCb = function cpsCb(err, res) {
	        return _utils.is.undef(err) ? cb(res) : cb(err, true);
	      };
	      fn.apply(context, args.concat(cpsCb));
	      if (cpsCb.cancel) {
	        cb.cancel = function () {
	          return cpsCb.cancel();
	        };
	      }
	    } catch (error) {
	      return cb(error, true);
	    }
	  }
	
	  function runForkEffect(_ref6, effectId, cb) {
	    var context = _ref6.context,
	        fn = _ref6.fn,
	        args = _ref6.args,
	        detached = _ref6.detached;
	
	    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });
	
	    try {
	      (0, _scheduler.suspend)();
	      var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : _utils.noop);
	
	      if (detached) {
	        cb(_task);
	      } else {
	        if (taskIterator._isRunning) {
	          taskQueue.addTask(_task);
	          cb(_task);
	        } else if (taskIterator._error) {
	          taskQueue.abort(taskIterator._error);
	        } else {
	          cb(_task);
	        }
	      }
	    } finally {
	      (0, _scheduler.flush)();
	    }
	    // Fork effects are non cancellables
	  }
	
	  function runJoinEffect(t, cb) {
	    if (t.isRunning()) {
	      var joiner = { task: task, cb: cb };
	      cb.cancel = function () {
	        return (0, _utils.remove)(t.joiners, joiner);
	      };
	      t.joiners.push(joiner);
	    } else {
	      t.isAborted() ? cb(t.error(), true) : cb(t.result());
	    }
	  }
	
	  function runCancelEffect(taskToCancel, cb) {
	    if (taskToCancel === _utils.SELF_CANCELLATION) {
	      taskToCancel = task;
	    }
	    if (taskToCancel.isRunning()) {
	      taskToCancel.cancel();
	    }
	    cb();
	    // cancel effects are non cancellables
	  }
	
	  function runAllEffect(effects, effectId, cb) {
	    var keys = Object.keys(effects);
	
	    if (!keys.length) {
	      return cb(_utils.is.array(effects) ? [] : {});
	    }
	
	    var completedCount = 0;
	    var completed = void 0;
	    var results = {};
	    var childCbs = {};
	
	    function checkEffectEnd() {
	      if (completedCount === keys.length) {
	        completed = true;
	        cb(_utils.is.array(effects) ? _utils.array.from(_extends({}, results, { length: keys.length })) : results);
	      }
	    }
	
	    keys.forEach(function (key) {
	      var chCbAtKey = function chCbAtKey(res, isErr) {
	        if (completed) {
	          return;
	        }
	        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
	          cb.cancel();
	          cb(res, isErr);
	        } else {
	          results[key] = res;
	          completedCount++;
	          checkEffectEnd();
	        }
	      };
	      chCbAtKey.cancel = _utils.noop;
	      childCbs[key] = chCbAtKey;
	    });
	
	    cb.cancel = function () {
	      if (!completed) {
	        completed = true;
	        keys.forEach(function (key) {
	          return childCbs[key].cancel();
	        });
	      }
	    };
	
	    keys.forEach(function (key) {
	      return runEffect(effects[key], effectId, key, childCbs[key]);
	    });
	  }
	
	  function runRaceEffect(effects, effectId, cb) {
	    var completed = void 0;
	    var keys = Object.keys(effects);
	    var childCbs = {};
	
	    keys.forEach(function (key) {
	      var chCbAtKey = function chCbAtKey(res, isErr) {
	        if (completed) {
	          return;
	        }
	
	        if (isErr) {
	          // Race Auto cancellation
	          cb.cancel();
	          cb(res, true);
	        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
	          var _cb;
	
	          cb.cancel();
	          completed = true;
	          cb((_cb = {}, _cb[key] = res, _cb));
	        }
	      };
	      chCbAtKey.cancel = _utils.noop;
	      childCbs[key] = chCbAtKey;
	    });
	
	    cb.cancel = function () {
	      // prevents unnecessary cancellation
	      if (!completed) {
	        completed = true;
	        keys.forEach(function (key) {
	          return childCbs[key].cancel();
	        });
	      }
	    };
	    keys.forEach(function (key) {
	      if (completed) {
	        return;
	      }
	      runEffect(effects[key], effectId, key, childCbs[key]);
	    });
	  }
	
	  function runSelectEffect(_ref7, cb) {
	    var selector = _ref7.selector,
	        args = _ref7.args;
	
	    try {
	      var state = selector.apply(undefined, [getState()].concat(args));
	      cb(state);
	    } catch (error) {
	      cb(error, true);
	    }
	  }
	
	  function runChannelEffect(_ref8, cb) {
	    var pattern = _ref8.pattern,
	        buffer = _ref8.buffer;
	
	    var match = matcher(pattern);
	    match.pattern = pattern;
	    cb((0, _channel.eventChannel)(subscribe, buffer || _buffers.buffers.fixed(), match));
	  }
	
	  function runCancelledEffect(data, cb) {
	    cb(!!mainTask.isCancelled);
	  }
	
	  function runFlushEffect(channel, cb) {
	    channel.flush(cb);
	  }
	
	  function runGetContextEffect(prop, cb) {
	    cb(taskContext[prop]);
	  }
	
	  function runSetContextEffect(props, cb) {
	    _utils.object.assign(taskContext, props);
	    cb();
	  }
	
	  function newTask(id, name, iterator, cont) {
	    var _done, _ref9, _mutatorMap;
	
	    iterator._deferredEnd = null;
	    return _ref9 = {}, _ref9[_utils.TASK] = true, _ref9.id = id, _ref9.name = name, _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
	      if (iterator._deferredEnd) {
	        return iterator._deferredEnd.promise;
	      } else {
	        var def = (0, _utils.deferred)();
	        iterator._deferredEnd = def;
	        if (!iterator._isRunning) {
	          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
	        }
	        return def.promise;
	      }
	    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
	      return iterator._isRunning;
	    }, _ref9.isCancelled = function isCancelled() {
	      return iterator._isCancelled;
	    }, _ref9.isAborted = function isAborted() {
	      return iterator._isAborted;
	    }, _ref9.result = function result() {
	      return iterator._result;
	    }, _ref9.error = function error() {
	      return iterator._error;
	    }, _ref9.setContext = function setContext(props) {
	      (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)('task', props));
	      _utils.object.assign(taskContext, props);
	    }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 266 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.asap = asap;
	exports.suspend = suspend;
	exports.flush = flush;
	var queue = [];
	/**
	  Variable to hold a counting semaphore
	  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
	    already suspended)
	  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
	    triggers flushing the queued tasks.
	**/
	var semaphore = 0;
	
	/**
	  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
	  and flushed after this task has finished (assuming the scheduler endup in a released
	  state).
	**/
	function exec(task) {
	  try {
	    suspend();
	    task();
	  } finally {
	    release();
	  }
	}
	
	/**
	  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
	**/
	function asap(task) {
	  queue.push(task);
	
	  if (!semaphore) {
	    suspend();
	    flush();
	  }
	}
	
	/**
	  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
	  scheduler is released.
	**/
	function suspend() {
	  semaphore++;
	}
	
	/**
	  Puts the scheduler in a `released` state.
	**/
	function release() {
	  semaphore--;
	}
	
	/**
	  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
	**/
	function flush() {
	  release();
	
	  var task = void 0;
	  while (!semaphore && (task = queue.shift()) !== undefined) {
	    exec(task);
	  }
	}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.asEffect = exports.takem = undefined;
	exports.take = take;
	exports.put = put;
	exports.all = all;
	exports.race = race;
	exports.call = call;
	exports.apply = apply;
	exports.cps = cps;
	exports.fork = fork;
	exports.spawn = spawn;
	exports.join = join;
	exports.cancel = cancel;
	exports.select = select;
	exports.actionChannel = actionChannel;
	exports.cancelled = cancelled;
	exports.flush = flush;
	exports.getContext = getContext;
	exports.setContext = setContext;
	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;
	
	var _utils = __webpack_require__(264);
	
	var _sagaHelpers = __webpack_require__(268);
	
	var IO = (0, _utils.sym)('IO');
	var TAKE = 'TAKE';
	var PUT = 'PUT';
	var ALL = 'ALL';
	var RACE = 'RACE';
	var CALL = 'CALL';
	var CPS = 'CPS';
	var FORK = 'FORK';
	var JOIN = 'JOIN';
	var CANCEL = 'CANCEL';
	var SELECT = 'SELECT';
	var ACTION_CHANNEL = 'ACTION_CHANNEL';
	var CANCELLED = 'CANCELLED';
	var FLUSH = 'FLUSH';
	var GET_CONTEXT = 'GET_CONTEXT';
	var SET_CONTEXT = 'SET_CONTEXT';
	
	var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';
	
	var effect = function effect(type, payload) {
	  var _ref;
	
	  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
	};
	
	function take() {
	  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
	
	  if (arguments.length) {
	    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
	  }
	  if (_utils.is.pattern(patternOrChannel)) {
	    return effect(TAKE, { pattern: patternOrChannel });
	  }
	  if (_utils.is.channel(patternOrChannel)) {
	    return effect(TAKE, { channel: patternOrChannel });
	  }
	  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
	}
	
	take.maybe = function () {
	  var eff = take.apply(undefined, arguments);
	  eff[TAKE].maybe = true;
	  return eff;
	};
	
	var takem = /*#__PURE__*/exports.takem = (0, _utils.deprecate)(take.maybe, /*#__PURE__*/(0, _utils.updateIncentive)('takem', 'take.maybe'));
	
	function put(channel, action) {
	  if (arguments.length > 1) {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
	    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
	    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
	  } else {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
	    action = channel;
	    channel = null;
	  }
	  return effect(PUT, { channel: channel, action: action });
	}
	
	put.resolve = function () {
	  var eff = put.apply(undefined, arguments);
	  eff[PUT].resolve = true;
	  return eff;
	};
	
	put.sync = (0, _utils.deprecate)(put.resolve, (0, _utils.updateIncentive)('put.sync', 'put.resolve'));
	
	function all(effects) {
	  return effect(ALL, effects);
	}
	
	function race(effects) {
	  return effect(RACE, effects);
	}
	
	function getFnCallDesc(meth, fn, args) {
	  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');
	
	  var context = null;
	  if (_utils.is.array(fn)) {
	    var _fn = fn;
	    context = _fn[0];
	    fn = _fn[1];
	  } else if (fn.fn) {
	    var _fn2 = fn;
	    context = _fn2.context;
	    fn = _fn2.fn;
	  }
	  if (context && _utils.is.string(fn) && _utils.is.func(context[fn])) {
	    fn = context[fn];
	  }
	  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');
	
	  return { context: context, fn: fn, args: args };
	}
	
	function call(fn) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return effect(CALL, getFnCallDesc('call', fn, args));
	}
	
	function apply(context, fn) {
	  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
	}
	
	function cps(fn) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }
	
	  return effect(CPS, getFnCallDesc('cps', fn, args));
	}
	
	function fork(fn) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }
	
	  return effect(FORK, getFnCallDesc('fork', fn, args));
	}
	
	function spawn(fn) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	
	  var eff = fork.apply(undefined, [fn].concat(args));
	  eff[FORK].detached = true;
	  return eff;
	}
	
	function join() {
	  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	    tasks[_key5] = arguments[_key5];
	  }
	
	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return join(t);
	    }));
	  }
	  var task = tasks[0];
	  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
	  (0, _utils.check)(task, _utils.is.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  return effect(JOIN, task);
	}
	
	function cancel() {
	  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tasks[_key6] = arguments[_key6];
	  }
	
	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return cancel(t);
	    }));
	  }
	  var task = tasks[0];
	  if (tasks.length === 1) {
	    (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
	    (0, _utils.check)(task, _utils.is.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  }
	  return effect(CANCEL, task || _utils.SELF_CANCELLATION);
	}
	
	function select(selector) {
	  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	    args[_key7 - 1] = arguments[_key7];
	  }
	
	  if (arguments.length === 0) {
	    selector = _utils.ident;
	  } else {
	    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
	    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
	  }
	  return effect(SELECT, { selector: selector, args: args });
	}
	
	/**
	  channel(pattern, [buffer])    => creates an event channel for store actions
	**/
	function actionChannel(pattern, buffer) {
	  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
	  if (arguments.length > 1) {
	    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
	    (0, _utils.check)(buffer, _utils.is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
	  }
	  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
	}
	
	function cancelled() {
	  return effect(CANCELLED, {});
	}
	
	function flush(channel) {
	  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
	  return effect(FLUSH, channel);
	}
	
	function getContext(prop) {
	  (0, _utils.check)(prop, _utils.is.string, 'getContext(prop): argument ' + prop + ' is not a string');
	  return effect(GET_CONTEXT, prop);
	}
	
	function setContext(props) {
	  (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)(null, props));
	  return effect(SET_CONTEXT, props);
	}
	
	function takeEvery(patternOrChannel, worker) {
	  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
	    args[_key8 - 2] = arguments[_key8];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
	}
	
	function takeLatest(patternOrChannel, worker) {
	  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
	    args[_key9 - 2] = arguments[_key9];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
	}
	
	function throttle(ms, pattern, worker) {
	  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
	    args[_key10 - 3] = arguments[_key10];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
	}
	
	var createAsEffectType = function createAsEffectType(type) {
	  return function (effect) {
	    return effect && effect[IO] && effect[type];
	  };
	};
	
	var asEffect = exports.asEffect = {
	  take: createAsEffectType(TAKE),
	  put: createAsEffectType(PUT),
	  all: createAsEffectType(ALL),
	  race: createAsEffectType(RACE),
	  call: createAsEffectType(CALL),
	  cps: createAsEffectType(CPS),
	  fork: createAsEffectType(FORK),
	  join: createAsEffectType(JOIN),
	  cancel: createAsEffectType(CANCEL),
	  select: createAsEffectType(SELECT),
	  actionChannel: createAsEffectType(ACTION_CHANNEL),
	  cancelled: createAsEffectType(CANCELLED),
	  flush: createAsEffectType(FLUSH),
	  getContext: createAsEffectType(GET_CONTEXT),
	  setContext: createAsEffectType(SET_CONTEXT)
	};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.throttleHelper = exports.takeLatestHelper = exports.takeEveryHelper = exports.throttle = exports.takeLatest = exports.takeEvery = undefined;
	
	var _takeEvery = __webpack_require__(269);
	
	var _takeEvery2 = _interopRequireDefault(_takeEvery);
	
	var _takeLatest = __webpack_require__(273);
	
	var _takeLatest2 = _interopRequireDefault(_takeLatest);
	
	var _throttle = __webpack_require__(274);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	var _utils = __webpack_require__(264);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deprecationWarning = function deprecationWarning(helperName) {
	  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
	};
	
	var takeEvery = /*#__PURE__*/(0, _utils.deprecate)(_takeEvery2.default, /*#__PURE__*/deprecationWarning('takeEvery'));
	var takeLatest = /*#__PURE__*/(0, _utils.deprecate)(_takeLatest2.default, /*#__PURE__*/deprecationWarning('takeLatest'));
	var throttle = /*#__PURE__*/(0, _utils.deprecate)(_throttle2.default, /*#__PURE__*/deprecationWarning('throttle'));
	
	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;
	exports.takeEveryHelper = _takeEvery2.default;
	exports.takeLatestHelper = _takeLatest2.default;
	exports.throttleHelper = _throttle2.default;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = takeEvery;
	
	var _fsmIterator = __webpack_require__(270);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(267);
	
	var _channel = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function takeEvery(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	
	  var action = void 0,
	      setAction = function setAction(ac) {
	    return action = ac;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : ['q1', yFork(action)];
	    }
	  }, 'q1', 'takeEvery(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
	}

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.qEnd = undefined;
	exports.safeName = safeName;
	exports.default = fsmIterator;
	
	var _utils = __webpack_require__(264);
	
	var done = { done: true, value: undefined };
	var qEnd = exports.qEnd = {};
	
	function safeName(patternOrChannel) {
	  if (_utils.is.channel(patternOrChannel)) {
	    return 'channel';
	  } else if (Array.isArray(patternOrChannel)) {
	    return String(patternOrChannel.map(function (entry) {
	      return String(entry);
	    }));
	  } else {
	    return String(patternOrChannel);
	  }
	}
	
	function fsmIterator(fsm, q0) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';
	
	  var updateState = void 0,
	      qNext = q0;
	
	  function next(arg, error) {
	    if (qNext === qEnd) {
	      return done;
	    }
	
	    if (error) {
	      qNext = qEnd;
	      throw error;
	    } else {
	      updateState && updateState(arg);
	
	      var _fsm$qNext = fsm[qNext](),
	          q = _fsm$qNext[0],
	          output = _fsm$qNext[1],
	          _updateState = _fsm$qNext[2];
	
	      qNext = q;
	      updateState = _updateState;
	      return qNext === qEnd ? done : output;
	    }
	  }
	
	  return (0, _utils.makeIterator)(next, function (error) {
	    return next(null, error);
	  }, name, true);
	}

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.emitter = emitter;
	exports.channel = channel;
	exports.eventChannel = eventChannel;
	exports.stdChannel = stdChannel;
	
	var _utils = __webpack_require__(264);
	
	var _buffers = __webpack_require__(272);
	
	var _scheduler = __webpack_require__(266);
	
	var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
	var END = exports.END = { type: CHANNEL_END_TYPE };
	var isEnd = exports.isEnd = function isEnd(a) {
	  return a && a.type === CHANNEL_END_TYPE;
	};
	
	function emitter() {
	  var subscribers = [];
	
	  function subscribe(sub) {
	    subscribers.push(sub);
	    return function () {
	      return (0, _utils.remove)(subscribers, sub);
	    };
	  }
	
	  function emit(item) {
	    var arr = subscribers.slice();
	    for (var i = 0, len = arr.length; i < len; i++) {
	      arr[i](item);
	    }
	  }
	
	  return {
	    subscribe: subscribe,
	    emit: emit
	  };
	}
	
	var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
	var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';
	
	if (process.env.NODE_ENV !== 'production') {
	  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
	}
	
	function channel() {
	  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();
	
	  var closed = false;
	  var takers = [];
	
	  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);
	
	  function checkForbiddenStates() {
	    if (closed && takers.length) {
	      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
	    }
	    if (takers.length && !buffer.isEmpty()) {
	      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
	    }
	  }
	
	  function put(input) {
	    checkForbiddenStates();
	    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
	    if (closed) {
	      return;
	    }
	    if (!takers.length) {
	      return buffer.put(input);
	    }
	    for (var i = 0; i < takers.length; i++) {
	      var cb = takers[i];
	      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
	        takers.splice(i, 1);
	        return cb(input);
	      }
	    }
	  }
	
	  function take(cb) {
	    checkForbiddenStates();
	    (0, _utils.check)(cb, _utils.is.func, "channel.take's callback must be a function");
	
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	    } else if (!buffer.isEmpty()) {
	      cb(buffer.take());
	    } else {
	      takers.push(cb);
	      cb.cancel = function () {
	        return (0, _utils.remove)(takers, cb);
	      };
	    }
	  }
	
	  function flush(cb) {
	    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
	    (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	      return;
	    }
	    cb(buffer.flush());
	  }
	
	  function close() {
	    checkForbiddenStates();
	    if (!closed) {
	      closed = true;
	      if (takers.length) {
	        var arr = takers;
	        takers = [];
	        for (var i = 0, len = arr.length; i < len; i++) {
	          arr[i](END);
	        }
	      }
	    }
	  }
	
	  return {
	    take: take,
	    put: put,
	    flush: flush,
	    close: close,
	    get __takers__() {
	      return takers;
	    },
	    get __closed__() {
	      return closed;
	    }
	  };
	}
	
	function eventChannel(subscribe) {
	  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
	  var matcher = arguments[2];
	
	  /**
	    should be if(typeof matcher !== undefined) instead?
	    see PR #273 for a background discussion
	  **/
	  if (arguments.length > 2) {
	    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
	  }
	
	  var chan = channel(buffer);
	  var close = function close() {
	    if (!chan.__closed__) {
	      if (unsubscribe) {
	        unsubscribe();
	      }
	      chan.close();
	    }
	  };
	  var unsubscribe = subscribe(function (input) {
	    if (isEnd(input)) {
	      close();
	      return;
	    }
	    if (matcher && !matcher(input)) {
	      return;
	    }
	    chan.put(input);
	  });
	  if (chan.__closed__) {
	    unsubscribe();
	  }
	
	  if (!_utils.is.func(unsubscribe)) {
	    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
	  }
	
	  return {
	    take: chan.take,
	    flush: chan.flush,
	    close: close
	  };
	}
	
	function stdChannel(subscribe) {
	  var chan = eventChannel(function (cb) {
	    return subscribe(function (input) {
	      if (input[_utils.SAGA_ACTION]) {
	        cb(input);
	        return;
	      }
	      (0, _scheduler.asap)(function () {
	        return cb(input);
	      });
	    });
	  });
	
	  return _extends({}, chan, {
	    take: function take(cb, matcher) {
	      if (arguments.length > 1) {
	        (0, _utils.check)(matcher, _utils.is.func, "channel.take's matcher argument must be a function");
	        cb[_utils.MATCH] = matcher;
	      }
	      chan.take(cb);
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.buffers = exports.BUFFER_OVERFLOW = undefined;
	
	var _utils = __webpack_require__(264);
	
	var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = "Channel's Buffer overflow!";
	
	var ON_OVERFLOW_THROW = 1;
	var ON_OVERFLOW_DROP = 2;
	var ON_OVERFLOW_SLIDE = 3;
	var ON_OVERFLOW_EXPAND = 4;
	
	var zeroBuffer = { isEmpty: _utils.kTrue, put: _utils.noop, take: _utils.noop };
	
	function ringBuffer() {
	  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var overflowAction = arguments[1];
	
	  var arr = new Array(limit);
	  var length = 0;
	  var pushIndex = 0;
	  var popIndex = 0;
	
	  var push = function push(it) {
	    arr[pushIndex] = it;
	    pushIndex = (pushIndex + 1) % limit;
	    length++;
	  };
	
	  var take = function take() {
	    if (length != 0) {
	      var it = arr[popIndex];
	      arr[popIndex] = null;
	      length--;
	      popIndex = (popIndex + 1) % limit;
	      return it;
	    }
	  };
	
	  var flush = function flush() {
	    var items = [];
	    while (length) {
	      items.push(take());
	    }
	    return items;
	  };
	
	  return {
	    isEmpty: function isEmpty() {
	      return length == 0;
	    },
	    put: function put(it) {
	      if (length < limit) {
	        push(it);
	      } else {
	        var doubledLimit = void 0;
	        switch (overflowAction) {
	          case ON_OVERFLOW_THROW:
	            throw new Error(BUFFER_OVERFLOW);
	          case ON_OVERFLOW_SLIDE:
	            arr[pushIndex] = it;
	            pushIndex = (pushIndex + 1) % limit;
	            popIndex = pushIndex;
	            break;
	          case ON_OVERFLOW_EXPAND:
	            doubledLimit = 2 * limit;
	
	            arr = flush();
	
	            length = arr.length;
	            pushIndex = arr.length;
	            popIndex = 0;
	
	            arr.length = doubledLimit;
	            limit = doubledLimit;
	
	            push(it);
	            break;
	          default:
	          // DROP
	        }
	      }
	    },
	    take: take,
	    flush: flush
	  };
	}
	
	var buffers = exports.buffers = {
	  none: function none() {
	    return zeroBuffer;
	  },
	  fixed: function fixed(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_THROW);
	  },
	  dropping: function dropping(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_DROP);
	  },
	  sliding: function sliding(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
	  },
	  expanding: function expanding(initialSize) {
	    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
	  }
	};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = takeLatest;
	
	var _fsmIterator = __webpack_require__(270);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(267);
	
	var _channel = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function takeLatest(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yCancel = function yCancel(task) {
	    return { done: false, value: (0, _io.cancel)(task) };
	  };
	
	  var task = void 0,
	      action = void 0;
	  var setTask = function setTask(t) {
	    return task = t;
	  };
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
	    },
	    q3: function q3() {
	      return ['q1', yFork(action), setTask];
	    }
	  }, 'q1', 'takeLatest(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
	}

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = throttle;
	
	var _fsmIterator = __webpack_require__(270);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(267);
	
	var _channel = __webpack_require__(271);
	
	var _buffers = __webpack_require__(272);
	
	var _utils = __webpack_require__(264);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function throttle(delayLength, pattern, worker) {
	  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    args[_key - 3] = arguments[_key];
	  }
	
	  var action = void 0,
	      channel = void 0;
	
	  var yActionChannel = { done: false, value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1)) };
	  var yTake = function yTake() {
	    return { done: false, value: (0, _io.take)(channel) };
	  };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yDelay = { done: false, value: (0, _io.call)(_utils.delay, delayLength) };
	
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	  var setChannel = function setChannel(ch) {
	    return channel = ch;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yActionChannel, setChannel];
	    },
	    q2: function q2() {
	      return ['q3', yTake(), setAction];
	    },
	    q3: function q3() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : ['q4', yFork(action)];
	    },
	    q4: function q4() {
	      return ['q2', yDelay];
	    }
	  }, 'q1', 'throttle(' + (0, _fsmIterator.safeName)(pattern) + ', ' + worker.name + ')');
	}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.default = sagaMiddlewareFactory;
	
	var _utils = __webpack_require__(264);
	
	var _channel = __webpack_require__(271);
	
	var _runSaga = __webpack_require__(263);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function sagaMiddlewareFactory() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _ref$context = _ref.context,
	      context = _ref$context === undefined ? {} : _ref$context,
	      options = _objectWithoutProperties(_ref, ['context']);
	
	  var sagaMonitor = options.sagaMonitor,
	      logger = options.logger,
	      onError = options.onError;
	
	
	  if (_utils.is.func(options)) {
	    if (process.env.NODE_ENV === 'production') {
	      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
	    } else {
	      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
	    }
	  }
	
	  if (logger && !_utils.is.func(logger)) {
	    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
	  }
	
	  if (process.env.NODE_ENV === 'development' && options.onerror) {
	    throw new Error('`options.onerror` was removed. Use `options.onError` instead.');
	  }
	
	  if (onError && !_utils.is.func(onError)) {
	    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
	  }
	
	  if (options.emitter && !_utils.is.func(options.emitter)) {
	    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
	  }
	
	  function sagaMiddleware(_ref2) {
	    var getState = _ref2.getState,
	        dispatch = _ref2.dispatch;
	
	    var sagaEmitter = (0, _channel.emitter)();
	    sagaEmitter.emit = (options.emitter || _utils.ident)(sagaEmitter.emit);
	
	    sagaMiddleware.run = _runSaga.runSaga.bind(null, {
	      context: context,
	      subscribe: sagaEmitter.subscribe,
	      dispatch: dispatch,
	      getState: getState,
	      sagaMonitor: sagaMonitor,
	      logger: logger,
	      onError: onError
	    });
	
	    return function (next) {
	      return function (action) {
	        if (sagaMonitor && sagaMonitor.actionDispatched) {
	          sagaMonitor.actionDispatched(action);
	        }
	        var result = next(action); // hit reducers
	        sagaEmitter.emit(action);
	        return result;
	      };
	    };
	  }
	
	  sagaMiddleware.run = function () {
	    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
	  };
	
	  sagaMiddleware.setContext = function (props) {
	    (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)('sagaMiddleware', props));
	    _utils.object.assign(context, props);
	  };
	
	  return sagaMiddleware;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _io = __webpack_require__(267);
	
	Object.defineProperty(exports, 'take', {
	  enumerable: true,
	  get: function get() {
	    return _io.take;
	  }
	});
	Object.defineProperty(exports, 'takem', {
	  enumerable: true,
	  get: function get() {
	    return _io.takem;
	  }
	});
	Object.defineProperty(exports, 'put', {
	  enumerable: true,
	  get: function get() {
	    return _io.put;
	  }
	});
	Object.defineProperty(exports, 'all', {
	  enumerable: true,
	  get: function get() {
	    return _io.all;
	  }
	});
	Object.defineProperty(exports, 'race', {
	  enumerable: true,
	  get: function get() {
	    return _io.race;
	  }
	});
	Object.defineProperty(exports, 'call', {
	  enumerable: true,
	  get: function get() {
	    return _io.call;
	  }
	});
	Object.defineProperty(exports, 'apply', {
	  enumerable: true,
	  get: function get() {
	    return _io.apply;
	  }
	});
	Object.defineProperty(exports, 'cps', {
	  enumerable: true,
	  get: function get() {
	    return _io.cps;
	  }
	});
	Object.defineProperty(exports, 'fork', {
	  enumerable: true,
	  get: function get() {
	    return _io.fork;
	  }
	});
	Object.defineProperty(exports, 'spawn', {
	  enumerable: true,
	  get: function get() {
	    return _io.spawn;
	  }
	});
	Object.defineProperty(exports, 'join', {
	  enumerable: true,
	  get: function get() {
	    return _io.join;
	  }
	});
	Object.defineProperty(exports, 'cancel', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancel;
	  }
	});
	Object.defineProperty(exports, 'select', {
	  enumerable: true,
	  get: function get() {
	    return _io.select;
	  }
	});
	Object.defineProperty(exports, 'actionChannel', {
	  enumerable: true,
	  get: function get() {
	    return _io.actionChannel;
	  }
	});
	Object.defineProperty(exports, 'cancelled', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancelled;
	  }
	});
	Object.defineProperty(exports, 'flush', {
	  enumerable: true,
	  get: function get() {
	    return _io.flush;
	  }
	});
	Object.defineProperty(exports, 'getContext', {
	  enumerable: true,
	  get: function get() {
	    return _io.getContext;
	  }
	});
	Object.defineProperty(exports, 'setContext', {
	  enumerable: true,
	  get: function get() {
	    return _io.setContext;
	  }
	});
	Object.defineProperty(exports, 'takeEvery', {
	  enumerable: true,
	  get: function get() {
	    return _io.takeEvery;
	  }
	});
	Object.defineProperty(exports, 'takeLatest', {
	  enumerable: true,
	  get: function get() {
	    return _io.takeLatest;
	  }
	});
	Object.defineProperty(exports, 'throttle', {
	  enumerable: true,
	  get: function get() {
	    return _io.throttle;
	  }
	});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(264);
	
	Object.defineProperty(exports, 'TASK', {
	  enumerable: true,
	  get: function get() {
	    return _utils.TASK;
	  }
	});
	Object.defineProperty(exports, 'SAGA_ACTION', {
	  enumerable: true,
	  get: function get() {
	    return _utils.SAGA_ACTION;
	  }
	});
	Object.defineProperty(exports, 'noop', {
	  enumerable: true,
	  get: function get() {
	    return _utils.noop;
	  }
	});
	Object.defineProperty(exports, 'is', {
	  enumerable: true,
	  get: function get() {
	    return _utils.is;
	  }
	});
	Object.defineProperty(exports, 'deferred', {
	  enumerable: true,
	  get: function get() {
	    return _utils.deferred;
	  }
	});
	Object.defineProperty(exports, 'arrayOfDeffered', {
	  enumerable: true,
	  get: function get() {
	    return _utils.arrayOfDeffered;
	  }
	});
	Object.defineProperty(exports, 'createMockTask', {
	  enumerable: true,
	  get: function get() {
	    return _utils.createMockTask;
	  }
	});
	Object.defineProperty(exports, 'cloneableGenerator', {
	  enumerable: true,
	  get: function get() {
	    return _utils.cloneableGenerator;
	  }
	});
	
	var _io = __webpack_require__(267);
	
	Object.defineProperty(exports, 'asEffect', {
	  enumerable: true,
	  get: function get() {
	    return _io.asEffect;
	  }
	});
	
	var _proc = __webpack_require__(265);
	
	Object.defineProperty(exports, 'CHANNEL_END', {
	  enumerable: true,
	  get: function get() {
	    return _proc.CHANNEL_END;
	  }
	});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CANCEL_SAGAS_HMR = undefined;
	
	var _index = __webpack_require__(279);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _effects = __webpack_require__(276);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sagas = [_index2.default];
	
	var CANCEL_SAGAS_HMR = exports.CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';
	
	function createAbortableSaga(saga) {
	  if (process.env.NODE_ENV === 'development') {
	    return (/*#__PURE__*/regeneratorRuntime.mark(function main() {
	        var sagaTask;
	        return regeneratorRuntime.wrap(function main$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return (0, _effects.fork)(saga);
	
	              case 2:
	                sagaTask = _context.sent;
	                _context.next = 5;
	                return (0, _effects.take)(CANCEL_SAGAS_HMR);
	
	              case 5:
	                _context.next = 7;
	                return (0, _effects.cancel)(sagaTask);
	
	              case 7:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, main, this);
	      })
	    );
	  } else {
	    return saga;
	  }
	}
	
	var SagaManager = {
	  startSagas: function startSagas(sagaMiddleware) {
	    sagas.map(createAbortableSaga).forEach(function (saga) {
	      return sagaMiddleware.run(saga);
	    });
	  },
	  cancelSagas: function cancelSagas(store) {
	    store.dispatch({
	      type: CANCEL_SAGAS_HMR
	    });
	  }
	};
	
	exports.default = SagaManager;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = root;
	
	var _effects = __webpack_require__(276);
	
	var _marked = /*#__PURE__*/regeneratorRuntime.mark(root);
	
	// Use require.context to require sagas automatically
	// Ref: https://webpack.github.io/docs/context.html
	var context = __webpack_require__(280);
	var keys = context.keys().filter(function (item) {
	  return item !== './index.js' && item !== './SagaManager.js';
	});
	
	function root() {
	  var i;
	  return regeneratorRuntime.wrap(function root$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          i = 0;
	
	        case 1:
	          if (!(i < keys.length)) {
	            _context.next = 7;
	            break;
	          }
	
	          _context.next = 4;
	          return (0, _effects.fork)(context(keys[i]).default);
	
	        case 4:
	          i++;
	          _context.next = 1;
	          break;
	
	        case 7:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked, this);
	}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./SagaManager.js": 278,
		"./graphData.js": 281,
		"./index.js": 279
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 280;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;
	
	var _reduxSaga = __webpack_require__(262);
	
	var _effects = __webpack_require__(276);
	
	var _antd = __webpack_require__(250);
	
	var _getGraphData = __webpack_require__(282);
	
	var _getGraphData2 = _interopRequireDefault(_getGraphData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = /*#__PURE__*/regeneratorRuntime.mark(getGraphData),
	    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchGraphDataGet),
	    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(_callee);
	
	function getGraphData() {
	  var graphData;
	  return regeneratorRuntime.wrap(function getGraphData$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.prev = 0;
	          _context.next = 3;
	          return (0, _effects.call)(_getGraphData2.default);
	
	        case 3:
	          graphData = _context.sent;
	
	          if (!graphData) {
	            _context.next = 7;
	            break;
	          }
	
	          _context.next = 7;
	          return (0, _effects.put)({
	            type: 'graphData/get/success',
	            payload: graphData
	          });
	
	        case 7:
	          _context.next = 14;
	          break;
	
	        case 9:
	          _context.prev = 9;
	          _context.t0 = _context['catch'](0);
	
	          _antd.message.error(_context.t0);
	          _context.next = 14;
	          return (0, _effects.put)({
	            type: 'graphData/get/failed',
	            err: _context.t0
	          });
	
	        case 14:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked, this, [[0, 9]]);
	}
	
	function watchGraphDataGet() {
	  return regeneratorRuntime.wrap(function watchGraphDataGet$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _reduxSaga.takeEvery)('graphData/get', getGraphData);
	
	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked2, this);
	}
	
	function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _effects.fork)(watchGraphDataGet);
	
	        case 2:
	          _context3.next = 4;
	          return (0, _effects.put)({
	            type: 'graphData/get'
	          });
	
	        case 4:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked3, this);
	}

/***/ }),
/* 282 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * [data description]
	 * @type {Object}
	 */
	// _d.export = function() {
	//     let ret = JSON.parse(_d.model.toJSON());
	//     let nodeBoundsMap = {};
	//     _d.model.nodeDataArray.map(n => {
	//       const node =  _d.findNodeForKey(n.key)
	//       const bounds = node.actualBounds;
	//       const location = node.location;
	//       bounds.x = location.x;
	//       bounds.y = location.y;
	//       nodeBoundsMap[n.key] = bounds;
	//     });
	//     ret.nodeDataArray.forEach(node => {
	//       const key = node.key;
	//       node.bounds = nodeBoundsMap[key];
	//     });
	//     return ret;
	//   }
	
	
	function createGrahData(gridSize) {
	    var random = Math.random,
	        max = Math.max,
	        min = Math.min,
	        floor = Math.floor;
	
	
	    var size = max(3, floor(random() * gridSize));
	    var ret = [];
	    for (var i = 0; i < size; i++) {
	        ret.push(preprocess(mock(random(), floor(random() * gridSize))));
	    }
	    return ret;
	}
	
	function mock(id, pos) {
	    return {
	        "id": id,
	        "pos": pos,
	        "class": "go.GraphLinksModel",
	        "nodeDataArray": [{
	            "key": "splitTop",
	            "isGroup": true,
	            "category": "group_split",
	            "layerName": "node",
	            "loc": "655.1773376537119 10",
	            "bounds": {
	                "x": 655.1773376537119,
	                "y": 10,
	                "width": 163.5228474983079,
	                "height": 163.67851156080795,
	                "Ea": true
	            }
	        }, {
	            "key": "splitCenter",
	            "isGroup": true,
	            "category": "group_split",
	            "layerName": "node",
	            "loc": "10.000000000000009 203.678511560808",
	            "bounds": {
	                "x": 10.000000000000009,
	                "y": 203.678511560808,
	                "width": 1453.8775228057316,
	                "height": 629.5533040557317,
	                "Ea": true
	            }
	        }, {
	            "key": "splitBottom",
	            "isGroup": true,
	            "category": "group_split_service",
	            "layerName": "node",
	            "loc": "726.9387614028659 863.2318156165397",
	            "bounds": {
	                "x": 726.9387614028658,
	                "y": 863.2318156165395,
	                "width": 20,
	                "height": 20,
	                "Ea": true
	            }
	        }, {
	            "key": "dataCenterTop",
	            "isGroup": true,
	            "category": "group_split",
	            "layerName": "node",
	            "group": "数据中心内部",
	            "loc": "33.76142374915409 248.4348571849619",
	            "bounds": {
	                "x": 33.76142374915409,
	                "y": 248.4348571849619,
	                "width": 1406.3546753074236,
	                "height": 415.8747924949236,
	                "Ea": true
	            }
	        }, {
	            "key": "dataCenterBottom",
	            "isGroup": true,
	            "category": "group_split_service",
	            "layerName": "node",
	            "group": "数据中心内部",
	            "loc": "562.9387614028658 694.3096496798858",
	            "bounds": {
	                "x": 562.9387614028658,
	                "y": 694.3096496798858,
	                "width": 348,
	                "height": 115.16074218749998,
	                "Ea": true
	            }
	        }, {
	            "key": "互联网接入区-NAT",
	            "group": "互联网接入区",
	            "name": "NAT",
	            "nodeIcon": "img/blueprint/logic/nat.png",
	            "category": "Node_App_Template",
	            "layerName": "node",
	            "loc": "668.9387614028659 44.75634562415396",
	            "bounds": {
	                "x": 668.938761402866,
	                "y": 44.756345624153965,
	                "width": 56,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "数据中心内部",
	            "group": "splitCenter",
	            "text": "数据中心内部",
	            "isGroup": true,
	            "category": "access_area_2",
	            "layerName": "area",
	            "loc": "23.76142374915409 238.4348571849619",
	            "bounds": {
	                "x": 23.76142374915409,
	                "y": 238.4348571849619,
	                "width": 1433.8775228057316,
	                "height": 609.5533040557317,
	                "Ea": true
	            }
	        }, {
	            "key": "互联网接入区",
	            "group": "splitTop",
	            "text": "互联网接入区",
	            "isGroup": true,
	            "category": "access_area",
	            "layerName": "area",
	            "loc": "668.9387614028659 44.75634562415396",
	            "bounds": {
	                "x": 668.9387614028659,
	                "y": 44.75634562415396,
	                "width": 143.52284749830793,
	                "height": 143.67851156080795,
	                "Ea": true
	            }
	        }, {
	            "key": "烟台中金数据中心",
	            "text": "烟台中金数据中心",
	            "group": "dataCenterTop",
	            "isGroup": true,
	            "category": "group_region",
	            "layerName": "area",
	            "loc": "52.52284749830809 288.1912028091159",
	            "bounds": {
	                "x": 52.52284749830809,
	                "y": 288.1912028091159,
	                "width": 508.2477417136738,
	                "height": 250.71405030742378,
	                "Ea": true
	            }
	        }, {
	            "key": "烟台黄务数据中心",
	            "text": "烟台黄务数据中心",
	            "group": "dataCenterTop",
	            "isGroup": true,
	            "category": "group_region",
	            "layerName": "area",
	            "loc": "610.5228474983081 288.1912028091159",
	            "bounds": {
	                "x": 610.5228474983081,
	                "y": 288.1912028091159,
	                "width": 828.3546753074236,
	                "height": 395.87479249492367,
	                "Ea": true
	            }
	        }, {
	            "key": "烟台中金数据中心|内网",
	            "group": "烟台中金数据中心",
	            "text": "内网",
	            "isGroup": true,
	            "category": "group_subnet",
	            "layerName": "area",
	            "loc": "66.28427124746209 322.94754843326984",
	            "bounds": {
	                "x": 66.28427124746209,
	                "y": 322.94754843326984,
	                "width": 470.72489421536585,
	                "height": 192.19628093411583,
	                "Ea": true
	            }
	        }, {
	            "key": "烟台黄务数据中心|内网",
	            "group": "烟台黄务数据中心",
	            "text": "内网",
	            "isGroup": true,
	            "category": "group_subnet",
	            "layerName": "area",
	            "loc": "624.284271247462 322.9475484332699",
	            "bounds": {
	                "x": 624.284271247462,
	                "y": 322.9475484332699,
	                "width": 790.8318278091158,
	                "height": 337.3570231216158,
	                "Ea": true
	            }
	        }, {
	            "key": "烟台中金数据中心|内网|业务2网_等保2区",
	            "group": "烟台中金数据中心|内网",
	            "text": "业务2网_等保2区",
	            "isGroup": true,
	            "category": "group_subnet_secure_area",
	            "layerName": "area",
	            "loc": "80.04569499661608 357.7038940574238",
	            "bounds": {
	                "x": 80.04569499661608,
	                "y": 357.7038940574238,
	                "width": 443.2020467170579,
	                "height": 143.6785115608079,
	                "Ea": true
	            }
	        }, {
	            "key": "烟台黄务数据中心|内网|业务2网_等保2区",
	            "group": "烟台黄务数据中心|内网",
	            "text": "业务2网_等保2区",
	            "isGroup": true,
	            "category": "group_subnet_secure_area",
	            "layerName": "area",
	            "loc": "638.0456949966159 357.7038940574239",
	            "bounds": {
	                "x": 638.0456949966159,
	                "y": 357.7038940574239,
	                "width": 763.308980310808,
	                "height": 288.8392537483079,
	                "Ea": true
	            }
	        }, {
	            "key": "b218b68b-07b4-4dae-bba3-871bfde6a849",
	            "group": "烟台中金数据中心|内网|业务2网_等保2区",
	            "name": "23中金",
	            "nodeIcon": "img/blueprint/logic/servergroup.png",
	            "category": "Node_DP_UNIT_Template",
	            "layerName": "node",
	            "loc": "80.04569499661608 357.7038940574238",
	            "bounds": {
	                "x": 80.04569499661608,
	                "y": 357.7038940574238,
	                "width": 67.572265625,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "a2665e60-1149-4437-a943-c3f8479aaea2",
	            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
	            "name": "23黄务",
	            "nodeIcon": "img/blueprint/logic/servergroup.png",
	            "category": "Node_DP_UNIT_Template",
	            "layerName": "node",
	            "loc": "972.1526285903659 502.8646362449239",
	            "bounds": {
	                "x": 972.1526285903658,
	                "y": 502.8646362449239,
	                "width": 67.572265625,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "d04d4e75-99b1-4352-8c2e-93671abc2758",
	            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
	            "name": "comstar资金管理系统应用节点主黄务",
	            "nodeIcon": "img/blueprint/logic/servergroup.png",
	            "category": "Node_DP_UNIT_Template",
	            "layerName": "node",
	            "loc": "638.0456949966159 502.8646362449239",
	            "bounds": {
	                "x": 638.0456949966159,
	                "y": 502.8646362449239,
	                "width": 255.7861328125,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "d07a1cdb-26dc-4cd2-a461-7914658a781a",
	            "group": "烟台中金数据中心|内网|业务2网_等保2区",
	            "name": "comstar资金管理系统应用节点同城备中金",
	            "nodeIcon": "img/blueprint/logic/servergroup.png",
	            "category": "Node_DP_UNIT_Template",
	            "layerName": "node",
	            "loc": "211.93876140286605 357.7038940574238",
	            "bounds": {
	                "x": 211.93876140286602,
	                "y": 357.7038940574238,
	                "width": 283.7861328125,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "5b1321d5-5d0d-423d-a996-10c1aca1a0c1",
	            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
	            "name": "comstar资金管理系统应用节点备黄务",
	            "nodeIcon": "img/blueprint/logic/servergroup.png",
	            "category": "Node_DP_UNIT_Template",
	            "layerName": "node",
	            "loc": "1118.045694996616 502.8646362449239",
	            "bounds": {
	                "x": 1118.045694996616,
	                "y": 502.8646362449239,
	                "width": 255.7861328125,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
	            "group": "dataCenterBottom",
	            "name": "comstar资金管理系统数据库",
	            "nodeIcon": "img/blueprint/logic/dbservice.png",
	            "category": "Node_App_Template",
	            "layerName": "node",
	            "loc": "562.9387614028658 694.3096496798858",
	            "bounds": {
	                "x": 562.9387614028658,
	                "y": 694.3096496798858,
	                "width": 199.7861328125,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
	            "group": "dataCenterBottom",
	            "name": "啊啊啊啊",
	            "nodeIcon": "img/blueprint/logic/sharestorge.png",
	            "category": "Node_App_Template",
	            "layerName": "node",
	            "loc": "810.9387614028658 694.3096496798858",
	            "bounds": {
	                "x": 810.938761402866,
	                "y": 694.3096496798858,
	                "width": 80,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "ca6d7b1c-a956-44e6-b617-837ac111f6c7",
	            "group": "互联网接入区",
	            "name": "xy",
	            "nodeIcon": "img/blueprint/logic/externalservice.png",
	            "category": "Node_App_Template",
	            "layerName": "node",
	            "loc": "728.9387614028659 44.75634562415396",
	            "bounds": {
	                "x": 728.9387614028659,
	                "y": 44.756345624153965,
	                "width": 56,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }, {
	            "key": "d04d4e75-99b1-4352-8c2e-93671abc2758-north-lb",
	            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
	            "nodeIcon": "img/blueprint/logic/loadbalance.png",
	            "category": "service_template",
	            "layerName": "node",
	            "loc": "737.9387614028659 357.7038940574239",
	            "bounds": {
	                "x": 737.938761402866,
	                "y": 357.7038940574239,
	                "width": 56,
	                "height": 95.1607421875,
	                "Ea": true
	            }
	        }],
	        "linkDataArray": [{
	            "from": "d04d4e75-99b1-4352-8c2e-93671abc2758-north-lb",
	            "to": "d04d4e75-99b1-4352-8c2e-93671abc2758",
	            "text": "LB访问部署单元",
	            "layerName": "link",
	            "points": [765.9387614028659, 452.8646362449239, 765.9387614028659, 462.8646362449239, 765.9387614028659, 492.86463624492393, 765.9387614028659, 502.86463624492393]
	        }, {
	            "from": "5b1321d5-5d0d-423d-a996-10c1aca1a0c1",
	            "to": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
	            "text": "部署单元访问数据库服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [1137.5673773048804, 586.025378432424, 686.8318278091158, 734.0103677327749]
	        }, {
	            "from": "d04d4e75-99b1-4352-8c2e-93671abc2758",
	            "to": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
	            "text": "部署单元访问共享存储服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [781.7361514142603, 586.0253784324238, 831.5894376649185, 698.3096496798858]
	        }, {
	            "from": "d07a1cdb-26dc-4cd2-a461-7914658a781a",
	            "to": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
	            "text": "部署单元访问共享存储服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [406.3777182910952, 440.8646362449238, 826.9387614028658, 725.6389134383655]
	        }, {
	            "from": "a2665e60-1149-4437-a943-c3f8479aaea2",
	            "to": "ca6d7b1c-a956-44e6-b617-837ac111f6c7",
	            "text": "部署单元访问外部服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [982.2511036491956, 506.8646362449239, 759.3410047592675, 96.75634562415397]
	        }, {
	            "from": "5b1321d5-5d0d-423d-a996-10c1aca1a0c1",
	            "to": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
	            "text": "部署单元访问共享存储服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [1172.5273607616798, 586.025378432424, 874.9387614028658, 730.2579186915116]
	        }, {
	            "from": "d04d4e75-99b1-4352-8c2e-93671abc2758",
	            "to": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
	            "text": "部署单元访问数据库服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [746.7761679574609, 586.0253784324238, 686.3029976647923, 698.3096496798858]
	        }, {
	            "from": "d07a1cdb-26dc-4cd2-a461-7914658a781a",
	            "to": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
	            "text": "部署单元访问数据库服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [386.494176816303, 440.8646362449238, 638.8318278091158, 715.7458844146096]
	        }, {
	            "from": "b218b68b-07b4-4dae-bba3-871bfde6a849",
	            "to": "ca6d7b1c-a956-44e6-b617-837ac111f6c7",
	            "text": "部署单元访问外部服务",
	            "category": "dpUnitCallTemplate",
	            "layerName": "link",
	            "points": [137.83182780911608, 393.605427977972, 747.8564279327675, 96.75634562415397]
	        }]
	    };
	}
	
	function preprocess(d) {
	    var translate = [0, 0];
	    var scaleFactor = 2;
	    var data = d;
	    data.nodeDataArray.forEach(function (node) {
	        node.bounds = transformBounds(node.bounds);
	    });
	    data.linkDataArray.forEach(function (link) {
	        var linkPoints = link.points;
	        var points = [];
	        for (var i = 0, l = link.points.length; i < l; i += 2) {
	            points.push([linkPoints[i], linkPoints[i + 1]]);
	        }
	        points = points.map(function (point) {
	            return transform(point);
	        });
	        link.points = points;
	    });
	
	    function transformBounds(b) {
	        var bound = Object.assign({}, b);
	        var point = transform([bound.x, bound.y]);
	        bound.x = point[0];
	        bound.y = point[1];
	        bound.width /= scaleFactor;
	        bound.height /= scaleFactor;
	        return bound;
	    }
	
	    function transform(point) {
	        var npoint = [point[0], point[1]];
	        npoint[0] /= scaleFactor;
	        npoint[1] /= scaleFactor;
	        return npoint;
	    }
	    return data;
	}
	
	function createNodeHash(data) {
	    var hash = {};
	    data.graphs.forEach(function (graph) {
	        graph.nodeDataArray.forEach(function (node) {
	            if (node.layerName === 'node') {
	                hash[node.key] = node;
	            }
	        });
	    });
	    return hash;
	}
	
	function createConnect(data) {
	    var graphs = data.graphs;
	    var layerConnects = [];
	    for (var i = 0; i < graphs.length - 1; i++) {
	        layerConnects = layerConnects.concat(createConnectBetweenTwoLayer(graphs[i], graphs[i + 1]));
	    }
	
	    return layerConnects;
	    function createConnectBetweenTwoLayer(layer1, layer2) {
	        var ret = [];
	        var layer1Nodes = layer1.nodeDataArray.filter(filter);
	        var layer2Nodes = layer2.nodeDataArray.filter(filter);
	
	        for (var _i = 0; _i < layer1Nodes.length; _i++) {
	            if (randomChoose(20)) {
	                for (var j = 0; j < layer2Nodes.length; j++) {
	                    if (randomChoose(120)) {
	                        ret.push({
	                            from: layer1Nodes[_i],
	                            to: layer2Nodes[j]
	                        });
	                    }
	                }
	            }
	        }
	        return ret;
	
	        function filter(node) {
	            return node.layerName === 'node' && !node.isGroup;
	        }
	
	        function randomChoose(p) {
	            var r = Math.random() * 100;
	            return p > r;
	        }
	    }
	}
	
	function getGraphData() {
	    var data = {};
	    data.graphs = createGrahData(8);
	    data.nodeHash = createNodeHash(data);
	    data.layerConnects = createConnect(data);
	    data.meta = {
	        gridSize: [3, 3]
	    };
	    return new Promise(function (resolve) {
	        return resolve(data);
	    });
	}
	
	exports.default = getGraphData;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxImmutablejs = __webpack_require__(284);
	
	var context = __webpack_require__(287); /**
	                                                      * rootReducer
	                                                      */
	
	var keys = context.keys().filter(function (item) {
	  return item !== './index.js';
	});
	var reducers = keys.reduce(function (memo, key) {
	  memo[key.match(/([^\/]+)\.js$/)[1]] = context(key).default;
	  return memo;
	}, {});
	
	/**
	 * [name description]
	 * @param  {[type]} state  [description]
	 * @param  {[type]} action [description]
	 * @return {[type]}        [description]
	 */
	function name() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var action = arguments[1];
	
	  return state;
	}
	
	/**
	 * [rootReducer description]
	 * @type {[type]}
	 */
	var rootReducer = (0, _reduxImmutablejs.combineReducers)(reducers);
	
	exports.default = rootReducer;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCombineReducers = __webpack_require__(285);
	
	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);
	
	var _utilsCreateReducer = __webpack_require__(286);
	
	var _utilsCreateReducer2 = _interopRequireDefault(_utilsCreateReducer);
	
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.createReducer = _utilsCreateReducer2['default'];

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _immutable = __webpack_require__(186);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// TODO need to find a way to reference Redux's init for compatability
	var ActionTypes = { INIT: 'INIT' };
	var isImmutable = function isImmutable(obj) {
	  return _immutable2['default'].Iterable.isIterable(obj);
	};
	
	/* eslint-disable no-console */
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!isImmutable(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = inputState.keySeq().filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });
	
	  if (unexpectedKeys.size > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  reducers.keySeq().forEach(function (key) {
	    var reducer = reducers.get(key);
	    var initialState = reducer(undefined, { type: ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	function combineReducers(reducers) {
	  var finalReducers = isImmutable(reducers) ? reducers : _immutable2['default'].fromJS(reducers);
	  finalReducers = finalReducers.filter(function (v) {
	    return typeof v === 'function';
	  });
	  var sanityError;
	
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  var defaultState = finalReducers.map(function (r) {
	    return undefined;
	  });
	
	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    var dirty = false;
	    var finalState = finalReducers.map(function (reducer, key) {
	      var oldState = state.get(key);
	      var newState = reducer(oldState, action);
	      dirty = dirty || oldState !== newState;
	      if (typeof newState === 'undefined') {
	        throw new Error(getErrorMessage(key, action));
	      }
	      return newState;
	    });
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }
	
	    return dirty ? finalState : state;
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _immutable = __webpack_require__(186);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	/**
	 * Create a handler (action) map reducer for the given list of handlers
	 *
	 * @param  {object} initialState     The initial state of the reducer, expecting an Immutable.Iterable instance,
	 * otherwise given initialState is converted to immutable.
	 * @param  {object} handlers         A map of actions where key is action name and value is a reducer function
	 * @param  {boolean} enforceImmutable = true if to enforce immutable, in other words a TypeError is thrown in case
	 * a handler returned anything that is not an Immutable.Iterable type.
	 * @param  {function} constructor    A function to process non-immutable state, defaults to Immutable.fromJS.
	 * @return {object}                  The calculated next state
	 */
	
	function createReducer(initialState, handlers) {
	  var enforceImmutable = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var constructor = arguments.length <= 3 || arguments[3] === undefined ? _immutable2['default'].fromJS.bind(_immutable2['default']) : arguments[3];
	
	  return function (state, action) {
	    if (state === undefined) state = initialState;
	
	    // convert the initial state to immutable
	    // This is useful in isomorphic apps where states were serialized
	    if (!_immutable2['default'].Iterable.isIterable(state)) {
	      state = constructor(state);
	    }
	
	    var handler = action && action.type ? handlers[action.type] : undefined;
	
	    if (!handler) {
	      return state;
	    }
	
	    state = handler(state, action);
	
	    if (enforceImmutable && !_immutable2['default'].Iterable.isIterable(state)) {
	      throw new TypeError('Reducers must return Immutable objects.');
	    }
	
	    return state;
	  };
	}
	
	module.exports = exports['default'];

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./graphData.js": 288,
		"./index.js": 283
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 287;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _reduxActions = __webpack_require__(289);
	
	var _immutable = __webpack_require__(186);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _uuid = __webpack_require__(354);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * todo reducer
	                                                                                                                                                                                                                   */
	
	
	var initialGraphData = _immutable2.default.Map();
	var graphData = (0, _reduxActions.handleActions)(_defineProperty({}, 'graphData/get/success', function graphDataGetSuccess(state, action) {
		var payload = action.payload;
		return payload;
	}), initialGraphData);
	
	exports.default = graphData;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineActions = exports.handleActions = exports.handleAction = exports.createActions = exports.createAction = undefined;
	
	var _createAction = __webpack_require__(290);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _handleAction = __webpack_require__(295);
	
	var _handleAction2 = _interopRequireDefault(_handleAction);
	
	var _handleActions = __webpack_require__(345);
	
	var _handleActions2 = _interopRequireDefault(_handleActions);
	
	var _combineActions = __webpack_require__(329);
	
	var _combineActions2 = _interopRequireDefault(_combineActions);
	
	var _createActions = __webpack_require__(351);
	
	var _createActions2 = _interopRequireDefault(_createActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createAction = _createAction2.default;
	exports.createActions = _createActions2.default;
	exports.handleAction = _handleAction2.default;
	exports.handleActions = _handleActions2.default;
	exports.combineActions = _combineActions2.default;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createAction;
	
	var _identity = __webpack_require__(291);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _isFunction = __webpack_require__(292);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isNull = __webpack_require__(294);
	
	var _isNull2 = _interopRequireDefault(_isNull);
	
	var _invariant = __webpack_require__(195);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createAction(type) {
	  var payloadCreator = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var metaCreator = arguments[2];
	
	  (0, _invariant2.default)((0, _isFunction2.default)(payloadCreator) || (0, _isNull2.default)(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
	
	  var finalPayloadCreator = (0, _isNull2.default)(payloadCreator) || payloadCreator === _identity2.default ? _identity2.default : function (head) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return head instanceof Error ? head : payloadCreator.apply(undefined, [head].concat(args));
	  };
	
	  var hasMeta = (0, _isFunction2.default)(metaCreator);
	  var typeString = type.toString();
	
	  var actionCreator = function actionCreator() {
	    var payload = finalPayloadCreator.apply(undefined, arguments);
	    var action = { type: type };
	
	    if (payload instanceof Error) {
	      action.error = true;
	    }
	
	    if (payload !== undefined) {
	      action.payload = payload;
	    }
	
	    if (hasMeta) {
	      action.meta = metaCreator.apply(undefined, arguments);
	    }
	
	    return action;
	  };
	
	  actionCreator.toString = function () {
	    return typeString;
	  };
	
	  return actionCreator;
	}

/***/ }),
/* 291 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(203),
	    isObject = __webpack_require__(293);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 293 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */
	function isNull(value) {
	  return value === null;
	}
	
	module.exports = isNull;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = handleAction;
	
	var _isFunction = __webpack_require__(292);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__(202);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _identity = __webpack_require__(291);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _isNil = __webpack_require__(296);
	
	var _isNil2 = _interopRequireDefault(_isNil);
	
	var _isUndefined = __webpack_require__(297);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _includes = __webpack_require__(298);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _invariant = __webpack_require__(195);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _combineActions = __webpack_require__(329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function handleAction(type) {
	  var reducer = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var defaultState = arguments[2];
	
	  var types = type.toString().split(_combineActions.ACTION_TYPE_DELIMITER);
	  (0, _invariant2.default)(!(0, _isUndefined2.default)(defaultState), 'defaultState for reducer handling ' + types.join(', ') + ' should be defined');
	  (0, _invariant2.default)((0, _isFunction2.default)(reducer) || (0, _isPlainObject2.default)(reducer), 'Expected reducer to be a function or object with next and throw reducers');
	
	  var _ref = (0, _isFunction2.default)(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
	    return (0, _isNil2.default)(aReducer) ? _identity2.default : aReducer;
	  });
	
	  var _ref2 = _slicedToArray(_ref, 2);
	
	  var nextReducer = _ref2[0];
	  var throwReducer = _ref2[1];
	
	
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];
	    var actionType = action.type;
	
	    if (!actionType || !(0, _includes2.default)(types, actionType.toString())) {
	      return state;
	    }
	
	    return (action.error === true ? throwReducer : nextReducer)(state, action);
	  };
	}

/***/ }),
/* 296 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `null` or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	 * @example
	 *
	 * _.isNil(null);
	 * // => true
	 *
	 * _.isNil(void 0);
	 * // => true
	 *
	 * _.isNil(NaN);
	 * // => false
	 */
	function isNil(value) {
	  return value == null;
	}
	
	module.exports = isNil;


/***/ }),
/* 297 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(299),
	    isArrayLike = __webpack_require__(303),
	    isString = __webpack_require__(305),
	    toInteger = __webpack_require__(307),
	    values = __webpack_require__(311);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(300),
	    baseIsNaN = __webpack_require__(301),
	    strictIndexOf = __webpack_require__(302);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	
	module.exports = baseIndexOf;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ }),
/* 301 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;


/***/ }),
/* 302 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(292),
	    isLength = __webpack_require__(304);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 304 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(203),
	    isArray = __webpack_require__(306),
	    isObjectLike = __webpack_require__(211);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	
	module.exports = isString;


/***/ }),
/* 306 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(308);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(309);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(293),
	    isSymbol = __webpack_require__(310);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(203),
	    isObjectLike = __webpack_require__(211);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(312),
	    keys = __webpack_require__(314);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}
	
	module.exports = values;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(313);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ }),
/* 313 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(315),
	    baseKeys = __webpack_require__(326),
	    isArrayLike = __webpack_require__(303);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(316),
	    isArguments = __webpack_require__(317),
	    isArray = __webpack_require__(306),
	    isBuffer = __webpack_require__(319),
	    isIndex = __webpack_require__(321),
	    isTypedArray = __webpack_require__(322);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 316 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(318),
	    isObjectLike = __webpack_require__(211);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(203),
	    isObjectLike = __webpack_require__(211);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(205),
	    stubFalse = __webpack_require__(320);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(214)(module)))

/***/ }),
/* 320 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 321 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(323),
	    baseUnary = __webpack_require__(324),
	    nodeUtil = __webpack_require__(325);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(203),
	    isLength = __webpack_require__(304),
	    isObjectLike = __webpack_require__(211);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 324 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(206);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(214)(module)))

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(327),
	    nativeKeys = __webpack_require__(328);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 327 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(210);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ACTION_TYPE_DELIMITER = undefined;
	exports.default = combineActions;
	
	var _isString = __webpack_require__(305);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isFunction = __webpack_require__(292);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isEmpty = __webpack_require__(330);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _toString = __webpack_require__(343);
	
	var _toString2 = _interopRequireDefault(_toString);
	
	var _isSymbol = __webpack_require__(310);
	
	var _isSymbol2 = _interopRequireDefault(_isSymbol);
	
	var _invariant = __webpack_require__(195);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ACTION_TYPE_DELIMITER = exports.ACTION_TYPE_DELIMITER = '||';
	
	function isValidActionType(type) {
	  return (0, _isString2.default)(type) || (0, _isFunction2.default)(type) || (0, _isSymbol2.default)(type);
	}
	
	function isValidActionTypes(types) {
	  if ((0, _isEmpty2.default)(types)) {
	    return false;
	  }
	  return types.every(isValidActionType);
	}
	
	function combineActions() {
	  for (var _len = arguments.length, actionsTypes = Array(_len), _key = 0; _key < _len; _key++) {
	    actionsTypes[_key] = arguments[_key];
	  }
	
	  (0, _invariant2.default)(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
	  var combinedActionType = actionsTypes.map(_toString2.default).join(ACTION_TYPE_DELIMITER);
	  return { toString: function toString() {
	      return combinedActionType;
	    } };
	}

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(326),
	    getTag = __webpack_require__(331),
	    isArguments = __webpack_require__(317),
	    isArray = __webpack_require__(306),
	    isArrayLike = __webpack_require__(303),
	    isBuffer = __webpack_require__(319),
	    isPrototype = __webpack_require__(327),
	    isTypedArray = __webpack_require__(322);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = isEmpty;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(332),
	    Map = __webpack_require__(339),
	    Promise = __webpack_require__(340),
	    Set = __webpack_require__(341),
	    WeakMap = __webpack_require__(342),
	    baseGetTag = __webpack_require__(203),
	    toSource = __webpack_require__(337);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(333),
	    root = __webpack_require__(205);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(334),
	    getValue = __webpack_require__(338);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(292),
	    isMasked = __webpack_require__(335),
	    isObject = __webpack_require__(293),
	    toSource = __webpack_require__(337);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(336);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(205);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 337 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 338 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(333),
	    root = __webpack_require__(205);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(333),
	    root = __webpack_require__(205);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(333),
	    root = __webpack_require__(205);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(333),
	    root = __webpack_require__(205);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(344);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(204),
	    arrayMap = __webpack_require__(313),
	    isArray = __webpack_require__(306),
	    isSymbol = __webpack_require__(310);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handleActions;
	
	var _isPlainObject = __webpack_require__(202);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _reduceReducers = __webpack_require__(346);
	
	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);
	
	var _invariant = __webpack_require__(195);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _handleAction = __webpack_require__(295);
	
	var _handleAction2 = _interopRequireDefault(_handleAction);
	
	var _ownKeys = __webpack_require__(347);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _flattenUtils = __webpack_require__(348);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function handleActions(handlers, defaultState) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var namespace = _ref.namespace;
	
	  (0, _invariant2.default)((0, _isPlainObject2.default)(handlers), 'Expected handlers to be an plain object.');
	  var flattenedReducerMap = (0, _flattenUtils.flattenReducerMap)(handlers, namespace);
	  var reducers = (0, _ownKeys2.default)(flattenedReducerMap).map(function (type) {
	    return (0, _handleAction2.default)(type, flattenedReducerMap[type], defaultState);
	  });
	  var reducer = _reduceReducers2.default.apply(undefined, _toConsumableArray(reducers));
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];
	    return reducer(state, action);
	  };
	}

/***/ }),
/* 346 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reduceReducers;
	
	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }
	
	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}
	
	module.exports = exports["default"];

/***/ }),
/* 347 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ownKeys;
	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }
	
	  var keys = Object.getOwnPropertyNames(object);
	
	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }
	
	  return keys;
	}

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unflattenActionCreators = exports.flattenReducerMap = exports.flattenActionMap = undefined;
	
	var _camelCase = __webpack_require__(349);
	
	var _camelCase2 = _interopRequireDefault(_camelCase);
	
	var _ownKeys = __webpack_require__(347);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _hasGeneratorInterface = __webpack_require__(350);
	
	var _hasGeneratorInterface2 = _interopRequireDefault(_hasGeneratorInterface);
	
	var _isPlainObject = __webpack_require__(202);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultNamespace = '/';
	
	var flattenWhenNode = function flattenWhenNode(predicate) {
	  return function flatten(map) {
	    var namespace = arguments.length <= 1 || arguments[1] === undefined ? defaultNamespace : arguments[1];
	    var partialFlatMap = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	    var partialFlatActionType = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
	
	    function connectNamespace(type) {
	      return partialFlatActionType ? '' + partialFlatActionType + namespace + type : type;
	    }
	
	    (0, _ownKeys2.default)(map).forEach(function (type) {
	      var nextNamespace = connectNamespace(type);
	      var mapValue = map[type];
	
	      if (!predicate(mapValue)) {
	        partialFlatMap[nextNamespace] = map[type];
	      } else {
	        flatten(map[type], namespace, partialFlatMap, nextNamespace);
	      }
	    });
	
	    return partialFlatMap;
	  };
	};
	
	var flattenActionMap = flattenWhenNode(_isPlainObject2.default);
	var flattenReducerMap = flattenWhenNode(function (node) {
	  return (0, _isPlainObject2.default)(node) && !(0, _hasGeneratorInterface2.default)(node);
	});
	
	function unflattenActionCreators(flatActionCreators) {
	  var namespace = arguments.length <= 1 || arguments[1] === undefined ? defaultNamespace : arguments[1];
	
	  function unflatten(flatActionType) {
	    var partialNestedActionCreators = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var partialFlatActionTypePath = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	    var nextNamespace = (0, _camelCase2.default)(partialFlatActionTypePath.shift());
	    if (partialFlatActionTypePath.length) {
	      if (!partialNestedActionCreators[nextNamespace]) {
	        partialNestedActionCreators[nextNamespace] = {};
	      }
	      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
	    } else {
	      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
	    }
	  }
	
	  var nestedActionCreators = {};
	  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
	    return unflatten(type, nestedActionCreators, type.split(namespace));
	  });
	  return nestedActionCreators;
	}
	
	exports.flattenActionMap = flattenActionMap;
	exports.flattenReducerMap = flattenReducerMap;
	exports.unflattenActionCreators = unflattenActionCreators;

/***/ }),
/* 349 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// based on https://github.com/lodash/lodash/blob/4.17.2/lodash.js#L14100
	// eslint-disable-next-line max-len
	var wordPattern = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:(?:1ST|2ND|3RD|(?![123])\dTH)\b)|\d*(?:(?:1st|2nd|3rd|(?![123])\dth)\b)|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
	var namespacer = '/';
	
	function camelCase(string) {
	  return string.match(wordPattern).reduce(function (camelCased, word, index) {
	    return camelCased + (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
	  }, '');
	}
	
	exports.default = function (type) {
	  return type.split(namespacer).map(camelCase).join(namespacer);
	};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hasGeneratorInterface;
	
	var _ownKeys = __webpack_require__(347);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hasGeneratorInterface(handler) {
	  var keys = (0, _ownKeys2.default)(handler);
	  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
	    return ownKey === 'next' || ownKey === 'throw';
	  });
	  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
	}

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createActions;
	
	var _camelCase = __webpack_require__(349);
	
	var _camelCase2 = _interopRequireDefault(_camelCase);
	
	var _identity = __webpack_require__(291);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _isPlainObject = __webpack_require__(202);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _isArray = __webpack_require__(306);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _last = __webpack_require__(352);
	
	var _last2 = _interopRequireDefault(_last);
	
	var _isString = __webpack_require__(305);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isFunction = __webpack_require__(292);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isNil = __webpack_require__(296);
	
	var _isNil2 = _interopRequireDefault(_isNil);
	
	var _createAction = __webpack_require__(290);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _invariant = __webpack_require__(195);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _arrayToObject = __webpack_require__(353);
	
	var _arrayToObject2 = _interopRequireDefault(_arrayToObject);
	
	var _flattenUtils = __webpack_require__(348);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function createActions(actionMap) {
	  for (var _len = arguments.length, identityActions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    identityActions[_key - 1] = arguments[_key];
	  }
	
	  var _ref = (0, _isPlainObject2.default)((0, _last2.default)(identityActions)) ? identityActions.pop() : {};
	
	  var namespace = _ref.namespace;
	
	  (0, _invariant2.default)(identityActions.every(_isString2.default) && ((0, _isString2.default)(actionMap) || (0, _isPlainObject2.default)(actionMap)), 'Expected optional object followed by string action types');
	  if ((0, _isString2.default)(actionMap)) {
	    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions));
	  }
	  return _extends({}, actionCreatorsFromActionMap(actionMap, namespace), actionCreatorsFromIdentityActions(identityActions));
	}
	
	function actionCreatorsFromActionMap(actionMap, namespace) {
	  var flatActionMap = (0, _flattenUtils.flattenActionMap)(actionMap, namespace);
	  var flatActionCreators = actionMapToActionCreators(flatActionMap);
	  return (0, _flattenUtils.unflattenActionCreators)(flatActionCreators, namespace);
	}
	
	function actionMapToActionCreators(actionMap) {
	  function isValidActionMapValue(actionMapValue) {
	    if ((0, _isFunction2.default)(actionMapValue) || (0, _isNil2.default)(actionMapValue)) {
	      return true;
	    } else if ((0, _isArray2.default)(actionMapValue)) {
	      var _actionMapValue = _slicedToArray(actionMapValue, 2);
	
	      var _actionMapValue$ = _actionMapValue[0];
	      var payload = _actionMapValue$ === undefined ? _identity2.default : _actionMapValue$;
	      var meta = _actionMapValue[1];
	
	      return (0, _isFunction2.default)(payload) && (0, _isFunction2.default)(meta);
	    }
	    return false;
	  }
	
	  return (0, _arrayToObject2.default)(Object.keys(actionMap), function (partialActionCreators, type) {
	    var actionMapValue = actionMap[type];
	    (0, _invariant2.default)(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ('functions for ' + type));
	    var actionCreator = (0, _isArray2.default)(actionMapValue) ? _createAction2.default.apply(undefined, [type].concat(_toConsumableArray(actionMapValue))) : (0, _createAction2.default)(type, actionMapValue);
	    return _extends({}, partialActionCreators, _defineProperty({}, type, actionCreator));
	  });
	}
	
	function actionCreatorsFromIdentityActions(identityActions) {
	  var actionMap = (0, _arrayToObject2.default)(identityActions, function (partialActionMap, type) {
	    return _extends({}, partialActionMap, _defineProperty({}, type, _identity2.default));
	  });
	  var actionCreators = actionMapToActionCreators(actionMap);
	  return (0, _arrayToObject2.default)(Object.keys(actionCreators), function (partialActionCreators, type) {
	    return _extends({}, partialActionCreators, _defineProperty({}, (0, _camelCase2.default)(type), actionCreators[type]));
	  });
	}

/***/ }),
/* 352 */
/***/ (function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ }),
/* 353 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, callback) {
	  return array.reduce(function (partialObject, element) {
	    return callback(partialObject, element);
	  }, {});
	};

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(355);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });
	
	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }
	
	  return buf;
	}
	
	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : unparse(b);
	}
	
	// **`v4()` - Generate random UUID**
	
	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || unparse(rnds);
	}
	
	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;
	
	module.exports = uuid;


/***/ }),
/* 355 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return _rnds;
	  };
	}
	
	module.exports = rng;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
]);
//# sourceMappingURL=home.js.map