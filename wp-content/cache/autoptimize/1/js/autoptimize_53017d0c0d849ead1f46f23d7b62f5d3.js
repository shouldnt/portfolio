window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/jevelin.shufflehound.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.2"
    }
};
! function(a, b, c) {
    function d(a, b) {
        var c = String.fromCharCode;
        l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0);
        var d = k.toDataURL();
        l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0);
        var e = k.toDataURL();
        return d === e
    }

    function e(a) {
        var b;
        if (!l || !l.fillText) return !1;
        switch (l.textBaseline = "top", l.font = "600 32px Arial", a) {
            case "flag":
                return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b);
            case "emoji":
                return b = d([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340]), !b
        }
        return !1
    }

    function f(a) {
        var c = b.createElement("script");
        c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }
    var g, h, i, j, k = b.createElement("canvas"),
        l = k.getContext && k.getContext("2d");
    for (j = Array("flag", "emoji"), c.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, i = 0; i < j.length; i++) c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]);
    c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
        c.DOMReady = !0
    }, c.supports.everything || (h = function() {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onload", h), b.attachEvent("onreadystatechange", function() {
        "complete" === b.readyState && c.readyCallback()
    })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji)))
}(window, document, window._wpemojiSettings);
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window,
                y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
                        fadeOut: 0
                    }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function() {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function(e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function() {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window,
                d = e(t),
                a = d.data("blockUI.history"),
                c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function() {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function(e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    d = l.width(),
                    a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function() {
                    l(i)
                }, 10), !1
            }
            var s = t.data,
                d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function() {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) {
            t(window, e)
        }, e.unblockUI = function(e) {
            o(window, e)
        }, e.growlUI = function(t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function(t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function() {
                l({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function(o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function() {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function(t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null,
            b = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
var wc_add_to_cart_params = {
    "ajax_url": "\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
    "i18n_view_cart": "View cart",
    "cart_url": "https:\/\/jevelin.shufflehound.com\/shop\/cart\/",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};
jQuery(function(o) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;

    function t() {
        this.requests = [], this.addRequest = this.addRequest.bind(this), this.run = this.run.bind(this), o(document.body).on("click", ".add_to_cart_button", {
            addToCartHandler: this
        }, this.onAddToCart).on("click", ".remove_from_cart_button", {
            addToCartHandler: this
        }, this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart removed_from_cart", {
            addToCartHandler: this
        }, this.updateFragments)
    }
    t.prototype.addRequest = function(t) {
        this.requests.push(t), 1 === this.requests.length && this.run()
    }, t.prototype.run = function() {
        var t = this,
            a = t.requests[0].complete;
        t.requests[0].complete = function() {
            "function" == typeof a && a(), t.requests.shift(), 0 < t.requests.length && t.run()
        }, o.ajax(this.requests[0])
    }, t.prototype.onAddToCart = function(t) {
        var a = o(this);
        if (a.is(".ajax_add_to_cart")) {
            if (!a.attr("data-product_id")) return !0;
            t.preventDefault(), a.removeClass("added"), a.addClass("loading");
            var r = {};
            o.each(a.data(), function(t, a) {
                r[t] = a
            }), o(document.body).trigger("adding_to_cart", [a, r]), t.data.addToCartHandler.addRequest({
                type: "POST",
                url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"),
                data: r,
                success: function(t) {
                    t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? o(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
                },
                dataType: "json"
            })
        }
    }, t.prototype.onRemoveFromCart = function(t) {
        var a = o(this),
            r = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(), r.block({
            message: null,
            overlayCSS: {
                opacity: .6
            }
        }), t.data.addToCartHandler.addRequest({
            type: "POST",
            url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"),
            data: {
                cart_item_key: a.data("cart_item_key")
            },
            success: function(t) {
                t && t.fragments ? o(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
            },
            error: function() {
                window.location = a.attr("href")
            },
            dataType: "json"
        })
    }, t.prototype.updateButton = function(t, a, r, e) {
        (e = void 0 !== e && e) && (e.removeClass("loading"), e.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== e.parent().find(".added_to_cart").length || e.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), o(document.body).trigger("wc_cart_button_updated", [e]))
    }, t.prototype.updateFragments = function(t, a) {
        a && (o.each(a, function(t) {
            o(t).addClass("updating").fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                    opacity: .6
                }
            })
        }), o.each(a, function(t, a) {
            o(t).replaceWith(a), o(t).stop(!0).css("opacity", "1").unblock()
        }), o(document.body).trigger("wc_fragments_loaded"))
    }, new t
});
(function($) {
    'use strict';
    $(document).ready(function() {
        $('body').on('adding_to_cart', function(event, $button, data) {
            if ($button && $button.hasClass('vc_gitem-link')) {
                $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
            }
        }).on('added_to_cart', function(event, fragments, cart_hash, $button) {
            if ('undefined' === typeof($button)) {
                $button = $('.vc-gitem-add-to-cart-loading-btn');
            }
            if ($button && $button.hasClass('vc_gitem-link')) {
                $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();
            }
        });
    });
})(window.jQuery);
(function($) {
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        if (typeof handlerIn === "object") {
            cfg = $.extend(cfg, handlerIn)
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerOut,
                selector: selector
            })
        } else {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerIn,
                selector: handlerOut
            })
        }
        var cX, cY, pX, pY;
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY
        };
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).off("mousemove.hoverIntent", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev])
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function() {
                    compare(ev, ob)
                }, cfg.interval)
            }
        };
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev])
        };
        var handleHover = function(e) {
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
            }
            if (e.type == "mouseenter") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).on("mousemove.hoverIntent", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        compare(ev, ob)
                    }, cfg.interval)
                }
            } else {
                $(ob).off("mousemove.hoverIntent", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        delay(ev, ob)
                    }, cfg.timeout)
                }
            }
        };
        return this.on({
            'mouseenter.hoverIntent': handleHover,
            'mouseleave.hoverIntent': handleHover
        }, cfg.selector)
    }
})(jQuery);
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function(a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(o) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = o, i.c = n, i.d = function(e, t, o) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 11)
}([function(o, e, t) {
    "use strict";
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, o.exports = t
    }).call(e, t(2))
}, function(e, t, o) {
    "use strict";
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function(e, t, o) {
    "use strict";
    var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
    }
    e.exports = n
}, , , , , , , , , function(e, t, o) {
    e.exports = o(12)
}, function(e, t, o) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = l(o(1)),
        a = o(0),
        r = l(o(13));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = a.window.jarallax;
    if (a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
            return a.window.jarallax = s, this
        }, void 0 !== a.jQuery) {
        var c = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = r.default.apply(a.window, e);
            return "object" !== (void 0 === t ? "undefined" : n(t)) ? t : this
        };
        c.constructor = r.default.constructor;
        var u = a.jQuery.fn.jarallax;
        a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function() {
            return a.jQuery.fn.jarallax = u, this
        }
    }(0, i.default)(function() {
        (0, r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function(e, $, j) {
    "use strict";
    (function(e) {
        Object.defineProperty($, "__esModule", {
            value: !0
        });
        var d = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var o = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var r, l = e[Symbol.iterator](); !(n = (r = l.next()).done) && (o.push(r.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return o
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            t = function() {
                function n(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, o) {
                    return t && n(e.prototype, t), o && n(e, o), e
                }
            }(),
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = a(j(1)),
            n = a(j(14)),
            i = j(0);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = function() {
                for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), o = 0; o < e.length; o++)
                    if (t && void 0 !== t.style[e[o]]) return e[o];
                return !1
            }(),
            b = void 0,
            v = void 0,
            l = void 0,
            s = !1,
            c = !1;

        function u(e) {
            b = i.window.innerWidth || document.documentElement.clientWidth, v = i.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : p(e)) || "load" !== e.type && "dom-loaded" !== e.type || (s = !0)
        }
        u(), i.window.addEventListener("resize", u), i.window.addEventListener("orientationchange", u), i.window.addEventListener("load", u), (0, o.default)(function() {
            u({
                type: "dom-loaded"
            })
        });
        var m = [],
            f = !1;

        function y() {
            if (m.length) {
                l = void 0 !== i.window.pageYOffset ? i.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var t = s || !f || f.width !== b || f.height !== v,
                    o = c || t || !f || f.y !== l;
                c = s = !1, (t || o) && (m.forEach(function(e) {
                    t && e.onResize(), o && e.onScroll()
                }), f = {
                    width: b,
                    height: v,
                    y: l
                }), (0, n.default)(y)
            }
        }
        var g = !!e.ResizeObserver && new e.ResizeObserver(function(e) {
                e && e.length && (0, n.default)(function() {
                    e.forEach(function(e) {
                        e.target && e.target.jarallax && (s || e.target.jarallax.onResize(), c = !0)
                    })
                })
            }),
            h = 0,
            x = function() {
                function u(e, t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u);
                    var o = this;
                    o.instanceID = h++, o.$item = e, o.defaults = {
                        type: "scroll",
                        speed: .5,
                        imgSrc: null,
                        imgElement: ".jarallax-img",
                        imgSize: "cover",
                        imgPosition: "50% 50%",
                        imgRepeat: "no-repeat",
                        keepImg: !1,
                        elementInViewport: null,
                        zIndex: -100,
                        disableParallax: !1,
                        disableVideo: !1,
                        automaticResize: !0,
                        videoSrc: null,
                        videoStartTime: 0,
                        videoEndTime: 0,
                        videoVolume: 0,
                        videoPlayOnlyVisible: !0,
                        onScroll: null,
                        onInit: null,
                        onDestroy: null,
                        onCoverImage: null
                    };
                    var n = o.$item.getAttribute("data-jarallax"),
                        i = JSON.parse(n || "{}");
                    n && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                    var a = o.$item.dataset || {},
                        r = {};
                    if (Object.keys(a).forEach(function(e) {
                            var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                            t && void 0 !== o.defaults[t] && (r[t] = a[e])
                        }), o.options = o.extend({}, o.defaults, i, r, t), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function(e) {
                            "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                        }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                        var l = o.options.disableParallax;
                        o.options.disableParallax = function() {
                            return l.test(navigator.userAgent)
                        }
                    }
                    if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function() {
                            return !1
                        }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                        var s = o.options.disableVideo;
                        o.options.disableVideo = function() {
                            return s.test(navigator.userAgent)
                        }
                    }
                    "function" != typeof o.options.disableVideo && (o.options.disableVideo = function() {
                        return !1
                    });
                    var c = o.options.elementInViewport;
                    c && "object" === (void 0 === c ? "undefined" : p(c)) && void 0 !== c.length && (c = d(c, 1)[0]);
                    c instanceof Element || (c = null), o.options.elementInViewport = c, o.image = {
                        src: o.options.imgSrc || null,
                        $container: null,
                        useImgTag: !1,
                        position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                    }, o.initImg() && o.canInitParallax() && o.init()
                }
                return t(u, [{
                    key: "css",
                    value: function(t, o) {
                        return "string" == typeof o ? i.window.getComputedStyle(t).getPropertyValue(o) : (o.transform && r && (o[r] = o.transform), Object.keys(o).forEach(function(e) {
                            t.style[e] = o[e]
                        }), t)
                    }
                }, {
                    key: "extend",
                    value: function(o) {
                        var n = arguments;
                        return o = o || {}, Object.keys(arguments).forEach(function(t) {
                            n[t] && Object.keys(n[t]).forEach(function(e) {
                                o[e] = n[t][e]
                            })
                        }), o
                    }
                }, {
                    key: "getWindowData",
                    value: function() {
                        return {
                            width: b,
                            height: v,
                            y: l
                        }
                    }
                }, {
                    key: "initImg",
                    value: function() {
                        var e = this,
                            t = e.options.imgElement;
                        return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src))
                    }
                }, {
                    key: "canInitParallax",
                    value: function() {
                        return r && !this.options.disableParallax()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this,
                            t = {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                pointerEvents: "none"
                            },
                            o = {};
                        if (!e.options.keepImg) {
                            var n = e.$item.getAttribute("style");
                            if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) {
                                var i = e.image.$item.getAttribute("style");
                                i && e.image.$item.setAttribute("data-jarallax-original-styles", i)
                            }
                        }
                        if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                                position: "relative"
                            }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                                zIndex: 0
                            }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                                "z-index": e.options.zIndex
                            }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({
                                "object-fit": e.options.imgSize,
                                "object-position": e.options.imgPosition,
                                "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                                "max-width": "none"
                            }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({
                                "background-position": e.options.imgPosition,
                                "background-size": e.options.imgSize,
                                "background-repeat": e.options.imgRepeat,
                                "background-image": 'url("' + e.image.src + '")'
                            }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
                            for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
                                var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
                                l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode
                            }
                        o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.automaticResize && g && g.observe(e.$item), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                            "background-image": "none"
                        }), e.addToParallaxList()
                    }
                }, {
                    key: "addToParallaxList",
                    value: function() {
                        m.push(this), 1 === m.length && y()
                    }
                }, {
                    key: "removeFromParallaxList",
                    value: function() {
                        var o = this;
                        m.forEach(function(e, t) {
                            e.instanceID === o.instanceID && m.splice(t, 1)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        e.removeFromParallaxList();
                        var t = e.$item.getAttribute("data-jarallax-original-styles");
                        if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                            var o = e.image.$item.getAttribute("data-jarallax-original-styles");
                            e.image.$item.removeAttribute("data-jarallax-original-styles"), o ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                        }
                        e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                    }
                }, {
                    key: "clipContainer",
                    value: function() {
                        if ("fixed" === this.image.position) {
                            var e = this,
                                t = e.image.$container.getBoundingClientRect(),
                                o = t.width,
                                n = t.height;
                            if (!e.$clipStyles) e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);
                            var i = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + o + "px " + n + "px 0);\n           clip: rect(0, " + o + "px, " + n + "px, 0);\n        }";
                            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i
                        }
                    }
                }, {
                    key: "coverImage",
                    value: function() {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            o = t.height,
                            n = e.options.speed,
                            i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                            a = 0,
                            r = o,
                            l = 0;
                        return i && (a = n < 0 ? n * Math.max(o, v) : n * (o + v), 1 < n ? r = Math.abs(a - v) : n < 0 ? r = a / n + Math.abs(a) : r += Math.abs(v - o) * (1 - n), a /= 2), e.parallaxScrollDistance = a, l = i ? (v - r) / 2 : (o - r) / 2, e.css(e.image.$item, {
                            height: r + "px",
                            marginTop: l + "px",
                            left: "fixed" === e.image.position ? t.left + "px" : "0",
                            width: t.width + "px"
                        }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                            image: {
                                height: r,
                                marginTop: l
                            },
                            container: t
                        }
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return this.isElementInViewport || !1
                    }
                }, {
                    key: "onScroll",
                    value: function(e) {
                        var t = this,
                            o = t.$item.getBoundingClientRect(),
                            n = o.top,
                            i = o.height,
                            a = {},
                            r = o;
                        if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= v && r.left <= b, e || t.isElementInViewport) {
                            var l = Math.max(0, n),
                                s = Math.max(0, i + n),
                                c = Math.max(0, -n),
                                u = Math.max(0, n + i - v),
                                d = Math.max(0, i - (n + i - v)),
                                p = Math.max(0, -n + v - i),
                                m = 1 - 2 * (v - n) / (v + i),
                                f = 1;
                            if (i < v ? f = 1 - (c || u) / i : s <= v ? f = s / v : d <= v && (f = d / v), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = f), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                                var y = 1;
                                t.options.speed < 0 ? y -= t.options.speed * f : y += t.options.speed * (1 - f), a.transform = "scale(" + y + ") translate3d(0,0,0)"
                            }
                            if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                                var g = t.parallaxScrollDistance * m;
                                "absolute" === t.image.position && (g -= n), a.transform = "translate3d(0," + g + "px,0)"
                            }
                            t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
                                section: o,
                                beforeTop: l,
                                beforeTopEnd: s,
                                afterTop: c,
                                beforeBottom: u,
                                beforeBottomEnd: d,
                                afterBottom: p,
                                visiblePercent: f,
                                fromViewportCenter: m
                            })
                        }
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.coverImage(), this.clipContainer()
                    }
                }]), u
            }(),
            w = function(e) {
                ("object" === ("undefined" == typeof HTMLElement ? "undefined" : p(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : p(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
                for (var t = arguments[1], o = Array.prototype.slice.call(arguments, 2), n = e.length, i = 0, a = void 0; i < n; i++)
                    if ("object" === (void 0 === t ? "undefined" : p(t)) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new x(e[i], t)) : e[i].jarallax && (a = e[i].jarallax[t].apply(e[i].jarallax, o)), void 0 !== a) return a;
                return e
            };
        w.constructor = x, $.default = w
    }).call($, j(2))
}, function(e, t, o) {
    "use strict";
    var n = o(0),
        i = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function(e) {
            var t = +new Date,
                o = Math.max(0, 16 - (t - a)),
                n = setTimeout(e, o);
            return a = t, n
        },
        a = +new Date;
    var r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (i = i.bind(n), r = r.bind(n)), (e.exports = i).cancel = r
}]);
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(o) {
    var i = {};

    function n(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
    }
    n.m = o, n.c = i, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 7)
}([function(o, e, t) {
    "use strict";
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, o.exports = t
    }).call(e, t(2))
}, function(e, t, o) {
    "use strict";
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function(e, t, o) {
    "use strict";
    var i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window)
    }
    e.exports = i
}, function(e, t, o) {
    "use strict";
    e.exports = o(9)
}, , , , function(e, t, o) {
    e.exports = o(8)
}, function(e, t, o) {
    "use strict";
    var i = l(o(3)),
        n = l(o(0)),
        a = l(o(1)),
        r = l(o(10));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n.default.VideoWorker = n.default.VideoWorker || i.default, (0, r.default)(), (0, a.default)(function() {
        "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
    })
}, function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = function() {
            function i(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, o) {
                return t && i(e.prototype, t), o && i(e, o), e
            }
        }();

    function i() {
        this._done = [], this._fail = []
    }
    i.prototype = {
        execute: function(e, t) {
            var o = e.length;
            for (t = Array.prototype.slice.call(t); o--;) e[o].apply(null, t)
        },
        resolve: function() {
            this.execute(this._done, arguments)
        },
        reject: function() {
            this.execute(this._fail, arguments)
        },
        done: function(e) {
            this._done.push(e)
        },
        fail: function(e) {
            this._fail.push(e)
        }
    };
    var r = 0,
        l = 0,
        p = 0,
        u = 0,
        s = 0,
        d = new i,
        y = new i,
        c = function() {
            function i(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i);
                var o = this;
                o.url = e, o.options_default = {
                    autoplay: !1,
                    loop: !1,
                    mute: !1,
                    volume: 100,
                    showContols: !0,
                    startTime: 0,
                    endTime: 0
                }, o.options = o.extend({}, o.options_default, t), o.videoID = o.parseURL(e), o.videoID && (o.ID = r++, o.loadAPI(), o.init())
            }
            return a(i, [{
                key: "extend",
                value: function(o) {
                    var i = arguments;
                    return o = o || {}, Object.keys(arguments).forEach(function(t) {
                        i[t] && Object.keys(i[t]).forEach(function(e) {
                            o[e] = i[t][e]
                        })
                    }), o
                }
            }, {
                key: "parseURL",
                value: function(e) {
                    var t, o, i, n, a, r = !(!(t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                        l = !(!(o = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !o[3]) && o[3],
                        p = (i = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, a = 0, i.forEach(function(e) {
                            var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                            t && t[1] && t[2] && (n["ogv" === t[1] ? "ogg" : t[1]] = t[2], a = 1)
                        }), !!a && n);
                    return r ? (this.type = "youtube", r) : l ? (this.type = "vimeo", l) : !!p && (this.type = "local", p)
                }
            }, {
                key: "isValid",
                value: function() {
                    return !!this.videoID
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
                }
            }, {
                key: "off",
                value: function(o, i) {
                    var n = this;
                    this.userEventsList && this.userEventsList[o] && (i ? this.userEventsList[o].forEach(function(e, t) {
                        e === i && (n.userEventsList[o][t] = !1)
                    }) : delete this.userEventsList[o])
                }
            }, {
                key: "fire",
                value: function(e) {
                    var t = this,
                        o = [].slice.call(arguments, 1);
                    this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function(e) {
                        e && e.apply(t, o)
                    })
                }
            }, {
                key: "play",
                value: function(e) {
                    var t = this;
                    t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function(e) {
                        e && t.player.play()
                    })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
                }
            }, {
                key: "pause",
                value: function() {
                    var t = this;
                    t.player && ("youtube" === t.type && t.player.pauseVideo && YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(function(e) {
                        e || t.player.pause()
                    }), "local" === t.type && (t.player.paused || t.player.pause()))
                }
            }, {
                key: "mute",
                value: function() {
                    var e = this;
                    e.player && ("youtube" === e.type && e.player.mute && e.player.mute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0), "local" === e.type && (e.$video.muted = !0))
                }
            }, {
                key: "unmute",
                value: function() {
                    var e = this;
                    e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(e.options.volume), "local" === e.type && (e.$video.muted = !1))
                }
            }, {
                key: "setVolume",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = this;
                    t.player && e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e), "local" === t.type && (t.$video.volume = e / 100))
                }
            }, {
                key: "getVolume",
                value: function(t) {
                    var e = this;
                    e.player ? ("youtube" === e.type && e.player.getVolume && t(e.player.getVolume()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function(e) {
                        t(e)
                    }), "local" === e.type && t(100 * e.$video.volume)) : t(!1)
                }
            }, {
                key: "getMuted",
                value: function(t) {
                    var e = this;
                    e.player ? ("youtube" === e.type && e.player.isMuted && t(e.player.isMuted()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function(e) {
                        t(!!e)
                    }), "local" === e.type && t(e.$video.muted)) : t(null)
                }
            }, {
                key: "getImageURL",
                value: function(t) {
                    var o = this;
                    if (o.videoImage) t(o.videoImage);
                    else {
                        if ("youtube" === o.type) {
                            var e = ["maxresdefault", "sddefault", "hqdefault", "0"],
                                i = 0,
                                n = new Image;
                            n.onload = function() {
                                120 !== (this.naturalWidth || this.width) || i === e.length - 1 ? (o.videoImage = "https://img.youtube.com/vi/" + o.videoID + "/" + e[i] + ".jpg", t(o.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + o.videoID + "/" + e[i] + ".jpg")
                            }, n.src = "https://img.youtube.com/vi/" + o.videoID + "/" + e[i] + ".jpg"
                        }
                        if ("vimeo" === o.type) {
                            var a = new XMLHttpRequest;
                            a.open("GET", "https://vimeo.com/api/v2/video/" + o.videoID + ".json", !0), a.onreadystatechange = function() {
                                if (4 === this.readyState && 200 <= this.status && this.status < 400) {
                                    var e = JSON.parse(this.responseText);
                                    o.videoImage = e[0].thumbnail_large, t(o.videoImage)
                                }
                            }, a.send(), a = null
                        }
                    }
                }
            }, {
                key: "getIframe",
                value: function(e) {
                    this.getVideo(e)
                }
            }, {
                key: "getVideo",
                value: function(l) {
                    var p = this;
                    p.$video ? l(p.$video) : p.onAPIready(function() {
                        var e = void 0;
                        if (p.$video || ((e = document.createElement("div")).style.display = "none"), "youtube" === p.type) {
                            p.playerOptions = {}, p.playerOptions.videoId = p.videoID, p.playerOptions.playerVars = {
                                autohide: 1,
                                rel: 0,
                                autoplay: 0,
                                playsinline: 1
                            }, p.options.showContols || (p.playerOptions.playerVars.iv_load_policy = 3, p.playerOptions.playerVars.modestbranding = 1, p.playerOptions.playerVars.controls = 0, p.playerOptions.playerVars.showinfo = 0, p.playerOptions.playerVars.disablekb = 1);
                            var t = void 0,
                                o = void 0;
                            p.playerOptions.events = {
                                onReady: function(t) {
                                    p.options.mute ? t.target.mute() : p.options.volume && t.target.setVolume(p.options.volume), p.options.autoplay && p.play(p.options.startTime), p.fire("ready", t), setInterval(function() {
                                        p.getVolume(function(e) {
                                            p.options.volume !== e && (p.options.volume = e, p.fire("volumechange", t))
                                        })
                                    }, 150)
                                },
                                onStateChange: function(e) {
                                    p.options.loop && e.data === YT.PlayerState.ENDED && p.play(p.options.startTime), t || e.data !== YT.PlayerState.PLAYING || (t = 1, p.fire("started", e)), e.data === YT.PlayerState.PLAYING && p.fire("play", e), e.data === YT.PlayerState.PAUSED && p.fire("pause", e), e.data === YT.PlayerState.ENDED && p.fire("ended", e), e.data === YT.PlayerState.PLAYING ? o = setInterval(function() {
                                        p.fire("timeupdate", e), p.options.endTime && p.player.getCurrentTime() >= p.options.endTime && (p.options.loop ? p.play(p.options.startTime) : p.pause())
                                    }, 150) : clearInterval(o)
                                }
                            };
                            var i = !p.$video;
                            if (i) {
                                var n = document.createElement("div");
                                n.setAttribute("id", p.playerID), e.appendChild(n), document.body.appendChild(e)
                            }
                            p.player = p.player || new window.YT.Player(p.playerID, p.playerOptions), i && (p.$video = document.getElementById(p.playerID), p.videoWidth = parseInt(p.$video.getAttribute("width"), 10) || 1280, p.videoHeight = parseInt(p.$video.getAttribute("height"), 10) || 720)
                        }
                        if ("vimeo" === p.type) {
                            p.playerOptions = "", p.playerOptions += "player_id=" + p.playerID, p.playerOptions += "&autopause=0", p.playerOptions += "&transparent=0", p.options.showContols || (p.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), p.playerOptions += "&autoplay=" + (p.options.autoplay ? "1" : "0"), p.playerOptions += "&loop=" + (p.options.loop ? 1 : 0), p.$video || (p.$video = document.createElement("iframe"), p.$video.setAttribute("id", p.playerID), p.$video.setAttribute("src", "https://player.vimeo.com/video/" + p.videoID + "?" + p.playerOptions), p.$video.setAttribute("frameborder", "0"), e.appendChild(p.$video), document.body.appendChild(e)), p.player = p.player || new Vimeo.Player(p.$video), p.player.getVideoWidth().then(function(e) {
                                p.videoWidth = e || 1280
                            }), p.player.getVideoHeight().then(function(e) {
                                p.videoHeight = e || 720
                            }), p.options.startTime && p.options.autoplay && p.player.setCurrentTime(p.options.startTime), p.options.mute ? p.player.setVolume(0) : p.options.volume && p.player.setVolume(p.options.volume);
                            var a = void 0;
                            p.player.on("timeupdate", function(e) {
                                a || (p.fire("started", e), a = 1), p.fire("timeupdate", e), p.options.endTime && p.options.endTime && e.seconds >= p.options.endTime && (p.options.loop ? p.play(p.options.startTime) : p.pause())
                            }), p.player.on("play", function(e) {
                                p.fire("play", e), p.options.startTime && 0 === e.seconds && p.play(p.options.startTime)
                            }), p.player.on("pause", function(e) {
                                p.fire("pause", e)
                            }), p.player.on("ended", function(e) {
                                p.fire("ended", e)
                            }), p.player.on("loaded", function(e) {
                                p.fire("ready", e)
                            }), p.player.on("volumechange", function(e) {
                                p.fire("volumechange", e)
                            })
                        }
                        if ("local" === p.type) {
                            p.$video || (p.$video = document.createElement("video"), p.options.mute ? p.$video.muted = !0 : p.$video.volume && (p.$video.volume = p.options.volume / 100), p.options.loop && (p.$video.loop = !0), p.$video.setAttribute("playsinline", ""), p.$video.setAttribute("webkit-playsinline", ""), p.$video.setAttribute("id", p.playerID), e.appendChild(p.$video), document.body.appendChild(e), Object.keys(p.videoID).forEach(function(e) {
                                var t, o, i, n;
                                t = p.$video, o = p.videoID[e], i = "video/" + e, (n = document.createElement("source")).src = o, n.type = i, t.appendChild(n)
                            })), p.player = p.player || p.$video;
                            var r = void 0;
                            p.player.addEventListener("playing", function(e) {
                                r || p.fire("started", e), r = 1
                            }), p.player.addEventListener("timeupdate", function(e) {
                                p.fire("timeupdate", e), p.options.endTime && p.options.endTime && this.currentTime >= p.options.endTime && (p.options.loop ? p.play(p.options.startTime) : p.pause())
                            }), p.player.addEventListener("play", function(e) {
                                p.fire("play", e)
                            }), p.player.addEventListener("pause", function(e) {
                                p.fire("pause", e)
                            }), p.player.addEventListener("ended", function(e) {
                                p.fire("ended", e)
                            }), p.player.addEventListener("loadedmetadata", function() {
                                p.videoWidth = this.videoWidth || 1280, p.videoHeight = this.videoHeight || 720, p.fire("ready"), p.options.autoplay && p.play(p.options.startTime)
                            }), p.player.addEventListener("volumechange", function(e) {
                                p.getVolume(function(e) {
                                    p.options.volume = e
                                }), p.fire("volumechange", e)
                            })
                        }
                        l(p.$video)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.playerID = "VideoWorker-" + this.ID
                }
            }, {
                key: "loadAPI",
                value: function() {
                    if (!l || !p) {
                        var e = "";
                        if ("youtube" !== this.type || l || (l = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || p || (p = 1, e = "https://player.vimeo.com/api/player.js"), e) {
                            var t = document.createElement("script"),
                                o = document.getElementsByTagName("head")[0];
                            t.src = e, o.appendChild(t), t = o = null
                        }
                    }
                }
            }, {
                key: "onAPIready",
                value: function(e) {
                    if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || u ? "object" === ("undefined" == typeof YT ? "undefined" : n(YT)) && 1 === YT.loaded ? e() : d.done(function() {
                            e()
                        }) : (u = 1, window.onYouTubeIframeAPIReady = function() {
                            window.onYouTubeIframeAPIReady = null, d.resolve("done"), e()
                        })), "vimeo" === this.type)
                        if ("undefined" != typeof Vimeo || s) "undefined" != typeof Vimeo ? e() : y.done(function() {
                            e()
                        });
                        else {
                            s = 1;
                            var t = setInterval(function() {
                                "undefined" != typeof Vimeo && (clearInterval(t), y.resolve("done"), e())
                            }, 20)
                        }
                    "local" === this.type && e()
                }
            }]), i
        }();
    t.default = c
}, function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : p.default.jarallax;
        if (void 0 === e) return;
        var t = e.constructor,
            i = t.prototype.init;
        t.prototype.init = function() {
            var o = this;
            i.apply(o), o.video && !o.options.disableVideo() && o.video.getVideo(function(e) {
                var t = e.parentNode;
                o.css(e, {
                    position: o.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: 0,
                    zIndex: -1
                }), o.$video = e, o.image.$container.appendChild(e), t.parentNode.removeChild(t)
            })
        };
        var l = t.prototype.coverImage;
        t.prototype.coverImage = function() {
            var e = this,
                t = l.apply(e),
                o = !!e.image.$item && e.image.$item.nodeName;
            if (t && e.video && o && ("IFRAME" === o || "VIDEO" === o)) {
                var i = t.image.height,
                    n = i * e.image.width / e.image.height,
                    a = (t.container.width - n) / 2,
                    r = t.image.marginTop;
                t.container.width > n && (n = t.container.width, i = n * e.image.height / e.image.width, a = 0, r += (t.image.height - i) / 2), "IFRAME" === o && (i += 400, r -= 200), e.css(e.$video, {
                    width: n + "px",
                    marginLeft: a + "px",
                    height: i + "px",
                    marginTop: r + "px"
                })
            }
            return t
        };
        var o = t.prototype.initImg;
        t.prototype.initImg = function() {
            var e = this,
                t = o.apply(e);
            return e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc ? (e.defaultInitImgResult = t, !0) : t
        };
        var n = t.prototype.canInitParallax;
        t.prototype.canInitParallax = function() {
            var o = this,
                e = n.apply(o);
            if (!o.options.videoSrc) return e;
            var t = new r.default(o.options.videoSrc, {
                autoplay: !0,
                loop: !0,
                showContols: !1,
                startTime: o.options.videoStartTime || 0,
                endTime: o.options.videoEndTime || 0,
                mute: o.options.videoVolume ? 0 : 1,
                volume: o.options.videoVolume || 0
            });
            if (t.isValid())
                if (e) {
                    if (t.on("ready", function() {
                            if (o.options.videoPlayOnlyVisible) {
                                var e = o.onScroll;
                                o.onScroll = function() {
                                    e.apply(o), o.isVisible() ? t.play() : t.pause()
                                }
                            } else t.play()
                        }), t.on("started", function() {
                            o.image.$default_item = o.image.$item, o.image.$item = o.$video, o.image.width = o.video.videoWidth || 1280, o.image.height = o.video.videoHeight || 720, o.options.imgWidth = o.image.width, o.options.imgHeight = o.image.height, o.coverImage(), o.clipContainer(), o.onScroll(), o.image.$default_item && (o.image.$default_item.style.display = "none")
                        }), o.video = t, !o.defaultInitImgResult) return "local" !== t.type ? (t.getImageURL(function(e) {
                        o.image.src = e, o.init()
                    }), !1) : (o.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
                } else o.defaultInitImgResult || t.getImageURL(function(e) {
                    var t = o.$item.getAttribute("style");
                    t && o.$item.setAttribute("data-jarallax-original-styles", t), o.css(o.$item, {
                        "background-image": 'url("' + e + '")',
                        "background-position": "center",
                        "background-size": "cover"
                    })
                });
            return e
        };
        var a = t.prototype.destroy;
        t.prototype.destroy = function() {
            var e = this;
            e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), a.apply(e)
        }
    };
    var r = i(o(3)),
        p = i(o(0));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}]);
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.16
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a) {
    a.fn.addBack = a.fn.addBack || a.fn.andSelf;
    a.fn.extend({
        actual: function(b, l) {
            if (!this[b]) {
                throw '$.actual => The jQuery method "' + b + '" you called does not exist'
            }
            var f = {
                absolute: !1,
                clone: !1,
                includeMargin: !1
            };
            var i = a.extend(f, l);
            var e = this.eq(0);
            var h, j;
            if (i.clone === !0) {
                h = function() {
                    var m = "position: absolute !important; top: -1000 !important; ";
                    e = e.clone().attr("style", m).appendTo("body")
                };
                j = function() {
                    e.remove()
                }
            } else {
                var g = [];
                var d = "";
                var c;
                h = function() {
                    c = e.parents().addBack().filter(":hidden");
                    d += "visibility: hidden !important; display: block !important; ";
                    if (i.absolute === !0) {
                        d += "position: absolute !important; "
                    }
                    c.each(function() {
                        var m = a(this);
                        var n = m.attr("style");
                        g.push(n);
                        m.attr("style", n ? n + ";" + d : d)
                    })
                };
                j = function() {
                    c.each(function(m) {
                        var o = a(this);
                        var n = g[m];
                        if (n === undefined) {
                            o.removeAttr("style")
                        } else {
                            o.attr("style", n)
                        }
                    })
                }
            }
            h();
            var k = /(outer)/.test(b) ? e[b](i.includeMargin) : e[b]();
            j();
            return k
        }
    })
})(jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'))
    } else {
        factory(jQuery)
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s)
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s)
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value))
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5)
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie
            }
        }
        return result
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key)
    }
}));
/*!
 * jquery.counterup.js 1.1
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 * Update Date: Mar 21, 2017
 */
(function($) {
    "use strict";
    $.fn.counterUp = function(options) {
        var settings = $.extend({
            'time': 400,
            'delay': 10
        }, options);
        return this.each(function() {
            var $this = $(this);
            var $settings = settings;
            var counterUpper = function() {
                if (typeof $this.attr('counterup-text') === 'undefined')
                    $this.attr('counterup-text', $this.text());
                if ($this.attr('counterup-text') !== $this.text()) return;
                var nums = [];
                var divisions = $settings.time / $settings.delay;
                var num = $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                var isInt = /^[0-9]+$/.test(num);
                var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
                for (var i = divisions; i >= 1; i--) {
                    var newNum = parseInt(num / divisions * i);
                    if (isFloat) {
                        newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces)
                    }
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
                        }
                    }
                    nums.unshift(newNum)
                }
                $this.data('counterup-nums', nums);
                $this.text('0');
                var f = function() {
                    $this.text($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), $settings.delay)
                    } else {
                        delete $this.data('counterup-nums');
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null)
                    }
                };
                $this.data('counterup-func', f);
                setTimeout($this.data('counterup-func'), $settings.delay)
            };
            $this.waypoint(counterUpper, {
                offset: '100%',
                triggerOnce: !0
            })
        })
    }
})(jQuery);
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'))
    } else {
        factory(jQuery)
    }
})(function($) {
    'use strict';

    function Hoverdir(element, options) {
        this.$el = $(element);
        this.options = $.extend(!0, {}, this.defaults, options);
        this.isVisible = !1;
        this.$hoverElem = this.$el.find(this.options.hoverElem);
        this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
        this.support = this._supportsTransitions();
        this._loadEvents()
    }
    Hoverdir.prototype = {
        defaults: {
            speed: 300,
            easing: 'ease',
            hoverDelay: 0,
            inverse: !1,
            hoverElem: 'div'
        },
        constructor: Hoverdir,
        _supportsTransitions: function() {
            if (typeof Modernizr !== 'undefined') {
                return Modernizr.csstransitions
            } else {
                var b = document.body || document.documentElement,
                    s = b.style,
                    p = 'transition';
                if (typeof s[p] === 'string') {
                    return !0
                }
                var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
                p = p.charAt(0).toUpperCase() + p.substr(1);
                for (var i = 0; i < v.length; i++) {
                    if (typeof s[v[i] + p] === 'string') {
                        return !0
                    }
                }
                return !1
            }
        },
        _loadEvents: function() {
            this.$el.on('mouseenter.hoverdir mouseleave.hoverdir', $.proxy(function(event) {
                this.direction = this._getDir({
                    x: event.pageX,
                    y: event.pageY
                });
                if (event.type === 'mouseenter') {
                    this._showHover()
                } else {
                    this._hideHover()
                }
            }, this))
        },
        _showHover: function() {
            var styleCSS = this._getStyle(this.direction);
            if (this.support) {
                this.$hoverElem.css('transition', '')
            }
            this.$hoverElem.hide().css(styleCSS.from);
            clearTimeout(this.tmhover);
            this.tmhover = setTimeout($.proxy(function() {
                this.$hoverElem.show(0, $.proxy(function() {
                    if (this.support) {
                        this.$hoverElem.css('transition', this.transitionProp)
                    }
                    this._applyAnimation(styleCSS.to)
                }, this))
            }, this), this.options.hoverDelay);
            this.isVisible = !0
        },
        _hideHover: function() {
            var styleCSS = this._getStyle(this.direction);
            if (this.support) {
                this.$hoverElem.css('transition', this.transitionProp)
            }
            clearTimeout(this.tmhover);
            this._applyAnimation(styleCSS.from);
            this.isVisible = !1
        },
        _getDir: function(coordinates) {
            var w = this.$el.width(),
                h = this.$el.height(),
                x = (coordinates.x - this.$el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                y = (coordinates.y - this.$el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
                direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            return direction
        },
        _getStyle: function(direction) {
            var fromStyle, toStyle, slideFromTop = {
                    'left': '0',
                    'top': '-100%'
                },
                slideFromBottom = {
                    'left': '0',
                    'top': '100%'
                },
                slideFromLeft = {
                    'left': '-100%',
                    'top': '0'
                },
                slideFromRight = {
                    'left': '100%',
                    'top': '0'
                },
                slideTop = {
                    'top': '0'
                },
                slideLeft = {
                    'left': '0'
                };
            switch (direction) {
                case 0:
                case 'top':
                    fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                    toStyle = slideTop;
                    break;
                case 1:
                case 'right':
                    fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                    toStyle = slideLeft;
                    break;
                case 2:
                case 'bottom':
                    fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                    toStyle = slideTop;
                    break;
                case 3:
                case 'left':
                    fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                    toStyle = slideLeft;
                    break
            }
            return {
                from: fromStyle,
                to: toStyle
            }
        },
        _applyAnimation: function(styleCSS) {
            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            this.$hoverElem.stop().applyStyle(styleCSS, $.extend(!0, [], {
                duration: this.options.speed
            }))
        },
        show: function(direction) {
            this.$el.off('mouseenter.hoverdir mouseleave.hoverdir');
            if (!this.isVisible) {
                this.direction = direction || 'top';
                this._showHover()
            }
        },
        hide: function(direction) {
            this.rebuild();
            if (this.isVisible) {
                this.direction = direction || 'bottom';
                this._hideHover()
            }
        },
        setOptions: function(options) {
            this.options = $.extend(!0, {}, this.defaults, this.options, options)
        },
        destroy: function() {
            this.$el.off('mouseenter.hoverdir mouseleave.hoverdir');
            this.$el.data('hoverdir', null)
        },
        rebuild: function(options) {
            if (typeof options === 'object') {
                this.setOptions(options)
            }
            this._loadEvents()
        }
    };
    $.fn.hoverdir = function(option, parameter) {
        return this.each(function() {
            var data = $(this).data('hoverdir');
            var options = typeof option === 'object' && option;
            if (!data) {
                data = new Hoverdir(this, options);
                $(this).data('hoverdir', data)
            }
            if (typeof option === 'string') {
                data[option](parameter);
                if (option === 'destroy') {
                    $(this).data('hoverdir', !1)
                }
            }
        })
    };
    $.fn.hoverdir.Constructor = Hoverdir
});
/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
! function(t, e) {
    "use strict";

    function r(r, a, i, u, l) {
        function f() {
            L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function() {
                s(!0)
            }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function(t) {
                "resize" === t.type && (w = B = -1), s(t.all)
            }), u.a = function(t) {
                t = c(t), i.push.apply(i, t)
            }, u.g = function() {
                return i = n(i).filter(function() {
                    return !n(this).data(a.loadedName)
                })
            }, u.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function() {
                        return this === t[e]
                    });
                    r.length && s(!1, r)
                }
            }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
        }

        function c(t) {
            var i = a.defaultImage,
                o = a.placeholder,
                u = a.imageBase,
                l = a.srcsetAttribute,
                f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function() {
                var t = n(this),
                    r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
            }
            return t
        }

        function s(t, e) {
            if (!i.length) return void(a.autoDestroy && r.destroy());
            for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) {
                    var g = n(o[s]),
                        h = m(o[s]),
                        b = g.attr(a.attribute),
                        v = g.attr(a.imageBaseAttribute) || l,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
                }
            u && (i = n(i).filter(function() {
                return !n(this).data(c)
            }))
        }

        function d(t, e, r, i) {
            ++z;
            var o = function() {
                y("onError", t), p(), o = n.noop
            };
            y("beforeLoad", t);
            var u = a.attribute,
                l = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c);
            if (i) {
                var g = function() {
                    s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
                };
                t.off(I).one(I, o).one(D, g), y(i, t, function(e) {
                    e ? (t.off(D), g()) : (t.off(I), o())
                }) || t.trigger(I)
            } else {
                var h = n(new Image);
                h.one(I, o).one(D, function() {
                    t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
                });
                var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o
        }

        function g() {
            return w >= 0 ? w : w = n(t).width()
        }

        function h() {
            return B >= 0 ? B : B = n(t).height()
        }

        function m(t) {
            return t.tagName.toLowerCase()
        }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }

        function v(t, e) {
            var n, i = 0;
            return function(o, u) {
                function l() {
                    i = +new Date, e.call(r, o)
                }
                var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
            }
        }

        function p() {
            --z, i.length || z || y("onFinishedAll")
        }

        function y(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
        }
        var z = 0,
            w = -1,
            B = -1,
            L = !1,
            T = "afterLoad",
            D = "load",
            I = "error",
            N = "img",
            E = "src",
            F = "srcset",
            C = "sizes",
            O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
    }

    function a(a, o) {
        var u = this,
            l = n.extend({}, u.config, o),
            f = {},
            c = l.name + "-" + ++i;
        return u.config = function(t, r) {
            return r === e ? l[t] : (l[t] = r, u)
        }, u.addItems = function(t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t), u
        }, u.getItems = function() {
            return f.g ? f.g() : {}
        }, u.update = function(t) {
            return f.e && f.e({}, !t), u
        }, u.force = function(t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t), u
        }, u.loadAll = function() {
            return f.e && f.e({
                all: !0
            }, !0), u
        }, u.destroy = function() {
            return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
        }, r(u, l, a, f, c), l.chainable ? a : u
    }
    var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) {
        return new a(this, t)
    }, n.Lazy = n.lazy = function(t, r, i) {
        if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
            for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0]
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, n(t).on("load", function() {
        o = !0
    })
}(window);
(function() {
    this.ResizeSensor = function(element, callback) {
        function EventQueue() {
            this.q = [];
            this.add = function(ev) {
                this.q.push(ev)
            };
            var i, j;
            this.call = function() {
                for (i = 0, j = this.q.length; i < j; i++) {
                    this.q[i].call()
                }
            }
        }

        function getComputedStyle(element, prop) {
            if (element.currentStyle) {
                return element.currentStyle[prop]
            } else if (window.getComputedStyle) {
                return window.getComputedStyle(element, null).getPropertyValue(prop)
            } else {
                return element.style[prop]
            }
        }

        function attachResizeEvent(element, resized) {
            if (!element.resizedAttached) {
                element.resizedAttached = new EventQueue();
                element.resizedAttached.add(resized)
            } else if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return
            }
            element.resizeSensor = document.createElement('div');
            element.resizeSensor.className = 'resize-sensor';
            var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;';
            var styleChild = 'position: absolute; left: 0; top: 0;';
            element.resizeSensor.style.cssText = style;
            element.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + style + '">' + '<div style="' + styleChild + '"></div>' + '</div>' + '<div class="resize-sensor-shrink" style="' + style + '">' + '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' + '</div>';
            element.appendChild(element.resizeSensor);
            if (!{
                    fixed: 1,
                    absolute: 1
                }[getComputedStyle(element, 'position')]) {
                element.style.position = 'relative'
            }
            var expand = element.resizeSensor.childNodes[0];
            var expandChild = expand.childNodes[0];
            var shrink = element.resizeSensor.childNodes[1];
            var shrinkChild = shrink.childNodes[0];
            var lastWidth, lastHeight;
            var reset = function() {
                expandChild.style.width = expand.offsetWidth + 10 + 'px';
                expandChild.style.height = expand.offsetHeight + 10 + 'px';
                expand.scrollLeft = expand.scrollWidth;
                expand.scrollTop = expand.scrollHeight;
                shrink.scrollLeft = shrink.scrollWidth;
                shrink.scrollTop = shrink.scrollHeight;
                lastWidth = element.offsetWidth;
                lastHeight = element.offsetHeight
            };
            reset();
            var changed = function() {
                if (element.resizedAttached) {
                    element.resizedAttached.call()
                }
            };
            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb)
                } else {
                    el.addEventListener(name, cb)
                }
            };
            addEvent(expand, 'scroll', function() {
                if (element.offsetWidth > lastWidth || element.offsetHeight > lastHeight) {
                    changed()
                }
                reset()
            });
            addEvent(shrink, 'scroll', function() {
                if (element.offsetWidth < lastWidth || element.offsetHeight < lastHeight) {
                    changed()
                }
                reset()
            })
        }
        if ("[object Array]" === Object.prototype.toString.call(element) || ('undefined' !== typeof jQuery && element instanceof jQuery) || ('undefined' !== typeof Elements && element instanceof Elements)) {
            var i = 0,
                j = element.length;
            for (; i < j; i++) {
                attachResizeEvent(element[i], callback)
            }
        } else {
            attachResizeEvent(element, callback)
        }
        this.detach = function() {
            ResizeSensor.detach(element)
        }
    };
    this.ResizeSensor.detach = function(element) {
        if (element.resizeSensor) {
            element.removeChild(element.resizeSensor);
            delete element.resizeSensor;
            delete element.resizedAttached
        }
    }
})();
! function(a) {
    "use strict";
    var b = null,
        c = null,
        d = [],
        e = !1,
        f = !1,
        g = function(b) {
            b = a.extend({}, {
                fadingDuration: b && b.fadeSpeed || 0,
                containerMargin: 5,
                displayContainerInside: "window"
            }, b), this.each(function() {
                var c = a(this).addClass("simpleselected"),
                    d = a('<div class="simpleselect"></div>'),
                    f = a('<div class="placeholder"></div>').appendTo(d),
                    g = a('<div class="options"></div>').appendTo(d),
                    h = c.attr("id");
                h && d.attr("id", "simpleselect_" + h), c.off("change"), c.attr("size", 2);
                var i = {
                    select: c,
                    selectOptions: null,
                    simpleselect: d,
                    ssPlaceholder: f,
                    ssOptionsContainer: g,
                    ssOptionsContainerHeight: null,
                    ssOptions: null,
                    canBeClosed: !0,
                    isActive: !1,
                    isScrollable: !1,
                    isDisabled: !1,
                    options: b
                };
                d.data("simpleselect", i).on({
                    mousedown: function() {
                        i.canBeClosed = !1
                    },
                    click: function(b) {
                        var c = a(b.target);
                        c.hasClass("placeholder") ? t.setActive.call(i) : c.hasClass("option") && (e = !0, o.call(i, c), t.setInactive.call(i))
                    },
                    mouseup: function() {
                        i.canBeClosed = !0
                    },
                    mouseover: function(b) {
                        var c = a(b.target);
                        c.hasClass("option") && m.call(i, c)
                    }
                }), c.data("simpleselect", i).on({
                    keydown: function(a) {
                        13 == a.keyCode && t.setInactive.call(i)
                    },
                    focus: function() {
                        e || t.setActive.call(i)
                    },
                    blur: function() {
                        i.canBeClosed && t.setInactive.call(i)
                    },
                    change: function(a, b) {
                        b || a.stopImmediatePropagation();
                        var c = n.call(i);
                        m.call(i, c, !0)
                    },
                    click: function(a) {
                        a.stopPropagation()
                    }
                }), c.after(d);
                var j = a('<div class="hidden_select_container"></div>');
                c.after(j).appendTo(j), k.call(i), l.call(i), t.updatePresentationDependentVariables.call(i)
            })
        },
        h = function() {
            b = a(window).height()
        },
        i = function(a) {
            d.push(a)
        },
        j = function(b) {
            d = a.grep(d, function(a) {
                return a !== b
            })
        },
        k = function() {
            this.selectOptions = this.select.find("option");
            var b = "",
                c = function(a) {
                    b += '<div class="option">' + a.text() + "</div>"
                },
                d = function(d) {
                    b += '<div class="optgroup">';
                    var f = d.attr("label");
                    f && (b += '<div class="optgroup-label">' + e(f) + "</div>"), d.children("option").each(function() {
                        c(a(this))
                    }), b += "</div>"
                },
                e = function(a) {
                    return a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                },
                f = this.select.children("optgroup, option"),
                g = !1;
            f.each(function() {
                var b = a(this);
                b.is("optgroup") ? (d(b), g = !0) : c(b)
            }), this.ssOptions = this.ssOptionsContainer.html(b).find(".option"), this.ssPlaceholder.text(n.call(this).text())
        },
        l = function() {
            this.isDisabled = this.select.prop("disabled"), this.simpleselect[this.isDisabled ? "addClass" : "removeClass"]("disabled")
        },
        m = function(a, b) {
            if (this.ssOptions.removeClass("active"), a.addClass("active"), b && this.isScrollable) {
                var g, c = a.position(),
                    d = this.ssOptionsContainer.scrollTop(),
                    e = c.top,
                    f = this.ssOptionsContainer.height() - (c.top + a.outerHeight());
                0 > e ? g = d + e : 0 > f && (g = d - f), this.ssOptionsContainer.scrollTop(g)
            }
        },
        n = function() {
            var b = p.call(this),
                c = b.length ? this.selectOptions.index(b) : 0;
            return a(this.ssOptions[c])
        },
        o = function(b) {
            var c = a(this.selectOptions[this.ssOptions.index(b)]);
            this.select.val(c.val())
        },
        p = function() {
            return this.selectOptions.filter(":selected").first()
        },
        q = function() {
            this.ssOptionsContainer.css({
                height: "auto",
                "overflow-y": "visible"
            })
        },
        r = function() {
            this.ssOptionsContainer.hide(), this.ssOptionsContainer[0].offsetHeight, this.ssOptionsContainer.show()
        },
        s = function(d) {
            q.call(this);
            var e, f, g, h, i, j, k, l = "window" == this.options.displayContainerInside,
                m = a.proxy(function() {
                    e = d.position(), f = this.ssPlaceholderOffset.top - this.options.containerMargin - (l ? a(window).scrollTop() : 0), g = (l ? b : c) - f - this.ssPlaceholderHeight - 2 * this.options.containerMargin, h = f - e.top, i = g - (this.ssOptionsContainerOuterHeight - e.top - this.ssPlaceholderHeight), j = 0 > h ? Math.abs(h) : 0, k = 0 > i ? Math.abs(i) : 0
                }, this);
            m();
            var n = this.isScrollable;
            if (this.isScrollable = 0 > h || 0 > i, this.isScrollable) {
                this.ssOptionsContainer.css({
                    height: "auto",
                    "overflow-y": "scroll"
                }), this.ssOptionsContainer.height() != this.ssOptionsContainerHeight && (r.call(this), t.updatePresentationDependentVariables.call(this, "ssOptionsContainer", !1), m());
                var o = this.ssOptionsContainer.height() - j - k;
                this.ssOptionsContainer.css({
                    top: -(e.top - j)
                }).height(o).scrollTop(j)
            } else this.ssOptionsContainer.css({
                top: -e.top
            }), n && r.call(this)
        },
        t = {
            updatePresentationDependentVariables: function(a, b) {
                a && "ssPlaceholder" != a || (this.ssPlaceholderOffset = this.ssPlaceholder.offset(), this.ssPlaceholderHeight = this.ssPlaceholder.outerHeight()), a && "ssOptionsContainer" != a || (b !== !1 && q.call(this), this.ssOptionsContainerOuterHeight = this.ssOptionsContainer.outerHeight(!0), this.ssOptionsContainerHeight = this.ssOptionsContainer.height())
            },
            refreshContents: function() {
                k.call(this), t.updatePresentationDependentVariables.call(this)
            },
            refreshState: function() {
                l.call(this)
            },
            disable: function() {
                this.select.prop("disabled", !0), t.refreshState.call(this)
            },
            enable: function() {
                this.select.prop("disabled", !1), t.refreshState.call(this)
            },
            setActive: function() {
                if (!this.isActive && !this.isDisabled && this.ssOptions.length) {
                    this.lastValue = this.select.val(), this.simpleselect.addClass("active"), this.isActive = !0, i.call(this, this.simpleselect);
                    var b = n.call(this);
                    m.call(this, b), c = a(document).height(), this.ssOptionsContainer.fadeTo(0, 0).fadeTo(this.options.fadingDuration, 1), this.select.is(":focus") || this.select.focus(), s.call(this, b), f = !0
                }
            },
            setInactive: function() {
                if (this.isActive) {
                    this.simpleselect.removeClass("active"), this.isActive = !1, j.call(this, this.simpleselect), this.ssOptionsContainer.fadeOut(this.options.fadingDuration), this.select.is(":focus") && this.select.blur();
                    var a = this.select.val();
                    this.lastValue != a && (this.ssPlaceholder.text(p.call(this).text()), this.select.trigger("change", [!0]))
                }
            }
        };
    a.fn.simpleselect = function(b) {
        if (t[b]) {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                t[b].apply(a(this).data("simpleselect"), c)
            })
        } else g.apply(this, arguments);
        return this
    }, a(document).ready(function() {
        h(), a(window).on("resize.simpleselect", function() {
            h()
        }), a(document).on("click.simpleselect keyup.simpleselect", function(a) {
            if ("click" == a.type && (setTimeout(function() {
                    e = !1
                }, 0), f)) return f = !1, void 0;
            if ("click" == a.type || "keyup" == a.type && 27 == a.keyCode) {
                var b = d.length;
                if (b)
                    for (var c = d.slice(0), g = 0; b > g; g++) c[g].simpleselect("setInactive")
            }
        })
    })
}(jQuery);;
/*!
 * jquery.sumoselect - v3.0.3
 * http://hemantnegi.github.io/jquery.sumoselect
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "namespace sumo";
    e.fn.SumoSelect = function(t) {
        var l = e.extend({
                placeholder: "Select Here",
                csvDispCount: 3,
                captionFormat: "{0} Selected",
                captionFormatAllSelected: "{0} all selected!",
                floatWidth: 400,
                forceCustomRendering: !1,
                nativeOnDevice: ["Android", "BlackBerry", "iPhone", "iPad", "iPod", "Opera Mini", "IEMobile", "Silk"],
                outputAsCSV: !1,
                csvSepChar: ",",
                okCancelInMulti: !1,
                isClickAwayOk: !1,
                triggerChangeCombined: !0,
                selectAll: !1,
                search: !1,
                searchText: "Search...",
                noMatch: 'No matches for "{0}"',
                prefix: "",
                locale: ["OK", "Cancel", "Select All"],
                up: !1,
                showTitle: !0
            }, t),
            s = this.each(function() {
                var t = this;
                !this.sumo && e(this).is("select") && (this.sumo = {
                    E: e(t),
                    is_multi: e(t).attr("multiple"),
                    select: "",
                    caption: "",
                    placeholder: "",
                    optDiv: "",
                    CaptionCont: "",
                    ul: "",
                    is_floating: !1,
                    is_opened: !1,
                    mob: !1,
                    Pstate: [],
                    createElems: function() {
                        var t = this;
                        return t.E.wrap('<div class="SumoSelect" tabindex="0" role="button" aria-expanded="false">'), t.select = t.E.parent(), t.caption = e("<span>"), t.CaptionCont = e('<p class="CaptionCont SelectBox" ><label><i></i></label></p>').attr("style", t.E.attr("style")).prepend(t.caption), t.select.append(t.CaptionCont), t.is_multi || (l.okCancelInMulti = !1), t.E.attr("disabled") && t.select.addClass("disabled").removeAttr("tabindex"), l.outputAsCSV && t.is_multi && t.E.attr("name") && (t.select.append(e('<input class="HEMANT123" type="hidden" />').attr("name", t.E.attr("name")).val(t.getSelStr())), t.E.removeAttr("name")), t.isMobile() && !l.forceCustomRendering ? void t.setNativeMobile() : (t.E.attr("name") && t.select.addClass("sumo_" + t.E.attr("name").replace(/\[\]/, "")), t.E.addClass("SumoUnder").attr("tabindex", "-1"), t.optDiv = e('<div class="optWrapper ' + (l.up ? "up" : "") + '">'), t.floatingList(), t.ul = e('<ul class="options">'), t.optDiv.append(t.ul), l.selectAll && t.is_multi && t.SelAll(), l.search && t.Search(), t.ul.append(t.prepItems(t.E.children())), t.is_multi && t.multiSelelect(), t.select.append(t.optDiv), t.basicEvents(), void t.selAllState())
                    },
                    prepItems: function(t, l) {
                        var i = [],
                            s = this;
                        return e(t).each(function(t, n) {
                            n = e(n), i.push(n.is("optgroup") ? e('<li class="group ' + (n[0].disabled ? "disabled" : "") + '"><label>' + n.attr("label") + "</label><ul></ul></li>").find("ul").append(s.prepItems(n.children(), n[0].disabled)).end() : s.createLi(n, l))
                        }), i
                    },
                    createLi: function(t, l) {
                        var i = this;
                        t.attr("value") || t.attr("value", t.val());
                        var s = e('<li class="opt"><label>' + t.text() + "</label></li>");
                        return s.data("opt", t), t.data("li", s), i.is_multi && s.prepend("<span><i></i></span>"), (t[0].disabled || l) && (s = s.addClass("disabled")), i.onOptClick(s), t[0].selected && s.addClass("selected"), t.attr("class") && s.addClass(t.attr("class")), t.attr("title") && s.attr("title", t.attr("title")), s
                    },
                    getSelStr: function() {
                        return sopt = [], this.E.find("option:selected").each(function() {
                            sopt.push(e(this).val())
                        }), sopt.join(l.csvSepChar)
                    },
                    multiSelelect: function() {
                        var t = this;
                        t.optDiv.addClass("multiple"), t.okbtn = e('<p tabindex="0" class="btnOk">' + l.locale[0] + "</p>").click(function() {
                            t._okbtn(), t.hideOpts()
                        }), t.cancelBtn = e('<p tabindex="0" class="btnCancel">' + l.locale[1] + "</p>").click(function() {
                            t._cnbtn(), t.hideOpts()
                        });
                        var i = t.okbtn.add(t.cancelBtn);
                        t.optDiv.append(e('<div class="MultiControls">').append(i)), i.on("keydown.sumo", function(l) {
                            var i = e(this);
                            switch (l.which) {
                                case 32:
                                case 13:
                                    i.trigger("click");
                                    break;
                                case 9:
                                    if (i.hasClass("btnOk")) return;
                                case 27:
                                    return t._cnbtn(), void t.hideOpts()
                            }
                            l.stopPropagation(), l.preventDefault()
                        })
                    },
                    _okbtn: function() {
                        var e = this,
                            t = 0;
                        l.triggerChangeCombined && (e.E.find("option:selected").length != e.Pstate.length ? t = 1 : e.E.find("option").each(function(l, i) {
                            i.selected && e.Pstate.indexOf(l) < 0 && (t = 1)
                        }), t && (e.callChange(), e.setText()))
                    },
                    _cnbtn: function() {
                        var e = this;
                        e.E.find("option:selected").each(function() {
                            this.selected = !1
                        }), e.optDiv.find("li.selected").removeClass("selected");
                        for (var t = 0; t < e.Pstate.length; t++) e.E.find("option")[e.Pstate[t]].selected = !0, e.ul.find("li.opt").eq(e.Pstate[t]).addClass("selected");
                        e.selAllState()
                    },
                    SelAll: function() {
                        var t = this;
                        t.is_multi && (t.selAll = e('<p class="select-all"><span><i></i></span><label>' + l.locale[2] + "</label></p>"), t.optDiv.addClass("selall"), t.selAll.on("click", function() {
                            t.selAll.toggleClass("selected"), t.toggSelAll(t.selAll.hasClass("selected"), 1)
                        }), t.optDiv.prepend(t.selAll))
                    },
                    Search: function() {
                        var t = this,
                            i = t.CaptionCont.addClass("search"),
                            s = e('<p class="no-match">');
                        t.ftxt = e('<input type="text" class="search-txt" value="" placeholder="' + l.searchText + '">').on("click", function(e) {
                            e.stopPropagation()
                        }), i.append(t.ftxt), t.optDiv.children("ul").after(s), t.ftxt.on("keyup.sumo", function() {
                            var i = t.optDiv.find("ul.options li.opt").each(function(l, i) {
                                var i = e(i),
                                    s = i.data("opt")[0];
                                s.hidden = i.text().toLowerCase().indexOf(t.ftxt.val().toLowerCase()) < 0, i.toggleClass("hidden", s.hidden)
                            }).not(".hidden");
                            s.html(l.noMatch.replace(/\{0\}/g, "<em></em>")).toggle(!i.length), s.find("em").text(t.ftxt.val()), t.selAllState()
                        })
                    },
                    selAllState: function() {
                        var t = this;
                        if (l.selectAll && t.is_multi) {
                            var i = 0,
                                s = 0;
                            t.optDiv.find("li.opt").not(".hidden").each(function(t, l) {
                                e(l).hasClass("selected") && i++, e(l).hasClass("disabled") || s++
                            }), i == s ? t.selAll.removeClass("partial").addClass("selected") : 0 == i ? t.selAll.removeClass("selected partial") : t.selAll.addClass("partial")
                        }
                    },
                    showOpts: function() {
                        var t = this;
                        t.E.attr("disabled") || (t.E.trigger("sumo:opening", t), t.is_opened = !0, t.select.addClass("open").attr("aria-expanded", "true"), t.E.trigger("sumo:opened", t), t.ftxt ? t.ftxt.focus() : t.select.focus(), e(document).on("click.sumo", function(e) {
                            if (!t.select.is(e.target) && 0 === t.select.has(e.target).length) {
                                if (!t.is_opened) return;
                                t.hideOpts(), l.okCancelInMulti && (l.isClickAwayOk ? t._okbtn() : t._cnbtn())
                            }
                        }), t.is_floating && (H = t.optDiv.children("ul").outerHeight() + 2, t.is_multi && (H += parseInt(t.optDiv.css("padding-bottom"))), t.optDiv.css("height", H), e("body").addClass("sumoStopScroll")), t.setPstate())
                    },
                    setPstate: function() {
                        var e = this;
                        e.is_multi && (e.is_floating || l.okCancelInMulti) && (e.Pstate = [], e.E.find("option").each(function(t, l) {
                            l.selected && e.Pstate.push(t)
                        }))
                    },
                    callChange: function() {
                        this.E.trigger("change").trigger("click")
                    },
                    hideOpts: function() {
                        var t = this;
                        t.is_opened && (t.E.trigger("sumo:closing", t), t.is_opened = !1, t.select.removeClass("open").attr("aria-expanded", "true").find("ul li.sel").removeClass("sel"), t.E.trigger("sumo:closed", t), e(document).off("click.sumo"), t.select.focus(), e("body").removeClass("sumoStopScroll"), l.search && (t.ftxt.val(""), t.ftxt.trigger("keyup.sumo")))
                    },
                    setOnOpen: function() {
                        var e = this,
                            t = e.optDiv.find("li.opt:not(.hidden)").eq(l.search ? 0 : e.E[0].selectedIndex);
                        t.hasClass("disabled") && (t = t.next(":not(disabled)"), !t.length) || (e.optDiv.find("li.sel").removeClass("sel"), t.addClass("sel"), e.showOpts())
                    },
                    nav: function(e) {
                        var t, l = this,
                            i = l.ul.find("li.opt:not(.disabled, .hidden)"),
                            s = l.ul.find("li.opt.sel:not(.hidden)"),
                            n = i.index(s);
                        if (l.is_opened && s.length) {
                            if (e && n > 0) t = i.eq(n - 1);
                            else {
                                if (!(!e && n < i.length - 1 && n > -1)) return;
                                t = i.eq(n + 1)
                            }
                            s.removeClass("sel"), s = t.addClass("sel");
                            var a = l.ul,
                                o = a.scrollTop(),
                                c = s.position().top + o;
                            c >= o + a.height() - s.outerHeight() && a.scrollTop(c - a.height() + s.outerHeight()), o > c && a.scrollTop(c)
                        } else l.setOnOpen()
                    },
                    basicEvents: function() {
                        var t = this;
                        t.CaptionCont.click(function(e) {
                            t.E.trigger("click"), t.is_opened ? t.hideOpts() : t.showOpts(), e.stopPropagation()
                        }), t.select.on("keydown.sumo", function(e) {
                            switch (e.which) {
                                case 38:
                                    t.nav(!0);
                                    break;
                                case 40:
                                    t.nav(!1);
                                    break;
                                case 65:
                                    if (t.is_multi && e.ctrlKey) {
                                        t.toggSelAll(!e.shiftKey, 1);
                                        break
                                    }
                                    return;
                                case 32:
                                    if (l.search && t.ftxt.is(e.target)) return;
                                case 13:
                                    t.is_opened ? t.optDiv.find("ul li.sel").trigger("click") : t.setOnOpen();
                                    break;
                                case 9:
                                    return void(l.okCancelInMulti || t.hideOpts());
                                case 27:
                                    return l.okCancelInMulti && t._cnbtn(), void t.hideOpts();
                                default:
                                    return
                            }
                            e.preventDefault()
                        }), e(window).on("resize.sumo", function() {
                            t.floatingList()
                        })
                    },
                    onOptClick: function(t) {
                        var i = this;
                        t.click(function() {
                            var t = e(this);
                            if (!t.hasClass("disabled")) {
                                i.is_multi ? (t.toggleClass("selected"), t.data("opt")[0].selected = t.hasClass("selected"), i.selAllState()) : (t.parent().find("li.selected").removeClass("selected"), t.toggleClass("selected"), t.data("opt")[0].selected = !0), i.is_multi && l.triggerChangeCombined && (i.is_floating || l.okCancelInMulti) || (i.setText(), i.callChange()), i.is_multi || i.hideOpts()
                            }
                        })
                    },
                    setText: function() {
                        var t = this;
                        if (t.placeholder = "", t.is_multi) {
                            for (sels = t.E.find(":selected").not(":disabled"), i = 0; i < sels.length; i++) {
                                if (i + 1 >= l.csvDispCount && l.csvDispCount) {
                                    sels.length == t.E.find("option").length && l.captionFormatAllSelected ? t.placeholder = l.captionFormatAllSelected.replace(/\{0\}/g, sels.length) + "," : t.placeholder = l.captionFormat.replace(/\{0\}/g, sels.length) + ",";
                                    break
                                }
                                t.placeholder += e(sels[i]).text() + ", "
                            }
                            t.placeholder = t.placeholder.replace(/,([^,]*)$/, "$1")
                        } else t.placeholder = t.E.find(":selected").not(":disabled").text();
                        var s = !1;
                        t.placeholder || (s = !0, t.placeholder = t.E.attr("placeholder"), t.placeholder || (t.placeholder = t.E.find("option:disabled:selected").text())), t.placeholder = t.placeholder ? l.prefix + " " + t.placeholder : l.placeholder, t.caption.html(t.placeholder), l.showTitle && t.CaptionCont.attr("title", t.placeholder);
                        var n = t.select.find("input.HEMANT123");
                        return n.length && n.val(t.getSelStr()), s ? t.caption.addClass("placeholder") : t.caption.removeClass("placeholder"), t.placeholder
                    },
                    isMobile: function() {
                        for (var e = navigator.userAgent || navigator.vendor || window.opera, t = 0; t < l.nativeOnDevice.length; t++)
                            if (e.toString().toLowerCase().indexOf(l.nativeOnDevice[t].toLowerCase()) > 0) return l.nativeOnDevice[t];
                        return !1
                    },
                    setNativeMobile: function() {
                        var e = this;
                        e.E.addClass("SelectClass"), e.mob = !0, e.E.change(function() {
                            e.setText()
                        })
                    },
                    floatingList: function() {
                        var t = this;
                        t.is_floating = e(window).width() <= l.floatWidth, t.optDiv.toggleClass("isFloating", t.is_floating), t.is_floating || t.optDiv.css("height", ""), t.optDiv.toggleClass("okCancelInMulti", l.okCancelInMulti && !t.is_floating)
                    },
                    vRange: function(e) {
                        var t = this,
                            l = t.E.find("option");
                        if (l.length <= e || 0 > e) throw "index out of bounds";
                        return t
                    },
                    toggSel: function(t, l) {
                        var i, s = this;
                        "number" == typeof l ? (s.vRange(l), i = s.E.find("option")[l]) : i = s.E.find('option[value="' + l + '"]')[0] || 0, i && !i.disabled && i.selected != t && (i.selected = t, s.mob || e(i).data("li").toggleClass("selected", t), s.callChange(), s.setPstate(), s.setText(), s.selAllState())
                    },
                    toggDis: function(e, t) {
                        var l = this.vRange(t);
                        l.E.find("option")[t].disabled = e, e && (l.E.find("option")[t].selected = !1), l.mob || l.optDiv.find("ul.options li").eq(t).toggleClass("disabled", e).removeClass("selected"), l.setText()
                    },
                    toggSumo: function(e) {
                        var t = this;
                        return t.enabled = e, t.select.toggleClass("disabled", e), e ? (t.E.attr("disabled", "disabled"), t.select.removeAttr("tabindex")) : (t.E.removeAttr("disabled"), t.select.attr("tabindex", "0")), t
                    },
                    toggSelAll: function(t, l) {
                        var i = this;
                        i.E.find("option:not(:disabled,:hidden)").each(function(l, i) {
                            var s = i.selected,
                                i = e(i).data("li");
                            i.hasClass("hidden") || (t ? s || i.trigger("click") : s && i.trigger("click"))
                        }), l || (!i.mob && i.selAll && i.selAll.removeClass("partial").toggleClass("selected", !!t), i.callChange(), i.setText(), i.setPstate())
                    },
                    reload: function() {
                        var t = this.unload();
                        return e(t).SumoSelect(l)
                    },
                    unload: function() {
                        var e = this;
                        return e.select.before(e.E), e.E.show(), l.outputAsCSV && e.is_multi && e.select.find("input.HEMANT123").length && e.E.attr("name", e.select.find("input.HEMANT123").attr("name")), e.select.remove(), delete t.sumo, t
                    },
                    add: function(l, i, s) {
                        if ("undefined" == typeof l) throw "No value to add";
                        var n = this;
                        if (opts = n.E.find("option"), "number" == typeof i && (s = i, i = l), "undefined" == typeof i && (i = l), opt = e("<option></option>").val(l).html(i), opts.length < s) throw "index out of bounds";
                        return "undefined" == typeof s || opts.length == s ? (n.E.append(opt), n.mob || n.ul.append(n.createLi(opt))) : (opts.eq(s).before(opt), n.mob || n.ul.find("li.opt").eq(s).before(n.createLi(opt))), t
                    },
                    remove: function(e) {
                        var t = this.vRange(e);
                        t.E.find("option").eq(e).remove(), t.mob || t.optDiv.find("ul.options li").eq(e).remove(), t.setText()
                    },
                    selectItem: function(e) {
                        this.toggSel(!0, e)
                    },
                    unSelectItem: function(e) {
                        this.toggSel(!1, e)
                    },
                    selectAll: function() {
                        this.toggSelAll(!0)
                    },
                    unSelectAll: function() {
                        this.toggSelAll(!1)
                    },
                    disableItem: function(e) {
                        this.toggDis(!0, e)
                    },
                    enableItem: function(e) {
                        this.toggDis(!1, e)
                    },
                    enabled: !0,
                    enable: function() {
                        return this.toggSumo(!1)
                    },
                    disable: function() {
                        return this.toggSumo(!0)
                    },
                    init: function() {
                        var e = this;
                        return e.createElems(), e.setText(), e
                    }
                }, t.sumo.init())
            });
        return 1 == s.length ? s[0] : s
    }
});
!(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else if (typeof exports === 'object') {
        factory(require('jquery'))
    } else {
        factory(root.jQuery)
    }
})(this, function($) {
    'use strict';
    var PLUGIN_NAME = 'vide';
    var DEFAULTS = {
        volume: 1,
        playbackRate: 1,
        muted: !0,
        loop: !0,
        autoplay: !0,
        position: '50% 50%',
        posterType: 'detect',
        resizing: !0,
        bgColor: 'transparent'
    };
    var NOT_IMPLEMENTED_MSG = 'Not implemented';

    function parseOptions(str) {
        var obj = {};
        var delimiterIndex;
        var option;
        var prop;
        var val;
        var arr;
        var len;
        var i;
        arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');
        for (i = 0, len = arr.length; i < len; i++) {
            option = arr[i];
            if (option.search(/^(http|https|ftp):\/\//) !== -1 || option.search(':') === -1) {
                break
            }
            delimiterIndex = option.indexOf(':');
            prop = option.substring(0, delimiterIndex);
            val = option.substring(delimiterIndex + 1);
            if (!val) {
                val = undefined
            }
            if (typeof val === 'string') {
                val = val === 'true' || (val === 'false' ? !1 : val)
            }
            if (typeof val === 'string') {
                val = !isNaN(val) ? +val : val
            }
            obj[prop] = val
        }
        if (prop == null && val == null) {
            return str
        }
        return obj
    }

    function parsePosition(str) {
        str = '' + str;
        var args = str.split(/\s+/);
        var x = '50%';
        var y = '50%';
        var len;
        var arg;
        var i;
        for (i = 0, len = args.length; i < len; i++) {
            arg = args[i];
            if (arg === 'left') {
                x = '0%'
            } else if (arg === 'right') {
                x = '100%'
            } else if (arg === 'top') {
                y = '0%'
            } else if (arg === 'bottom') {
                y = '100%'
            } else if (arg === 'center') {
                if (i === 0) {
                    x = '50%'
                } else {
                    y = '50%'
                }
            } else {
                if (i === 0) {
                    x = arg
                } else {
                    y = arg
                }
            }
        }
        return {
            x: x,
            y: y
        }
    }

    function findPoster(path, callback) {
        var onLoad = function() {
            callback(this.src)
        };
        $('<img src="' + path + '.gif">').load(onLoad);
        $('<img src="' + path + '.jpg">').load(onLoad);
        $('<img src="' + path + '.jpeg">').load(onLoad);
        $('<img src="' + path + '.png">').load(onLoad)
    }

    function Vide(element, path, options) {
        this.$element = $(element);
        if (typeof path === 'string') {
            path = parseOptions(path)
        }
        if (!options) {
            options = {}
        } else if (typeof options === 'string') {
            options = parseOptions(options)
        }
        if (typeof path === 'string') {
            path = path.replace(/\.\w*$/, '')
        } else if (typeof path === 'object') {
            for (var i in path) {
                if (path.hasOwnProperty(i)) {
                    path[i] = path[i].replace(/\.\w*$/, '')
                }
            }
        }
        this.settings = $.extend({}, DEFAULTS, options);
        this.path = path;
        try {
            this.init()
        } catch (e) {
            if (e.message !== NOT_IMPLEMENTED_MSG) {
                throw e
            }
        }
    }
    Vide.prototype.init = function() {
        var vide = this;
        var path = vide.path;
        var poster = path;
        var sources = '';
        var $element = vide.$element;
        var settings = vide.settings;
        var position = parsePosition(settings.position);
        var posterType = settings.posterType;
        var $video;
        var $wrapper;
        $wrapper = vide.$wrapper = $('<div>').css({
            position: 'absolute',
            'z-index': -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: 'hidden',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover',
            'background-color': settings.bgColor,
            'background-repeat': 'no-repeat',
            'background-position': position.x + ' ' + position.y
        });
        if (typeof path === 'object') {
            if (path.poster) {
                poster = path.poster
            } else {
                if (path.mp4) {
                    poster = path.mp4
                } else if (path.webm) {
                    poster = path.webm
                } else if (path.ogv) {
                    poster = path.ogv
                }
            }
        }
        if (posterType === 'detect') {
            findPoster(poster, function(url) {
                $wrapper.css('background-image', 'url(' + url + ')')
            })
        } else if (posterType !== 'none') {
            $wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')')
        }
        if ($element.css('position') === 'static') {
            $element.css('position', 'relative')
        }
        $element.prepend($wrapper);
        if (typeof path === 'object') {
            if (path.mp4) {
                sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">'
            }
            if (path.webm) {
                sources += '<source src="' + path.webm + '.webm" type="video/webm">'
            }
            if (path.ogv) {
                sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">'
            }
            $video = vide.$video = $('<video>' + sources + '</video>')
        } else {
            $video = vide.$video = $('<video>' + '<source src="' + path + '.mp4" type="video/mp4">' + '<source src="' + path + '.webm" type="video/webm">' + '<source src="' + path + '.ogv" type="video/ogg">' + '</video>')
        }
        try {
            $video.prop({
                autoplay: settings.autoplay,
                loop: settings.loop,
                volume: settings.volume,
                muted: settings.muted,
                defaultMuted: settings.muted,
                playbackRate: settings.playbackRate,
                defaultPlaybackRate: settings.playbackRate
            })
        } catch (e) {
            throw new Error(NOT_IMPLEMENTED_MSG)
        }
        $video.css({
            margin: 'auto',
            position: 'absolute',
            'z-index': -1,
            top: position.y,
            left: position.x,
            '-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
            '-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
            '-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
            transform: 'translate(-' + position.x + ', -' + position.y + ')',
            visibility: 'hidden',
            opacity: 0
        }).one('canplaythrough.' + PLUGIN_NAME, function() {
            vide.resize()
        }).one('playing.' + PLUGIN_NAME, function() {
            $video.css({
                visibility: 'visible',
                opacity: 1
            });
            $wrapper.css('background-image', 'none')
        });
        $element.on('resize.' + PLUGIN_NAME, function() {
            if (settings.resizing) {
                vide.resize()
            }
        });
        $wrapper.append($video)
    };
    Vide.prototype.getVideoObject = function() {
        return this.$video[0]
    };
    Vide.prototype.resize = function() {
        if (!this.$video) {
            return
        }
        var $wrapper = this.$wrapper;
        var $video = this.$video;
        var video = $video[0];
        var videoHeight = video.videoHeight;
        var videoWidth = video.videoWidth;
        var wrapperHeight = $wrapper.height();
        var wrapperWidth = $wrapper.width();
        if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
            $video.css({
                width: wrapperWidth + 2,
                height: 'auto'
            })
        } else {
            $video.css({
                width: 'auto',
                height: wrapperHeight + 2
            })
        }
    };
    Vide.prototype.destroy = function() {
        delete $[PLUGIN_NAME].lookup[this.index];
        this.$video && this.$video.off(PLUGIN_NAME);
        this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
        this.$wrapper.remove()
    };
    $[PLUGIN_NAME] = {
        lookup: []
    };
    $.fn[PLUGIN_NAME] = function(path, options) {
        var instance;
        this.each(function() {
            instance = $.data(this, PLUGIN_NAME);
            instance && instance.destroy();
            instance = new Vide(this, path, options);
            instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
            $.data(this, PLUGIN_NAME, instance)
        });
        return this
    };
    $(document).ready(function() {
        var $window = $(window);
        $window.on('resize.' + PLUGIN_NAME, function() {
            for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
                instance = $[PLUGIN_NAME].lookup[i];
                if (instance && instance.settings.resizing) {
                    instance.resize()
                }
            }
        });
        $window.on('unload.' + PLUGIN_NAME, function() {
            return !1
        });
        $(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function(i, element) {
            var $element = $(element);
            var options = $element.data(PLUGIN_NAME + '-options');
            var path = $element.data(PLUGIN_NAME + '-bg');
            $element[PLUGIN_NAME](path, options)
        })
    })
});
(function($) {
    $.fn.viewportChecker = function(useroptions) {
        var options = {
            classToAdd: 'visible',
            classToRemove: 'invisible',
            classToAddForFullView: 'full-visible',
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function(elem, action) {},
            scrollHorizontal: !1,
            scrollBox: window
        };
        $.extend(options, useroptions);
        var $elem = this,
            boxSize = {
                height: $(options.scrollBox).height(),
                width: $(options.scrollBox).width()
            },
            scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('windows phone') != -1) ? 'body' : 'html');
        this.checkElements = function() {
            var viewportStart, viewportEnd;
            if (!options.scrollHorizontal) {
                viewportStart = $(scrollElem).scrollTop();
                viewportEnd = (viewportStart + boxSize.height)
            } else {
                viewportStart = $(scrollElem).scrollLeft();
                viewportEnd = (viewportStart + boxSize.width)
            }
            $elem.each(function() {
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};
                if ($obj.data('vp-add-class'))
                    attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                    attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-add-class-full-view'))
                    attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
                if ($obj.data('vp-keep-add-class'))
                    attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
                if ($obj.data('vp-offset'))
                    attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                    attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);
                if ($obj.data('vp-animated') && !objOptions.repeat) {
                    return
                }
                if (String(objOptions.offset).indexOf("%") > 0)
                    objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;
                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                    rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();
                var elemStart = Math.round(rawStart) + objOptions.offset,
                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();
                if (objOptions.invertBottomOffset)
                    elemEnd -= (objOptions.offset * 2);
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {
                    $obj.removeClass(objOptions.classToRemove);
                    $obj.addClass(objOptions.classToAdd);
                    objOptions.callbackFunction($obj, "add");
                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                        $obj.addClass(objOptions.classToAddForFullView);
                    else $obj.removeClass(objOptions.classToAddForFullView);
                    $obj.data('vp-animated', !0);
                    if (objOptions.removeClassAfterAnimation) {
                        $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $obj.removeClass(objOptions.classToAdd)
                        })
                    }
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)) {
                    $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);
                    objOptions.callbackFunction($obj, "remove");
                    $obj.data('vp-animated', !1)
                }
            })
        };
        if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            $(document).bind("touchmove MSPointerMove pointermove", this.checkElements)
        }
        $(options.scrollBox).bind("load scroll", this.checkElements);
        $(window).resize(function(e) {
            boxSize = {
                height: $(options.scrollBox).height(),
                width: $(options.scrollBox).width()
            };
            $elem.checkElements()
        });
        this.checkElements();
        return this
    }
})(jQuery);
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
/*! jssocials - v1.4.0 - 2016-10-10
 * http://js-socials.com
 * Copyright (c) 2016 Artem Tabalin; Licensed MIT */
! function(a, b, c) {
    function d(a, c) {
        var d = b(a);
        d.data(f, this), this._$element = d, this.shares = [], this._init(c), this._render()
    }
    var e = "JSSocials",
        f = e,
        g = function(a, c) {
            return b.isFunction(a) ? a.apply(c, b.makeArray(arguments).slice(2)) : a
        },
        h = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
        i = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,
        j = {
            G: 1e9,
            M: 1e6,
            K: 1e3
        },
        k = {};
    d.prototype = {
        url: "",
        text: "",
        shareIn: "blank",
        showLabel: function(a) {
            return this.showCount === !1 ? a > this.smallScreenWidth : a >= this.largeScreenWidth
        },
        showCount: function(a) {
            return a <= this.smallScreenWidth ? "inside" : !0
        },
        smallScreenWidth: 640,
        largeScreenWidth: 1024,
        resizeTimeout: 200,
        elementClass: "jssocials",
        sharesClass: "jssocials-shares",
        shareClass: "jssocials-share",
        shareButtonClass: "jssocials-share-button",
        shareLinkClass: "jssocials-share-link",
        shareLogoClass: "jssocials-share-logo",
        shareLabelClass: "jssocials-share-label",
        shareLinkCountClass: "jssocials-share-link-count",
        shareCountBoxClass: "jssocials-share-count-box",
        shareCountClass: "jssocials-share-count",
        shareZeroCountClass: "jssocials-share-no-count",
        _init: function(a) {
            this._initDefaults(), b.extend(this, a), this._initShares(), this._attachWindowResizeCallback()
        },
        _initDefaults: function() {
            this.url = a.location.href, this.text = b.trim(b("meta[name=description]").attr("content") || b("title").text())
        },
        _initShares: function() {
            this.shares = b.map(this.shares, b.proxy(function(a) {
                "string" == typeof a && (a = {
                    share: a
                });
                var c = a.share && k[a.share];
                if (!c && !a.renderer) throw Error("Share '" + a.share + "' is not found");
                return b.extend({
                    url: this.url,
                    text: this.text
                }, c, a)
            }, this))
        },
        _attachWindowResizeCallback: function() {
            b(a).on("resize", b.proxy(this._windowResizeHandler, this))
        },
        _detachWindowResizeCallback: function() {
            b(a).off("resize", this._windowResizeHandler)
        },
        _windowResizeHandler: function() {
            (b.isFunction(this.showLabel) || b.isFunction(this.showCount)) && (a.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(b.proxy(this.refresh, this), this.resizeTimeout))
        },
        _render: function() {
            this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = b("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
        },
        _defineOptionsByScreen: function() {
            this._screenWidth = b(a).width(), this._showLabel = g(this.showLabel, this, this._screenWidth), this._showCount = g(this.showCount, this, this._screenWidth)
        },
        _renderShares: function() {
            b.each(this.shares, b.proxy(function(a, b) {
                this._renderShare(b)
            }, this))
        },
        _renderShare: function(a) {
            var c;
            c = b.isFunction(a.renderer) ? b(a.renderer()) : this._createShare(a), c.addClass(this.shareClass).addClass(a.share ? "jssocials-share-" + a.share : "").addClass(a.css).appendTo(this._$shares)
        },
        _createShare: function(a) {
            var c = b("<div>"),
                d = this._createShareLink(a).appendTo(c);
            if (this._showCount) {
                var e = "inside" === this._showCount,
                    f = e ? d : b("<div>").addClass(this.shareCountBoxClass).appendTo(c);
                f.addClass(e ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(a, f)
            }
            return c
        },
        _createShareLink: function(a) {
            var c = this._getShareStrategy(a),
                d = c.call(a, {
                    shareUrl: this._getShareUrl(a)
                });
            return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)), this._showLabel && d.append(this._createShareLabel(a)), b.each(this.on || {}, function(c, e) {
                b.isFunction(e) && d.on(c, b.proxy(e, a))
            }), d
        },
        _getShareStrategy: function(a) {
            var b = m[a.shareIn || this.shareIn];
            if (!b) throw Error("Share strategy '" + this.shareIn + "' not found");
            return b
        },
        _getShareUrl: function(a) {
            var b = g(a.shareUrl, a);
            return this._formatShareUrl(b, a)
        },
        _createShareLogo: function(a) {
            var c = a.logo,
                d = h.test(c) ? b("<img>").attr("src", a.logo) : b("<i>").addClass(c);
            return d.addClass(this.shareLogoClass), d
        },
        _createShareLabel: function(a) {
            return b("<span>").addClass(this.shareLabelClass).text(a.label)
        },
        _renderShareCount: function(a, c) {
            var d = b("<span>").addClass(this.shareCountClass);
            c.addClass(this.shareZeroCountClass).append(d), this._loadCount(a).done(b.proxy(function(a) {
                a && (c.removeClass(this.shareZeroCountClass), d.text(a))
            }, this))
        },
        _loadCount: function(a) {
            var c = b.Deferred(),
                d = this._getCountUrl(a);
            if (!d) return c.resolve(0).promise();
            var e = b.proxy(function(b) {
                c.resolve(this._getCountValue(b, a))
            }, this);
            return b.getJSON(d).done(e).fail(function() {
                b.get(d).done(e).fail(function() {
                    c.resolve(0)
                })
            }), c.promise()
        },
        _getCountUrl: function(a) {
            var b = g(a.countUrl, a);
            return this._formatShareUrl(b, a)
        },
        _getCountValue: function(a, c) {
            var d = (b.isFunction(c.getCount) ? c.getCount(a) : a) || 0;
            return "string" == typeof d ? d : this._formatNumber(d)
        },
        _formatNumber: function(a) {
            return b.each(j, function(b, c) {
                return a >= c ? (a = parseFloat((a / c).toFixed(2)) + b, !1) : void 0
            }), a
        },
        _formatShareUrl: function(b, c) {
            return b.replace(i, function(b, d, e) {
                var f = c[e] || "";
                return f ? (d || "") + a.encodeURIComponent(f) : ""
            })
        },
        _clear: function() {
            a.clearTimeout(this._resizeTimer), this._$element.empty()
        },
        _passOptionToShares: function(a, c) {
            var d = this.shares;
            b.each(["url", "text"], function(e, f) {
                f === a && b.each(d, function(b, d) {
                    d[a] = c
                })
            })
        },
        _normalizeShare: function(a) {
            return b.isNumeric(a) ? this.shares[a] : "string" == typeof a ? b.grep(this.shares, function(b) {
                return b.share === a
            })[0] : a
        },
        refresh: function() {
            this._render()
        },
        destroy: function() {
            this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(f)
        },
        option: function(a, b) {
            return 1 === arguments.length ? this[a] : (this[a] = b, this._passOptionToShares(a, b), void this.refresh())
        },
        shareOption: function(a, b, c) {
            return a = this._normalizeShare(a), 2 === arguments.length ? a[b] : (a[b] = c, void this.refresh())
        }
    }, b.fn.jsSocials = function(a) {
        var e = b.makeArray(arguments),
            g = e.slice(1),
            h = this;
        return this.each(function() {
            var e, i = b(this),
                j = i.data(f);
            if (j)
                if ("string" == typeof a) {
                    if (e = j[a].apply(j, g), e !== c && e !== j) return h = e, !1
                } else j._detachWindowResizeCallback(), j._init(a), j._render();
            else new d(i, a)
        }), h
    };
    var l = function(a) {
            var c;
            b.isPlainObject(a) ? c = d.prototype : (c = k[a], a = arguments[1] || {}), b.extend(c, a)
        },
        m = {
            popup: function(c) {
                return b("<a>").attr("href", "#").on("click", function() {
                    return a.open(c.shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"), !1
                })
            },
            blank: function(a) {
                return b("<a>").attr({
                    target: "_blank",
                    href: a.shareUrl
                })
            },
            self: function(a) {
                return b("<a>").attr({
                    target: "_self",
                    href: a.shareUrl
                })
            }
        };
    a.jsSocials = {
        Socials: d,
        shares: k,
        shareStrategies: m,
        setDefaults: l
    }
}(window, jQuery),
function(a, b, c) {
    b.extend(c.shares, {
        email: {
            label: "E-mail",
            logo: "fa fa-at",
            shareUrl: "mailto:{to}?subject={text}&body={url}",
            countUrl: "",
            shareIn: "self"
        },
        twitter: {
            label: "Tweet",
            logo: "fa fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: ""
        },
        facebook: {
            label: "Like",
            logo: "fa fa-facebook",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
            countUrl: "https://graph.facebook.com/?id={url}",
            getCount: function(a) {
                return a.share && a.share.share_count || 0
            }
        },
        vkontakte: {
            label: "Like",
            logo: "fa fa-vk",
            shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
            countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
            getCount: function(a) {
                return parseInt(a.slice(15, -2).split(", ")[1])
            }
        },
        googleplus: {
            label: "+1",
            logo: "fa fa-google",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: ""
        },
        linkedin: {
            label: "Share",
            logo: "fa fa-linkedin",
            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
            countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            getCount: function(a) {
                return a.count
            }
        },
        pinterest: {
            label: "Pin it",
            logo: "fa fa-pinterest",
            shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
            countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
            getCount: function(a) {
                return a.count
            }
        },
        stumbleupon: {
            label: "Share",
            logo: "fa fa-stumbleupon",
            shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
            countUrl: "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
            getCount: function(a) {
                return a.result.views
            }
        },
        telegram: {
            label: "Telegram",
            logo: "fa fa-paper-plane",
            shareUrl: "tg://msg?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        whatsapp: {
            label: "WhatsApp",
            logo: "fa fa-whatsapp",
            shareUrl: "whatsapp://send?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        line: {
            label: "LINE",
            logo: "fa fa-comment",
            shareUrl: "http://line.me/R/msg/text/?{text} {url}",
            countUrl: ""
        },
        viber: {
            label: "Viber",
            logo: "fa fa-volume-control-phone",
            shareUrl: "viber://forward?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        pocket: {
            label: "Pocket",
            logo: "fa fa-get-pocket",
            shareUrl: "https://getpocket.com/save?url={url}&title={title}",
            countUrl: ""
        },
        messenger: {
            label: "Share",
            logo: "fa fa-commenting",
            shareUrl: "fb-messenger://share?link={url}",
            countUrl: "",
            shareIn: "self"
        }
    })
}(window, jQuery, window.jsSocials);
(function($) {
    'use strict';
    var _self = {
        cache: {},
        support: {},
        objects: {},
        init: function(options) {
            return this.each(function() {
                $(this).unbind('click.lightcase').bind('click.lightcase', function(event) {
                    event.preventDefault();
                    $(this).lightcase('start', options)
                })
            })
        },
        start: function(options) {
            _self.origin = lightcase.origin = this;
            _self.settings = lightcase.settings = $.extend(!0, {
                idPrefix: 'lightcase-',
                classPrefix: 'lightcase-',
                attrPrefix: 'lc-',
                transition: 'elastic',
                transitionOpen: null,
                transitionClose: null,
                transitionIn: null,
                transitionOut: null,
                cssTransitions: !0,
                speedIn: 250,
                speedOut: 250,
                width: null,
                height: null,
                maxWidth: 800,
                maxHeight: 500,
                forceWidth: !1,
                forceHeight: !1,
                liveResize: !0,
                fullScreenModeForMobile: !0,
                mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
                disableShrink: !1,
                fixedRatio: !0,
                shrinkFactor: .75,
                overlayOpacity: .9,
                slideshow: !1,
                slideshowAutoStart: !0,
                timeout: 5000,
                swipe: !0,
                useKeys: !0,
                useCategories: !0,
                useAsCollection: !1,
                navigateEndless: !0,
                closeOnOverlayClick: !0,
                title: null,
                caption: null,
                showTitle: !0,
                showCaption: !0,
                showSequenceInfo: !0,
                inline: {
                    width: 'auto',
                    height: 'auto'
                },
                ajax: {
                    width: 'auto',
                    height: 'auto',
                    type: 'get',
                    dataType: 'html',
                    data: {}
                },
                iframe: {
                    width: 800,
                    height: 500,
                    frameborder: 0
                },
                flash: {
                    width: 400,
                    height: 205,
                    wmode: 'transparent'
                },
                video: {
                    width: 400,
                    height: 225,
                    poster: '',
                    preload: 'auto',
                    controls: !0,
                    autobuffer: !0,
                    autoplay: !0,
                    loop: !1
                },
                attr: 'data-rel',
                href: null,
                type: null,
                typeMapping: {
                    'image': 'jpg,jpeg,gif,png,bmp',
                    'flash': 'swf',
                    'video': 'mp4,mov,ogv,ogg,webm',
                    'iframe': 'html,php',
                    'ajax': 'json,txt',
                    'inline': '#'
                },
                errorMessage: function() {
                    return '<p class="' + _self.settings.classPrefix + 'error">' + _self.settings.labels.errorMessage + '</p>'
                },
                labels: {
                    'errorMessage': 'Source could not be found...',
                    'sequenceInfo.of': ' of ',
                    'close': 'Close',
                    'navigator.prev': 'Prev',
                    'navigator.next': 'Next',
                    'navigator.play': 'Play',
                    'navigator.pause': 'Pause'
                },
                markup: function() {
                    _self.objects.body.append(_self.objects.overlay = $('<div id="' + _self.settings.idPrefix + 'overlay"></div>'), _self.objects.loading = $('<div id="' + _self.settings.idPrefix + 'loading" class="' + _self.settings.classPrefix + 'icon-spin"></div>'), _self.objects.case = $('<div id="' + _self.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>'));
                    _self.objects.case.after(_self.objects.close = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-close"><span>' + _self.settings.labels.close + '</span></a>'), _self.objects.nav = $('<div id="' + _self.settings.idPrefix + 'nav"></div>'));
                    _self.objects.nav.append(_self.objects.prev = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-prev"><span>' + _self.settings.labels['navigator.prev'] + '</span></a>').hide(), _self.objects.next = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-next"><span>' + _self.settings.labels['navigator.next'] + '</span></a>').hide(), _self.objects.play = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-play"><span>' + _self.settings.labels['navigator.play'] + '</span></a>').hide(), _self.objects.pause = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-pause"><span>' + _self.settings.labels['navigator.pause'] + '</span></a>').hide());
                    _self.objects.case.append(_self.objects.content = $('<div id="' + _self.settings.idPrefix + 'content"></div>'), _self.objects.info = $('<div id="' + _self.settings.idPrefix + 'info"></div>'));
                    _self.objects.content.append(_self.objects.contentInner = $('<div class="' + _self.settings.classPrefix + 'contentInner"></div>'));
                    _self.objects.info.append(_self.objects.sequenceInfo = $('<div id="' + _self.settings.idPrefix + 'sequenceInfo"></div>'), _self.objects.title = $('<h4 id="' + _self.settings.idPrefix + 'title"></h4>'), _self.objects.caption = $('<p id="' + _self.settings.idPrefix + 'caption"></p>'))
                },
                onInit: {},
                onStart: {},
                onFinish: {},
                onResize: {},
                onClose: {},
                onCleanup: {}
            }, options, _self.origin.data ? _self.origin.data('lc-options') : {});
            _self.objects.document = $('html');
            _self.objects.body = $('body');
            _self._callHooks(_self.settings.onInit);
            _self.objectData = _self._setObjectData(this);
            _self._addElements();
            _self._open();
            _self.dimensions = _self.getViewportDimensions()
        },
        get: function(name) {
            return _self.objects[name]
        },
        getObjectData: function() {
            return _self.objectData
        },
        _setObjectData: function(object) {
            var $object = $(object),
                objectData = {
                    this: $(object),
                    title: _self.settings.title || $object.attr(_self._prefixAttributeName('title')) || $object.attr('title'),
                    caption: _self.settings.caption || $object.attr(_self._prefixAttributeName('caption')) || $object.children('img').attr('alt'),
                    url: _self._determineUrl(),
                    requestType: _self.settings.ajax.type,
                    requestData: _self.settings.ajax.data,
                    requestDataType: _self.settings.ajax.dataType,
                    rel: $object.attr(_self._determineAttributeSelector()),
                    type: _self.settings.type || _self._verifyDataType(_self._determineUrl()),
                    isPartOfSequence: _self.settings.useAsCollection || _self._isPartOfSequence($object.attr(_self.settings.attr), ':'),
                    isPartOfSequenceWithSlideshow: _self._isPartOfSequence($object.attr(_self.settings.attr), ':slideshow'),
                    currentIndex: $(_self._determineAttributeSelector()).index($object),
                    sequenceLength: $(_self._determineAttributeSelector()).length
                };
            objectData.sequenceInfo = (objectData.currentIndex + 1) + _self.settings.labels['sequenceInfo.of'] + objectData.sequenceLength;
            objectData.prevIndex = objectData.currentIndex - 1;
            objectData.nextIndex = objectData.currentIndex + 1;
            return objectData
        },
        _prefixAttributeName: function(name) {
            return 'data-' + _self.settings.attrPrefix + name
        },
        _determineLinkTarget: function() {
            return _self.settings.href || $(_self.origin).attr(_self._prefixAttributeName('href')) || $(_self.origin).attr('href')
        },
        _determineAttributeSelector: function() {
            var $origin = $(_self.origin),
                selector = '';
            if (typeof _self.cache.selector !== 'undefined') {
                selector = _self.cache.selector
            } else if (_self.settings.useCategories === !0 && $origin.attr(_self._prefixAttributeName('categories'))) {
                var categories = $origin.attr(_self._prefixAttributeName('categories')).split(' ');
                $.each(categories, function(index, category) {
                    if (index > 0) {
                        selector += ','
                    }
                    selector += '[' + _self._prefixAttributeName('categories') + '~="' + category + '"]'
                })
            } else {
                selector = '[' + _self.settings.attr + '="' + $origin.attr(_self.settings.attr) + '"]'
            }
            _self.cache.selector = selector;
            return selector
        },
        _determineUrl: function() {
            var dataUrl = _self._verifyDataUrl(_self._determineLinkTarget()),
                width = 0,
                density = 0,
                supportLevel = '',
                url;
            $.each(dataUrl, function(index, src) {
                switch (_self._verifyDataType(src.url)) {
                    case 'video':
                        var video = document.createElement('video'),
                            videoType = _self._verifyDataType(src.url) + '/' + _self._getFileUrlSuffix(src.url);
                        if (supportLevel !== 'probably' && supportLevel !== video.canPlayType(videoType) && video.canPlayType(videoType) !== '') {
                            supportLevel = video.canPlayType(videoType);
                            url = src.url
                        }
                        break;
                    default:
                        if (_self._devicePixelRatio() >= src.density && src.density >= density && _self._matchMedia()('screen and (min-width:' + src.width + 'px)').matches && src.width >= width) {
                            width = src.width;
                            density = src.density;
                            url = src.url
                        }
                        break
                }
            });
            return url
        },
        _normalizeUrl: function(url) {
            var srcExp = /^\d+$/;
            return url.split(',').map(function(str) {
                var src = {
                    width: 0,
                    density: 0
                };
                str.trim().split(/\s+/).forEach(function(url, i) {
                    if (i === 0) {
                        return src.url = url
                    }
                    var value = url.substring(0, url.length - 1),
                        lastChar = url[url.length - 1],
                        intVal = parseInt(value, 10),
                        floatVal = parseFloat(value);
                    if (lastChar === 'w' && srcExp.test(value)) {
                        src.width = intVal
                    } else if (lastChar === 'h' && srcExp.test(value)) {
                        src.height = intVal
                    } else if (lastChar === 'x' && !isNaN(floatVal)) {
                        src.density = floatVal
                    }
                });
                return src
            })
        },
        _isPartOfSequence: function(rel, expression) {
            var getSimilarLinks = $('[' + _self.settings.attr + '="' + rel + '"]'),
                regexp = new RegExp(expression);
            return (regexp.test(rel) && getSimilarLinks.length > 1)
        },
        isSlideshowEnabled: function() {
            return (_self.objectData.isPartOfSequence && (_self.settings.slideshow === !0 || _self.objectData.isPartOfSequenceWithSlideshow === !0))
        },
        _loadContent: function() {
            if (_self.cache.originalObject) {
                _self._restoreObject()
            }
            _self._createObject()
        },
        _createObject: function() {
            var $object;
            switch (_self.objectData.type) {
                case 'image':
                    $object = $(new Image());
                    $object.attr({
                        'src': _self.objectData.url,
                        'alt': _self.objectData.title
                    });
                    break;
                case 'inline':
                    $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
                    $object.html(_self._cloneObject($(_self.objectData.url)));
                    $.each(_self.settings.inline, function(name, value) {
                        $object.attr(_self._prefixAttributeName(name), value)
                    });
                    break;
                case 'ajax':
                    $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
                    $.each(_self.settings.ajax, function(name, value) {
                        if (name !== 'data') {
                            $object.attr(_self._prefixAttributeName(name), value)
                        }
                    });
                    break;
                case 'flash':
                    $object = $('<embed src="' + _self.objectData.url + '" type="application/x-shockwave-flash"></embed>');
                    $.each(_self.settings.flash, function(name, value) {
                        $object.attr(name, value)
                    });
                    break;
                case 'video':
                    $object = $('<video></video>');
                    $object.attr('src', _self.objectData.url);
                    $.each(_self.settings.video, function(name, value) {
                        $object.attr(name, value)
                    });
                    break;
                default:
                    $object = $('<iframe></iframe>');
                    $object.attr({
                        'src': _self.objectData.url
                    });
                    $.each(_self.settings.iframe, function(name, value) {
                        $object.attr(name, value)
                    });
                    break
            }
            _self._addObject($object);
            _self._loadObject($object)
        },
        _addObject: function($object) {
            _self.objects.contentInner.html($object);
            _self._loading('start');
            _self._callHooks(_self.settings.onStart);
            if (_self.settings.showSequenceInfo === !0 && _self.objectData.isPartOfSequence) {
                _self.objects.sequenceInfo.html(_self.objectData.sequenceInfo);
                _self.objects.sequenceInfo.show()
            } else {
                _self.objects.sequenceInfo.empty();
                _self.objects.sequenceInfo.hide()
            }
            if (_self.settings.showTitle === !0 && _self.objectData.title !== undefined && _self.objectData.title !== '') {
                _self.objects.title.html(_self.objectData.title);
                _self.objects.title.show()
            } else {
                _self.objects.title.empty();
                _self.objects.title.hide()
            }
            if (_self.settings.showCaption === !0 && _self.objectData.caption !== undefined && _self.objectData.caption !== '') {
                _self.objects.caption.html(_self.objectData.caption);
                _self.objects.caption.show()
            } else {
                _self.objects.caption.empty();
                _self.objects.caption.hide()
            }
        },
        _loadObject: function($object) {
            switch (_self.objectData.type) {
                case 'inline':
                    if ($(_self.objectData.url)) {
                        _self._showContent($object)
                    } else {
                        _self.error()
                    }
                    break;
                case 'ajax':
                    $.ajax($.extend({}, _self.settings.ajax, {
                        url: _self.objectData.url,
                        type: _self.objectData.requestType,
                        dataType: _self.objectData.requestDataType,
                        data: _self.objectData.requestData,
                        success: function(data, textStatus, jqXHR) {
                            if (_self.objectData.requestDataType === 'json') {
                                _self.objectData.data = data
                            } else {
                                $object.html(data)
                            }
                            _self._showContent($object)
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            _self.error()
                        }
                    }));
                    break;
                case 'flash':
                    _self._showContent($object);
                    break;
                case 'video':
                    if (typeof($object.get(0).canPlayType) === 'function' || _self.objects.case.find('video').length === 0) {
                        _self._showContent($object)
                    } else {
                        _self.error()
                    }
                    break;
                default:
                    if (_self.objectData.url) {
                        $object.on('load', function() {
                            _self._showContent($object)
                        });
                        $object.on('error', function() {
                            _self.error()
                        })
                    } else {
                        _self.error()
                    }
                    break
            }
        },
        error: function() {
            _self.objectData.type = 'error';
            var $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
            $object.html(_self.settings.errorMessage);
            _self.objects.contentInner.html($object);
            _self._showContent(_self.objects.contentInner)
        },
        _calculateDimensions: function($object) {
            _self._cleanupDimensions();
            var dimensions = {
                ratio: 1,
                objectWidth: $object.attr('width') ? $object.attr('width') : $object.attr(_self._prefixAttributeName('width')),
                objectHeight: $object.attr('height') ? $object.attr('height') : $object.attr(_self._prefixAttributeName('height'))
            };
            if (!_self.settings.disableShrink) {
                dimensions.maxWidth = parseInt(_self.dimensions.windowWidth * _self.settings.shrinkFactor);
                dimensions.maxHeight = parseInt(_self.dimensions.windowHeight * _self.settings.shrinkFactor);
                if (dimensions.maxWidth > _self.settings.maxWidth) {
                    dimensions.maxWidth = _self.settings.maxWidth
                }
                if (dimensions.maxHeight > _self.settings.maxHeight) {
                    dimensions.maxHeight = _self.settings.maxHeight
                }
                dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);
                dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);
                switch (_self.objectData.type) {
                    case 'image':
                    case 'flash':
                    case 'video':
                    case 'iframe':
                    case 'ajax':
                    case 'inline':
                        if (_self.objectData.type === 'image' || _self.settings.fixedRatio === !0) {
                            if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {
                                dimensions.objectWidth = dimensions.maxWidth;
                                dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100)
                            }
                            if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {
                                dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);
                                dimensions.objectHeight = dimensions.maxHeight
                            }
                            if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {
                                dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);
                                dimensions.objectHeight = dimensions.maxHeight
                            }
                            break
                        }
                    case 'error':
                        if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {
                            dimensions.objectWidth = dimensions.maxWidth
                        }
                        break;
                    default:
                        if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !_self.settings.forceWidth) {
                            dimensions.objectWidth = dimensions.maxWidth
                        }
                        if (((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto') || dimensions.objectHeight > dimensions.maxHeight) && !_self.settings.forceHeight) {
                            dimensions.objectHeight = dimensions.maxHeight
                        }
                        break
                }
            }
            if (_self.settings.forceWidth) {
                try {
                    dimensions.objectWidth = _self.settings[_self.objectData.type].width
                } catch (e) {
                    dimensions.objectWidth = _self.settings.width || dimensions.objectWidth
                }
                dimensions.maxWidth = null
            }
            if ($object.attr(_self._prefixAttributeName('max-width'))) {
                dimensions.maxWidth = $object.attr(_self._prefixAttributeName('max-width'))
            }
            if (_self.settings.forceHeight) {
                try {
                    dimensions.objectHeight = _self.settings[_self.objectData.type].height
                } catch (e) {
                    dimensions.objectHeight = _self.settings.height || dimensions.objectHeight
                }
                dimensions.maxHeight = null
            }
            if ($object.attr(_self._prefixAttributeName('max-height'))) {
                dimensions.maxHeight = $object.attr(_self._prefixAttributeName('max-height'))
            }
            _self._adjustDimensions($object, dimensions)
        },
        _adjustDimensions: function($object, dimensions) {
            $object.css({
                'width': dimensions.objectWidth,
                'height': dimensions.objectHeight,
                'max-width': dimensions.maxWidth,
                'max-height': dimensions.maxHeight
            });
            _self.objects.contentInner.css({
                'width': $object.outerWidth(),
                'height': $object.outerHeight(),
                'max-width': '100%'
            });
            _self.objects.case.css({
                'width': _self.objects.contentInner.outerWidth()
            });
            _self.objects.case.css({
                'margin-top': parseInt(-(_self.objects.case.outerHeight() / 2)),
                'margin-left': parseInt(-(_self.objects.case.outerWidth() / 2))
            })
        },
        _loading: function(process) {
            if (process === 'start') {
                _self.objects.case.addClass(_self.settings.classPrefix + 'loading');
                _self.objects.loading.show()
            } else if (process === 'end') {
                _self.objects.case.removeClass(_self.settings.classPrefix + 'loading');
                _self.objects.loading.hide()
            }
        },
        getViewportDimensions: function() {
            return {
                windowWidth: $(window).innerWidth(),
                windowHeight: $(window).innerHeight()
            }
        },
        _verifyDataUrl: function(dataUrl) {
            if (!dataUrl || dataUrl === undefined || dataUrl === '') {
                return !1
            }
            if (dataUrl.indexOf('#') > -1) {
                dataUrl = dataUrl.split('#');
                dataUrl = '#' + dataUrl[dataUrl.length - 1]
            }
            return _self._normalizeUrl(dataUrl.toString())
        },
        _getFileUrlSuffix: function(url) {
            return url.toLowerCase().split('?')[0].split('.')[1]
        },
        _verifyDataType: function(url) {
            var typeMapping = _self.settings.typeMapping;
            if (!url) {
                return !1
            }
            for (var key in typeMapping) {
                if (typeMapping.hasOwnProperty(key)) {
                    var suffixArr = typeMapping[key].split(',');
                    for (var i = 0; i < suffixArr.length; i++) {
                        var suffix = suffixArr[i].toLowerCase(),
                            regexp = new RegExp('\.(' + suffix + ')$', 'i'),
                            str = url.toLowerCase().split('?')[0].substr(-5);
                        if (regexp.test(str) === !0 || (key === 'inline' && (url.indexOf(suffix) > -1))) {
                            return key
                        }
                    }
                }
            }
            return 'iframe'
        },
        _addElements: function() {
            if (typeof _self.objects.case !== 'undefined' && $('#' + _self.objects.case.attr('id')).length) {
                return
            }
            _self.settings.markup()
        },
        _showContent: function($object) {
            _self.objects.document.attr(_self._prefixAttributeName('type'), _self.objectData.type);
            _self.cache.object = $object;
            _self._calculateDimensions($object);
            _self._callHooks(_self.settings.onFinish);
            switch (_self.transition.in()) {
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollHorizontal':
                case 'scrollVertical':
                    _self.transition.scroll(_self.objects.case, 'in', _self.settings.speedIn);
                    _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
                    break;
                case 'elastic':
                    if (_self.objects.case.css('opacity') < 1) {
                        _self.transition.zoom(_self.objects.case, 'in', _self.settings.speedIn);
                        _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn)
                    }
                case 'fade':
                case 'fadeInline':
                    _self.transition.fade(_self.objects.case, 'in', _self.settings.speedIn);
                    _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
                    break;
                default:
                    _self.transition.fade(_self.objects.case, 'in', 0);
                    break
            }
            _self._loading('end');
            _self.isBusy = !1;
            if (!_self.cache.firstOpened) {
                _self.cache.firstOpened = _self.objectData.this
            }
            _self.objects.info.hide();
            setTimeout(function() {
                _self.transition.fade(_self.objects.info, 'in', _self.settings.speedIn)
            }, _self.settings.speedIn)
        },
        _processContent: function() {
            _self.isBusy = !0;
            _self.transition.fade(_self.objects.info, 'out', 0);
            switch (_self.settings.transitionOut) {
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollVertical':
                case 'scrollHorizontal':
                    if (_self.objects.case.is(':hidden')) {
                        _self.transition.fade(_self.objects.contentInner, 'out', 0);
                        _self.transition.fade(_self.objects.case, 'out', 0, 0, function() {
                            _self._loadContent()
                        })
                    } else {
                        _self.transition.scroll(_self.objects.case, 'out', _self.settings.speedOut, function() {
                            _self._loadContent()
                        })
                    }
                    break;
                case 'fade':
                    if (_self.objects.case.is(':hidden')) {
                        _self.transition.fade(_self.objects.case, 'out', 0, 0, function() {
                            _self._loadContent()
                        })
                    } else {
                        _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function() {
                            _self._loadContent()
                        })
                    }
                    break;
                case 'fadeInline':
                case 'elastic':
                    if (_self.objects.case.is(':hidden')) {
                        _self.transition.fade(_self.objects.case, 'out', 0, 0, function() {
                            _self._loadContent()
                        })
                    } else {
                        _self.transition.fade(_self.objects.contentInner, 'out', _self.settings.speedOut, 0, function() {
                            _self._loadContent()
                        })
                    }
                    break;
                default:
                    _self.transition.fade(_self.objects.case, 'out', 0, 0, function() {
                        _self._loadContent()
                    });
                    break
            }
        },
        _handleEvents: function() {
            _self._unbindEvents();
            _self.objects.nav.children().not(_self.objects.close).hide();
            if (_self.isSlideshowEnabled()) {
                if ((_self.settings.slideshowAutoStart === !0 || _self.isSlideshowStarted) && !_self.objects.nav.hasClass(_self.settings.classPrefix + 'paused')) {
                    _self._startTimeout()
                } else {
                    _self._stopTimeout()
                }
            }
            if (_self.settings.liveResize) {
                _self._watchResizeInteraction()
            }
            _self.objects.close.click(function(event) {
                event.preventDefault();
                _self.close()
            });
            if (_self.settings.closeOnOverlayClick === !0) {
                _self.objects.overlay.css('cursor', 'pointer').click(function(event) {
                    event.preventDefault();
                    _self.close()
                })
            }
            if (_self.settings.useKeys === !0) {
                _self._addKeyEvents()
            }
            if (_self.objectData.isPartOfSequence) {
                _self.objects.nav.attr(_self._prefixAttributeName('ispartofsequence'), !0);
                _self.objects.nav.data('items', _self._setNavigation());
                _self.objects.prev.click(function(event) {
                    event.preventDefault();
                    if (_self.settings.navigateEndless === !0 || !_self.item.isFirst()) {
                        _self.objects.prev.unbind('click');
                        _self.cache.action = 'prev';
                        _self.objects.nav.data('items').prev.click();
                        if (_self.isSlideshowEnabled()) {
                            _self._stopTimeout()
                        }
                    }
                });
                _self.objects.next.click(function(event) {
                    event.preventDefault();
                    if (_self.settings.navigateEndless === !0 || !_self.item.isLast()) {
                        _self.objects.next.unbind('click');
                        _self.cache.action = 'next';
                        _self.objects.nav.data('items').next.click();
                        if (_self.isSlideshowEnabled()) {
                            _self._stopTimeout()
                        }
                    }
                });
                if (_self.isSlideshowEnabled()) {
                    _self.objects.play.click(function(event) {
                        event.preventDefault();
                        _self._startTimeout()
                    });
                    _self.objects.pause.click(function(event) {
                        event.preventDefault();
                        _self._stopTimeout()
                    })
                }
                if (_self.settings.swipe === !0) {
                    if ($.isPlainObject($.event.special.swipeleft)) {
                        _self.objects.case.on('swipeleft', function(event) {
                            event.preventDefault();
                            _self.objects.next.click();
                            if (_self.isSlideshowEnabled()) {
                                _self._stopTimeout()
                            }
                        })
                    }
                    if ($.isPlainObject($.event.special.swiperight)) {
                        _self.objects.case.on('swiperight', function(event) {
                            event.preventDefault();
                            _self.objects.prev.click();
                            if (_self.isSlideshowEnabled()) {
                                _self._stopTimeout()
                            }
                        })
                    }
                }
            }
        },
        _addKeyEvents: function() {
            $(document).bind('keyup.lightcase', function(event) {
                if (_self.isBusy) {
                    return
                }
                switch (event.keyCode) {
                    case 27:
                        _self.objects.close.click();
                        break;
                    case 37:
                        if (_self.objectData.isPartOfSequence) {
                            _self.objects.prev.click()
                        }
                        break;
                    case 39:
                        if (_self.objectData.isPartOfSequence) {
                            _self.objects.next.click()
                        }
                        break
                }
            })
        },
        _startTimeout: function() {
            _self.isSlideshowStarted = !0;
            _self.objects.play.hide();
            _self.objects.pause.show();
            _self.cache.action = 'next';
            _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');
            _self.timeout = setTimeout(function() {
                _self.objects.nav.data('items').next.click()
            }, _self.settings.timeout)
        },
        _stopTimeout: function() {
            _self.objects.play.show();
            _self.objects.pause.hide();
            _self.objects.nav.addClass(_self.settings.classPrefix + 'paused');
            clearTimeout(_self.timeout)
        },
        _setNavigation: function() {
            var $links = $((_self.cache.selector || _self.settings.attr)),
                sequenceLength = _self.objectData.sequenceLength - 1,
                items = {
                    prev: $links.eq(_self.objectData.prevIndex),
                    next: $links.eq(_self.objectData.nextIndex)
                };
            if (_self.objectData.currentIndex > 0) {
                _self.objects.prev.show()
            } else {
                items.prevItem = $links.eq(sequenceLength)
            }
            if (_self.objectData.nextIndex <= sequenceLength) {
                _self.objects.next.show()
            } else {
                items.next = $links.eq(0)
            }
            if (_self.settings.navigateEndless === !0) {
                _self.objects.prev.show();
                _self.objects.next.show()
            }
            return items
        },
        item: {
            isFirst: function() {
                return (_self.objectData.currentIndex === 0)
            },
            isFirstOpened: function() {
                return _self.objectData.this.is(_self.cache.firstOpened)
            },
            isLast: function() {
                return (_self.objectData.currentIndex === (_self.objectData.sequenceLength - 1))
            }
        },
        _cloneObject: function($object) {
            var $clone = $object.clone(),
                objectId = $object.attr('id');
            if ($object.is(':hidden')) {
                _self._cacheObjectData($object);
                $object.attr('id', _self.settings.idPrefix + 'temp-' + objectId).empty()
            } else {
                $clone.removeAttr('id')
            }
            return $clone.show()
        },
        isMobileDevice: function() {
            var deviceAgent = navigator.userAgent.toLowerCase(),
                agentId = deviceAgent.match(_self.settings.mobileMatchExpression);
            return agentId ? !0 : !1
        },
        isTransitionSupported: function() {
            var body = _self.objects.body.get(0),
                isTransitionSupported = !1,
                transitionMapping = {
                    'transition': '',
                    'WebkitTransition': '-webkit-',
                    'MozTransition': '-moz-',
                    'OTransition': '-o-',
                    'MsTransition': '-ms-'
                };
            for (var key in transitionMapping) {
                if (transitionMapping.hasOwnProperty(key) && key in body.style) {
                    _self.support.transition = transitionMapping[key];
                    isTransitionSupported = !0
                }
            }
            return isTransitionSupported
        },
        transition: { in: function() {
                if (_self.settings.transitionOpen && !_self.cache.firstOpened) {
                    return _self.settings.transitionOpen
                }
                return _self.settings.transitionIn
            },
            fade: function($object, type, speed, opacity, callback) {
                var isInTransition = type === 'in',
                    startTransition = {},
                    startOpacity = $object.css('opacity'),
                    endTransition = {},
                    endOpacity = opacity ? opacity : isInTransition ? 1 : 0;
                if (!_self.isOpen && isInTransition) return;
                startTransition.opacity = startOpacity;
                endTransition.opacity = endOpacity;
                $object.css(startTransition).show();
                if (_self.support.transitions) {
                    endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
                    setTimeout(function() {
                        $object.css(endTransition);
                        setTimeout(function() {
                            $object.css(_self.support.transition + 'transition', '');
                            if (callback && (_self.isOpen || !isInTransition)) {
                                callback()
                            }
                        }, speed)
                    }, 15)
                } else {
                    $object.stop();
                    $object.animate(endTransition, speed, callback)
                }
            },
            scroll: function($object, type, speed, callback) {
                var isInTransition = type === 'in',
                    transition = isInTransition ? _self.settings.transitionIn : _self.settings.transitionOut,
                    direction = 'left',
                    startTransition = {},
                    startOpacity = isInTransition ? 0 : 1,
                    startOffset = isInTransition ? '-50%' : '50%',
                    endTransition = {},
                    endOpacity = isInTransition ? 1 : 0,
                    endOffset = isInTransition ? '50%' : '-50%';
                if (!_self.isOpen && isInTransition) return;
                switch (transition) {
                    case 'scrollTop':
                        direction = 'top';
                        break;
                    case 'scrollRight':
                        startOffset = isInTransition ? '150%' : '50%';
                        endOffset = isInTransition ? '50%' : '150%';
                        break;
                    case 'scrollBottom':
                        direction = 'top';
                        startOffset = isInTransition ? '150%' : '50%';
                        endOffset = isInTransition ? '50%' : '150%';
                        break;
                    case 'scrollHorizontal':
                        startOffset = isInTransition ? '150%' : '50%';
                        endOffset = isInTransition ? '50%' : '-50%';
                        break;
                    case 'scrollVertical':
                        direction = 'top';
                        startOffset = isInTransition ? '-50%' : '50%';
                        endOffset = isInTransition ? '50%' : '150%';
                        break
                }
                if (_self.cache.action === 'prev') {
                    switch (transition) {
                        case 'scrollHorizontal':
                            startOffset = isInTransition ? '-50%' : '50%';
                            endOffset = isInTransition ? '50%' : '150%';
                            break;
                        case 'scrollVertical':
                            startOffset = isInTransition ? '150%' : '50%';
                            endOffset = isInTransition ? '50%' : '-50%';
                            break
                    }
                }
                startTransition.opacity = startOpacity;
                startTransition[direction] = startOffset;
                endTransition.opacity = endOpacity;
                endTransition[direction] = endOffset;
                $object.css(startTransition).show();
                if (_self.support.transitions) {
                    endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
                    setTimeout(function() {
                        $object.css(endTransition);
                        setTimeout(function() {
                            $object.css(_self.support.transition + 'transition', '');
                            if (callback && (_self.isOpen || !isInTransition)) {
                                callback()
                            }
                        }, speed)
                    }, 15)
                } else {
                    $object.stop();
                    $object.animate(endTransition, speed, callback)
                }
            },
            zoom: function($object, type, speed, callback) {
                var isInTransition = type === 'in',
                    startTransition = {},
                    startOpacity = $object.css('opacity'),
                    startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',
                    endTransition = {},
                    endOpacity = isInTransition ? 1 : 0,
                    endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';
                if (!_self.isOpen && isInTransition) return;
                startTransition.opacity = startOpacity;
                startTransition[_self.support.transition + 'transform'] = startScale;
                endTransition.opacity = endOpacity;
                $object.css(startTransition).show();
                if (_self.support.transitions) {
                    endTransition[_self.support.transition + 'transform'] = endScale;
                    endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
                    setTimeout(function() {
                        $object.css(endTransition);
                        setTimeout(function() {
                            $object.css(_self.support.transition + 'transform', '');
                            $object.css(_self.support.transition + 'transition', '');
                            if (callback && (_self.isOpen || !isInTransition)) {
                                callback()
                            }
                        }, speed)
                    }, 15)
                } else {
                    $object.stop();
                    $object.animate(endTransition, speed, callback)
                }
            }
        },
        _callHooks: function(hooks) {
            if (typeof(hooks) === 'object') {
                $.each(hooks, function(index, hook) {
                    if (typeof(hook) === 'function') {
                        hook.call(_self.origin)
                    }
                })
            }
        },
        _cacheObjectData: function($object) {
            $.data($object, 'cache', {
                id: $object.attr('id'),
                content: $object.html()
            });
            _self.cache.originalObject = $object
        },
        _restoreObject: function() {
            var $object = $('[id^="' + _self.settings.idPrefix + 'temp-"]');
            $object.attr('id', $.data(_self.cache.originalObject, 'cache').id);
            $object.html($.data(_self.cache.originalObject, 'cache').content)
        },
        resize: function() {
            if (!_self.isOpen) return;
            if (_self.isSlideshowEnabled()) {
                _self._stopTimeout()
            }
            _self.dimensions = _self.getViewportDimensions();
            _self._calculateDimensions(_self.cache.object);
            _self._callHooks(_self.settings.onResize)
        },
        _watchResizeInteraction: function() {
            $(window).resize(_self.resize)
        },
        _unwatchResizeInteraction: function() {
            $(window).off('resize', _self.resize)
        },
        _switchToFullScreenMode: function() {
            _self.settings.shrinkFactor = 1;
            _self.settings.overlayOpacity = 1;
            $('html').addClass(_self.settings.classPrefix + 'fullScreenMode')
        },
        _open: function() {
            _self.isOpen = !0;
            _self.support.transitions = _self.settings.cssTransitions ? _self.isTransitionSupported() : !1;
            _self.support.mobileDevice = _self.isMobileDevice();
            if (_self.support.mobileDevice) {
                $('html').addClass(_self.settings.classPrefix + 'isMobileDevice');
                if (_self.settings.fullScreenModeForMobile) {
                    _self._switchToFullScreenMode()
                }
            }
            if (!_self.settings.transitionIn) {
                _self.settings.transitionIn = _self.settings.transition
            }
            if (!_self.settings.transitionOut) {
                _self.settings.transitionOut = _self.settings.transition
            }
            switch (_self.transition.in()) {
                case 'fade':
                case 'fadeInline':
                case 'elastic':
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollVertical':
                case 'scrollHorizontal':
                    if (_self.objects.case.is(':hidden')) {
                        _self.objects.close.css('opacity', 0);
                        _self.objects.overlay.css('opacity', 0);
                        _self.objects.case.css('opacity', 0);
                        _self.objects.contentInner.css('opacity', 0)
                    }
                    _self.transition.fade(_self.objects.overlay, 'in', _self.settings.speedIn, _self.settings.overlayOpacity, function() {
                        _self.transition.fade(_self.objects.close, 'in', _self.settings.speedIn);
                        _self._handleEvents();
                        _self._processContent()
                    });
                    break;
                default:
                    _self.transition.fade(_self.objects.overlay, 'in', 0, _self.settings.overlayOpacity, function() {
                        _self.transition.fade(_self.objects.close, 'in', 0);
                        _self._handleEvents();
                        _self._processContent()
                    });
                    break
            }
            _self.objects.document.addClass(_self.settings.classPrefix + 'open');
            _self.objects.case.attr('aria-hidden', 'false')
        },
        close: function() {
            _self.isOpen = !1;
            if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
                _self.isSlideshowStarted = !1;
                _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused')
            }
            _self.objects.loading.hide();
            _self._unbindEvents();
            _self._unwatchResizeInteraction();
            $('html').removeClass(_self.settings.classPrefix + 'open');
            _self.objects.case.attr('aria-hidden', 'true');
            _self.objects.nav.children().hide();
            _self.objects.close.hide();
            _self._callHooks(_self.settings.onClose);
            _self.transition.fade(_self.objects.info, 'out', 0);
            switch (_self.settings.transitionClose || _self.settings.transitionOut) {
                case 'fade':
                case 'fadeInline':
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollHorizontal':
                case 'scrollVertical':
                    _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function() {
                        _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function() {
                            _self.cleanup()
                        })
                    });
                    break;
                case 'elastic':
                    _self.transition.zoom(_self.objects.case, 'out', _self.settings.speedOut, function() {
                        _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function() {
                            _self.cleanup()
                        })
                    });
                    break;
                default:
                    _self.cleanup();
                    break
            }
        },
        _unbindEvents: function() {
            _self.objects.overlay.unbind('click');
            $(document).unbind('keyup.lightcase');
            _self.objects.case.unbind('swipeleft').unbind('swiperight');
            _self.objects.prev.unbind('click');
            _self.objects.next.unbind('click');
            _self.objects.play.unbind('click');
            _self.objects.pause.unbind('click');
            _self.objects.close.unbind('click')
        },
        _cleanupDimensions: function() {
            var opacity = _self.objects.contentInner.css('opacity');
            _self.objects.case.css({
                'width': '',
                'height': '',
                'top': '',
                'left': '',
                'margin-top': '',
                'margin-left': ''
            });
            _self.objects.contentInner.removeAttr('style').css('opacity', opacity);
            _self.objects.contentInner.children().removeAttr('style')
        },
        cleanup: function() {
            _self._cleanupDimensions();
            _self.objects.loading.hide();
            _self.objects.overlay.hide();
            _self.objects.case.hide();
            _self.objects.prev.hide();
            _self.objects.next.hide();
            _self.objects.play.hide();
            _self.objects.pause.hide();
            _self.objects.document.removeAttr(_self._prefixAttributeName('type'));
            _self.objects.nav.removeAttr(_self._prefixAttributeName('ispartofsequence'));
            _self.objects.contentInner.empty().hide();
            _self.objects.info.children().empty();
            if (_self.cache.originalObject) {
                _self._restoreObject()
            }
            _self._callHooks(_self.settings.onCleanup);
            _self.cache = {}
        },
        _matchMedia: function() {
            return window.matchMedia || window.msMatchMedia
        },
        _devicePixelRatio: function() {
            return window.devicePixelRatio || 1
        },
        _isPublicMethod: function(method) {
            return (typeof _self[method] === 'function' && method.charAt(0) !== '_')
        },
        _export: function() {
            window.lightcase = {};
            $.each(_self, function(property) {
                if (_self._isPublicMethod(property)) {
                    lightcase[property] = _self[property]
                }
            })
        }
    };
    _self._export();
    $.fn.lightcase = function(method) {
        if (_self._isPublicMethod(method)) {
            return _self[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof method === 'object' || !method) {
            return _self.init.apply(this, arguments)
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.lightcase')
        }
    }
})(jQuery);
! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s = this,
            n = 0;
        return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (i - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * t * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? i * s.slideWidth * -1 + s.slideOffset : i * t * -1 + n, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.autoplay || i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode ? (e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o)
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function() {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
(function() {
    var defaultOptions = {
        frameRate: 150,
        animationTime: 380,
        stepSize: 80,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: ''
    };
    var options = defaultOptions;
    var isExcluded = false;
    var isFrame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var refreshSize;
    var deltaBuffer = [];
    var deltaBufferTimer;
    var isMac = /^Mac/.test(navigator.platform);
    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var arrowKeys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown);
        }
    }

    function init() {
        if (initDone || !document.body) return;
        initDone = true;
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;
        initTest();
        if (top != self) {
            isFrame = true;
        } else if (isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
            var fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' + 'top:0; left:0; right:0; height:' +
                root.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);
            var pendingRefresh;
            refreshSize = function() {
                if (pendingRefresh) return;
                pendingRefresh = setTimeout(function() {
                    if (isExcluded) return;
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null;
                }, 500);
            };
            setTimeout(refreshSize, 10);
            addEvent('resize', refreshSize);
            var config = {
                attributes: true,
                childList: true,
                characterData: false
            };
            observer = new MutationObserver(refreshSize);
            observer.observe(body, config);
            if (root.offsetHeight <= windowHeight) {
                var clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix);
            }
        }
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    }

    function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
        removeEvent('resize', refreshSize);
        removeEvent('load', init);
    }
    var que = [];
    var pending = false;
    var lastScroll = Date.now();

    function scrollArray(elem, left, top) {
        directionCheck(left, top);
        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = Date.now();
        }
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });
        if (pending) {
            return;
        }
        var scrollRoot = getScrollRoot();
        var isWindowScroll = (elem === scrollRoot || elem === document.body);
        if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
            elem.$scrollBehavior = elem.style.scrollBehavior;
            elem.style.scrollBehavior = 'auto';
        }
        var step = function(time) {
            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;
            for (var i = 0; i < que.length; i++) {
                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);
                var position = (finished) ? 1 : elapsed / options.animationTime;
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;
                scrollX += x;
                scrollY += y;
                item.lastX += x;
                item.lastY += y;
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }
            if (isWindowScroll) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY;
            }
            if (!left && !top) {
                que = [];
            }
            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1));
            } else {
                pending = false;
                if (elem.$scrollBehavior != null) {
                    elem.style.scrollBehavior = elem.$scrollBehavior;
                    elem.$scrollBehavior = null;
                }
            }
        };
        requestFrame(step, elem, 0);
        pending = true;
    }

    function wheel(event) {
        if (!initDone) {
            init();
        }
        var target = event.target;
        if (event.defaultPrevented || event.ctrlKey) {
            return true;
        }
        if (isNodeName(activeElement, 'embed') || (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) || isNodeName(activeElement, 'object') || target.shadowRoot) {
            return true;
        }
        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;
        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
        }
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }
        var overflowing = overflowingAncestor(target);
        if (!overflowing) {
            if (isFrame && isChrome) {
                Object.defineProperty(event, "target", {
                    value: window.frameElement
                });
                return parent.wheel(event);
            }
            return true;
        }
        if (isTouchpad(deltaY)) {
            return true;
        }
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }
        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache();
    }

    function keydown(event) {
        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
        if (!document.body.contains(activeElement)) {
            activeElement = document.activeElement;
        }
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, 'input') && !buttonTypes.test(target.type) || isNodeName(activeElement, 'video') || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) {
            return true;
        }
        if ((isNodeName(target, 'button') || isNodeName(target, 'input') && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
            return true;
        }
        if (isNodeName(target, 'input') && target.type == 'radio' && arrowKeys[event.keyCode]) {
            return true;
        }
        var shift, x = 0,
            y = 0;
        var overflowing = overflowingAncestor(activeElement);
        if (!overflowing) {
            return (isFrame && isChrome) ? parent.keydown(event) : true;
        }
        var clientHeight = overflowing.clientHeight;
        if (overflowing == document.body) {
            clientHeight = window.innerHeight;
        }
        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar:
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                if (overflowing == document.body && document.scrollingElement)
                    overflowing = document.scrollingElement;
                y = -overflowing.scrollTop;
                break;
            case key.end:
                var scroll = overflowing.scrollHeight - overflowing.scrollTop;
                var scrollRemaining = scroll - clientHeight;
                y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return true;
        }
        scrollArray(overflowing, x, y);
        event.preventDefault();
        scheduleClearCache();
    }

    function mousedown(event) {
        activeElement = event.target;
    }
    var uniqueID = (function() {
        var i = 0;
        return function(el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();
    var cacheX = {};
    var cacheY = {};
    var clearCacheTimer;
    var smoothBehaviorForElement = {};

    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function() {
            cacheX = cacheY = smoothBehaviorForElement = {};
        }, 1 * 1000);
    }

    function setCache(elems, overflowing, x) {
        var cache = x ? cacheX : cacheY;
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function getCache(el, x) {
        return (x ? cacheX : cacheY)[uniqueID(el)];
    }

    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = getCache(el, false);
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot());
                }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
                return setCache(elems, el);
            }
        } while ((el = el.parentElement));
    }

    function isContentOverflowing(el) {
        return (el.clientHeight + 10 < el.scrollHeight);
    }

    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden');
    }

    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto');
    }

    function isScrollBehaviorSmooth(el) {
        var id = uniqueID(el);
        if (smoothBehaviorForElement[id] == null) {
            var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
            smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
        }
        return smoothBehaviorForElement[id];
    }

    function addEvent(type, fn, arg) {
        window.addEventListener(type, fn, arg || false);
    }

    function removeEvent(type, fn, arg) {
        window.removeEventListener(type, fn, arg || false);
    }

    function isNodeName(el, tag) {
        return el && (el.nodeName || '').toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }
    var hasLocalStorage = !! function() {
        try {
            return localStorage
        } catch (e) {}
    }();
    if (hasLocalStorage && window.localStorage && localStorage.SS_deltaBuffer) {
        try {
            deltaBuffer = localStorage.SS_deltaBuffer.split(',');
        } catch (e) {}
    }

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
        }
        deltaY = Math.abs(deltaY);
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function() {
            try {
                if (hasLocalStorage) {
                    localStorage.SS_deltaBuffer = deltaBuffer.join(',');
                }
            } catch (e) {}
        }, 1000);
        var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY);
        var tp = !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
        if (deltaY < 50) return true;
        return tp;
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }

    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor));
    }

    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = false;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList && elem.classList.contains('html5-video-controls'));
                if (isControl) break;
            } while ((elem = elem.parentNode));
        }
        return isControl;
    }
    var requestFrame = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback, element, delay) {
            window.setTimeout(callback, delay || (1000 / 60));
        });
    })();
    var MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
    var getScrollRoot = (function() {
        var SCROLL_ROOT = document.scrollingElement;
        return function() {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != bodyScrollTop)
                    (SCROLL_ROOT = document.body);
                else
                    (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -3);
                document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
        };
    })();

    function pulse_(x) {
        var val, start, expx;
        x = x * options.pulseScale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x));
        } else {
            start = Math.exp(-1);
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;
        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }
    var userAgent = window.navigator.userAgent;
    var isEdge = /Edge/.test(userAgent);
    var isChrome = /chrome/i.test(userAgent) && !isEdge;
    var isSafari = /safari/i.test(userAgent) && !isEdge;
    var isMobile = /mobile/i.test(userAgent);
    var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
    var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
    var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = true;
            }
        }));
    } catch (e) {}
    var wheelOpt = supportsPassive ? {
        passive: false
    } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    if (wheelEvent && isEnabledForBrowser) {
        addEvent(wheelEvent, wheel, wheelOpt);
        addEvent('mousedown', mousedown);
        addEvent('load', init);
    }

    function SmoothScroll(optionsToSet) {
        for (var key in optionsToSet)
            if (defaultOptions.hasOwnProperty(key))
                options[key] = optionsToSet[key];
    }
    SmoothScroll.destroy = cleanup;
    if (window.SmoothScrollOptions)
        SmoothScroll(window.SmoothScrollOptions);
    if (typeof define === 'function' && define.amd)
        define(function() {
            return SmoothScroll;
        });
    else if ('object' == typeof exports)
        module.exports = SmoothScroll;
    else
        window.SmoothScroll = SmoothScroll;
})();
(function($, w) {
    "use strict";
    var methods = (function() {
        var c = {
                bcClass: 'sf-breadcrumb',
                menuClass: 'sf-js-enabled',
                anchorClass: 'sf-with-ul',
                menuArrowClass: 'sf-arrows'
            },
            ios = (function() {
                var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                if (ios) {
                    $('html').css('cursor', 'pointer').on('click', $.noop)
                }
                return ios
            })(),
            wp7 = (function() {
                var style = document.documentElement.style;
                return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent))
            })(),
            unprefixedPointerEvents = (function() {
                return (!!w.PointerEvent)
            })(),
            toggleMenuClasses = function($menu, o, add) {
                var classes = c.menuClass,
                    method;
                if (o.cssArrows) {
                    classes += ' ' + c.menuArrowClass
                }
                method = (add) ? 'addClass' : 'removeClass';
                $menu[method](classes)
            },
            setPathToCurrent = function($menu, o) {
                return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function() {
                    return ($(this).children(o.popUpSelector).hide().show().length)
                }).removeClass(o.pathClass)
            },
            toggleAnchorClass = function($li, add) {
                var method = (add) ? 'addClass' : 'removeClass';
                $li.children('a')[method](c.anchorClass)
            },
            toggleTouchAction = function($menu) {
                var msTouchAction = $menu.css('ms-touch-action');
                var touchAction = $menu.css('touch-action');
                touchAction = touchAction || msTouchAction;
                touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                $menu.css({
                    'ms-touch-action': touchAction,
                    'touch-action': touchAction
                })
            },
            getMenu = function($el) {
                return $el.closest('.' + c.menuClass)
            },
            getOptions = function($el) {
                return getMenu($el).data('sfOptions')
            },
            over = function() {
                var $this = $(this),
                    o = getOptions($this);
                clearTimeout(o.sfTimer);
                $this.siblings().superfish('hide').end().superfish('show')
            },
            close = function(o) {
                o.retainPath = ($.inArray(this[0], o.$path) > -1);
                this.superfish('hide');
                if (!this.parents('.' + o.hoverClass).length) {
                    o.onIdle.call(getMenu(this));
                    if (o.$path.length) {
                        $.proxy(over, o.$path)()
                    }
                }
            },
            out = function() {
                var $this = $(this),
                    o = getOptions($this);
                if (ios) {
                    $.proxy(close, $this, o)()
                } else {
                    clearTimeout(o.sfTimer);
                    o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay)
                }
            },
            touchHandler = function(e) {
                var $this = $(this),
                    o = getOptions($this),
                    $ul = $this.siblings(e.data.popUpSelector);
                if (o.onHandleTouch.call($ul) === !1) {
                    return this
                }
                if ($ul.length > 0 && $ul.is(':hidden')) {
                    $this.one('click.superfish', !1);
                    if (e.type === 'MSPointerDown' || e.type === 'pointerdown') {
                        $this.trigger('focus')
                    } else {
                        $.proxy(over, $this.parent('li'))()
                    }
                }
            },
            applyHandlers = function($menu, o) {
                var targets = 'li:has(' + o.popUpSelector + ')';
                if ($.fn.hoverIntent && !o.disableHI) {
                    $menu.hoverIntent(over, out, targets)
                } else {
                    $menu.on('mouseenter.superfish', targets, over).on('mouseleave.superfish', targets, out)
                }
                var touchevent = 'MSPointerDown.superfish';
                if (unprefixedPointerEvents) {
                    touchevent = 'pointerdown.superfish'
                }
                if (!ios) {
                    touchevent += ' touchend.superfish'
                }
                if (wp7) {
                    touchevent += ' mousedown.superfish'
                }
                $menu.on('focusin.superfish', 'li', over).on('focusout.superfish', 'li', out).on(touchevent, 'a', o, touchHandler)
            };
        return {
            hide: function(instant) {
                if (this.length) {
                    var $this = this,
                        o = getOptions($this);
                    if (!o) {
                        return this
                    }
                    var not = (o.retainPath === !0) ? o.$path : '',
                        $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                        speed = o.speedOut;
                    if (instant) {
                        $ul.show();
                        speed = 0
                    }
                    o.retainPath = !1;
                    if (o.onBeforeHide.call($ul) === !1) {
                        return this
                    }
                    $ul.stop(!0, !0).animate(o.animationOut, speed, function() {
                        var $this = $(this);
                        o.onHide.call($this)
                    })
                }
                return this
            },
            show: function() {
                var o = getOptions(this);
                if (!o) {
                    return this
                }
                var $this = this.addClass(o.hoverClass),
                    $ul = $this.children(o.popUpSelector);
                if (o.onBeforeShow.call($ul) === !1) {
                    return this
                }
                $ul.stop(!0, !0).animate(o.animation, o.speed, function() {
                    o.onShow.call($ul)
                });
                return this
            },
            destroy: function() {
                return this.each(function() {
                    var $this = $(this),
                        o = $this.data('sfOptions'),
                        $hasPopUp;
                    if (!o) {
                        return !1
                    }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    $this.off('.superfish').off('.hoverIntent');
                    $hasPopUp.children(o.popUpSelector).attr('style', function(i, style) {
                        return style.replace(/display[^;]+;?/g, '')
                    });
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sfOptions')
                })
            },
            init: function(op) {
                return this.each(function() {
                    var $this = $(this);
                    if ($this.data('sfOptions')) {
                        return !1
                    }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                        $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);
                    $this.data('sfOptions', o);
                    toggleMenuClasses($this, o, !0);
                    toggleAnchorClass($hasPopUp, !0);
                    toggleTouchAction($this);
                    applyHandlers($this, o);
                    $hasPopUp.not('.' + c.bcClass).superfish('hide', !0);
                    o.onInit.call(this)
                })
            }
        }
    })();
    $.fn.superfish = function(method, args) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments)
        } else {
            return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish')
        }
    };
    $.fn.superfish.defaults = {
        popUpSelector: 'ul,.sf-mega',
        hoverClass: 'sfHover',
        pathClass: 'overrideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        animationOut: {
            opacity: 'hide'
        },
        speed: 'normal',
        speedOut: 'fast',
        cssArrows: !0,
        disableHI: !1,
        onInit: $.noop,
        onBeforeShow: $.noop,
        onShow: $.noop,
        onBeforeHide: $.noop,
        onHide: $.noop,
        onIdle: $.noop,
        onDestroy: $.noop,
        onHandleTouch: $.noop
    }
})(jQuery, window);
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.4
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports.Typed = factory();
    else root.Typed = factory()
})(this, function() {
    return (function(modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
                return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: !1
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = !0;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0)
    })([(function(module, exports, __webpack_require__) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
            value: !0
        });
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value' in descriptor) descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        })();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }
        var _initializerJs = __webpack_require__(1);
        var _htmlParserJs = __webpack_require__(3);
        var Typed = (function() {
            function Typed(elementId, options) {
                _classCallCheck(this, Typed);
                _initializerJs.initializer.load(this, options, elementId);
                this.begin()
            }
            _createClass(Typed, [{
                key: 'toggle',
                value: function toggle() {
                    this.pause.status ? this.start() : this.stop()
                }
            }, {
                key: 'stop',
                value: function stop() {
                    if (this.typingComplete) return;
                    if (this.pause.status) return;
                    this.toggleBlinking(!0);
                    this.pause.status = !0;
                    this.options.onStop(this.arrayPos, this)
                }
            }, {
                key: 'start',
                value: function start() {
                    if (this.typingComplete) return;
                    if (!this.pause.status) return;
                    this.pause.status = !1;
                    if (this.pause.typewrite) {
                        this.typewrite(this.pause.curString, this.pause.curStrPos)
                    } else {
                        this.backspace(this.pause.curString, this.pause.curStrPos)
                    }
                    this.options.onStart(this.arrayPos, this)
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    this.reset(!1);
                    this.options.onDestroy(this)
                }
            }, {
                key: 'reset',
                value: function reset() {
                    var restart = arguments.length <= 0 || arguments[0] === undefined ? !0 : arguments[0];
                    clearInterval(this.timeout);
                    this.replaceText('');
                    if (this.cursor && this.cursor.parentNode) {
                        this.cursor.parentNode.removeChild(this.cursor);
                        this.cursor = null
                    }
                    this.strPos = 0;
                    this.arrayPos = 0;
                    this.curLoop = 0;
                    if (restart) {
                        this.insertCursor();
                        this.options.onReset(this);
                        this.begin()
                    }
                }
            }, {
                key: 'begin',
                value: function begin() {
                    var _this = this;
                    this.typingComplete = !1;
                    this.shuffleStringsIfNeeded(this);
                    this.insertCursor();
                    if (this.bindInputFocusEvents) this.bindFocusEvents();
                    this.timeout = setTimeout(function() {
                        if (!_this.currentElContent || _this.currentElContent.length === 0) {
                            _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos)
                        } else {
                            _this.backspace(_this.currentElContent, _this.currentElContent.length)
                        }
                    }, this.startDelay)
                }
            }, {
                key: 'typewrite',
                value: function typewrite(curString, curStrPos) {
                    var _this2 = this;
                    if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                        this.el.classList.remove(this.fadeOutClass);
                        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass)
                    }
                    var humanize = this.humanizer(this.typeSpeed);
                    var numChars = 1;
                    if (this.pause.status === !0) {
                        this.setPauseStatus(curString, curStrPos, !0);
                        return
                    }
                    this.timeout = setTimeout(function() {
                        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
                        var pauseTime = 0;
                        var substr = curString.substr(curStrPos);
                        if (substr.charAt(0) === '^') {
                            if (/^\^\d+/.test(substr)) {
                                var skip = 1;
                                substr = /\d+/.exec(substr)[0];
                                skip += substr.length;
                                pauseTime = parseInt(substr);
                                _this2.temporaryPause = !0;
                                _this2.options.onTypingPaused(_this2.arrayPos, _this2);
                                curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                                _this2.toggleBlinking(!0)
                            }
                        }
                        if (substr.charAt(0) === '`') {
                            while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
                                numChars++;
                                if (curStrPos + numChars > curString.length) break
                            }
                            var stringBeforeSkip = curString.substring(0, curStrPos);
                            var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                            var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                            curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                            numChars--
                        }
                        _this2.timeout = setTimeout(function() {
                            _this2.toggleBlinking(!1);
                            if (curStrPos === curString.length) {
                                _this2.doneTyping(curString, curStrPos)
                            } else {
                                _this2.keepTyping(curString, curStrPos, numChars)
                            }
                            if (_this2.temporaryPause) {
                                _this2.temporaryPause = !1;
                                _this2.options.onTypingResumed(_this2.arrayPos, _this2)
                            }
                        }, pauseTime)
                    }, humanize)
                }
            }, {
                key: 'keepTyping',
                value: function keepTyping(curString, curStrPos, numChars) {
                    if (curStrPos === 0) {
                        this.toggleBlinking(!1);
                        this.options.preStringTyped(this.arrayPos, this)
                    }
                    curStrPos += numChars;
                    var nextString = curString.substr(0, curStrPos);
                    this.replaceText(nextString);
                    this.typewrite(curString, curStrPos)
                }
            }, {
                key: 'doneTyping',
                value: function doneTyping(curString, curStrPos) {
                    var _this3 = this;
                    this.options.onStringTyped(this.arrayPos, this);
                    this.toggleBlinking(!0);
                    if (this.arrayPos === this.strings.length - 1) {
                        this.complete();
                        if (this.loop === !1 || this.curLoop === this.loopCount) {
                            return
                        }
                    }
                    this.timeout = setTimeout(function() {
                        _this3.backspace(curString, curStrPos)
                    }, this.backDelay)
                }
            }, {
                key: 'backspace',
                value: function backspace(curString, curStrPos) {
                    var _this4 = this;
                    if (this.pause.status === !0) {
                        this.setPauseStatus(curString, curStrPos, !0);
                        return
                    }
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var humanize = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function() {
                        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
                        var curStringAtPosition = curString.substr(0, curStrPos);
                        _this4.replaceText(curStringAtPosition);
                        if (_this4.smartBackspace) {
                            var nextString = _this4.strings[_this4.arrayPos + 1];
                            if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
                                _this4.stopNum = curStrPos
                            } else {
                                _this4.stopNum = 0
                            }
                        }
                        if (curStrPos > _this4.stopNum) {
                            curStrPos--;
                            _this4.backspace(curString, curStrPos)
                        } else if (curStrPos <= _this4.stopNum) {
                            _this4.arrayPos++;
                            if (_this4.arrayPos === _this4.strings.length) {
                                _this4.arrayPos = 0;
                                _this4.options.onLastStringBackspaced();
                                _this4.shuffleStringsIfNeeded();
                                _this4.begin()
                            } else {
                                _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos)
                            }
                        }
                    }, humanize)
                }
            }, {
                key: 'complete',
                value: function complete() {
                    this.options.onComplete(this);
                    if (this.loop) {
                        this.curLoop++
                    } else {
                        this.typingComplete = !0
                    }
                }
            }, {
                key: 'setPauseStatus',
                value: function setPauseStatus(curString, curStrPos, isTyping) {
                    this.pause.typewrite = isTyping;
                    this.pause.curString = curString;
                    this.pause.curStrPos = curStrPos
                }
            }, {
                key: 'toggleBlinking',
                value: function toggleBlinking(isBlinking) {
                    if (!this.cursor) return;
                    if (this.pause.status) return;
                    if (this.cursorBlinking === isBlinking) return;
                    this.cursorBlinking = isBlinking;
                    var status = isBlinking ? 'infinite' : 0;
                    this.cursor.style.animationIterationCount = status
                }
            }, {
                key: 'humanizer',
                value: function humanizer(speed) {
                    return Math.round(Math.random() * speed / 2) + speed
                }
            }, {
                key: 'shuffleStringsIfNeeded',
                value: function shuffleStringsIfNeeded() {
                    if (!this.shuffle) return;
                    this.sequence = this.sequence.sort(function() {
                        return Math.random() - 0.5
                    })
                }
            }, {
                key: 'initFadeOut',
                value: function initFadeOut() {
                    var _this5 = this;
                    this.el.className += ' ' + this.fadeOutClass;
                    if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
                    return setTimeout(function() {
                        _this5.arrayPos++;
                        _this5.replaceText('');
                        if (_this5.strings.length > _this5.arrayPos) {
                            _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0)
                        } else {
                            _this5.typewrite(_this5.strings[0], 0);
                            _this5.arrayPos = 0
                        }
                    }, this.fadeOutDelay)
                }
            }, {
                key: 'replaceText',
                value: function replaceText(str) {
                    if (this.attr) {
                        this.el.setAttribute(this.attr, str)
                    } else {
                        if (this.isInput) {
                            this.el.value = str
                        } else if (this.contentType === 'html') {
                            this.el.innerHTML = str
                        } else {
                            this.el.textContent = str
                        }
                    }
                }
            }, {
                key: 'bindFocusEvents',
                value: function bindFocusEvents() {
                    var _this6 = this;
                    if (!this.isInput) return;
                    this.el.addEventListener('focus', function(e) {
                        _this6.stop()
                    });
                    this.el.addEventListener('blur', function(e) {
                        if (_this6.el.value && _this6.el.value.length !== 0) {
                            return
                        }
                        _this6.start()
                    })
                }
            }, {
                key: 'insertCursor',
                value: function insertCursor() {
                    if (!this.showCursor) return;
                    if (this.cursor) return;
                    this.cursor = document.createElement('span');
                    this.cursor.className = 'typed-cursor';
                    this.cursor.innerHTML = this.cursorChar;
                    this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)
                }
            }]);
            return Typed
        })();
        exports['default'] = Typed;
        module.exports = exports['default']
    }), (function(module, exports, __webpack_require__) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value' in descriptor) descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj
            }
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }
        var _defaultsJs = __webpack_require__(2);
        var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
        var Initializer = (function() {
            function Initializer() {
                _classCallCheck(this, Initializer)
            }
            _createClass(Initializer, [{
                key: 'load',
                value: function load(self, options, elementId) {
                    if (typeof elementId === 'string') {
                        self.el = document.querySelector(elementId)
                    } else {
                        self.el = elementId
                    }
                    self.options = _extends({}, _defaultsJs2['default'], options);
                    self.isInput = self.el.tagName.toLowerCase() === 'input';
                    self.attr = self.options.attr;
                    self.bindInputFocusEvents = self.options.bindInputFocusEvents;
                    self.showCursor = self.isInput ? !1 : self.options.showCursor;
                    self.cursorChar = self.options.cursorChar;
                    self.cursorBlinking = !0;
                    self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
                    self.contentType = self.options.contentType;
                    self.typeSpeed = self.options.typeSpeed;
                    self.startDelay = self.options.startDelay;
                    self.backSpeed = self.options.backSpeed;
                    self.smartBackspace = self.options.smartBackspace;
                    self.backDelay = self.options.backDelay;
                    self.fadeOut = self.options.fadeOut;
                    self.fadeOutClass = self.options.fadeOutClass;
                    self.fadeOutDelay = self.options.fadeOutDelay;
                    self.isPaused = !1;
                    self.strings = self.options.strings.map(function(s) {
                        return s.trim()
                    });
                    if (typeof self.options.stringsElement === 'string') {
                        self.stringsElement = document.querySelector(self.options.stringsElement)
                    } else {
                        self.stringsElement = self.options.stringsElement
                    }
                    if (self.stringsElement) {
                        self.strings = [];
                        self.stringsElement.style.display = 'none';
                        var strings = Array.prototype.slice.apply(self.stringsElement.children);
                        var _iteratorNormalCompletion = !0;
                        var _didIteratorError = !1;
                        var _iteratorError = undefined;
                        try {
                            for (var _iterator = strings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                                var s = _step.value;
                                self.strings.push(s.innerHTML.trim())
                            }
                        } catch (err) {
                            _didIteratorError = !0;
                            _iteratorError = err
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']()
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError
                                }
                            }
                        }
                    }
                    self.strPos = 0;
                    self.arrayPos = 0;
                    self.stopNum = 0;
                    self.loop = self.options.loop;
                    self.loopCount = self.options.loopCount;
                    self.curLoop = 0;
                    self.shuffle = self.options.shuffle;
                    self.sequence = [];
                    self.pause = {
                        status: !1,
                        typewrite: !0,
                        curString: '',
                        curStrPos: 0
                    };
                    self.typingComplete = !1;
                    for (var i in self.strings) {
                        self.sequence[i] = i
                    }
                    self.currentElContent = this.getCurrentElContent(self);
                    self.autoInsertCss = self.options.autoInsertCss;
                    this.appendAnimationCss(self)
                }
            }, {
                key: 'getCurrentElContent',
                value: function getCurrentElContent(self) {
                    var elContent = '';
                    if (self.attr) {
                        elContent = self.el.getAttribute(self.attr)
                    } else if (self.isInput) {
                        elContent = self.el.value
                    } else if (self.contentType === 'html') {
                        elContent = self.el.innerHTML
                    } else {
                        elContent = self.el.textContent
                    }
                    return elContent
                }
            }, {
                key: 'appendAnimationCss',
                value: function appendAnimationCss(self) {
                    if (!self.autoInsertCss) {
                        return
                    }
                    if (!self.showCursor || !self.fadeOut) {
                        return
                    }
                    var css = document.createElement('style');
                    css.type = 'text/css';
                    var innerCss = '';
                    if (self.showCursor) {
                        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '
                    }
                    if (self.fadeOut) {
                        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      '
                    }
                    if (css.length === 0) {
                        return
                    }
                    css.innerHTML = innerCss;
                    document.head.appendChild(css)
                }
            }]);
            return Initializer
        })();
        exports['default'] = Initializer;
        var initializer = new Initializer();
        exports.initializer = initializer
    }), (function(module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
            value: !0
        });
        var defaults = {
            strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            loop: !1,
            loopCount: Infinity,
            showCursor: !0,
            cursorChar: '|',
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: 'html',
            onComplete: function onComplete(self) {},
            preStringTyped: function preStringTyped(arrayPos, self) {},
            onStringTyped: function onStringTyped(arrayPos, self) {},
            onLastStringBackspaced: function onLastStringBackspaced(self) {},
            onTypingPaused: function onTypingPaused(arrayPos, self) {},
            onTypingResumed: function onTypingResumed(arrayPos, self) {},
            onReset: function onReset(self) {},
            onStop: function onStop(arrayPos, self) {},
            onStart: function onStart(arrayPos, self) {},
            onDestroy: function onDestroy(self) {}
        };
        exports['default'] = defaults;
        module.exports = exports['default']
    }), (function(module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
            value: !0
        });
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value' in descriptor) descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor
            }
        })();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }
        var HTMLParser = (function() {
            function HTMLParser() {
                _classCallCheck(this, HTMLParser)
            }
            _createClass(HTMLParser, [{
                key: 'typeHtmlChars',
                value: function typeHtmlChars(curString, curStrPos, self) {
                    if (self.contentType !== 'html') return curStrPos;
                    var curChar = curString.substr(curStrPos).charAt(0);
                    if (curChar === '<' || curChar === '&') {
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                            curStrPos++;
                            if (curStrPos + 1 > curString.length) {
                                break
                            }
                        }
                        curStrPos++
                    }
                    return curStrPos
                }
            }, {
                key: 'backSpaceHtmlChars',
                value: function backSpaceHtmlChars(curString, curStrPos, self) {
                    if (self.contentType !== 'html') return curStrPos;
                    var curChar = curString.substr(curStrPos).charAt(0);
                    if (curChar === '>' || curChar === ';') {
                        var endTag = '';
                        if (curChar === '>') {
                            endTag = '<'
                        } else {
                            endTag = '&'
                        }
                        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                            curStrPos--;
                            if (curStrPos < 0) {
                                break
                            }
                        }
                        curStrPos--
                    }
                    return curStrPos
                }
            }]);
            return HTMLParser
        })();
        exports['default'] = HTMLParser;
        var htmlParser = new HTMLParser();
        exports.htmlParser = htmlParser
    })])
});
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
! function(a) {
    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return null != a && a == a.window
        }, c.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = b(a);
            if (d) {
                if (h)
                    for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = c.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = c.call(a[f], f, a[f]), e === !1) break;
            return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando],
                    g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && c.each(b, function(a, b) {
                delete f[b]
            })
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a)) ? ! function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];) a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function a() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                    return a || document
                }
                var b = this[0],
                    a = a.apply(b),
                    d = this.offset(),
                    e = /^(?:body|html)$/i.test(a.nodeName) ? {
                        top: 0,
                        left: 0
                    } : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        }
    }
}(window),
function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }

            function l() {
                for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, (a != c || d != e) && l()
            }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) {
                    return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                };
            z.getControlPoints = function() {
                return [{
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                }]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }

        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
        }

        function k(a) {
            if (a) {
                var b = (new Date).getTime(),
                    c = t.State.calls.length;
                c > 1e4 && (t.State.calls = e(t.State.calls));
                for (var f = 0; c > f; f++)
                    if (t.State.calls[f]) {
                        var h = t.State.calls[f],
                            i = h[0],
                            j = h[2],
                            n = h[3],
                            o = !!n,
                            q = null;
                        n || (n = t.State.calls[f][3] = b - 16);
                        for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                            var w = i[s],
                                y = w.element;
                            if (g(y)) {
                                var z = !1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        m.each(A, function(a, b) {
                                            v.setPropertyValue(y, "display", b)
                                        })
                                    }
                                    v.setPropertyValue(y, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                for (var B in w)
                                    if ("element" !== B) {
                                        var C, D = w[B],
                                            E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                                        if (1 === r) C = D.endValue;
                                        else {
                                            var F = D.endValue - D.startValue;
                                            if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                                        }
                                        if (D.currentValue = C, "tween" === B) q = C;
                                        else {
                                            if (v.Hooks.registered[B]) {
                                                var G = v.Hooks.getRoot(B),
                                                    H = g(y).rootPropertyValueCache[G];
                                                H && (D.rootPropertyValue = H)
                                            }
                                            var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                            v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
                                        }
                                    }
                                j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
                            }
                        }
                        j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                    }
            }
            t.State.isTicking && x(k)
        }

        function l(a, b) {
            if (!t.State.calls[a]) return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                    var n = !1;
                    m.each(v.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                    }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (o) {
                    setTimeout(function() {
                        throw o
                    }, 1)
                }
                h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), t(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), f.queue !== !1 && m.dequeue(l, f.queue)
            }
            t.State.calls[a] = !1;
            for (var p = 0, q = t.State.calls.length; q > p; p++)
                if (t.State.calls[p] !== !1) {
                    i = !0;
                    break
                }
            i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
        }
        var m, n = function() {
                if (c.documentMode) return c.documentMode;
                for (var a = 7; a > 4; a--) {
                    var b = c.createElement("div");
                    if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                }
                return d
            }(),
            o = function() {
                var a = 0;
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                    var c, d = (new Date).getTime();
                    return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                        b(d + c)
                    }, c)
                }
            }(),
            p = {
                isString: function(a) {
                    return "string" == typeof a
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                isNode: function(a) {
                    return a && a.nodeType
                },
                isNodeList: function(a) {
                    return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                },
                isWrapped: function(a) {
                    return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                },
                isSVG: function(a) {
                    return b.SVGElement && a instanceof b.SVGElement
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                }
            },
            q = !1;
        if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400,
            s = "swing",
            t = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: b.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: c.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: m,
                Redirects: {},
                Easings: {},
                Promise: b.Promise,
                defaults: {
                    queue: "",
                    duration: r,
                    easing: s,
                    begin: d,
                    complete: d,
                    progress: d,
                    display: d,
                    visibility: d,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(a) {
                    m.data(a, "velocity", {
                        isSVG: p.isSVG(a),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                }
            }

            function c(c, d) {
                var e = {
                        dx: c.v,
                        dv: a(c)
                    },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function d(a, b, e) {
                var f, g, h, i = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    j = [0],
                    k = 0,
                    l = 1e-4,
                    m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m;;)
                    if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > l && Math.abs(h.v) > l)) break;
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        t.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, m.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) {
            t.Easings[b[0]] = i.apply(null, b[1])
        });
        var v = t.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < v.Lists.colors.length; a++) {
                        var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (n)
                        for (c in v.Hooks.templates) {
                            d = v.Hooks.templates[c], e = d[0].split(" ");
                            var f = d[1].match(v.RegEx.valueSplit);
                            "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                        }
                    for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        for (var a in e) {
                            var g = c + e[a],
                                h = a;
                            v.Hooks.registered[g] = [c, h]
                        }
                    }
                },
                getRoot: function(a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a
                },
                cleanRootPropertyValue: function(a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                },
                extractValue: function(a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0],
                            h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return t.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case "inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (8 >= n) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return c;
                            case "inject":
                                return c
                        }
                    }
                },
                register: function() {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                        var b = v.Lists.transformsBase[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (b.substr(0, b.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                            }
                        }
                    }();
                    for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                        var b = v.Lists.colors[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return b;
                                case "extract":
                                    var f;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                case "inject":
                                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                prefixCheck: function(a) {
                    if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                },
                addClass: function(a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                },
                removeClass: function(a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none")
                    }
                    var i = 0;
                    if (8 >= n) i = m.css(a, c);
                    else {
                        var j = !1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                    }
                    return i
                }
                var i;
                if (v.Hooks.registered[c]) {
                    var j = c,
                        k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                }
                if (!/^[\d-]/.test(i))
                    if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c)) try {
                            i = a.getBBox()[c]
                        } catch (p) {
                            i = 0
                        } else i = a.getAttribute(c);
                        else i = h(a, v.Names.prefixCheck(c)[0]);
                return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (v.Hooks.registered[c]) {
                        var i = c,
                            j = v.Hooks.getRoot(c);
                        e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                    }
                    if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                        a.style[h] = d
                    } catch (k) {
                        t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                    t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function(a) {
                function b(b) {
                    return parseFloat(v.getPropertyValue(a, b))
                }
                var c = "";
                if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                    var d = {
                        translate: [b("translateX"), b("translateY")],
                        skewX: [b("skewX")],
                        skewY: [b("skewY")],
                        scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                        rotate: [b("rotateZ"), 0, 0]
                    };
                    m.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                    })
                } else {
                    var e, f;
                    m.each(g(a).transformCache, function(b) {
                        return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                    }), f && (c = "perspective" + f + " " + c)
                }
                v.setPropertyValue(a, "transform", c)
            }
        };
        v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
            var e = d;
            return a = f(a), m.each(a, function(a, f) {
                if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                else {
                    var h = t.CSS.setPropertyValue(f, b, c);
                    "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var w = function() {
            function a() {
                return h ? B.promise || null : i
            }

            function e() {
                function a() {
                    function a(a, b) {
                        var c = d,
                            e = d,
                            g = d;
                        return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
                    }

                    function l(a, b) {
                        var c, d;
                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                            return c = a, ""
                        }), c || (c = v.Values.getUnitType(a)), [d, c]
                    }

                    function n() {
                        var a = {
                                myParent: f.parentNode || c.body,
                                position: v.getPropertyValue(f, "position"),
                                fontSize: v.getPropertyValue(f, "fontSize")
                            },
                            d = a.position === I.lastPosition && a.myParent === I.lastParent,
                            e = a.fontSize === I.lastFontSize;
                        I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                        var h = 100,
                            i = {};
                        if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                        else {
                            var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                            t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, "hidden")
                            }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, h + "%")
                            }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                        }
                        return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
                    }
                    if (h.begin && 0 === y) try {
                        h.begin.call(o, o)
                    } catch (r) {
                        setTimeout(function() {
                            throw r
                        }, 1)
                    }
                    if ("scroll" === C) {
                        var u, w, z, A = /^x$/i.test(h.axis) ? "Left" : "Top",
                            D = parseFloat(h.offset) || 0;
                        h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, u = h.container["scroll" + A], z = u + m(f).position()[A.toLowerCase()] + D) : h.container = null : (u = t.State.scrollAnchor[t.State["scrollProperty" + A]], w = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], z = m(f).offset()[A.toLowerCase()] + D), i = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: u,
                                currentValue: u,
                                endValue: z,
                                unitType: "",
                                easing: h.easing,
                                scrollData: {
                                    container: h.container,
                                    direction: A,
                                    alternateValue: w
                                }
                            },
                            element: f
                        }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
                    } else if ("reverse" === C) {
                        if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
                        "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                        var E = m.extend(!0, {}, g(f).tweensContainer);
                        for (var F in E)
                            if ("element" !== F) {
                                var G = E[F].startValue;
                                E[F].startValue = E[F].currentValue = E[F].endValue, E[F].endValue = G, p.isEmptyObject(s) || (E[F].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(E[F]), f)
                            }
                        i = E
                    } else if ("start" === C) {
                        var E;
                        g(f).tweensContainer && g(f).isAnimating === !0 && (E = g(f).tweensContainer), m.each(q, function(b, c) {
                            if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(b)) {
                                var e = a(c, !0),
                                    f = e[0],
                                    g = e[1],
                                    h = e[2];
                                if (v.RegEx.isHex.test(f)) {
                                    for (var i = ["Red", "Green", "Blue"], j = v.Values.hexToRgb(f), k = h ? v.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
                                        var m = [j[l]];
                                        g && m.push(g), k !== d && m.push(k[l]), q[b + i[l]] = m
                                    }
                                    delete q[b]
                                }
                            }
                        });
                        for (var H in q) {
                            var K = a(q[H]),
                                L = K[0],
                                M = K[1],
                                N = K[2];
                            H = v.Names.camelCase(H);
                            var O = v.Hooks.getRoot(H),
                                P = !1;
                            if (g(f).isSVG || "tween" === O || v.Names.prefixCheck(O)[1] !== !1 || v.Normalizations.registered[O] !== d) {
                                (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(H) && !N && 0 !== L && (N = 0), h._cacheValues && E && E[H] ? (N === d && (N = E[H].endValue + E[H].unitType), P = g(f).rootPropertyValueCache[O]) : v.Hooks.registered[H] ? N === d ? (P = v.getPropertyValue(f, O), N = v.getPropertyValue(f, H, P)) : P = v.Hooks.templates[O][1] : N === d && (N = v.getPropertyValue(f, H));
                                var Q, R, S, T = !1;
                                if (Q = l(H, N), N = Q[0], S = Q[1], Q = l(H, L), L = Q[0].replace(/^([+-\/*])=/, function(a, b) {
                                        return T = b, ""
                                    }), R = Q[1], N = parseFloat(N) || 0, L = parseFloat(L) || 0, "%" === R && (/^(fontSize|lineHeight)$/.test(H) ? (L /= 100, R = "em") : /^scale/.test(H) ? (L /= 100, R = "") : /(Red|Green|Blue)$/i.test(H) && (L = L / 100 * 255, R = "")), /[\/*]/.test(T)) R = S;
                                else if (S !== R && 0 !== N)
                                    if (0 === L) R = S;
                                    else {
                                        e = e || n();
                                        var U = /margin|padding|left|right|width|text|word|letter/i.test(H) || /X$/.test(H) || "x" === H ? "x" : "y";
                                        switch (S) {
                                            case "%":
                                                N *= "x" === U ? e.percentToPxWidth : e.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                N *= e[S + "ToPx"]
                                        }
                                        switch (R) {
                                            case "%":
                                                N *= 1 / ("x" === U ? e.percentToPxWidth : e.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                N *= 1 / e[R + "ToPx"]
                                        }
                                    }
                                switch (T) {
                                    case "+":
                                        L = N + L;
                                        break;
                                    case "-":
                                        L = N - L;
                                        break;
                                    case "*":
                                        L = N * L;
                                        break;
                                    case "/":
                                        L = N / L
                                }
                                i[H] = {
                                    rootPropertyValue: P,
                                    startValue: N,
                                    currentValue: N,
                                    endValue: L,
                                    unitType: R,
                                    easing: M
                                }, t.debug && console.log("tweensContainer (" + H + "): " + JSON.stringify(i[H]), f)
                            } else t.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
                        }
                        i.element = f
                    }
                    i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
                }
                var e, f = this,
                    h = m.extend({}, t.defaults, s),
                    i = {};
                switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
                    t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
                        setTimeout: setTimeout(a, parseFloat(h.delay)),
                        next: a
                    }
                }), h.duration.toString().toLowerCase()) {
                    case "fast":
                        h.duration = 200;
                        break;
                    case "normal":
                        h.duration = r;
                        break;
                    case "slow":
                        h.duration = 600;
                        break;
                    default:
                        h.duration = parseFloat(h.duration) || 1
                }
                t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                    return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
            }
            var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
            if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
                u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
                var x = o.length,
                    y = 0;
                if (!/^(stop|finish|finishAll)$/i.test(q) && !m.isPlainObject(s)) {
                    var z = n + 1;
                    s = {};
                    for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
                }
                var B = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                h && t.Promise && (B.promise = new t.Promise(function(a, b) {
                    B.resolver = a, B.rejecter = b
                }));
                var C;
                switch (q) {
                    case "scroll":
                        C = "scroll";
                        break;
                    case "reverse":
                        C = "reverse";
                        break;
                    case "finish":
                    case "finishAll":
                    case "stop":
                        m.each(o, function(a, b) {
                            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== q || s !== !0 && !p.isString(s) || (m.each(m.queue(b, p.isString(s) ? s : ""), function(a, b) {
                                p.isFunction(b) && b()
                            }), m.queue(b, p.isString(s) ? s : "", []))
                        });
                        var D = [];
                        return m.each(t.State.calls, function(a, b) {
                            b && m.each(b[1], function(c, e) {
                                var f = s === d ? "" : s;
                                return f === !0 || b[2].queue === f || s === d && b[2].queue === !1 ? void m.each(o, function(c, d) {
                                    d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                                        p.isFunction(b) && b(null, !0)
                                    }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
                                        b.endValue = b.currentValue
                                    }), D.push(a)) : ("finish" === q || "finishAll" === q) && (b[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === q && (m.each(D, function(a, b) {
                            l(b, !0)
                        }), B.promise && B.resolver(o)), a();
                    default:
                        if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                            if (p.isString(q) && t.Redirects[q]) {
                                var E = m.extend({}, s),
                                    F = E.duration,
                                    G = E.delay || 0;
                                return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                                    parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                                }), a()
                            }
                            var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
                        }
                        C = "start"
                }
                var I = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    J = [];
                m.each(o, function(a, b) {
                    p.isNode(b) && e.call(b)
                });
                var K, E = m.extend({}, t.defaults, s);
                if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                    for (var L = 0; K > L; L++) {
                        var M = {
                            delay: E.delay,
                            progress: E.progress
                        };
                        L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
                    }
                return a()
            }
        };
        t = m.extend(w, t), t.animate = w;
        var x = b.requestAnimationFrame || o;
        return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
            c.hidden ? (x = function(a) {
                return setTimeout(function() {
                    a(!0)
                }, 16)
            }, k()) : x = b.requestAnimationFrame || o
        }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
            t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    n = {};
                i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    j && j.call(g, g);
                    for (var c in l) {
                        n[c] = a.style[c];
                        var d = t.CSS.getPropertyValue(a, c);
                        l[c] = "Down" === b ? [d, 0] : [0, d]
                    }
                    n.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function() {
                    for (var b in n) a.style[b] = n[b];
                    k && k.call(g, g), h && h.resolver(g)
                }, t(a, l, i)
            }
        }), m.each(["In", "Out"], function(a, b) {
            t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = {
                        opacity: "In" === b ? 1 : 0
                    },
                    k = i.complete;
                i.complete = e !== f - 1 ? i.begin = null : function() {
                    k && k.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
            }
        }), t
    }(window.jQuery || window.Zepto || window, window, document)
});
/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
var jevelin_loadmore_posts = {
    "ajax_url": "https:\/\/jevelin.shufflehound.com\/wp-admin\/admin-ajax.php"
};
var jevelin = {
    "page_loader": "0",
    "notice": "",
    "header_animation_dropdown_delay": "700",
    "header_animation_dropdown": "easeOutQuint",
    "header_animation_dropdown_speed": "500",
    "lightbox_opacity": "0.88",
    "lightbox_transition": "elastic",
    "lightbox_window_max_width": "1200",
    "lightbox_window_max_height": "1200",
    "lightbox_window_size": "0.8",
    "page_numbers_prev": "Previous",
    "page_numbers_next": "Next",
    "rtl_support": "",
    "footer_parallax": "1",
    "one_pager": "1",
    "wc_lightbox": "jevelin",
    "quantity_button": "on"
};
jQuery(document).ready(function($) {
    "use strict";
    $(window).on('load', function() {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 500,
            threshold: 1500
        });
    });
    if ($('.sh-header-right-side .sh-nav-mobile').length) {
        $('.primary-mobile .sh-nav-mobile').html($('.sh-header-right-side .sh-nav-mobile').html());
    } else if ($('.sh-header-left-side .sh-nav').length) {
        $('.primary-mobile .sh-nav-mobile').html($('.sh-header-left-side .sh-nav').html());
    } else {
        $('.primary-mobile .sh-nav-mobile').html($('.primary-desktop #header-navigation .sh-nav').html());
    }
    $('.primary-mobile .sh-nav-mobile > li.sh-nav-special').remove();
    if ($('.sh-header-builder').length) {
        $('.sh-header-builder').each(function() {
            $(this).find('.sh-nav-mobile').html($(this).find('.sh-header-builder-main-element-navigation .sh-nav').html());
        });
    }
    $('.sh-header-builder-mobile-menu').on('click', function(e) {
        $(this).closest('.sh-header-builder-mobile').find('.sh-header-mobile-dropdown').stop(true, true).slideToggle(300, 'linear');
        var menu = $(this).find(".c-hamburger");
        if (menu.hasClass("is-active") === true) {
            menu.removeClass("is-active");
        } else {
            menu.addClass("is-active");
        }
    });
    setTimeout(function() {
        if ($(document).width() < 1025) {
            $('.primary-desktop .sh-nav ul.sub-menu, .sh-header-builder-main ul.sub-menu').css('display', 'none');
        }
    }, 50);

    function jevelin_header_dropdown() {
        if ($(document).width() > 1025) {
            $('.sh-header-mobile-dropdown').hide();
        }
        if ($(document).width() < 1025) {
            $('body').removeClass('page-layout-right-fixed');
            $('.primary-desktop ul.sub-menu, .sh-header-builder-main ul.sub-menu').css('display', 'none');
            $('.sh-sticky-mobile-header .sh-header-mobile-dropdown').css('overflow', 'auto');
            if ($('#wpadminbar').length) {
                $('.sh-sticky-mobile-header .sh-header-mobile-dropdown').css('max-height', $(window).height() - $('.sh-header-mobile-navigation').height() - $('#wpadminbar').height());
            } else {
                $('.sh-sticky-mobile-header .sh-header-mobile-dropdown').css('max-height', $(window).height() - $('.sh-header-mobile-navigation').height());
            }
        }
    }
    jevelin_header_dropdown();

    function jevelin_navigation_position() {
        var new_position, menu_status, menu_width, menu_offset, window_width;
        window_width = $(document).width();
        $('ul.sh-nav ul').mouseover(function() {
            menu_status = $(this).find('.sub-menu').length;
            if (menu_status > 0) {
                menu_width = $(this).find('.sub-menu').actual('outerWidth');
                menu_offset = $(this).find('.sub-menu').parent().offset().left + menu_width;
                if ((menu_offset + menu_width) > window_width) {
                    if ($('.sh-header.sh-header-megamenu-style2').length) {
                        new_position = menu_width + 0 + 15;
                    } else {
                        new_position = menu_width + 0;
                    }
                    $(this).find('.sub-menu').css({
                        left: -new_position - 0,
                        top: '0',
                    });
                } else {
                    $(this).find('.sub-menu').css({
                        left: new_position + 0,
                        top: '0',
                    });
                }
            }
        });
    }
    jevelin_navigation_position();

    function jevelin_megamenu() {
        $('.sh-nav .mega-menu-row').each(function() {
            $(this).children().css('height', '');
            var self = $(this);
            var count = parseInt($(this).children().length);
            if (count > 0 && count <= 4) {
                $(this).addClass('mega-menu-row-' + count);
                var maxHeight = $(self).actual('height');
                $(this).find('>:nth-child(-n+' + count + ')').each(function() {
                    $(this).height(maxHeight);
                });
            } else {
                $(this).addClass('mega-menu-row-5');
                var count_now = 0;
                while (count >= count_now) {
                    count_now += 4;
                    var maxHeight = -1;
                    $(this).find('>:nth-child(n+' + (count_now - 3) + '):nth-child(-n+' + count_now + ')').each(function() {
                        maxHeight = maxHeight > $(this).actual('height') ? maxHeight : $(this).actual('height');
                    });
                    $(this).find('>:nth-child(n+' + (count_now - 3) + '):nth-child(-n+' + count_now + ')').each(function() {
                        $(this).height(maxHeight);
                    });
                }
            }
        });
    }
    jevelin_megamenu();
    $('.sh-column-adjust-left .fw-row:first-child .sh-column:first-child > div').append('<div class="fw-row">' + $('.sh-section-3e0cbbb965eff9a43388283e981cfa23 .fw-row:not(:first-child)').html() + '</div>');
    $('.sh-column-adjust-left .sh-section-container > .fw-row:not(:first-child)').remove();
    var section_justify_height_init = 1;
    var section_justify_height_last = 0;
    if ($('.sh-google-map').length > 0) {
        section_justify_height_init = 0;
    }

    function jevelin_section_justify_height() {
        $('.section-justify-height .fw-row').each(function() {
            if ($(this).children().length > 1) {
                $(this).children().css('height', '');
                $('.section-justify-height-google-maps').css('max-height', '').css('min-height', '');
                if (window.matchMedia('(min-width: 800px)').matches) {
                    $(this).children().css('height', $(this).height());
                    section_justify_height_last = $(this).height();
                    $(this).find('.section-justify-height-google-maps').css('max-height', section_justify_height_last + 'px').css('min-height', section_justify_height_last + 'px');
                }
                if (section_justify_height_init < 1) {
                    $(this).children().children().each(function() {
                        if ($(this).children().length == '1' && $(this).children().hasClass('sh-google-map') == true) {
                            $(this).find('.fw-map > .fw-map-canvas').addClass('section-justify-height-google-maps').css('max-height', section_justify_height_last + 'px').css('min-height', section_justify_height_last + 'px');
                        }
                    });
                }
            }
        });
        section_justify_height_init++;
    }
    jevelin_section_justify_height();
    $(window).load(function() {
        jevelin_section_justify_height();
    });
    $('.sh-header-7 #header-logo').css('height', $('.sh-header-7').height());
    $('.sh-header-top-10 .header-contacts').css('height', $('.sh-header-top-10').height());
    $('header.primary-desktop').css('height', $('header.primary-desktop').actual('height'));
    $('header.primary-mobile').css('height', $('.sh-header-mobile-navigation').actual('height') + $('header.primary-mobile .sh-page-notice').actual('outerHeight'));
    $(window).resize(function() {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function() {
            jevelin_header_dropdown();
            jevelin_navigation_position();
            jevelin_megamenu();
            jevelin_section_justify_height();
        }, 500);
    });
    var primary_desktop = ''
    $(window).on('load resize', function() {
        if ($(document).width() > 1025) {
            $('header.primary-desktop').css('height', '');
            primary_desktop = $('.sh-header').actual('outerHeight') + $('.sh-header-top').actual('outerHeight');
            $('header.primary-desktop').css('height', primary_desktop);
        }
    });
    $(".sh-header-builder-search-trigger").on('click', function(e) {
        $(this).closest('.sh-header-builder-main').find('.sh-header-search').fadeIn("fast");
        $(this).closest('.sh-header-builder-main').find('.sh-header-search-input').focus();
        e.preventDefault();
        return false;
    });
    $(".sh-header-builder-main .close-header-search").on('click', function(e) {
        $(this).closest('.sh-header-search').fadeOut("fast");
        e.preventDefault();
        return false;
    });
    $(".sh-nav-search, .sh-side-button-search").on('click', function() {
        if ($("#primary-desktop").actual('height') > 200) {
            $("#header-search").addClass('sh-side-button-search-line');
        }
        $("#header-search").fadeIn("fast");
        $("#header-search").find(".sh-header-search-input").focus();
        return false;
    });
    $(".close-header-search").on('click', function() {
        $("#header-search").fadeOut("fast");
        return false;
    });
    $(".sh-header-search-form").submit(function(event) {
        $(this).fadeTo("fast", 0.45);
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $(".sh-header-search").fadeOut("fast");
            if ($('body').hasClass('page-layout-right-fixed')) {
                $("body").removeClass('page-layout-right-fixed');
                var menu = $(".sh-header .sh-nav-dropdown").find(".c-hamburger");
                if (e.target != 'div.sh-table-cell') {
                    if (menu.hasClass("is-active") === true) {
                        menu.removeClass("is-active");
                    } else {
                        menu.addClass("is-active");
                    }
                }
            }
        }
    });
    $(".sh-header .sh-nav-dropdown").on('click', function(e) {
        var self = $(this);
        if (!$("body").hasClass('page-layout-right-fixed')) {
            $(".sh-header").addClass("sh-animation-left");
            $("body").addClass('page-layout-right-fixed');
            setTimeout(function() {
                $(".sh-header").removeClass("sh-animation-left");
            }, 301);
        } else {
            $(".sh-header").addClass("sh-animation-left");
            $("body").removeClass('page-layout-right-fixed');
            setTimeout(function() {
                $(".sh-header").removeClass("sh-animation-left");
                jQuery(window).trigger('resize');
            }, 301);
        }
        var menu = self.find(".c-hamburger");
        if (e.target != 'div.sh-table-cell') {
            if (menu.hasClass("is-active") === true) {
                menu.removeClass("is-active");
            } else {
                menu.addClass("is-active");
            }
        }
        return false;
    });
    $('.sh-header-mobile-dropdown ul li:has(">ul") a').on('click', function() {
        $(this).parent().toggleClass('open');
        $(this).parent().find('> ul').stop(true, true).slideToggle(300, 'easeOutQuint');
        if ($(this).parent().hasClass('open')) {
            $(this).parent().find('ul ul').stop(true, true).slideUp(0, 'easeOutQuint');
        }
        if ($(this).parent().hasClass('menu-item-has-children')) {
            return false;
        }
    });
    $('html').on('click', function(e) {
        if (!$(e.target).hasClass('header-mobile-form-input') && $('.sh-header-mobile-dropdown').is(':visible')) {
            $('.sh-nav-dropdown .c-hamburger').trigger('click').toggleClass('is-active');
        }
    });
    $('.sh-header-mobile-dropdown li.menu-item:not(.menu-item-has-children)').on('click', function() {
        if ($(this).find('> a').attr('href').indexOf("#") >= 0) {
            $('.sh-header-mobile .sh-nav-dropdown .c-hamburger').trigger('click').toggleClass('is-active');
        }
    });
    $('.sh-popover-mini').addClass('sh-animated fadeIn');
    $(window).load(function() {
        $('.sh-image-comparison .twentytwenty-handle').addClass('sh-animated pulse');
        $('.sh-image-comparison .twentytwenty-before').addClass('sh-animated fadeIn');
        $('.sh-image-comparison .twentytwenty-handle').on('mouseover', function() {
            $(this).addClass('sh-stop-animation');
        });
    });
    if ((typeof(WOW) == typeof(Function))) {
        var wow = new WOW({
            boxClass: 'sh-animated',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true,
            scrollContainer: null
        });
        wow.init();
    }
    $('.blog-style-masonry:not(.sh-recent-posts-list-carousel)').each(function() {
        var $masonry = $(this).isotope({
            itemSelector: '.post-item',
            columnWidth: 0,
            gutter: 0,
        }).isotope('reloadItems');
        $masonry.imagesLoaded(function() {
            $masonry.isotope('layout').css('opacity', 1);
        });
        $(window).load(function() {
            setTimeout(function() {
                $masonry.isotope('layout');
            }, 0);
        });
    });
    $('.sh-portfolio').each(function() {
        var portfolio_filter = '*';
        if ($(this).attr('data-all-filter')) {
            portfolio_filter = $(this).attr('data-all-filter');
        }
        var $portfolio = $(this).isotope({
            itemSelector: '.sh-portfolio-item',
            columnWidth: 0,
            gutter: 0,
            filter: portfolio_filter
        }).isotope('reloadItems').css('opacity', 1);
        $(window).load(function() {
            $portfolio.imagesLoaded(function() {
                $portfolio.isotope('layout');
            });
        });
    });
    $('.sh-filter:not(.sh-filter-pagination)').on('click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        if ($(this).parent().attr('data-type') != 'woocommerce') {
            $(this).parent().parent().parent().find('.sh-portfolio').isotope({
                filter: filterValue
            });
        } else {
            $(this).parent().parent().parent().find('ul.products').isotope({
                filter: filterValue
            });
        }
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
    });
    $('.sh-filter:not(.sh-filter-pagination)').on('click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $(this).parent().parent().parent().find('.sh-portfolio-fancy .sh-portfolio-fancy-item').each(function() {
            $(this).removeClass('sh-portfolio-fancy-item-active').addClass('sh-portfolio-fancy-item-active-cat');
        });
        $(this).parent().parent().parent().find('.sh-portfolio-fancy').isotope({
            filter: filterValue
        });
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
    });
    $('.sh-filter.sh-filter-pagination').on('click', 'span', function() {
        window.location.href = $(this).attr('data-href');
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
    });
    $.fn.isVisible = function() {
        var rect = this[0].getBoundingClientRect();
        return ((rect.height > 0 || rect.width > 0) && rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
    };
    $.fn.isVisibleAbove = function() {
        var rect = this[0].getBoundingClientRect();
        return ((rect.height > 0 || rect.width > 0) && rect.bottom < 0 && rect.right >= 0 && rect.top < 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
    };
    $.fn.portfolioFancy = function() {};
    var $portfolio2 = $('.sh-portfolio-fancy').isotope({
        itemSelector: '.sh-portfolio-fancy-item',
        columnWidth: 0,
        gutter: 0,
    }).isotope('reloadItems');
    $(window).load(function() {
        $portfolio2.imagesLoaded(function() {
            var time = 0;
            $('.sh-portfolio-fancy').find('.sh-portfolio-fancy-item').each(function() {
                var self = $(this);
                if (self.isVisible()) {
                    setTimeout(function() {
                        self.addClass('sh-portfolio-fancy-item-active');
                    }, time);
                    time += 300;
                } else if (self.isVisibleAbove()) {
                    self.addClass('sh-portfolio-fancy-item-active');
                }
            });
            $portfolio2.isotope('layout');
        });
        $(window).scroll(function() {
            clearTimeout(window.scrollFinished);
            window.scrollFinished = setTimeout(function() {
                var time2 = 0;
                $('.sh-portfolio-fancy').find('.sh-portfolio-fancy-item:not(.sh-portfolio-fancy-item-active)').each(function() {
                    var self = $(this);
                    if (self.isVisible()) {
                        setTimeout(function() {
                            self.addClass('sh-portfolio-fancy-item-active');
                        }, time2);
                        time2 += 300;
                    }
                });
            }, 100);
        });
    });
    if (jevelin.one_pager == true) {
        if (window.location.href && window.location.href.split("#")[1]) {
            var topbar = 0;
            if ($(document).width() > 1000 && $(".sh-header").hasClass('sh-sticky-header-active')) {
                topbar = topbar + parseInt($('.sh-header').height());
            } else if ($(document).width() > 1000 && $(".sh-header").hasClass('sh-sticky-header')) {
                topbar = topbar + parseInt($('.sh-header').height()) - 30;
            }
            if ($(document).width() > 600 && $('#wpadminbar').height() > 0) {
                topbar = topbar + $('#wpadminbar').height();
            }
            $(window).load(function() {
                if ($('#' + window.location.href.split("#")[1]).length && !$('#' + window.location.href.split("#")[1]).hasClass('vc_tta-panel')) {
                    $('html, body').animate({
                        scrollTop: ($('#' + window.location.href.split("#")[1]).offset().top - topbar)
                    }, 1000);
                }
            });
        }
        $('a[href^="#goto-"], a[href^="#backtotop"], a[href$="#backtotop"]').on("click", function(e) {
            if ($(this).attr('href').indexOf('#backtotop') == -1) {
                var url = $(this).attr('href');
                if (url.indexOf("goto-") != -1) {
                    url = url.replace("goto-", "");
                }
                if (url && url.substring(0, 1) == '#') {
                    e.preventDefault();
                    if ($(url).length) {
                        var topbar = 0;
                        if ($(document).width() > 1000 && $(".sh-header").hasClass('sh-sticky-header-active')) {
                            topbar = topbar + $('.sh-header').height();
                        }
                        if ($(document).width() > 600 && $('#wpadminbar').height() > 0) {
                            topbar = topbar + $('#wpadminbar').height();
                        }
                        $('html, body').animate({
                            scrollTop: ($(url).offset().top - topbar)
                        }, 1000);
                    }
                }
            } else {
                if (history.pushState) {
                    history.pushState(null, null, '#backtotop');
                } else {
                    location.hash = '#backtotop';
                }
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
            }
        });
        $("a[href*=#]:not([data-vc-tabs]):not([data-vc-accordion])").on('click', function(e) {
            var hash_url = $(this).attr('href');
            var hash_val = hash_url.substring(hash_url.indexOf('#'));
            var hash_full_url = $(this).attr('href').split("#")[0];
            hash_full_url = hash_full_url.replace('http:', '');
            hash_full_url = hash_full_url.replace('https:', '');
            var current_hash_full_url = window.location.href.split("#")[0];
            current_hash_full_url = current_hash_full_url.replace('http:', '');
            current_hash_full_url = current_hash_full_url.replace('https:', '');
            if (hash_full_url && hash_full_url != current_hash_full_url) {
                window.location.href = $(this).attr('href');
            }
            if (hash_val && $(hash_val).length && hash_val.indexOf("goto-") < 0 && hash_val.indexOf("backtotop") < 0 && $(this).attr('data-toggle') != 'collapse' && $(this).attr('data-toggle') != 'tab' && !$(this).parent().parent().hasClass('wc-tabs')) {
                e.preventDefault();
                e.stopPropagation();
                var topbar = 0;
                if ($(document).width() > 1000 && $(".sh-header").hasClass('sh-sticky-header-active')) {
                    topbar = topbar + parseInt($('.sh-header').height());
                } else if ($(document).width() > 1000 && $(".sh-header").hasClass('sh-sticky-header')) {
                    topbar = topbar + parseInt($('.sh-header').height()) - 30;
                }
                if ($(document).width() > 600 && $('#wpadminbar').height() > 0) {
                    topbar = topbar + $('#wpadminbar').height();
                }
                if (history.pushState) {
                    history.pushState(null, null, hash_val);
                } else {
                    location.hash = hash_val;
                }
                $('html, body').animate({
                    scrollTop: ($(hash_val).offset().top - topbar)
                }, 1000);
            }
        });
    }
    var headers_above_content = 0;
    $('.sh-header-builder').each(function() {
        if ($(this).hasClass('sh-header-builder-main-above-content')) {
            if (headers_above_content > 0) {
                var self = $(this);
                setTimeout(function() {
                    self.removeClass('sh-header-builder-main-above-content');
                }, 10);
            }
            headers_above_content++;
        }
    });

    function heade_builder_sticky() {
        if ($(document).width() > 1025) {
            if ($('#wpadminbar').length) {
                var header_builder_admin = $('#wpadminbar').actual('height');
            } else {
                var header_builder_admin = 0;
            }
            $('.sh-header-builder-main-sticky-enabled').first().height($('.sh-header-builder-main-sticky-enabled').first().actual('height'));
            var header_builder_sticky = $('.sh-header-builder-main-sticky-enabled').first();
            if ($(window).scrollTop() && $(window).scrollTop() > header_builder_sticky.offset().top - header_builder_admin) {
                header_builder_sticky.addClass('sh-header-builder-main-sticky-fixed').find('.sh-header-builder-main-container').css('top', header_builder_admin);
            } else {
                header_builder_sticky.removeClass('sh-header-builder-main-sticky-fixed').find('.sh-header-builder-main-container').css('top', '');
            }
        }
    }
    if ($('.sh-header-builder-main-sticky-enabled').length) {
        heade_builder_sticky();
        $(window).scroll(heade_builder_sticky);
    }

    function heade_builder_mobile_sticky() {
        if ($(document).width() < 1025) {
            if ($('#wpadminbar').length) {
                var header_builder_admin = $('#wpadminbar').actual('height');
            } else {
                var header_builder_admin = 0;
            }
            var header_builder_sticky = $('.sh-header-builder-mobile-sticky-enabled').first();
            if (!header_builder_sticky.hasClass('sh-header-builder-mobile-sticky-fixed')) {
                $('.sh-header-builder-mobile-sticky-enabled').first().height($('.sh-header-builder-mobile-sticky-enabled').first().actual('height'));
            }
            if ($(window).scrollTop() && $(window).scrollTop() >= header_builder_sticky.offset().top - header_builder_admin) {
                if (!header_builder_sticky.hasClass('sh-header-builder-mobile-sticky-fixed')) {
                    header_builder_sticky.addClass('sh-header-builder-mobile-sticky-fixed').addClass('sh-sticky-mobile-header');
                }
            } else {
                header_builder_sticky.removeClass('sh-header-builder-mobile-sticky-fixed').removeClass('sh-sticky-mobile-header');
            }
        }
    }
    if ($('.sh-header-builder-mobile-sticky-enabled').length) {
        heade_builder_mobile_sticky();
        $(window).scroll(heade_builder_mobile_sticky);
    }

    function jevelin_sticky() {
        if ($(document).width() > 1025) {
            if (header_height < 0) {
                header_height = $('.sh-header').actual('height');
            }
            if (header_offset_total < 0) {
                if ($('#wpadminbar').length) {
                    var header_admin = $('#wpadminbar').actual('height');
                } else {
                    var header_admin = 0;
                }
                if ($('.sh-header').length) {
                    var header_offset = $('.sh-header').offset().top - header_admin;
                } else {
                    var header_offset = 0;
                }
                header_offset_total = header_offset;
            }
            if ($(document).scrollTop() > header_offset_total) {
                if (!$('body').hasClass('compose-mode')) {
                    $('.sh-header').addClass('sh-sticky-header-active').css('top', $('#wpadminbar').actual('height'));
                } else {
                    $('.sh-header').addClass('sh-sticky-header-active').css('top', 0);
                }
            } else {
                if (primary_desktop > 0) {
                    $('.sh-header-height').css('height', primary_desktop);
                    $('.sh-header:not(.sh-header-2):not(.sh-header-3):not(.sh-header-4)').css('height', primary_desktop);
                    setTimeout(function() {
                        $('.sh-header-height').css('height', '');
                        $('.sh-header:not(.sh-header-2):not(.sh-header-3):not(.sh-header-4)').css('height', '');
                    }, 300);
                }
                $('.sh-header').removeClass('sh-sticky-header-active').css('top', 0);
            }
        }
        if ($(document).scrollTop() > 0) {
            $('.sh-header-mobile').addClass('sh-sticky-mobile-header-active');
        } else {
            $('.sh-header-mobile').removeClass('sh-sticky-mobile-header-active');
        }
    }
    if ($('.sh-sticky-header').length) {
        if ($('#wpadminbar').length) {
            var header_admin = $('#wpadminbar').height();
        } else {
            var header_admin = 0;
        }
        if ($('.sh-header').length) {
            var header_offset = $('.sh-header').offset().top - header_admin;
        } else {
            var header_offset = 0;
        }
        var header_height = $('.sh-header').height();
        var header_offset_total = header_offset;
        var header_offset_sticky = 0;
        jevelin_sticky();
        $(window).scroll(jevelin_sticky);
    }
    $(window).on('ready load', function() {
        if ($('body').hasClass('compose-mode')) {
            $('.sh-header').removeClass('sh-sticky-header-active').css('top', 0);
        }
    });
    if ($('.sh-copyrights-image').height() > 0) {
        $('.sh-copyrights-text, .sh-copyrights-social').css('line-height', $('.sh-copyrights-image').height() + 'px');
    }
    $('.sh-alert-close').on('click', function() {
        $(this).parent().fadeTo(400, 0.00, function() {
            $(this).slideUp(400, function() {
                $(this).remove();
            });
        });
    });
    if (jQuery().counterUp) {
        $('.sh-counter-animate').counterUp({
            delay: 10,
            time: 1500,
            triggerOnce: true
        });
    }
    $(".sh-social-share-networks").jsSocials({
        _getShareUrl: function() {
            var url = jsSocials.Socials.prototype._getShareUrl.apply(this, arguments);
            return "javascript:window.open('" + url + "', '', 'menubar=no, width=500, height=300')";
        },
        showLabel: false,
        showCount: "inside",
        shares: ["facebook", "twitter", "googleplus", "email", "pinterest"]
    });
    $('.sh-gallery:not(.sh-gallery-autoplay)').slick({
        accessibility: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="ti-angle-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="ti-angle-right"></span></button>',
    });
    $('.sh-gallery-autoplay').slick({
        accessibility: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="ti-angle-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="ti-angle-right"></span></button>',
    });
    $('.sh-sidebar-search').blur(function() {
        $(this).parent().parent().parent().removeClass("sh-sidebar-search-active");
    }).focus(function() {
        $(this).parent().parent().parent().addClass("sh-sidebar-search-active")
    });

    function sh_increase_number_update() {
        if ($('body').hasClass('woocommerce-cart')) {
            $('input[name="update_cart"]').removeAttr('disabled');
            setTimeout(function() {}, 500);
        }
    }
    if (jevelin.quantity_button != 'off') {
        $('.quantity').each(function() {
            if ($(this).children().is('input')) {
                $(this).children().attr('type', 'text');
                $(this).children().attr('class', 'sh-quantity-number');
                $(this).prepend('<span class="sh-noselect sh-increase-number-down"><i class="ti-arrow-down"></i></span>');
                $(this).append('<span class="sh-noselect sh-increase-number-up"><i class="ti-arrow-up"></i></span>');
                $(this).addClass('sh-increase-numbers');
            }
        });
        $("input.sh-quantity-number").on('keyup keypress blur change', function(e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            } else {
                if ($(this).val().length >= parseInt($(this).attr('maxlength')) && (e.which != 8 && e.which != 0)) {
                    return false;
                }
            }
        });
        $('body').on('updated_cart_totals', function() {
            if ($('.woocommerce .sh-alert-error').length > 1) {
                $('.woocommerce .sh-alert-error').first().remove();
            }
            $('.quantity').each(function() {
                if ($(this).children().is('input')) {
                    $(this).find('.sh-increase-number-down').remove();
                    $(this).find('.sh-increase-number-up').remove();
                    $(this).children().attr('type', 'text');
                    $(this).children().attr('class', 'sh-quantity-number');
                    $(this).prepend('<span class="sh-noselect sh-increase-number-down"><i class="ti-arrow-down"></i></span>');
                    $(this).append('<span class="sh-noselect sh-increase-number-up"><i class="ti-arrow-up"></i></span>');
                    $(this).addClass('sh-increase-numbers');
                }
            });
        });
        $(document).on('click', '.sh-increase-number-down', function() {
            var current_number = parseInt($(this).parent().find('input').val()) - 1;
            if (current_number >= 1) {
                $(this).parent().find('input').val(current_number);
                sh_increase_number_update();
            }
        });
        $(document).on('click', '.sh-increase-number-up', function() {
            var current_number = parseInt($(this).parent().find('input').val()) + 1;
            if (current_number >= 0) {
                $(this).parent().find('input').val(current_number);
                sh_increase_number_update();
            }
        });
    } else {
        $('.woocommerce .quantity').addClass('quantity-basic');
    }
    if ($('.sh-back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.sh-back-to-top').addClass('active');
                } else {
                    $('.sh-back-to-top').removeClass('active');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('.sh-back-to-top').on('click', function(e) {
            e.preventDefault();
            $(this).blur();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }
    var toggles = document.querySelectorAll(".sh-header-mobile-navigation .c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }
    if ($('.sh-header-left-side').length) {
        $('.sh-header-left-side .sh-nav-cart .sub-menu').css('top', -parseInt($('.sh-header-left-side .sh-nav-cart .sub-menu').height()));
        $(window).on('load resize', function() {
            var side_logo_spacing = ($('#wpadminbar').length) ? 100 : 68;
            $(".sh-header-left-side #header-logo img").css('max-height', parseInt($(".sh-header-left-side .header-standard-position").position().top) - side_logo_spacing);
            $('.sh-header-left-side #header-logo').animate({
                opacity: 1
            }, 150);
        });
    }
    if ((typeof(WOW) == typeof(Function))) {
        var wow_progress = new WOW({
            boxClass: 'sh-progress',
            animateClass: '',
            mobile: true,
            live: true,
            callback: function(box, test) {
                $('#' + box.id).find('.sh-progress-status-value').each(function() {
                    $(this).animate({
                        width: $(this).attr('data-width') + '%'
                    }, {
                        duration: 1300,
                        easing: 'easeOutExpo',
                    });
                });
            },
            scrollContainer: null
        });
        wow_progress.init();
    }
    setTimeout(function() {
        var wow_progress = new WOW({
            boxClass: 'sh-piechart',
            animateClass: '',
            mobile: true,
            live: true,
            callback: function(box, test) {
                $('#' + box.id).addClass('sh-piechart-animated');
                if ($('#' + box.id).hasClass('sh-piechart-circle')) {
                    if (!$('#' + box.id).find('.circle_animation').css('animation')) {
                        $('#' + box.id).find('.circle_animation').velocity({
                            strokeDashoffset: parseInt($('#' + box.id).attr('data-id'))
                        }, {
                            duration: 2000,
                            easing: [0.785, 0.135, 0.150, 0.860]
                        });
                    }
                } else if ($('#' + box.id).hasClass('sh-piechart-rhomb')) {
                    if (!$('#' + box.id).find('.rhomb_animation').css('animation')) {
                        $('#' + box.id).find('.rhomb_animation').velocity({
                            strokeDashoffset: parseInt($('#' + box.id).attr('data-id'))
                        }, {
                            duration: 2000,
                            easing: [0.785, 0.135, 0.150, 0.860]
                        });
                    }
                }
                $('#' + box.id).find('.sh-piechart-percentage-number').each(function() {
                    var self = $(this);
                    var percent_hours = self.text();
                    $({
                        numberValue: 0
                    }).animate({
                        numberValue: percent_hours
                    }, {
                        duration: 2000,
                        easing: 'easeOutCirc',
                        progress: function() {
                            self.text(Math.round(Math.ceil(this.numberValue * 100) / 100));
                        }
                    });
                });
            },
            scrollContainer: null
        });
        wow_progress.init();
    }, 500);
    $(".woocommerce select.country_select").SumoSelect({
        search: true
    });
    $(".woocommerce-ordering .orderby").SumoSelect({
        search: true
    });
    $(".contact-form select").SumoSelect();
    $(".wpcf7-select").SumoSelect();
    $('.sh-portfolio-item .sh-portfolio-overlay3').hoverdir();
    $('.sh-portfolio-single-disabled').on('click', function() {
        return false;
    });
    $('iframe').each(function() {
        var iframe_src = $(this).attr('src');
        if (iframe_src) {
            if (iframe_src.indexOf("youtube.com") !== -1) {
                return this.src + '?title=0&byline=0&portrait=0';
            }
        }
    });
    if ($(window).width() >= 768) {
        $('.sh-titlebar-parallax').jarallax({
            speed: 0.5
        });
    } else {
        $('.sh-titlebar-parallax').addClass('sh-titlebar-parallax-disabled');
    }
    $('.sh-image-gallery:not(.sh-image-gallery-simple)').each(function() {
        var image_gallery_columns = parseInt($(this).attr('data-columns'));
        if (isNaN(image_gallery_columns)) {
            image_gallery_columns = 1;
        }
        if (image_gallery_columns >= 3) {
            var image_gallery_1024 = 3;
        } else {
            var image_gallery_1024 = image_gallery_columns;
        }
        if (image_gallery_columns >= 2) {
            var image_gallery_600 = 2;
        } else {
            var image_gallery_600 = image_gallery_columns;
        }
        var image_gallery_autoplay = parseInt($(this).attr('data-autoplay'));
        if (image_gallery_autoplay > 0) {
            var image_gallery_autoplay_status = true;
            var image_gallery_autoplay_speed = parseInt(image_gallery_autoplay);
        } else {
            var image_gallery_autoplay_status = false;
            var image_gallery_autoplay_speed = 0;
        }
        var image_gallery_infinite = (image_gallery_autoplay_status == true) ? true : false;
        $(this).slick({
            infinite: image_gallery_infinite,
            dots: true,
            slidesToShow: image_gallery_columns,
            slidesToScroll: image_gallery_columns,
            autoplay: image_gallery_autoplay_status,
            autoplaySpeed: image_gallery_autoplay_speed,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: image_gallery_1024,
                    slidesToScroll: image_gallery_1024,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: image_gallery_600,
                    slidesToScroll: image_gallery_600
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    });
    $('.sh-image-gallery-item.slick-slide.slick-cloned a').attr('data-rel', '');
    $('.sh-image-gallery-item .post-meta-thumb a').on('click', function() {
        $('.sh-image-gallery-item.slick-slide.slick-cloned a').attr('data-rel', '');
    });
    if (jevelin.wc_lightbox == 'jevelin') {
        $('.woocommerce div.product .woocommerce-product-gallery__wrapper a').attr('data-rel', 'lightcase:gallery');
    }
    $("a[data-rel^=lightcase], a[rel^='sh-lightbox'], a[rel^='lightbox']").lightcase({
        maxWidth: jevelin.lightbox_window_max_width,
        maxHeight: jevelin.lightbox_window_max_height,
        overlayOpacity: jevelin.lightbox_opacity,
        transition: jevelin.lightbox_transition,
        showSequenceInfo: true,
        showCaption: false,
        shrinkFactor: jevelin.lightbox_window_size,
    });
    $('.product-categories .count').each(function() {
        $(this).html($(this).html().slice(1, -1)).show();
    });
    $('.widget_categories li').each(function() {
        var cat_count = $(this).clone().children().remove().end().text().trim().slice(1, -1);
        if (cat_count) {
            $(this).append('<span class="count">' + cat_count + '</span>');
        }
    });
    $('.sh-column-shadow').parent().parent().css('z-index', '500');
    $('.sh-social-share-button').on('click', function() {
        $(this).next().toggleClass('sh-social-share-networks-active');
    });
    $('.sh-video-player-image-placeholder').on('click', function() {
        $(this).removeClass('sh-video-player-image-placeholder');
        var videoURL = $(this).find('iframe').prop('src');
        if (!videoURL.match(/vimeo.com/)) {
            videoURL += "&autoplay=1";
        }
        $(this).find('iframe').prop('src', videoURL);
    });
    $('.sh-partners-carousel').each(function() {
        var partner_autoplay = parseInt($(this).attr('data-autoplay'));
        var partner_carousel_columns = parseInt($(this).attr('data-id'));
        var partner_carousel_columns_responsive1 = partner_carousel_columns;
        var partner_carousel_columns_responsive2 = 2;
        if (partner_carousel_columns > 4) {
            partner_carousel_columns_responsive1 = 4;
        }
        if (partner_carousel_columns == 1) {
            partner_carousel_columns_responsive2 = 1;
        }
        if (partner_autoplay < 1 || !partner_autoplay) {
            partner_autoplay = 5000;
        }
        $(this).slick({
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: partner_carousel_columns,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: partner_autoplay,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: partner_carousel_columns_responsive1
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: partner_carousel_columns_responsive2,
                    pauseOnHover: false
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    pauseOnHover: false
                }
            }],
        });
    })
    $('.sh-recent-products-carousel .products').each(function() {
        var carousel_columns = parseInt($(this).parent().parent().parent().attr('data-id'));
        var carousel_columns_responsive1 = carousel_columns;
        var carousel_columns_responsive2 = 2;
        if (carousel_columns > 4) {
            carousel_columns_responsive1 = 4;
        }
        if (carousel_columns == 1) {
            carousel_columns_responsive2 = 1;
        }
        $(this).slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: carousel_columns,
            slidesToScroll: carousel_columns,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: carousel_columns_responsive1,
                    slidesToScroll: carousel_columns_responsive1,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: carousel_columns_responsive2,
                    slidesToScroll: carousel_columns_responsive2,
                    pauseOnHover: false
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false
                }
            }],
        });
    })
    $('.sh-recent-posts-carousel .blog-list').each(function() {
        var desktop_slides = parseInt($(this).parent().attr('data-id'));
        if (desktop_slides == 4 || desktop_slides == 5) {
            var desktop_slides = 3;
        }
        $(this).slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: desktop_slides,
            slidesToScroll: desktop_slides,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: desktop_slides,
                    slidesToScroll: desktop_slides,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    pauseOnHover: false
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false
                }
            }],
        });
    });
    $('.sh-partners-carousel').on('init setPosition', function(event, slick, currentSlide, nextSlide) {
        var self = $(this);
        var max_height = 0;
        self.find('.slick-slide img').each(function() {
            var cur_height = $(this).height();
            if (cur_height > max_height) {
                max_height = cur_height;
            }
        });
        if (max_height > 0) {
            self.css('max-height', max_height);
            self.find('.slick-slide').each(function() {
                $(this).height(max_height);
            });
        }
        self.css('height', 'auto').css('opacity', '1');
    });

    function jevelin_navigation() {
        if ($('.sh-header.sh-header-megamenu-style2').length) {
            $("ul.sh-nav").superfish({
                delay: jevelin.header_animation_dropdown_delay,
                hoverClass: 'sh-hover',
                animation: {
                    opacity: "show",
                    marginTop: "0px"
                },
                animationOut: {
                    opacity: "hide",
                    marginTop: "-10px"
                },
                easing: jevelin.header_animation_dropdown,
                speed: parseInt(jevelin.header_animation_dropdown_speed),
                speedOut: 0,
                cssArrows: false,
                pathLevels: 2,
            });
        } else {
            $("ul.sh-nav").superfish({
                delay: jevelin.header_animation_dropdown_delay,
                hoverClass: 'sh-hover',
                animation: {
                    opacity: "show",
                    height: 'show'
                },
                animationOut: {
                    opacity: "hide",
                    height: 'hide'
                },
                easing: jevelin.header_animation_dropdown,
                speed: parseInt(jevelin.header_animation_dropdown_speed),
                speedOut: 0,
                cssArrows: false,
                pathLevels: 2,
            });
        }
    }
    jevelin_navigation();
    if (!$('header.primary-desktop .sh-nav-social').find('a').length) {
        $('header.primary-desktop .sh-nav-social').remove();
    }
    var mobile_header_dropdown_align = 0;
    $('.sh-header-mobile .sh-nav-dropdown').click(function() {
        if (mobile_header_dropdown_align == 0) {
            mobile_header_dropdown_align++;
            $('.sh-nav-mobile > li > a, .sh-nav-mobile li.menu-item-has-children > a, .sh-header-mobile li.mega-menu-col > a').each(function() {
                if ($(this).attr('href') != '' && $(this).attr('href') != '#') {
                    $(this).parent().prepend('<a href="' + $(this).attr('href') + '" class="menu-item-open-fix">' + $(this).html() + '</a>');
                    $(this).html('&nbsp;')
                }
            });
        }
        $('.sh-header-mobile-dropdown').stop(true, true).slideToggle(jevelin.header_animation_dropdown_speed, jevelin.header_animation_dropdown);
        return false;
    });
    $('.sh-header li.mega-menu-col > a').on('click', function() {
        window.location = $(this).attr('href');
    });
    if (jevelin.notice !== false) {
        if (jevelin.notice == 'enable2') {
            $('.sh-page-notice').show();
            $(".sh-page-notice-button").on('click', function() {
                $('.sh-page-notice').hide();
                $('header.primary-mobile').css('height', $('.sh-header-mobile-navigation').actual('height'));
                return false;
            });
        } else {
            if ('set' !== $.cookie('sh-notice')) {
                $('.sh-page-notice').show();
                $(".sh-page-notice-button").on('click', function() {
                    $.cookie('sh-notice', 'set', {
                        expires: 356,
                        path: '/'
                    });
                    $('.sh-page-notice').hide();
                    $('header.primary-mobile').css('height', $('.sh-header-mobile-navigation').actual('height'));
                    return false;
                });
            }
        }
    }
    if (jevelin.page_loader == 1) {
        $(".sh-page-loader").fadeOut(500);
        $("body").css('overflow', 'visible');
        $(window).bind('beforeunload', function(e) {
            $('.sh-page-loader').fadeIn();
        });
    }
    $(".woocommerce-pagination .page-numbers .prev").html(jevelin.page_numbers_prev);
    $(".woocommerce-pagination .page-numbers .next").html(jevelin.page_numbers_next);
    if (jevelin.rtl_support == 1) {
        $('.sh-filter').each(function() {
            $(this).find('.sh-filter-item:first-child').appendTo(this);
        });
        $('.sh-portfolio-single-info-item').each(function() {
            $(this).find('.sh-portfolio-single-info-left').appendTo(this);
        });
        $('.sh-progress-style4 .sh-progress-item .row').each(function() {
            $(this).find('.col-md-8').appendTo(this);
        });
        $('.sh-progress-style5 .sh-progress-item .row').each(function() {
            $(this).find('.col-md-8').appendTo(this);
        });
        $('.sh-counter-style3 > .sh-table').each(function() {
            $(this).find('.text-right').appendTo(this);
        });
        $('.sh-copyrights-style2 > .sh-table-full > .sh-table-cell:first-child').appendTo('.sh-copyrights-style2 > .sh-table-full');
        $('.sh-header:not(.sh-header-7) > .container > .sh-table > .sh-table-cell:first-child').appendTo('.sh-header > .container > .sh-table');
        $('.sh-header:not(.sh-header-7) .sh-nav .menu-item.sh-nav-cart').prependTo('.sh-header .sh-nav');
        $('.sh-header:not(.sh-header-7) .sh-nav .menu-item.sh-nav-search').prependTo('.sh-header .sh-nav');
        $('.sh-header:not(.sh-header-7) .sh-nav .menu-item.sh-nav-social').prependTo('.sh-header .sh-nav');
        $('.sh-header-top-2 > .container > .row > .header-contacts').appendTo('.sh-header-top-2 > .container > .row');
        $('.sh-header-top-3 > .container > .sh-table > .header-contacts').appendTo('.sh-header-top-3 > .container > .sh-table');
    }

    function jevelin_footer_parallax() {
        if ($(document).width() > 850) {
            $("#wrapper > .content-container").css('margin-bottom', $('.sh-footer').height());
        } else {
            $("#wrapper > .content-container").css('margin-bottom', '');
        }
    }

    function jevelin_footer_parallax_visible() {
        if ($(document).width() > 850) {
            if (($(document).height() - ($(window).scrollTop() + $(window).height())) < $('.sh-footer').height()) {
                $('.sh-footer').css('opacity', '1');
            } else {
                $('.sh-footer').css('opacity', '0');
            }
        }
    }
    if (jevelin.footer_parallax == 1) {
        $("body").addClass('sh-footer-paralalx-init');
        $(window).load(function() {
            jevelin_footer_parallax();
            jevelin_footer_parallax_visible();
        });
        $(window).resize(function() {
            clearTimeout(window.resizedFinishedFooter);
            window.resizedFinishedFooter = setTimeout(function() {
                jevelin_footer_parallax();
            }, 500);
        });
        $(window).scroll(jevelin_footer_parallax_visible);
    }
    $('.sh-woocommerce-products-style2 li.product').each(function() {
        var button_html = '';
        if ($(this).find('.add_to_cart_button').length) {
            button_html = $(this).find('.add_to_cart_button')[0].outerHTML;
        }
        $(this).find('.sh-woo-post-content-container > a:first-child').append(button_html);
        $(this).find('.sh-woo-post-content-container > .add_to_cart_button').remove();
    });
    $('.sh-unyson-frontend-test').on('click', function() {
        $(this).toggleClass("active");
        $('#content.page-content').toggleClass("sh-unyson-frontend-preview");
    });
    if ($('.sh-load-more:not(.sh-load-more-product)').length) {
        if ($('.sh-load-more.infinite').length) {
            $(window).scroll(function() {
                if ($('.sh-load-more').length && $('.sh-load-more').isInViewport()) {
                    if ($('.sh-load-more:not(.disabled)').length) {
                        jevelin_loadmore();
                    }
                } else if (!$('.sh-load-more').length) {
                    $(this).off();
                }
            });
        }
        jQuery(document).on('click', '.sh-load-more:not(.disabled)', function() {
            jevelin_loadmore();
        });

        function jevelin_loadmore() {
            var lazy_self = $('.sh-load-more');
            lazy_self.addClass('disabled');
            var lazy_categories = lazy_self.attr('data-categories');
            var lazy_post_style = lazy_self.attr('data-post-style');
            var lazy_posts_per_page = lazy_self.attr('data-posts-per-page');
            var lazy_paged = lazy_self.attr('data-paged');
            jQuery.ajax({
                url: jevelin_loadmore_posts.ajax_url,
                type: 'post',
                data: {
                    action: 'load_more_posts',
                    categories: lazy_categories,
                    per_page: lazy_posts_per_page,
                    post_style: lazy_post_style,
                    paged: lazy_paged,
                },
                success: function(response) {
                    if (response == 'done') {
                        $('.sh-load-more').remove();
                    } else {
                        $('.sh-load-more').attr('data-paged', parseInt($('.sh-load-more').attr('data-paged')) + 1);
                        if (lazy_self.attr('data-id')) {
                            var lazy_add_posts = $('.content-container .' + lazy_self.attr('data-id') + ' .blog-list');
                            if (lazy_add_posts.hasClass('blog-style-masonry')) {
                                lazy_add_posts.isotope('insert', $(response)).imagesLoaded(function() {
                                    lazy_add_posts.isotope('layout').css('opacity', 1);
                                });
                            } else {
                                $(response).appendTo('.content-container .' + lazy_self.attr('data-id') + ' .blog-list');
                            }
                        } else {
                            if ($('.blog-list.blog-style-masonry').length) {
                                $('.blog-list.blog-style-masonry').isotope('insert', $(response)).imagesLoaded(function() {
                                    $('.blog-list.blog-style-masonry').isotope('layout').css('opacity', 1);
                                });
                            } else {
                                $(response).appendTo('.content-container .blog-list').hide().fadeIn(700);
                            }
                        }
                        lazy_self.removeClass('disabled');
                        if ($(response).filter('.post-item').length < lazy_posts_per_page) {
                            $('.sh-load-more').remove();
                        }
                    }
                }
            });
        }
    }
    if ($('.sh-load-more.sh-load-more-product').length) {
        if ($('.sh-load-more.sh-load-more-product.infinite').length) {
            $(window).scroll(function() {
                if ($('.sh-load-more.sh-load-more-product').length && $('.sh-load-more.sh-load-more-product').isInViewport()) {
                    if ($('.sh-load-more.sh-load-more-product:not(.disabled)').length) {
                        jevelin_loadmore_products();
                    }
                } else if (!$('.sh-load-more.sh-load-more-product').length) {
                    $(this).off();
                }
            });
        }
        jQuery(document).on('click', '.sh-load-more-product:not(.disabled)', function() {
            jevelin_loadmore_products();
        });

        function jevelin_loadmore_products() {
            var lazy_self = $('.sh-load-more-product');
            lazy_self.addClass('disabled');
            var lazy_categories = lazy_self.attr('data-categories');
            var lazy_post_style = lazy_self.attr('data-post-style');
            var lazy_posts_per_page = lazy_self.attr('data-posts-per-page');
            var lazy_paged = lazy_self.attr('data-paged');
            jQuery.ajax({
                url: jevelin_loadmore_posts.ajax_url,
                type: 'post',
                data: {
                    action: 'load_more_products',
                    per_page: lazy_posts_per_page,
                    paged: lazy_paged,
                },
                success: function(response) {
                    if (response == 'done') {
                        $('.sh-load-more-product').remove();
                    } else {
                        $(response).appendTo('.vcg-woocommerce-products ul.products');
                        $('.sh-load-more-product').attr('data-paged', parseInt($('.sh-load-more-product').attr('data-paged')) + 1);
                        lazy_self.removeClass('disabled');
                        if ($(response).filter('.type-product').length < lazy_posts_per_page) {
                            $('.sh-load-more-product').remove();
                        }
                    }
                }
            });
        }
    }
    var opn_find_url = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
    var opn_find = 'a[href="' + opn_find_url + '#backtotop"]';
    if ($(opn_find).length) {
        $('header.primary-desktop .sh-nav').find('li.current_page_item').each(function() {
            $(this).removeClass('current_page_item');
            $(opn_find).parent().addClass('current_page_item');
        });
    }
    if ($('#content > .vc_row').is('[id]')) {
        var opn_lock = 0;
        $(window).on('load scroll', function() {
            var opn_lock_scroll = 0;
            if (opn_lock == 0) {
                $('#content > .vc_row').each(function() {
                    if (opn_lock_scroll == 0 && $(this).is('[id]') && $(this).isInViewport()) {
                        var opn_find_url = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
                        var opn_find = 'a[href="' + opn_find_url + '#' + $(this).attr('id') + '"]';
                        if ($(opn_find).length) {
                            $(opn_find).closest('ul.sh-nav').find('li.current_page_item').removeClass('current_page_item');
                            $(opn_find).parent().addClass('current_page_item');
                        }
                        opn_lock_scroll = 1;
                    }
                });
                if ($(window).scrollTop() == 0) {
                    var opn_find_url = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
                    var opn_find = 'a[href="' + opn_find_url + '#backtotop"]';
                    if ($(opn_find).length) {
                        $(opn_find).closest('ul.sh-nav').find('li.current_page_item').removeClass('current_page_item');
                        $(opn_find).parent().addClass('current_page_item');
                    }
                }
            }
        });
    }
    $('header.primary-desktop .sh-nav a').on('click', function() {
        if ($(this).attr('href').length) {
            var opn_current = 'div#' + $(this).attr('href').replace(/^.*?(#|$)/, '');
        } else {
            return false;
        }
        if ($(opn_current).length || opn_current == 'div#backtotop') {
            $(this).closest('ul.sh-nav').find('li.current_page_item').removeClass('current_page_item');
            $(this).parent().addClass('current_page_item');
            opn_lock = 1;
            setTimeout(function() {
                opn_lock = 0;
            }, 3000);
        }
    });
});
(function($) {
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $.fn.sh_carousel = function() {
        $(this).html('<div class="sh-carousel-items">' + $(this).html() + '</div>');
        var self_main = $(this);
        var self = $(this).find('.sh-carousel-items');
        self.find('.blog-textslider-post:first-child').addClass('sh-active');
        self_main.append('<span class="sh-carousel-buttons sh-carousel-buttons-styling"></span>');
        self_main.find('.sh-carousel-buttons').append('<span class="sh-carousel-prev"><i class="icon icon-arrow-left-circle"></i></span>');
        self_main.find('.sh-carousel-buttons').append('<span class="sh-carousel-next"><i class="icon icon-arrow-right-circle"></i></span>');
        self_main.find('.sh-carousel-prev').on('click', function() {
            var active = self.find('.blog-textslider-post.sh-active');
            var prev = active.prev();
            if (!prev.length) {
                prev = self.find('.blog-textslider-post:last-child');
            }
            active.removeClass('sh-active');
            prev.addClass('sh-active');
        });
        self_main.find('.sh-carousel-next').on('click', function() {
            if (self.isInViewport() && !document.hidden) {
                var active = self.find('.blog-textslider-post.sh-active');
                var next = active.next();
                if (!next.length) {
                    next = self.find('.blog-textslider-post:first-child');
                }
                active.removeClass('sh-active');
                next.addClass('sh-active');
            }
        });
        var speed = 5000;
        var run = setInterval(function() {
            self_main.find('.sh-carousel-next').trigger('click');
        }, speed);
        self_main.hover(function() {
            clearInterval(run);
        }, function() {
            run = setInterval(function() {
                self_main.find('.sh-carousel-next').trigger('click');
            }, speed);
        });
    }
})(jQuery);
jQuery(document).ready(function($) {
    $('.primary-desktop .header-logo-container, .primary-mobile .header-logo-container').attr('href', '//jevelin.shufflehound.com/hello/');

    function jevelin_settings() {
        if ($(window).width() < 600) {
            $('.sh-settings').hide();
        } else {
            $('.sh-settings').show();
        }
    }
    jevelin_settings();
    $(window).resize(function() {
        clearTimeout(window.resizedFinished2);
        window.resizedFinished2 = setTimeout(function() {
            jevelin_settings();
        }, 500);
    });
    $('.sh-settings-hide').on('click', function() {
        $('.sh-settings').toggleClass('sh-settings-active');
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            if ($('.sh-settings').hasClass('sh-settings-active')) {
                $('.sh-settings').removeClass('sh-settings-active');
            }
        }
    });
    jQuery('.form-submit #submit').on('click', function(event) {
        alert('This feature is disabled in our demo site. Sorry for any inconvenience.');
        event.preventDefault()
        event.stopPropagation()
        return false;
    });
});
jQuery(document).ready(function($) {
    "use strict";
    $(".sh-page-loader").fadeOut(500);
    $("body").css('overflow-y', 'visible').css('overflow-x', 'hidden');
    $(window).bind('beforeunload', function(e) {
        $('.sh-page-loader').fadeIn();
    });
});
jQuery(document).ready(function($) {
    $('.sh-side-options-item-trigger-demos').on('click', function() {
        $('.sh-side-options').css('transition', '0.3s all ease-in-out');
        if ($('.sh-side-options').hasClass('open')) {
            $('.sh-side-options').removeClass('open');
        } else {
            $('.sh-side-options .sh-side-demos-image').each(function() {
                $(this).attr('src', $(this).attr('data-src'));
            });
            $('.sh-side-options').addClass('open');
        }
    });
    $('.sh-side-demos-container-close').on('click', function() {
        $('.sh-side-options').css('transition', '0.3s all ease-in-out');
        $('.sh-side-options').removeClass('open');
    });
});
var c = document.body.className;
c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
document.body.className = c;
var wc_product_block_data = JSON.parse(decodeURIComponent('%7B%22min_columns%22%3A1%2C%22max_columns%22%3A6%2C%22default_columns%22%3A3%2C%22min_rows%22%3A1%2C%22max_rows%22%3A6%2C%22default_rows%22%3A1%2C%22thumbnail_size%22%3A300%2C%22placeholderImgSrc%22%3A%22https%3A%5C%2F%5C%2Fcdn.jevelin.shufflehound.com%5C%2Fwp-content%5C%2Fuploads%5C%2Fsites%5C%2F22%5C%2Fwoocommerce-placeholder.png%22%2C%22min_height%22%3A500%2C%22default_height%22%3A500%2C%22isLargeCatalog%22%3Afalse%2C%22limitTags%22%3Afalse%2C%22hasTags%22%3Atrue%2C%22productCategories%22%3A%5B%7B%22term_id%22%3A52%2C%22name%22%3A%22Uncategorized%22%2C%22slug%22%3A%22uncategorized%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A52%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A0%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Fjevelin.shufflehound.com%5C%2Fhello%5C%2Fproduct-category%5C%2Funcategorized%5C%2F%22%7D%5D%2C%22homeUrl%22%3A%22https%3A%5C%2F%5C%2Fjevelin.shufflehound.com%5C%2Fhello%5C%2F%22%7D'));
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                            path: "/"
                        }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {}
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
var woocommerce_params = {
    "ajax_url": "\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/?wc-ajax=%%endpoint%%"
};
jQuery(function(i) {
    i(".woocommerce-ordering").on("change", "select.orderby", function() {
        i(this).closest("form").submit()
    }), i("input.qty:not(.product-quantity input.qty)").each(function() {
        var e = parseFloat(i(this).attr("min"));
        0 <= e && parseFloat(i(this).val()) < e && i(this).val(e)
    });
    var o = "store_notice" + (i(".woocommerce-store-notice").data("notice-id") || "");
    "hidden" === Cookies.get(o) ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(".woocommerce-store-notice__dismiss-link").click(function(e) {
        Cookies.set(o, "hidden", {
            path: "/"
        }), i(".woocommerce-store-notice").hide(), e.preventDefault()
    }), i(document.body).on("click", function() {
        i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), i(".woocommerce-input-wrapper").on("click", function(e) {
        e.stopPropagation()
    }), i(".woocommerce-input-wrapper :input").on("keydown", function(e) {
        var o = i(this).parent().find("span.description");
        if (27 === e.which && o.length && o.is(":visible")) return o.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("click focus", function() {
        var e = i(this).parent(),
            o = e.find("span.description");
        e.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), o.length && o.is(":hidden") && o.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), i.scroll_to_notices = function(e) {
        e.length && i("html, body").animate({
            scrollTop: e.offset().top - 100
        }, 1e3)
    }
});
var wc_cart_fragments_params = {
    "ajax_url": "\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
    "cart_hash_key": "wc_cart_hash_c6361eb6542aa94cae39602f48612763",
    "fragment_name": "wc_fragments_c6361eb6542aa94cae39602f48612763",
    "request_timeout": "5000"
};
jQuery(function(r) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0,
        o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (f) {
        t = !1
    }

    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function s(e) {
        t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
    }
    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {
            time: (new Date).getTime()
        },
        timeout: wc_cart_fragments_params.request_timeout,
        success: function(e) {
            e && e.fragments && (r.each(e.fragments, function(e, t) {
                r(e).replaceWith(t)
            }), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function() {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };

    function n() {
        r.ajax(e)
    }
    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function() {
            n()
        }), r(document.body).on("added_to_cart removed_from_cart", function(e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(r)
        }), r(document.body).on("wc_fragments_refreshed", function() {
            clearTimeout(i), i = setTimeout(n, 864e5)
        }), r(window).on("storage onstorage", function(e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }), r(window).on("pageshow", function(e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(), r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(o),
                g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
            if (m) {
                var d = 1 * m + 864e5,
                    w = (new Date).getTime();
                if (d < w) throw "Fragment expired";
                i = setTimeout(n, d - w)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
            r.each(c, function(e, t) {
                r(e).replaceWith(t)
            }), r(document.body).trigger("wc_fragments_loaded")
        } catch (f) {
            n()
        }
    } else n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), r(document.body).on("adding_to_cart", function() {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }), "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function() {
        n()
    })
});
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = "ui-effects-",
        c = a;
    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    return a.effects = {
            effect: {}
        },
        function(a, b) {
            function c(a, b, c) {
                var d = l[b.type] || {};
                return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
            }

            function d(b) {
                var c = j(),
                    d = c._rgba = [];
                return b = b.toLowerCase(), o(i, function(a, e) {
                    var f, g = e.re.exec(b),
                        h = g && e.parse(g),
                        i = e.space || "rgba";
                    if (h) return f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1
                }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
            }

            function e(a, b, c) {
                return c = (c + 1) % 1, 6 * c < 1 ? a + (b - a) * c * 6 : 2 * c < 1 ? b : 3 * c < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                h = /^([\-+])=\s*(\d+\.?\d*)/,
                i = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [a[1], a[2], a[3], a[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(a) {
                        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(a) {
                        return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(a) {
                        return [a[1], a[2] / 100, a[3] / 100, a[4]]
                    }
                }],
                j = a.Color = function(b, c, d, e) {
                    return new a.Color.fn.parse(b, c, d, e)
                },
                k = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                l = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                m = j.support = {},
                n = a("<p>")[0],
                o = a.each;
            n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                b.cache = "_" + a, b.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), j.fn = a.extend(j.prototype, {
                parse: function(e, g, h, i) {
                    if (e === b) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                    var l = this,
                        m = a.type(e),
                        n = this._rgba = [];
                    return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                        n[b.idx] = c(e[b.idx], b)
                    }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                        e[b.cache] && (l[b.cache] = e[b.cache].slice())
                    }) : o(k, function(b, d) {
                        var f = d.cache;
                        o(d.props, function(a, b) {
                            if (!l[f] && d.to) {
                                if ("alpha" === a || null == e[a]) return;
                                l[f] = d.to(l._rgba)
                            }
                            l[f][b.idx] = c(e[a], b, !0)
                        }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                    }), this) : void 0
                },
                is: function(a) {
                    var b = j(a),
                        c = !0,
                        d = this;
                    return o(k, function(a, e) {
                        var f, g = b[e.cache];
                        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                            if (null != g[b.idx]) return c = g[b.idx] === f[b.idx]
                        })), c
                    }), c
                },
                _space: function() {
                    var a = [],
                        b = this;
                    return o(k, function(c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                },
                transition: function(a, b) {
                    var d = j(a),
                        e = d._space(),
                        f = k[e],
                        g = 0 === this.alpha() ? j("transparent") : this,
                        h = g[f.cache] || f.to(g._rgba),
                        i = h.slice();
                    return d = d[f.cache], o(f.props, function(a, e) {
                        var f = e.idx,
                            g = h[f],
                            j = d[f],
                            k = l[e.type] || {};
                        null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                    }), this[e](i)
                },
                blend: function(b) {
                    if (1 === this._rgba[3]) return this;
                    var c = this._rgba.slice(),
                        d = c.pop(),
                        e = j(b)._rgba;
                    return j(a.map(c, function(a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                },
                toRgbaString: function() {
                    var b = "rgba(",
                        c = a.map(this._rgba, function(a, b) {
                            return null == a ? b > 2 ? 1 : 0 : a
                        });
                    return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                },
                toHslaString: function() {
                    var b = "hsla(",
                        c = a.map(this.hsla(), function(a, b) {
                            return null == a && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(100 * a) + "%"), a
                        });
                    return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                },
                toHexString: function(b) {
                    var c = this._rgba.slice(),
                        d = c.pop();
                    return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                        return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b, c, d = a[0] / 255,
                    e = a[1] / 255,
                    f = a[2] / 255,
                    g = a[3],
                    h = Math.max(d, e, f),
                    i = Math.min(d, e, f),
                    j = h - i,
                    k = h + i,
                    l = .5 * k;
                return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : l <= .5 ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
            }, k.hsla.from = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b = a[0] / 360,
                    c = a[1],
                    d = a[2],
                    f = a[3],
                    g = d <= .5 ? d * (1 + c) : d + c - d * c,
                    h = 2 * d - g;
                return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
            }, o(k, function(d, e) {
                var f = e.props,
                    g = e.cache,
                    i = e.to,
                    k = e.from;
                j.fn[d] = function(d) {
                    if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                    var e, h = a.type(d),
                        l = "array" === h || "object" === h ? d : arguments,
                        m = this[g].slice();
                    return o(f, function(a, b) {
                        var d = l["object" === h ? a : b.idx];
                        null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                    }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                }, o(f, function(b, c) {
                    j.fn[b] || (j.fn[b] = function(e) {
                        var f, g = a.type(e),
                            i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                            j = this[i](),
                            k = j[c.idx];
                        return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                    })
                })
            }), j.hook = function(b) {
                var c = b.split(" ");
                o(c, function(b, c) {
                    a.cssHooks[c] = {
                        set: function(b, e) {
                            var f, g, h = "";
                            if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                    for (g = "backgroundColor" === c ? b.parentNode : b;
                                        ("" === h || "transparent" === h) && g && g.style;) try {
                                        h = a.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (i) {}
                                    e = e.blend(h && "transparent" !== h ? h : "_default")
                                }
                                e = e.toRgbaString()
                            }
                            try {
                                b.style[c] = e
                            } catch (i) {}
                        }
                    }, a.fx.step[c] = function(b) {
                        b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                    }
                })
            }, j.hook(g), a.cssHooks.borderColor = {
                expand: function(a) {
                    var b = {};
                    return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, f = a.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(c),
        function() {
            function b(b) {
                var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                    f = {};
                if (e && e.length && e[0] && e[e[0]])
                    for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                else
                    for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                return f
            }

            function d(b, c) {
                var d, e, g = {};
                for (d in c) e = c[d], b[d] !== e && (f[d] || !a.fx.step[d] && isNaN(parseFloat(e)) || (g[d] = e));
                return g
            }
            var e = ["add", "remove", "toggle"],
                f = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, d) {
                a.fx.step[d] = function(a) {
                    ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (c.style(a.elem, d, a.end), a.setAttr = !0)
                }
            }), a.fn.addBack || (a.fn.addBack = function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }), a.effects.animateClass = function(c, f, g, h) {
                var i = a.speed(f, g, h);
                return this.queue(function() {
                    var f, g = a(this),
                        h = g.attr("class") || "",
                        j = i.children ? g.find("*").addBack() : g;
                    j = j.map(function() {
                        var c = a(this);
                        return {
                            el: c,
                            start: b(this)
                        }
                    }), f = function() {
                        a.each(e, function(a, b) {
                            c[b] && g[b + "Class"](c[b])
                        })
                    }, f(), j = j.map(function() {
                        return this.end = b(this.el[0]), this.diff = d(this.start, this.end), this
                    }), g.attr("class", h), j = j.map(function() {
                        var b = this,
                            c = a.Deferred(),
                            d = a.extend({}, i, {
                                queue: !1,
                                complete: function() {
                                    c.resolve(b)
                                }
                            });
                        return this.el.animate(this.diff, d), c.promise()
                    }), a.when.apply(a, j.get()).done(function() {
                        f(), a.each(arguments, function() {
                            var b = this.el;
                            a.each(this.diff, function(a) {
                                b.css(a, "")
                            })
                        }), i.complete.call(g[0])
                    })
                })
            }, a.fn.extend({
                addClass: function(b) {
                    return function(c, d, e, f) {
                        return d ? a.effects.animateClass.call(this, {
                            add: c
                        }, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.addClass),
                removeClass: function(b) {
                    return function(c, d, e, f) {
                        return arguments.length > 1 ? a.effects.animateClass.call(this, {
                            remove: c
                        }, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.removeClass),
                toggleClass: function(b) {
                    return function(c, d, e, f, g) {
                        return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                            add: c
                        } : {
                            remove: c
                        }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                            toggle: c
                        }, d, e, f)
                    }
                }(a.fn.toggleClass),
                switchClass: function(b, c, d, e, f) {
                    return a.effects.animateClass.call(this, {
                        add: c,
                        remove: b
                    }, d, e, f)
                }
            })
        }(),
        function() {
            function c(b, c, d, e) {
                return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                    effect: b
                }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
            }

            function d(b) {
                return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect))
            }
            a.extend(a.effects, {
                version: "1.11.4",
                save: function(a, c) {
                    for (var d = 0; d < c.length; d++) null !== c[d] && a.data(b + c[d], a[0].style[c[d]])
                },
                restore: function(a, c) {
                    var d, e;
                    for (e = 0; e < c.length; e++) null !== c[e] && (d = a.data(b + c[e]), void 0 === d && (d = ""), a.css(c[e], d))
                },
                setMode: function(a, b) {
                    return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                },
                getBaseline: function(a, b) {
                    var c, d;
                    switch (a[0]) {
                        case "top":
                            c = 0;
                            break;
                        case "middle":
                            c = .5;
                            break;
                        case "bottom":
                            c = 1;
                            break;
                        default:
                            c = a[0] / b.height
                    }
                    switch (a[1]) {
                        case "left":
                            d = 0;
                            break;
                        case "center":
                            d = .5;
                            break;
                        case "right":
                            d = 1;
                            break;
                        default:
                            d = a[1] / b.width
                    }
                    return {
                        x: d,
                        y: c
                    }
                },
                createWrapper: function(b) {
                    if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                    var c = {
                            width: b.outerWidth(!0),
                            height: b.outerHeight(!0),
                            "float": b.css("float")
                        },
                        d = a("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        e = {
                            width: b.width(),
                            height: b.height()
                        },
                        f = document.activeElement;
                    try {
                        f.id
                    } catch (g) {
                        f = document.body
                    }
                    return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                        position: "relative"
                    }), b.css({
                        position: "relative"
                    })) : (a.extend(c, {
                        position: b.css("position"),
                        zIndex: b.css("z-index")
                    }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                        c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                    }), b.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), b.css(e), d.css(c).show()
                },
                removeWrapper: function(b) {
                    var c = document.activeElement;
                    return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                },
                setTransition: function(b, c, d, e) {
                    return e = e || {}, a.each(c, function(a, c) {
                        var f = b.cssUnit(c);
                        f[0] > 0 && (e[c] = f[0] * d + f[1])
                    }), e
                }
            }), a.fn.extend({
                effect: function() {
                    function b(b) {
                        function c() {
                            a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                        }
                        var e = a(this),
                            f = d.complete,
                            h = d.mode;
                        (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c)
                    }
                    var d = c.apply(this, arguments),
                        e = d.mode,
                        f = d.queue,
                        g = a.effects.effect[d.effect];
                    return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
                        d.complete && d.complete.call(this)
                    }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
                },
                show: function(a) {
                    return function(b) {
                        if (d(b)) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    }
                }(a.fn.show),
                hide: function(a) {
                    return function(b) {
                        if (d(b)) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    }
                }(a.fn.hide),
                toggle: function(a) {
                    return function(b) {
                        if (d(b) || "boolean" == typeof b) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "toggle", this.effect.call(this, e)
                    }
                }(a.fn.toggle),
                cssUnit: function(b) {
                    var c = this.css(b),
                        d = [];
                    return a.each(["em", "px", "%", "pt"], function(a, b) {
                        c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                    }), d
                }
            })
        }(),
        function() {
            var b = {};
            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                b[c] = function(b) {
                    return Math.pow(b, a + 2)
                }
            }), a.extend(b, {
                Sine: function(a) {
                    return 1 - Math.cos(a * Math.PI / 2)
                },
                Circ: function(a) {
                    return 1 - Math.sqrt(1 - a * a)
                },
                Elastic: function(a) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(a) {
                    return a * a * (3 * a - 2)
                },
                Bounce: function(a) {
                    for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                }
            }), a.each(b, function(b, c) {
                a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                    return 1 - c(1 - a)
                }, a.easing["easeInOut" + b] = function(a) {
                    return a < .5 ? c(2 * a) / 2 : 1 - c(a * -2 + 2) / 2
                }
            })
        }(), a.effects
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d)
                    if (d.secret || d.message || d.value)
                        if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                            for (e = 0; e < k.length; e++) k[e].style.display = "none";
                            for (e = 0; e < j.length; e++)
                                if (f = j[e], c.source === f.contentWindow) {
                                    if (f.removeAttribute("style"), "height" === d.message) {
                                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                        else if (~~g < 200) g = 200;
                                        f.height = g
                                    }
                                    if ("link" === d.message)
                                        if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                            if (b.activeElement === f) a.top.location.href = d.value
                                } else;
                        }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
window.addComment = function(a) {
    function b() {
        c(), g()
    }

    function c(a) {
        if (t && (m = j(r.cancelReplyId), n = j(r.commentFormId), m)) {
            m.addEventListener("touchstart", e), m.addEventListener("click", e);
            for (var b, c = d(a), g = 0, h = c.length; g < h; g++) b = c[g], b.addEventListener("touchstart", f), b.addEventListener("click", f)
        }
    }

    function d(a) {
        var b, c = r.commentReplyClass;
        return a && a.childNodes || (a = q), b = q.getElementsByClassName ? a.getElementsByClassName(c) : a.querySelectorAll("." + c)
    }

    function e(a) {
        var b = this,
            c = r.temporaryFormId,
            d = j(c);
        d && o && (j(r.parentIdFieldId).value = "0", d.parentNode.replaceChild(o, d), b.style.display = "none", a.preventDefault())
    }

    function f(b) {
        var c, d = this,
            e = i(d, "belowelement"),
            f = i(d, "commentid"),
            g = i(d, "respondelement"),
            h = i(d, "postid");
        e && f && g && h && (c = a.addComment.moveForm(e, f, g, h), !1 === c && b.preventDefault())
    }

    function g() {
        if (s) {
            var a = {
                childList: !0,
                subTree: !0
            };
            p = new s(h), p.observe(q.body, a)
        }
    }

    function h(a) {
        for (var b = a.length; b--;)
            if (a[b].addedNodes.length) return void c()
    }

    function i(a, b) {
        return u ? a.dataset[b] : a.getAttribute("data-" + b)
    }

    function j(a) {
        return q.getElementById(a)
    }

    function k(b, c, d, e) {
        var f = j(b);
        o = j(d);
        var g, h, i, k = j(r.parentIdFieldId),
            p = j(r.postIdFieldId);
        if (f && o && k) {
            l(o), e && p && (p.value = e), k.value = c, m.style.display = "", f.parentNode.insertBefore(o, f.nextSibling), m.onclick = function() {
                return !1
            };
            try {
                for (var s = 0; s < n.elements.length; s++)
                    if (g = n.elements[s], h = !1, "getComputedStyle" in a ? i = a.getComputedStyle(g) : q.documentElement.currentStyle && (i = g.currentStyle), (g.offsetWidth <= 0 && g.offsetHeight <= 0 || "hidden" === i.visibility) && (h = !0), "hidden" !== g.type && !g.disabled && !h) {
                        g.focus();
                        break
                    }
            } catch (t) {}
            return !1
        }
    }

    function l(a) {
        var b = r.temporaryFormId,
            c = j(b);
        c || (c = q.createElement("div"), c.id = b, c.style.display = "none", a.parentNode.insertBefore(c, a))
    }
    var m, n, o, p, q = a.document,
        r = {
            commentReplyClass: "comment-reply-link",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        },
        s = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver,
        t = "querySelector" in q && "addEventListener" in a,
        u = !!q.documentElement.dataset;
    return t && "loading" !== q.readyState ? b() : t && a.addEventListener("DOMContentLoaded", b, !1), {
        init: c,
        moveForm: k
    }
}(window);
jQuery(document).ready(function($) {
    "use strict";
});