!function (e) { e.fn.tickerText = function (t, n, o, c = 20, l = 0, i, r, f = !1, u, a) { let m, s, h, d, p, g, x, T, v, w, M, y, D, I, C, k = 0, b = 0, N = 20, j = i, B = 1 - i, E = !1, H = this, L = !1, Q = 0, W = 0, q = 0, z = 0, A = t.clone(); document.getElementById("target"); function F(t) { return cc2 = [], t.each((function (t, n) { let o = e(n).children(); cc2[t] = [], o.each((function (n, o) { cc2[t][n + 1] = o, e(o).replaceWith("/" + (1 + n)) })), cc2[t][0] = n.innerHTML })), { content: cc2 } } let G = F(A); u && e("#" + u).on("click", (function (e) { e.preventDefault(), console.log("pause:", !L), L = !L })), a && e("#" + a).on("click", (function (e) { e.preventDefault(), console.log("stop:", E), E = !E })); let J = Math.floor(o * j * 1e3 / t[b % t.length].textContent.length), K = t[b % t.length].textContent.split(""), O = G.content[b % G.content.length]; function P() { clearTimeout(y), clearTimeout(D), clearTimeout(I), clearTimeout(C), clearTimeout(v), clearTimeout(w) } function R() { v = setTimeout((function () { if (k < K.length && b >= 0) { if ("/" !== O[0][k - q + 2 * z] && 0 === Q && (H.append(K[k]), H.html((function (e, t) { return t }))), "/" === O[0][k - q + 2 * z]) { let t = z + 1; O[0][k + 1 - q + 2 * z] == t && (0 === Q && (Q = t, W = e(O[t]).text().length, e(O[t]).text(""), H.append(O[t])), H.children()[z].append(K[k]), e(H.children()[z]).html((function (e, t) { return t })), W -= 1, q += 1, 0 === W && (z = t, Q = 0)) } k++ } if (k >= K.length) return m = performance.now(), s = m - p, s >= 1e3 * j * o - 20 && (s = 0), f && (m = performance.now(), console.log("completed pt1 ", m - p, "microseconds", "text", H.text())), clearInterval(v), void (D = setTimeout((function () { if (h = performance.now(), f && console.log("completed pt2", h - p, "microseconds", "text", H.text()), I = setTimeout((function () { E ? clearTimeout(I) : U() }), 0), l && b >= t.length * l) return E = !0, void clearTimeout(D) }), Math.floor(1e3 * j * o - 20 - s))); E || (clearInterval(v), R()) }), c <= J ? c : J) } let S = Math.floor(o * B * 1e3 / H.text().length); function U() { w = setTimeout((function () { if (k >= 0) { if ("/" === O[0][k - q + 2 * z - 2]) { let t = z - 1; if (O[0][k - q + 2 * z - 1] == z) { 0 === Q && (Q = z, W = e(O[z]).text().length); let n = e(H.children()[t]).text(), o = n.substring(0, n.length - 1); e(H.children()[t]).text(o), q -= 1, W -= 1, 0 === W && (H.children()[t].remove(), z = t, Q = 0) } } if ("/" !== O[0][k - q + 2 * z - 2] && 0 === Q) { let e = H.html().substring(0, H.html().length - 1); H.text().length > n && H.html(e) } k-- } if (k <= n) return d = performance.now(), dsDiff = d - h, dsDiff >= 1e3 * B * o - 20 && (dsDiff = 0), f && console.log("completed pt3 ", d - p, "microseconds", "text", H.text()), clearTimeout(w), void (C = setTimeout((function () { let e = H.text(); n || !e || E || !vis() || L || H.text(""), r && 0 === b && (o = r, J = Math.floor(o * j * 1e3 / t[b % t.length].textContent.length), S = Math.floor(o * B * 1e3 / e.length)), E || L && !vis() || (b++, A = t.clone(), G = F(A), K = t[b % t.length].textContent.split(""), O = G.content[[b % G.content.length]], f && (T = performance.now(), console.log("completed pt4", T - p, "microseconds", "text", H.text())), P(), X()), E || !L && vis() || (P(), V()) }), Math.floor(1e3 * B * o - N - dsDiff))); E || (clearInterval(w), U()) }), c <= S ? c : S) } function V() { f && (g = performance.now()), M = setTimeout((function () { if (!E && !L && vis()) return f && (x = performance.now(), console.log("timeline Noop end for iterations dxx - dyy, count final", b, x - g, "microseconds")), clearTimeout(M), void X(); E || !L && vis() || (f && (x = performance.now(), console.log("timeline Noop for iterations dxx - dyy, count final", b, x - g, "microseconds")), V()), E && clearInterval(M) }), J) } function X() { p = performance.now(), f && (p = performance.now(), console.log("count", b)), b < 1 && H.text(""), y = setTimeout((function () { E ? clearTimeout(y) : R() }), 0) } X() } }(jQuery);