import { n as __esmMin } from "./runtime-XrdeG17s.js";
import { A as init_LiveAnnouncer } from "./runtime-DaRwvaC6.js";
//#region ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
var init_extends = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var init_assertThisInitialized = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
var init_setPrototypeOf = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
var init_inheritsLoose = __esmMin((() => {
	init_setPrototypeOf();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
	return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
		return t.__proto__ || Object.getPrototypeOf(t);
	}, _getPrototypeOf(t);
}
var init_getPrototypeOf = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
	try {
		return -1 !== Function.toString.call(t).indexOf("[native code]");
	} catch (n) {
		return "function" == typeof t;
	}
}
var init_isNativeFunction = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
	try {
		var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch (t) {}
	return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
		return !!t;
	})();
}
var init_isNativeReflectConstruct = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
	if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
	var o = [null];
	o.push.apply(o, e);
	var p = new (t.bind.apply(t, o))();
	return r && _setPrototypeOf(p, r.prototype), p;
}
var init_construct = __esmMin((() => {
	init_isNativeReflectConstruct();
	init_setPrototypeOf();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t) {
	var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
	return _wrapNativeSuper = function _wrapNativeSuper(t) {
		if (null === t || !_isNativeFunction(t)) return t;
		if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
		if (void 0 !== r) {
			if (r.has(t)) return r.get(t);
			r.set(t, Wrapper);
		}
		function Wrapper() {
			return _construct(t, arguments, _getPrototypeOf(this).constructor);
		}
		return Wrapper.prototype = Object.create(t.prototype, { constructor: {
			value: Wrapper,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), _setPrototypeOf(Wrapper, t);
	}, _wrapNativeSuper(t);
}
var init_wrapNativeSuper = __esmMin((() => {
	init_getPrototypeOf();
	init_setPrototypeOf();
	init_isNativeFunction();
	init_construct();
}));
//#endregion
//#region ../../node_modules/@react-aria/live-announcer/dist/import.mjs
var init_import = __esmMin((() => {
	init_LiveAnnouncer();
}));
//#endregion
//#region ../../node_modules/@gilbarbara/deep-equal/dist/index.mjs
function isOfType(type) {
	return (value) => typeof value === type;
}
function equalArray(left, right) {
	const { length } = left;
	if (length !== right.length) return false;
	for (let index = length; index-- !== 0;) if (!equal(left[index], right[index])) return false;
	return true;
}
function equalArrayBuffer(left, right) {
	if (left.byteLength !== right.byteLength) return false;
	const view1 = new DataView(left.buffer);
	const view2 = new DataView(right.buffer);
	let index = left.byteLength;
	while (index--) if (view1.getUint8(index) !== view2.getUint8(index)) return false;
	return true;
}
function equalMap(left, right) {
	if (left.size !== right.size) return false;
	for (const index of left.entries()) if (!right.has(index[0])) return false;
	for (const index of left.entries()) if (!equal(index[1], right.get(index[0]))) return false;
	return true;
}
function equalSet(left, right) {
	if (left.size !== right.size) return false;
	for (const index of left.entries()) if (!right.has(index[0])) return false;
	return true;
}
function equal(left, right) {
	if (left === right) return true;
	if (left && isObject(left) && right && isObject(right)) {
		if (left.constructor !== right.constructor) return false;
		if (Array.isArray(left) && Array.isArray(right)) return equalArray(left, right);
		if (left instanceof Map && right instanceof Map) return equalMap(left, right);
		if (left instanceof Set && right instanceof Set) return equalSet(left, right);
		if (ArrayBuffer.isView(left) && ArrayBuffer.isView(right)) return equalArrayBuffer(left, right);
		if (isRegex(left) && isRegex(right)) return left.source === right.source && left.flags === right.flags;
		if (left.valueOf !== Object.prototype.valueOf) return left.valueOf() === right.valueOf();
		if (left.toString !== Object.prototype.toString) return left.toString() === right.toString();
		const leftKeys = Object.keys(left);
		const rightKeys = Object.keys(right);
		if (leftKeys.length !== rightKeys.length) return false;
		for (let index = leftKeys.length; index-- !== 0;) if (!Object.prototype.hasOwnProperty.call(right, leftKeys[index])) return false;
		for (let index = leftKeys.length; index-- !== 0;) {
			const key = leftKeys[index];
			if (key === "_owner" && left.$$typeof) continue;
			if (!equal(left[key], right[key])) return false;
		}
		return true;
	}
	if (Number.isNaN(left) && Number.isNaN(right)) return true;
	return left === right;
}
var isFunction, isNull, isRegex, isObject, isUndefined;
var init_dist$1 = __esmMin((() => {
	isFunction = isOfType("function");
	isNull = (value) => {
		return value === null;
	};
	isRegex = (value) => {
		return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
	};
	isObject = (value) => {
		return !isUndefined(value) && !isNull(value) && (isFunction(value) || typeof value === "object");
	};
	isUndefined = isOfType("undefined");
}));
//#endregion
//#region ../../node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
function $a747a10fe70a57da$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
	if (strings[locale]) return strings[locale];
	let language = $a747a10fe70a57da$var$getLanguage(locale);
	let script = $a747a10fe70a57da$var$getScript(locale);
	if (script && strings[`${language}-${script}`]) return strings[`${language}-${script}`];
	if (strings[language]) return strings[language];
	for (let key in strings) if (key.startsWith(language + "-")) return strings[key];
	return strings[defaultLocale];
}
function $a747a10fe70a57da$var$getLanguage(locale) {
	if (Intl.Locale) return new Intl.Locale(locale).language;
	return locale.split("-")[0];
}
function $a747a10fe70a57da$var$getScript(locale) {
	if (Intl.Locale) return new Intl.Locale(locale).script;
}
var $a747a10fe70a57da$var$localeSymbol, $a747a10fe70a57da$var$stringsSymbol, $a747a10fe70a57da$var$cachedGlobalStrings, $a747a10fe70a57da$export$c17fa47878dc55b6;
var init_LocalizedStringDictionary = __esmMin((() => {
	$a747a10fe70a57da$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
	$a747a10fe70a57da$var$stringsSymbol = Symbol.for("react-aria.i18n.strings");
	$a747a10fe70a57da$var$cachedGlobalStrings = void 0;
	$a747a10fe70a57da$export$c17fa47878dc55b6 = class $a747a10fe70a57da$export$c17fa47878dc55b6 {
		constructor(messages, defaultLocale = "en-US") {
			this.strings = Object.fromEntries(Object.entries(messages).filter(([, v]) => v));
			this.defaultLocale = defaultLocale;
		}
		/** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
			let string = this.getStringsForLocale(locale)[key];
			if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
			return string;
		}
		/** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
			let strings = this.strings[locale];
			if (!strings) {
				strings = $a747a10fe70a57da$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
				this.strings[locale] = strings;
			}
			return strings;
		}
		static getGlobalDictionaryForPackage(packageName) {
			if (typeof window === "undefined") return null;
			let locale = window[$a747a10fe70a57da$var$localeSymbol];
			if ($a747a10fe70a57da$var$cachedGlobalStrings === void 0) {
				let globalStrings = window[$a747a10fe70a57da$var$stringsSymbol];
				if (!globalStrings) return null;
				$a747a10fe70a57da$var$cachedGlobalStrings = {};
				for (let pkg in globalStrings) $a747a10fe70a57da$var$cachedGlobalStrings[pkg] = new $a747a10fe70a57da$export$c17fa47878dc55b6({ [locale]: globalStrings[pkg] }, locale);
			}
			let dictionary = $a747a10fe70a57da$var$cachedGlobalStrings?.[packageName];
			if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
			return dictionary;
		}
	};
}));
//#endregion
//#region ../../node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var $b27c684a33948c64$var$pluralRulesCache, $b27c684a33948c64$var$numberFormatCache, $b27c684a33948c64$export$2f817fcdc4b89ae0;
var init_LocalizedStringFormatter = __esmMin((() => {
	$b27c684a33948c64$var$pluralRulesCache = /* @__PURE__ */ new Map();
	$b27c684a33948c64$var$numberFormatCache = /* @__PURE__ */ new Map();
	$b27c684a33948c64$export$2f817fcdc4b89ae0 = class {
		constructor(locale, strings) {
			this.locale = locale;
			this.strings = strings;
		}
		/** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
			let message = this.strings.getStringForLocale(key, this.locale);
			return typeof message === "function" ? message(variables, this) : message;
		}
		plural(count, options, type = "cardinal") {
			let opt = options["=" + count];
			if (opt) return typeof opt === "function" ? opt() : opt;
			let key = this.locale + ":" + type;
			let pluralRules = $b27c684a33948c64$var$pluralRulesCache.get(key);
			if (!pluralRules) {
				pluralRules = new Intl.PluralRules(this.locale, { type });
				$b27c684a33948c64$var$pluralRulesCache.set(key, pluralRules);
			}
			opt = options[pluralRules.select(count)] || options.other;
			return typeof opt === "function" ? opt() : opt;
		}
		number(value) {
			let numberFormat = $b27c684a33948c64$var$numberFormatCache.get(this.locale);
			if (!numberFormat) {
				numberFormat = new Intl.NumberFormat(this.locale);
				$b27c684a33948c64$var$numberFormatCache.set(this.locale, numberFormat);
			}
			return numberFormat.format(value);
		}
		select(options, value) {
			let opt = options[value] || options.other;
			return typeof opt === "function" ? opt() : opt;
		}
	};
}));
//#endregion
//#region ../../node_modules/@internationalized/string/dist/index.mjs
var init_dist = __esmMin((() => {
	init_LocalizedStringDictionary();
	init_LocalizedStringFormatter();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var init_objectWithoutPropertiesLoose = __esmMin((() => {}));
//#endregion
export { _extends as _, init_LocalizedStringFormatter as a, equal as c, _wrapNativeSuper as d, init_wrapNativeSuper as f, init_assertThisInitialized as g, _assertThisInitialized as h, $b27c684a33948c64$export$2f817fcdc4b89ae0 as i, init_dist$1 as l, init_inheritsLoose as m, init_objectWithoutPropertiesLoose as n, $a747a10fe70a57da$export$c17fa47878dc55b6 as o, _inheritsLoose as p, init_dist as r, init_LocalizedStringDictionary as s, _objectWithoutPropertiesLoose as t, init_import as u, init_extends as v };
