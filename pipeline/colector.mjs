// Colector del observatorio de Contratitular (generado: no editar).
import { createRequire as __cr } from "module"; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/dotenv/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/dotenv/dist/index.cjs"(exports, module) {
    var j = (e, n) => () => {
      try {
        return n || e((n = { exports: {} }).exports, n), n.exports;
      } catch (t) {
        throw n = 0, t;
      }
    };
    var k = j((xe, U) => {
      function G(e) {
        return typeof e == "string" ? !["false", "0", "no", "off", ""].includes(e.toLowerCase()) : !!e;
      }
      function Y(e = process.env) {
        let n = {};
        for (let t of ["ENCODING", "PATH", "QUIET", "DEBUG", "OVERRIDE", "FAST"]) {
          let o = e[`DOTENV_${t}`] != null ? e[`DOTENV_${t}`] : e[`DOTENV_CONFIG_${t}`];
          o != null && (n[t.toLowerCase()] = t === "ENCODING" || t === "PATH" ? o : G(o));
        }
        return n;
      }
      U.exports = { parseBoolean: G, optionsFromEnv: Y };
    });
    var N = j((ye, x) => {
      var z = __require("fs"), I = __require("path"), Z = __require("os"), { URL: ee, fileURLToPath: te } = __require("url"), { parseBoolean: $, optionsFromEnv: B } = k(), re = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg, b = new Uint8Array(256);
      for (let e = 48; e <= 57; e++) b[e] = 1;
      for (let e = 65; e <= 90; e++) b[e] = 1;
      for (let e = 97; e <= 122; e++) b[e] = 1;
      b[45] = 1;
      b[46] = 1;
      b[95] = 1;
      function ne(e) {
        let n = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let o;
        for (; (o = re.exec(t)) != null; ) {
          let r = o[1], s = o[2] || "";
          s = s.trim();
          let i = s[0];
          s = s.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), i === '"' && (s = s.replace(/\\n/g, `
`), s = s.replace(/\\r/g, "\r")), n[r] = s;
        }
        return n;
      }
      function w(e) {
        return e <= 32 ? e === 32 || e >= 9 && e <= 13 : e >= 160 && (e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279);
      }
      function q(e) {
        return e === 10 || e === 8232 || e === 8233;
      }
      function oe(e) {
        let n = {}, t = typeof e == "string" ? e : e.toString();
        t.indexOf("\r") !== -1 && (t = t.replace(/\r\n?/g, `
`));
        let o = t.length, r = 0;
        for (; r < o; ) {
          let s = t.charCodeAt(r);
          for (; r < o && w(s); ) r++, s = t.charCodeAt(r);
          if (r >= o) break;
          if (s === 35) {
            for (; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let i = -1;
          if (s === 101 && r + 6 < o && t.charCodeAt(r + 1) === 120 && t.charCodeAt(r + 2) === 112 && t.charCodeAt(r + 3) === 111 && t.charCodeAt(r + 4) === 114 && t.charCodeAt(r + 5) === 116) {
            let v = t.charCodeAt(r + 6);
            if (w(v)) {
              let u = r + 7;
              for (; u < o && w(t.charCodeAt(u)); ) u++;
              b[t.charCodeAt(u)] && (i = r + 6, r = u);
            } else s = t.charCodeAt(r);
          }
          let l = r, d = 0;
          for (; r < o && (d = t.charCodeAt(r), b[d]); ) r++;
          if (r === l) {
            for (; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let h = t.slice(l, r), f = r;
          if (r >= o && (d = 0), w(d)) do
            r++, d = r < o ? t.charCodeAt(r) : 0;
          while (w(d));
          if (d === 61) r++;
          else if (d === 58 && r === f && r + 1 < o && w(t.charCodeAt(r + 1))) r += 2;
          else {
            for (r = i === -1 ? f : i; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let c = r, a = r;
          for (; a < o && w(t.charCodeAt(a)); ) a++;
          let g = t.charCodeAt(a), p, y = false;
          if (g === 39 || g === 34 || g === 96) {
            let v = t[a], u = t.indexOf(v, a + 1), m = -1, C = -1;
            for (; u !== -1; ) {
              let O = t.charCodeAt(u - 1) === 92, E = u + 1;
              for (; E < o && !q(t.charCodeAt(E)) && w(t.charCodeAt(E)); ) E++;
              if ((E === o || q(t.charCodeAt(E)) || t.charCodeAt(E) === 35) && (m = u, C = E), !O) break;
              u = t.indexOf(v, u + 1);
            }
            if (m !== -1) {
              if (p = t.slice(a + 1, m), r = C, t.charCodeAt(r) === 35) for (; r < o && !q(t.charCodeAt(r)); ) r++;
              y = true;
            }
          }
          if (!y) {
            let v = t.indexOf(`
`, c);
            v === -1 && (v = o);
            let u;
            if (o < 4096) u = t.indexOf("#", c), (u === -1 || u > v) && (u = v);
            else for (u = c; u < v && t.charCodeAt(u) !== 35; ) u++;
            let m = c, C = u;
            for (; m < C && w(t.charCodeAt(m)); ) m++;
            for (; C > m && w(t.charCodeAt(C - 1)); ) C--;
            let O = t.charCodeAt(m);
            if (p = t.slice(m, C), p.includes("\u2028") || p.includes("\u2029") ? p = p.replace(/^(['"`])([\s\S]*)\1$/mg, "$2") : C - m >= 2 && (O === 39 || O === 34 || O === 96) && t.charCodeAt(C - 1) === O && (p = t.slice(m + 1, C - 1)), r = u, u < v) for (; r < o && !q(t.charCodeAt(r)); ) r++;
          }
          g === 34 && (y || a < r) && p.indexOf("\\") !== -1 && (p = p.replace(/\\n/g, `
`).replace(/\\r/g, "\r")), n[h] = p;
        }
        return n;
      }
      function se(e, n) {
        return n && $(n.fast) ? oe(e) : ne(e);
      }
      function T(e) {
        console.log(`\u2506 ${e}`);
      }
      function ie(e) {
        console.error(`\u25C7 ${e}`);
      }
      function V(e) {
        return e[0] === "~" ? I.join(Z.homedir(), e.slice(1)) : e;
      }
      function ce(e = {}) {
        let n = { ...e };
        for (let t of Object.keys(n)) n[t] === void 0 && delete n[t];
        return { ...B(), ...n };
      }
      function ae(e) {
        e = ce(e);
        let n = I.resolve(process.cwd(), ".env"), t = "utf8", o = process.env;
        e && e.processEnv != null && (o = e.processEnv);
        let r = $(e && e.debug);
        e && e.encoding ? t = e.encoding : r && T("no encoding is specified (UTF-8 is used by default)");
        let s = [n];
        if (e && e.path) if (!Array.isArray(e.path)) s = [V(e.path)];
        else {
          s = [];
          for (let c of e.path) s.push(V(c));
        }
        let i, l = {}, d = { fast: e.fast };
        for (let c of s) try {
          let a = A.parse(z.readFileSync(c, { encoding: t }), d);
          A.populate(l, a, e);
        } catch (a) {
          r && T(`failed to load ${c} ${a.message}`), i = a;
        }
        let h = A.populate(o, l, e), f = $(Object.prototype.hasOwnProperty.call(e, "quiet") ? e.quiet : B(o).quiet);
        if (r || !f) {
          let c = Object.keys(h).length, a = [];
          for (let g of s) try {
            let p = I.relative(process.cwd(), g instanceof ee ? te(g) : g);
            a.push(p);
          } catch (p) {
            r && T(`failed to load ${g} ${p.message}`), i = p;
          }
          ie(`injected env (${c}) from ${a.join(",")}`);
        }
        return i ? { parsed: l, error: i } : { parsed: l };
      }
      function le(e) {
        return A.configDotenv(e);
      }
      function fe(e, n, t = {}) {
        let o = $(t && t.debug), r = $(t && t.override), s = {};
        if (e === null || typeof e != "object" || n === null || typeof n != "object") {
          let i = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw i.code = "OBJECT_REQUIRED", i;
        }
        for (let i of Object.keys(n)) Object.prototype.hasOwnProperty.call(e, i) ? (r === true && (e[i] = n[i], s[i] = n[i]), o && T(r === true ? `"${i}" is already defined and WAS overwritten` : `"${i}" is already defined and was NOT overwritten`)) : (e[i] = n[i], s[i] = n[i]);
        return s;
      }
      var A = { configDotenv: ae, config: le, parse: se, populate: fe };
      x.exports.configDotenv = A.configDotenv;
      x.exports.config = A.config;
      x.exports.parse = A.parse;
      x.exports.populate = A.populate;
      x.exports = A;
    });
    var M = j((Te, W) => {
      var _ = __require("child_process"), ue = __require("fs"), L = __require("path");
      function de(e) {
        let n = ['"'], t = 0;
        for (let o of e) {
          if (o === "\\") {
            t++;
            continue;
          }
          o === '"' ? n.push("\\".repeat(t * 2 + 1), '"') : n.push("\\".repeat(t), o), t = 0;
        }
        return n.push("\\".repeat(t * 2), '"'), n.join("");
      }
      function H(e, n = 1) {
        for (let t = 0; t < n; t++) {
          let o = [];
          for (let r of e) {
            let s = r.charCodeAt(0), i = s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122, l = "\\/:._-".includes(r);
            !i && !l && s < 128 && o.push("^"), o.push(r);
          }
          e = o.join("");
        }
        return e;
      }
      function P(e, n) {
        let t = Object.keys(e).reverse().find((o) => o.toUpperCase() === n);
        return t === void 0 ? void 0 : e[t];
      }
      function pe(e, n, t) {
        let o = (P(n, "PATHEXT") || ".COM;.EXE;.BAT;.CMD").split(";").filter(Boolean), s = o.some((l) => e.toLowerCase().endsWith(l.toLowerCase())) ? ["", ...o] : [...o, ""], i = /[\\/]/.test(e) ? [t] : [t, ...(P(n, "PATH") || "").split(";")];
        for (let l of i) for (let d of s) {
          let h = L.resolve(t, l.replace(/^"|"$/g, ""), e + d);
          try {
            if (ue.statSync(h).isFile()) return h;
          } catch {
          }
        }
      }
      function he(e, n, t) {
        if (process.platform !== "win32") return _.spawn(e, n, t);
        let o = t.env || process.env, r = pe(e, o, t.cwd || process.cwd());
        if (r && /\.(?:exe|com)$/i.test(r)) return _.spawn(r, n, t);
        let s = /\.(?:bat|cmd)$/i.test(r || e), i = [H(L.normalize(r || e))];
        for (let d of n) i.push(H(de(d), s ? 2 : 1));
        let l = i.join(" ");
        return _.spawn(P(o, "COMSPEC") || "cmd.exe", ["/d", "/v:off", "/s", "/c", `"${l}"`], { ...t, windowsVerbatimArguments: true });
      }
      W.exports = he;
    });
    var X = j(($e, F) => {
      var ge = __require("fs"), me = __require("os"), Q = __require("path"), ve = __require("child_process"), Ce = M(), R = N(), { optionsFromEnv: J } = k();
      function D() {
        console.log(["Usage: dotenv run [--help] [-q|--quiet] [--debug] [--override] [--fast] [-f|--file <paths>] [--] <command> [args...]", "", "Run a command with environment variables from a .env file.", "Place dotenv options before the command; all following arguments go to the command.", "", "Options:", "  -f, --file <paths>  .env paths, comma-separated or repeated (default: .env)", "  -q, --quiet suppress the injected env message", "  --debug     enable debug logging", "  --override  override existing environment variables", "  --fast      use the faster character-scanner parser", "", "Environment variables (DOTENV_CONFIG_* names remain as fallbacks):", "  DOTENV_PATH, DOTENV_ENCODING, DOTENV_QUIET,", "  DOTENV_DEBUG, DOTENV_OVERRIDE,", "  DOTENV_FAST"].join(`
`));
      }
      function we(e) {
        let n = [], t = false, o, r, s, i, l = -1;
        for (let h = 0; h < e.length; h++) {
          let f = e[h];
          if (f === "--") {
            l = h + 1;
            break;
          }
          if (f === "--help" || f === "-h") return { help: true };
          if (f === "--quiet" || f === "-q") {
            o = true;
            continue;
          }
          if (f === "--debug") {
            r = true;
            continue;
          }
          if (f === "--override") {
            s = true;
            continue;
          }
          if (f === "--fast") {
            i = true;
            continue;
          }
          if (f === "-f" || f === "--file" || f.startsWith("-f=") || f.startsWith("--file=")) {
            let c = f.indexOf("="), a = c === -1 ? f : f.slice(0, c), g = c === -1 ? e[++h] : f.slice(c + 1);
            if (!g || g === "--") return { error: `${a} requires a path` };
            let p = g.split(",").map((y) => y.trim()).filter(Boolean);
            if (p.length === 0) return { error: `${a} requires a path` };
            n.push(...p), t = true;
            continue;
          }
          if (f.startsWith("-")) return { error: `unknown option: ${f}` };
          l = h;
          break;
        }
        let d = l === -1 ? [] : e.slice(l);
        return { paths: n, pathSet: t, quiet: o, debug: r, override: s, fast: i, command: d };
      }
      function Ae(e) {
        return e[0] === "~" ? Q.join(me.homedir(), e.slice(1)) : e;
      }
      function Ee(e) {
        let n = J(), t = { encoding: n.encoding || "utf8", quiet: n.quiet, debug: n.debug === true, override: n.override === true, fast: n.fast === true, paths: [".env"], defaultPath: true };
        return n.path && (t.paths = [n.path], t.defaultPath = false), e.pathSet && (t.paths = e.paths, t.defaultPath = false), e.quiet != null && (t.quiet = e.quiet), e.debug != null && (t.debug = e.debug), e.override != null && (t.override = e.override), e.fast != null && (t.fast = e.fast), t;
      }
      function be(e) {
        let n = {}, t = [], o = { override: e.override, debug: e.debug };
        for (let s of e.paths) {
          let i = Q.resolve(process.cwd(), Ae(s));
          try {
            let l = R.parse(ge.readFileSync(i, { encoding: e.encoding }), { fast: e.fast });
            R.populate(n, l, o), t.push(s);
          } catch (l) {
            if (e.debug && console.log(`\u2506 failed to load ${s} ${l.message}`), !(e.defaultPath && l.code === "ENOENT")) throw l;
          }
        }
        return { injected: R.populate(process.env, n, o), loadedPaths: t };
      }
      function K4(e) {
        let n = e[0];
        if (n === "--help" || n === "-h") {
          D();
          return;
        }
        if (n !== "run") {
          D(), process.exitCode = 1;
          return;
        }
        let t = we(e.slice(1));
        if (t.help) {
          D();
          return;
        }
        if (t.error) {
          console.error(`dotenv: ${t.error}`), D(), process.exitCode = 1;
          return;
        }
        if (t.command.length === 0) {
          D(), process.exitCode = 1;
          return;
        }
        let o = Ee(t);
        try {
          let c = be(o);
          if (!(o.quiet == null ? J().quiet : o.quiet)) {
            let g = `\u25C7 injected env (${Object.keys(c.injected).length})`;
            c.loadedPaths.length > 0 && (g += ` from ${c.loadedPaths.join(", ")}`), console.error(g);
          }
        } catch (c) {
          console.error(`dotenv: ${c.message}`), process.exitCode = 1;
          return;
        }
        let r = !!process.stdin.isTTY, s = process.platform !== "win32" && !r, i = Ce(t.command[0], t.command.slice(1), { stdio: "inherit", detached: s }), l = /* @__PURE__ */ new Map(), d = 0;
        function h(c) {
          if (!(!i.pid || i.exitCode !== null || i.signalCode !== null)) {
            if (process.platform === "win32") {
              ve.spawnSync("taskkill", ["/pid", String(i.pid), "/T", "/F"], { stdio: "ignore" });
              return;
            }
            try {
              process.kill(s ? -i.pid : i.pid, c);
            } catch (a) {
              if (a.code !== "ESRCH") throw a;
            }
          }
        }
        function f() {
          for (let [c, a] of l) process.removeListener(c, a);
        }
        for (let c of ["SIGINT", "SIGTERM", "SIGHUP", "SIGQUIT"]) {
          let a = () => {
            if (c === "SIGINT") {
              if (d++, r && process.platform !== "win32" && d === 1) return;
              if (d > 1) {
                h(d === 2 ? "SIGTERM" : "SIGKILL");
                return;
              }
            }
            h(c);
          };
          l.set(c, a), process.on(c, a);
        }
        i.on("error", function(c) {
          f(), console.error(`dotenv: ${c.message}`), process.exitCode = 1;
        }), i.on("exit", function(c, a) {
          f(), typeof c == "number" ? process.exit(c) : (setInterval(() => {
          }, 1e3), process.kill(process.pid, a));
        });
      }
      F.exports = K4;
      __require.main === F && K4(process.argv.slice(2));
    });
    var S = N();
    var qe = X();
    module.exports = S;
    module.exports.config = S.config;
    module.exports.configDotenv = S.configDotenv;
    module.exports.parse = S.parse;
    module.exports.populate = S.populate;
    __require.main === module && qe(process.argv.slice(2));
  }
});

// node_modules/dotenv/dist/config.cjs
var require_config = __commonJS({
  "node_modules/dotenv/dist/config.cjs"() {
    var dotenv = require_dist();
    var quiet = process.env.DOTENV_QUIET != null ? process.env.DOTENV_QUIET : process.env.DOTENV_CONFIG_QUIET;
    dotenv.config({ quiet: quiet != null ? quiet : true });
  }
});

// node_modules/esbuild/lib/main.js
var require_main = __commonJS({
  "node_modules/esbuild/lib/main.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var node_exports = {};
    __export(node_exports, {
      analyzeMetafile: () => analyzeMetafile,
      analyzeMetafileSync: () => analyzeMetafileSync,
      build: () => build,
      buildSync: () => buildSync,
      context: () => context,
      default: () => node_default,
      formatMessages: () => formatMessages,
      formatMessagesSync: () => formatMessagesSync,
      initialize: () => initialize,
      stop: () => stop,
      transform: () => transform,
      transformSync: () => transformSync,
      version: () => version
    });
    module.exports = __toCommonJS(node_exports);
    function encodePacket(packet) {
      let visit = (value) => {
        if (value === null) {
          bb.write8(0);
        } else if (typeof value === "boolean") {
          bb.write8(1);
          bb.write8(+value);
        } else if (typeof value === "number") {
          bb.write8(2);
          bb.write32(value | 0);
        } else if (typeof value === "string") {
          bb.write8(3);
          bb.write(encodeUTF8(value));
        } else if (value instanceof Uint8Array) {
          bb.write8(4);
          bb.write(value);
        } else if (value instanceof Array) {
          bb.write8(5);
          bb.write32(value.length);
          for (let item of value) {
            visit(item);
          }
        } else {
          let keys = Object.keys(value);
          bb.write8(6);
          bb.write32(keys.length);
          for (let key of keys) {
            bb.write(encodeUTF8(key));
            visit(value[key]);
          }
        }
      };
      let bb = new ByteBuffer();
      bb.write32(0);
      bb.write32(packet.id << 1 | +!packet.isRequest);
      visit(packet.value);
      writeUInt32LE(bb.buf, bb.len - 4, 0);
      return bb.buf.subarray(0, bb.len);
    }
    function decodePacket(bytes) {
      let visit = () => {
        switch (bb.read8()) {
          case 0:
            return null;
          case 1:
            return !!bb.read8();
          case 2:
            return bb.read32();
          case 3:
            return decodeUTF8(bb.read());
          case 4:
            return bb.read();
          case 5: {
            let count = bb.read32();
            let value2 = [];
            for (let i = 0; i < count; i++) {
              value2.push(visit());
            }
            return value2;
          }
          case 6: {
            let count = bb.read32();
            let value2 = {};
            for (let i = 0; i < count; i++) {
              value2[decodeUTF8(bb.read())] = visit();
            }
            return value2;
          }
          default:
            throw new Error("Invalid packet");
        }
      };
      let bb = new ByteBuffer(bytes);
      let id = bb.read32();
      let isRequest = (id & 1) === 0;
      id >>>= 1;
      let value = visit();
      if (bb.ptr !== bytes.length) {
        throw new Error("Invalid packet");
      }
      return { id, isRequest, value };
    }
    var ByteBuffer = class {
      constructor(buf = new Uint8Array(1024)) {
        this.buf = buf;
        this.len = 0;
        this.ptr = 0;
      }
      _write(delta) {
        if (this.len + delta > this.buf.length) {
          let clone = new Uint8Array((this.len + delta) * 2);
          clone.set(this.buf);
          this.buf = clone;
        }
        this.len += delta;
        return this.len - delta;
      }
      write8(value) {
        let offset = this._write(1);
        this.buf[offset] = value;
      }
      write32(value) {
        let offset = this._write(4);
        writeUInt32LE(this.buf, value, offset);
      }
      write(bytes) {
        let offset = this._write(4 + bytes.length);
        writeUInt32LE(this.buf, bytes.length, offset);
        this.buf.set(bytes, offset + 4);
      }
      _read(delta) {
        if (this.ptr + delta > this.buf.length) {
          throw new Error("Invalid packet");
        }
        this.ptr += delta;
        return this.ptr - delta;
      }
      read8() {
        return this.buf[this._read(1)];
      }
      read32() {
        return readUInt32LE(this.buf, this._read(4));
      }
      read() {
        let length = this.read32();
        let bytes = new Uint8Array(length);
        let ptr = this._read(bytes.length);
        bytes.set(this.buf.subarray(ptr, ptr + length));
        return bytes;
      }
    };
    var encodeUTF8;
    var decodeUTF8;
    var encodeInvariant;
    if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
      let encoder = new TextEncoder();
      let decoder = new TextDecoder();
      encodeUTF8 = (text) => encoder.encode(text);
      decodeUTF8 = (bytes) => decoder.decode(bytes);
      encodeInvariant = 'new TextEncoder().encode("")';
    } else if (typeof Buffer !== "undefined") {
      encodeUTF8 = (text) => Buffer.from(text);
      decodeUTF8 = (bytes) => {
        let { buffer, byteOffset, byteLength } = bytes;
        return Buffer.from(buffer, byteOffset, byteLength).toString();
      };
      encodeInvariant = 'Buffer.from("")';
    } else {
      throw new Error("No UTF-8 codec found");
    }
    if (!(encodeUTF8("") instanceof Uint8Array))
      throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
    function readUInt32LE(buffer, offset) {
      return (buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24) >>> 0;
    }
    function writeUInt32LE(buffer, value, offset) {
      buffer[offset++] = value;
      buffer[offset++] = value >> 8;
      buffer[offset++] = value >> 16;
      buffer[offset++] = value >> 24;
    }
    var fromCharCode = String.fromCharCode;
    function throwSyntaxError(bytes, index, message) {
      const c = bytes[index];
      let line = 1;
      let column = 0;
      for (let i = 0; i < index; i++) {
        if (bytes[i] === 10) {
          line++;
          column = 0;
        } else {
          column++;
        }
      }
      throw new SyntaxError(
        message ? message : index === bytes.length ? "Unexpected end of input while parsing JSON" : c >= 32 && c <= 126 ? `Unexpected character ${fromCharCode(c)} in JSON at position ${index} (line ${line}, column ${column})` : `Unexpected byte 0x${c.toString(16)} in JSON at position ${index} (line ${line}, column ${column})`
      );
    }
    function JSON_parse(bytes) {
      if (!(bytes instanceof Uint8Array)) {
        throw new Error(`JSON input must be a Uint8Array`);
      }
      const propertyStack = [];
      const objectStack = [];
      const stateStack = [];
      const length = bytes.length;
      let property = null;
      let state = 0;
      let object;
      let i = 0;
      while (i < length) {
        let c = bytes[i++];
        if (c <= 32) {
          continue;
        }
        let value;
        if (state === 2 && property === null && c !== 34 && c !== 125) {
          throwSyntaxError(bytes, --i);
        }
        switch (c) {
          // True
          case 116: {
            if (bytes[i++] !== 114 || bytes[i++] !== 117 || bytes[i++] !== 101) {
              throwSyntaxError(bytes, --i);
            }
            value = true;
            break;
          }
          // False
          case 102: {
            if (bytes[i++] !== 97 || bytes[i++] !== 108 || bytes[i++] !== 115 || bytes[i++] !== 101) {
              throwSyntaxError(bytes, --i);
            }
            value = false;
            break;
          }
          // Null
          case 110: {
            if (bytes[i++] !== 117 || bytes[i++] !== 108 || bytes[i++] !== 108) {
              throwSyntaxError(bytes, --i);
            }
            value = null;
            break;
          }
          // Number begin
          case 45:
          case 46:
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57: {
            let index = i;
            value = fromCharCode(c);
            c = bytes[i];
            while (true) {
              switch (c) {
                case 43:
                case 45:
                case 46:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 101:
                case 69: {
                  value += fromCharCode(c);
                  c = bytes[++i];
                  continue;
                }
              }
              break;
            }
            value = +value;
            if (isNaN(value)) {
              throwSyntaxError(bytes, --index, "Invalid number");
            }
            break;
          }
          // String begin
          case 34: {
            value = "";
            while (true) {
              if (i >= length) {
                throwSyntaxError(bytes, length);
              }
              c = bytes[i++];
              if (c === 34) {
                break;
              } else if (c === 92) {
                switch (bytes[i++]) {
                  // Normal escape sequence
                  case 34:
                    value += '"';
                    break;
                  case 47:
                    value += "/";
                    break;
                  case 92:
                    value += "\\";
                    break;
                  case 98:
                    value += "\b";
                    break;
                  case 102:
                    value += "\f";
                    break;
                  case 110:
                    value += "\n";
                    break;
                  case 114:
                    value += "\r";
                    break;
                  case 116:
                    value += "	";
                    break;
                  // Unicode escape sequence
                  case 117: {
                    let code = 0;
                    for (let j = 0; j < 4; j++) {
                      c = bytes[i++];
                      code <<= 4;
                      if (c >= 48 && c <= 57) code |= c - 48;
                      else if (c >= 97 && c <= 102) code |= c + (10 - 97);
                      else if (c >= 65 && c <= 70) code |= c + (10 - 65);
                      else throwSyntaxError(bytes, --i);
                    }
                    value += fromCharCode(code);
                    break;
                  }
                  // Invalid escape sequence
                  default:
                    throwSyntaxError(bytes, --i);
                    break;
                }
              } else if (c <= 127) {
                value += fromCharCode(c);
              } else if ((c & 224) === 192) {
                value += fromCharCode((c & 31) << 6 | bytes[i++] & 63);
              } else if ((c & 240) === 224) {
                value += fromCharCode((c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63);
              } else if ((c & 248) == 240) {
                let codePoint = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
                if (codePoint > 65535) {
                  codePoint -= 65536;
                  value += fromCharCode(codePoint >> 10 & 1023 | 55296);
                  codePoint = 56320 | codePoint & 1023;
                }
                value += fromCharCode(codePoint);
              }
            }
            value[0];
            break;
          }
          // Array begin
          case 91: {
            value = [];
            propertyStack.push(property);
            objectStack.push(object);
            stateStack.push(state);
            property = null;
            object = value;
            state = 1;
            continue;
          }
          // Object begin
          case 123: {
            value = {};
            propertyStack.push(property);
            objectStack.push(object);
            stateStack.push(state);
            property = null;
            object = value;
            state = 2;
            continue;
          }
          // Array end
          case 93: {
            if (state !== 1) {
              throwSyntaxError(bytes, --i);
            }
            value = object;
            property = propertyStack.pop();
            object = objectStack.pop();
            state = stateStack.pop();
            break;
          }
          // Object end
          case 125: {
            if (state !== 2) {
              throwSyntaxError(bytes, --i);
            }
            value = object;
            property = propertyStack.pop();
            object = objectStack.pop();
            state = stateStack.pop();
            break;
          }
          default: {
            throwSyntaxError(bytes, --i);
          }
        }
        c = bytes[i];
        while (c <= 32) {
          c = bytes[++i];
        }
        switch (state) {
          case 0: {
            if (i === length) {
              return value;
            }
            break;
          }
          case 1: {
            object.push(value);
            if (c === 44) {
              i++;
              continue;
            }
            if (c === 93) {
              continue;
            }
            break;
          }
          case 2: {
            if (property === null) {
              property = value;
              if (c === 58) {
                i++;
                continue;
              }
            } else {
              object[property] = value;
              property = null;
              if (c === 44) {
                i++;
                continue;
              }
              if (c === 125) {
                continue;
              }
            }
            break;
          }
        }
        break;
      }
      throwSyntaxError(bytes, i);
    }
    var quote = JSON.stringify;
    var buildLogLevelDefault = "warning";
    var transformLogLevelDefault = "silent";
    function validateAndJoinStringArray(values, what) {
      const toJoin = [];
      for (const value of values) {
        validateStringValue(value, what);
        if (value.indexOf(",") >= 0) throw new Error(`Invalid ${what}: ${value}`);
        toJoin.push(value);
      }
      return toJoin.join(",");
    }
    var canBeAnything = () => null;
    var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
    var mustBeString = (value) => typeof value === "string" ? null : "a string";
    var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
    var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
    var mustBeValidPortNumber = (value) => typeof value === "number" && value === (value | 0) && value >= 0 && value <= 65535 ? null : "a valid port number";
    var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
    var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
    var mustBeArrayOfStrings = (value) => Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "an array of strings";
    var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
    var mustBeEntryPoints = (value) => typeof value === "object" && value !== null ? null : "an array or an object";
    var mustBeWebAssemblyModule = (value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
    var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
    var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
    var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
    var mustBeStringOrArrayOfStrings = (value) => typeof value === "string" || Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "a string or an array of strings";
    var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
    var mustBeStringOrURL = (value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
    function getFlag(object, keys, key, mustBeFn) {
      let value = object[key];
      keys[key + ""] = true;
      if (value === void 0) return void 0;
      let mustBe = mustBeFn(value);
      if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
      return value;
    }
    function checkForInvalidFlags(object, keys, where) {
      for (let key in object) {
        if (!(key in keys)) {
          throw new Error(`Invalid option ${where}: ${quote(key)}`);
        }
      }
    }
    function validateInitializeOptions(options) {
      let keys = /* @__PURE__ */ Object.create(null);
      let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
      let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
      let worker = getFlag(options, keys, "worker", mustBeBoolean);
      checkForInvalidFlags(options, keys, "in initialize() call");
      return {
        wasmURL,
        wasmModule,
        worker
      };
    }
    function validateMangleCache(mangleCache) {
      let validated;
      if (mangleCache !== void 0) {
        validated = /* @__PURE__ */ Object.create(null);
        for (let key in mangleCache) {
          let value = mangleCache[key];
          if (typeof value === "string" || value === false) {
            validated[key] = value;
          } else {
            throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
          }
        }
      }
      return validated;
    }
    function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
      let color = getFlag(options, keys, "color", mustBeBoolean);
      let logLevel = getFlag(options, keys, "logLevel", mustBeString);
      let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
      if (color !== void 0) flags.push(`--color=${color}`);
      else if (isTTY2) flags.push(`--color=true`);
      flags.push(`--log-level=${logLevel || logLevelDefault}`);
      flags.push(`--log-limit=${logLimit || 0}`);
    }
    function validateStringValue(value, what, key) {
      if (typeof value !== "string") {
        throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
      }
      return value;
    }
    function pushCommonFlags(flags, options, keys) {
      let legalComments = getFlag(options, keys, "legalComments", mustBeString);
      let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
      let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
      let target = getFlag(options, keys, "target", mustBeStringOrArrayOfStrings);
      let format = getFlag(options, keys, "format", mustBeString);
      let globalName = getFlag(options, keys, "globalName", mustBeString);
      let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
      let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
      let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
      let minify = getFlag(options, keys, "minify", mustBeBoolean);
      let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
      let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
      let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
      let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
      let drop = getFlag(options, keys, "drop", mustBeArrayOfStrings);
      let dropLabels = getFlag(options, keys, "dropLabels", mustBeArrayOfStrings);
      let charset = getFlag(options, keys, "charset", mustBeString);
      let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
      let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
      let jsx = getFlag(options, keys, "jsx", mustBeString);
      let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
      let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
      let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
      let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
      let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
      let define = getFlag(options, keys, "define", mustBeObject);
      let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
      let supported = getFlag(options, keys, "supported", mustBeObject);
      let pure = getFlag(options, keys, "pure", mustBeArrayOfStrings);
      let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
      let platform = getFlag(options, keys, "platform", mustBeString);
      let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
      let absPaths = getFlag(options, keys, "absPaths", mustBeArrayOfStrings);
      if (legalComments) flags.push(`--legal-comments=${legalComments}`);
      if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
      if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
      if (target) flags.push(`--target=${validateAndJoinStringArray(Array.isArray(target) ? target : [target], "target")}`);
      if (format) flags.push(`--format=${format}`);
      if (globalName) flags.push(`--global-name=${globalName}`);
      if (platform) flags.push(`--platform=${platform}`);
      if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
      if (minify) flags.push("--minify");
      if (minifySyntax) flags.push("--minify-syntax");
      if (minifyWhitespace) flags.push("--minify-whitespace");
      if (minifyIdentifiers) flags.push("--minify-identifiers");
      if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
      if (charset) flags.push(`--charset=${charset}`);
      if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
      if (ignoreAnnotations) flags.push(`--ignore-annotations`);
      if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
      if (dropLabels) flags.push(`--drop-labels=${validateAndJoinStringArray(dropLabels, "drop label")}`);
      if (absPaths) flags.push(`--abs-paths=${validateAndJoinStringArray(absPaths, "abs paths")}`);
      if (mangleProps) flags.push(`--mangle-props=${jsRegExpToGoRegExp(mangleProps)}`);
      if (reserveProps) flags.push(`--reserve-props=${jsRegExpToGoRegExp(reserveProps)}`);
      if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
      if (jsx) flags.push(`--jsx=${jsx}`);
      if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
      if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
      if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
      if (jsxDev) flags.push(`--jsx-dev`);
      if (jsxSideEffects) flags.push(`--jsx-side-effects`);
      if (define) {
        for (let key in define) {
          if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
          flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
        }
      }
      if (logOverride) {
        for (let key in logOverride) {
          if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
          flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
        }
      }
      if (supported) {
        for (let key in supported) {
          if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
          const value = supported[key];
          if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
          flags.push(`--supported:${key}=${value}`);
        }
      }
      if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
      if (keepNames) flags.push(`--keep-names`);
    }
    function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
      var _a2;
      let flags = [];
      let entries = [];
      let keys = /* @__PURE__ */ Object.create(null);
      let stdinContents = null;
      let stdinResolveDir = null;
      pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
      pushCommonFlags(flags, options, keys);
      let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
      let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
      let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
      let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
      let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
      let outfile = getFlag(options, keys, "outfile", mustBeString);
      let outdir = getFlag(options, keys, "outdir", mustBeString);
      let outbase = getFlag(options, keys, "outbase", mustBeString);
      let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
      let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArrayOfStrings);
      let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArrayOfStrings);
      let mainFields = getFlag(options, keys, "mainFields", mustBeArrayOfStrings);
      let conditions = getFlag(options, keys, "conditions", mustBeArrayOfStrings);
      let external = getFlag(options, keys, "external", mustBeArrayOfStrings);
      let packages = getFlag(options, keys, "packages", mustBeString);
      let alias = getFlag(options, keys, "alias", mustBeObject);
      let loader = getFlag(options, keys, "loader", mustBeObject);
      let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
      let publicPath = getFlag(options, keys, "publicPath", mustBeString);
      let entryNames = getFlag(options, keys, "entryNames", mustBeString);
      let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
      let assetNames = getFlag(options, keys, "assetNames", mustBeString);
      let inject = getFlag(options, keys, "inject", mustBeArrayOfStrings);
      let banner = getFlag(options, keys, "banner", mustBeObject);
      let footer = getFlag(options, keys, "footer", mustBeObject);
      let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
      let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
      let stdin = getFlag(options, keys, "stdin", mustBeObject);
      let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
      let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
      let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
      keys.plugins = true;
      checkForInvalidFlags(options, keys, `in ${callName}() call`);
      if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
      if (bundle) flags.push("--bundle");
      if (allowOverwrite) flags.push("--allow-overwrite");
      if (splitting) flags.push("--splitting");
      if (preserveSymlinks) flags.push("--preserve-symlinks");
      if (metafile) flags.push(`--metafile`);
      if (outfile) flags.push(`--outfile=${outfile}`);
      if (outdir) flags.push(`--outdir=${outdir}`);
      if (outbase) flags.push(`--outbase=${outbase}`);
      if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
      if (packages) flags.push(`--packages=${packages}`);
      if (resolveExtensions) flags.push(`--resolve-extensions=${validateAndJoinStringArray(resolveExtensions, "resolve extension")}`);
      if (publicPath) flags.push(`--public-path=${publicPath}`);
      if (entryNames) flags.push(`--entry-names=${entryNames}`);
      if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
      if (assetNames) flags.push(`--asset-names=${assetNames}`);
      if (mainFields) flags.push(`--main-fields=${validateAndJoinStringArray(mainFields, "main field")}`);
      if (conditions) flags.push(`--conditions=${validateAndJoinStringArray(conditions, "condition")}`);
      if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
      if (alias) {
        for (let old in alias) {
          if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
          flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
        }
      }
      if (banner) {
        for (let type in banner) {
          if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
          flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
        }
      }
      if (footer) {
        for (let type in footer) {
          if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
          flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
        }
      }
      if (inject) for (let path32 of inject) flags.push(`--inject:${validateStringValue(path32, "inject")}`);
      if (loader) {
        for (let ext in loader) {
          if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
          flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
        }
      }
      if (outExtension) {
        for (let ext in outExtension) {
          if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
          flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
        }
      }
      if (entryPoints) {
        if (Array.isArray(entryPoints)) {
          for (let i = 0, n = entryPoints.length; i < n; i++) {
            let entryPoint = entryPoints[i];
            if (typeof entryPoint === "object" && entryPoint !== null) {
              let entryPointKeys = /* @__PURE__ */ Object.create(null);
              let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
              let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
              checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
              if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
              if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
              entries.push([output, input]);
            } else {
              entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
            }
          }
        } else {
          for (let key in entryPoints) {
            entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
          }
        }
      }
      if (stdin) {
        let stdinKeys = /* @__PURE__ */ Object.create(null);
        let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
        let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
        let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
        let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
        checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
        if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
        if (loader2) flags.push(`--loader=${loader2}`);
        if (resolveDir) stdinResolveDir = resolveDir;
        if (typeof contents === "string") stdinContents = encodeUTF8(contents);
        else if (contents instanceof Uint8Array) stdinContents = contents;
      }
      let nodePaths = [];
      if (nodePathsInput) {
        for (let value of nodePathsInput) {
          value += "";
          nodePaths.push(value);
        }
      }
      return {
        entries,
        flags,
        write,
        stdinContents,
        stdinResolveDir,
        absWorkingDir,
        nodePaths,
        mangleCache: validateMangleCache(mangleCache)
      };
    }
    function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
      let flags = [];
      let keys = /* @__PURE__ */ Object.create(null);
      pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
      pushCommonFlags(flags, options, keys);
      let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
      let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
      let loader = getFlag(options, keys, "loader", mustBeString);
      let banner = getFlag(options, keys, "banner", mustBeString);
      let footer = getFlag(options, keys, "footer", mustBeString);
      let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
      checkForInvalidFlags(options, keys, `in ${callName}() call`);
      if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
      if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
      if (loader) flags.push(`--loader=${loader}`);
      if (banner) flags.push(`--banner=${banner}`);
      if (footer) flags.push(`--footer=${footer}`);
      return {
        flags,
        mangleCache: validateMangleCache(mangleCache)
      };
    }
    function createChannel(streamIn) {
      const requestCallbacksByKey = {};
      const closeData = { didClose: false, reason: "" };
      let responseCallbacks = {};
      let nextRequestID = 0;
      let nextBuildKey = 0;
      let stdout = new Uint8Array(16 * 1024);
      let stdoutUsed = 0;
      let readFromStdout = (chunk) => {
        let limit = stdoutUsed + chunk.length;
        if (limit > stdout.length) {
          let swap = new Uint8Array(limit * 2);
          swap.set(stdout);
          stdout = swap;
        }
        stdout.set(chunk, stdoutUsed);
        stdoutUsed += chunk.length;
        let offset = 0;
        while (offset + 4 <= stdoutUsed) {
          let length = readUInt32LE(stdout, offset);
          if (offset + 4 + length > stdoutUsed) {
            break;
          }
          offset += 4;
          handleIncomingPacket(stdout.subarray(offset, offset + length));
          offset += length;
        }
        if (offset > 0) {
          stdout.copyWithin(0, offset, stdoutUsed);
          stdoutUsed -= offset;
        }
      };
      let afterClose = (error) => {
        closeData.didClose = true;
        if (error) closeData.reason = ": " + (error.message || error);
        const text = "The service was stopped" + closeData.reason;
        for (let id in responseCallbacks) {
          responseCallbacks[id](text, null);
        }
        responseCallbacks = {};
      };
      let sendRequest = (refs, value, callback) => {
        if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
        let id = nextRequestID++;
        responseCallbacks[id] = (error, response) => {
          try {
            callback(error, response);
          } finally {
            if (refs) refs.unref();
          }
        };
        if (refs) refs.ref();
        streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
      };
      let sendResponse = (id, value) => {
        if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
        streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
      };
      let handleRequest = async (id, request) => {
        try {
          if (request.command === "ping") {
            sendResponse(id, {});
            return;
          }
          if (typeof request.key === "number") {
            const requestCallbacks = requestCallbacksByKey[request.key];
            if (!requestCallbacks) {
              return;
            }
            const callback = requestCallbacks[request.command];
            if (callback) {
              await callback(id, request);
              return;
            }
          }
          throw new Error(`Invalid command: ` + request.command);
        } catch (e) {
          const errors = [extractErrorMessageV8(e, streamIn, null, void 0, "")];
          try {
            sendResponse(id, { errors });
          } catch {
          }
        }
      };
      let isFirstPacket = true;
      let handleIncomingPacket = (bytes) => {
        if (isFirstPacket) {
          isFirstPacket = false;
          let binaryVersion = String.fromCharCode(...bytes);
          if (binaryVersion !== "0.28.1") {
            throw new Error(`Cannot start service: Host version "${"0.28.1"}" does not match binary version ${quote(binaryVersion)}`);
          }
          return;
        }
        let packet = decodePacket(bytes);
        if (packet.isRequest) {
          handleRequest(packet.id, packet.value);
        } else {
          let callback = responseCallbacks[packet.id];
          delete responseCallbacks[packet.id];
          if (packet.value.error) callback(packet.value.error, {});
          else callback(null, packet.value);
        }
      };
      let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback }) => {
        let refCount = 0;
        const buildKey = nextBuildKey++;
        const requestCallbacks = {};
        const buildRefs = {
          ref() {
            if (++refCount === 1) {
              if (refs) refs.ref();
            }
          },
          unref() {
            if (--refCount === 0) {
              delete requestCallbacksByKey[buildKey];
              if (refs) refs.unref();
            }
          }
        };
        requestCallbacksByKey[buildKey] = requestCallbacks;
        buildRefs.ref();
        buildOrContextImpl(
          callName,
          buildKey,
          sendRequest,
          sendResponse,
          buildRefs,
          streamIn,
          requestCallbacks,
          options,
          isTTY2,
          defaultWD2,
          (err, res) => {
            try {
              callback(err, res);
            } finally {
              buildRefs.unref();
            }
          }
        );
      };
      let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs32, callback }) => {
        const details = createObjectStash();
        let start = (inputPath) => {
          try {
            if (typeof input !== "string" && !(input instanceof Uint8Array))
              throw new Error('The input to "transform" must be a string or a Uint8Array');
            let {
              flags,
              mangleCache
            } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
            let request = {
              command: "transform",
              flags,
              inputFS: inputPath !== null,
              input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
            };
            if (mangleCache) request.mangleCache = mangleCache;
            sendRequest(refs, request, (error, response) => {
              if (error) return callback(new Error(error), null);
              let errors = replaceDetailsInMessages(response.errors, details);
              let warnings = replaceDetailsInMessages(response.warnings, details);
              let outstanding = 1;
              let next = () => {
                if (--outstanding === 0) {
                  let result = {
                    warnings,
                    code: response.code,
                    map: response.map,
                    mangleCache: void 0,
                    legalComments: void 0
                  };
                  if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
                  if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
                  callback(null, result);
                }
              };
              if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
              if (response.codeFS) {
                outstanding++;
                fs32.readFile(response.code, (err, contents) => {
                  if (err !== null) {
                    callback(err, null);
                  } else {
                    response.code = contents;
                    next();
                  }
                });
              }
              if (response.mapFS) {
                outstanding++;
                fs32.readFile(response.map, (err, contents) => {
                  if (err !== null) {
                    callback(err, null);
                  } else {
                    response.map = contents;
                    next();
                  }
                });
              }
              next();
            });
          } catch (e) {
            let flags = [];
            try {
              pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
            } catch {
            }
            const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
            sendRequest(refs, { command: "error", flags, error }, () => {
              error.detail = details.load(error.detail);
              callback(failureErrorWithLog("Transform failed", [error], []), null);
            });
          }
        };
        if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
          let next = start;
          start = () => fs32.writeFile(input, next);
        }
        start(null);
      };
      let formatMessages2 = ({ callName, refs, messages, options, callback }) => {
        if (!options) throw new Error(`Missing second argument in ${callName}() call`);
        let keys = {};
        let kind = getFlag(options, keys, "kind", mustBeString);
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
        if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
        let request = {
          command: "format-msgs",
          messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
          isWarning: kind === "warning"
        };
        if (color !== void 0) request.color = color;
        if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
        sendRequest(refs, request, (error, response) => {
          if (error) return callback(new Error(error), null);
          callback(null, response.messages);
        });
      };
      let analyzeMetafile2 = ({ callName, refs, metafile, options, callback }) => {
        if (options === void 0) options = {};
        let keys = {};
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        let request = {
          command: "analyze-metafile",
          metafile
        };
        if (color !== void 0) request.color = color;
        if (verbose !== void 0) request.verbose = verbose;
        sendRequest(refs, request, (error, response) => {
          if (error) return callback(new Error(error), null);
          callback(null, response.result);
        });
      };
      return {
        readFromStdout,
        afterClose,
        service: {
          buildOrContext,
          transform: transform2,
          formatMessages: formatMessages2,
          analyzeMetafile: analyzeMetafile2
        }
      };
    }
    function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
      const details = createObjectStash();
      const isContext = callName === "context";
      const handleError = (e, pluginName) => {
        const flags = [];
        try {
          pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
        } catch {
        }
        const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
        sendRequest(refs, { command: "error", flags, error: message }, () => {
          message.detail = details.load(message.detail);
          callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
        });
      };
      let plugins;
      if (typeof options === "object") {
        const value = options.plugins;
        if (value !== void 0) {
          if (!Array.isArray(value)) return handleError(new Error(`"plugins" must be an array`), "");
          plugins = value;
        }
      }
      if (plugins && plugins.length > 0) {
        if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
        handlePlugins(
          buildKey,
          sendRequest,
          sendResponse,
          refs,
          streamIn,
          requestCallbacks,
          options,
          plugins,
          details
        ).then(
          (result) => {
            if (!result.ok) return handleError(result.error, result.pluginName);
            try {
              buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
            } catch (e) {
              handleError(e, "");
            }
          },
          (e) => handleError(e, "")
        );
        return;
      }
      try {
        buildOrContextContinue(null, (result, done) => done([], []), () => {
        });
      } catch (e) {
        handleError(e, "");
      }
      function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
        const writeDefault = streamIn.hasFS;
        const {
          entries,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir,
          nodePaths,
          mangleCache
        } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
        if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
        const request = {
          command: "build",
          key: buildKey,
          entries,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir: absWorkingDir || defaultWD2,
          nodePaths,
          context: isContext
        };
        if (requestPlugins) request.plugins = requestPlugins;
        if (mangleCache) request.mangleCache = mangleCache;
        const buildResponseToResult = (response, callback2) => {
          const result = {
            errors: replaceDetailsInMessages(response.errors, details),
            warnings: replaceDetailsInMessages(response.warnings, details),
            outputFiles: void 0,
            metafile: void 0,
            mangleCache: void 0
          };
          const originalErrors = result.errors.slice();
          const originalWarnings = result.warnings.slice();
          if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
          if (response.metafile && response.metafile.length) result.metafile = parseJSON(response.metafile);
          if (response.mangleCache) result.mangleCache = response.mangleCache;
          if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
          runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
            if (originalErrors.length > 0 || onEndErrors.length > 0) {
              const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
              return callback2(error, null, onEndErrors, onEndWarnings);
            }
            callback2(null, result, onEndErrors, onEndWarnings);
          });
        };
        let latestResultPromise;
        let provideLatestResult;
        if (isContext)
          requestCallbacks["on-end"] = (id, request2) => new Promise((resolve) => {
            buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
              const response = {
                errors: onEndErrors,
                warnings: onEndWarnings
              };
              if (provideLatestResult) provideLatestResult(err, result);
              latestResultPromise = void 0;
              provideLatestResult = void 0;
              sendResponse(id, response);
              resolve();
            });
          });
        sendRequest(refs, request, (error, response) => {
          if (error) return callback(new Error(error), null);
          if (!isContext) {
            return buildResponseToResult(response, (err, res) => {
              scheduleOnDisposeCallbacks();
              return callback(err, res);
            });
          }
          if (response.errors.length > 0) {
            return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
          }
          let didDispose = false;
          const result = {
            rebuild: () => {
              if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject) => {
                let settlePromise;
                provideLatestResult = (err, result2) => {
                  if (!settlePromise) settlePromise = () => err ? reject(err) : resolve(result2);
                };
                const triggerAnotherBuild = () => {
                  const request2 = {
                    command: "rebuild",
                    key: buildKey
                  };
                  sendRequest(refs, request2, (error2, response2) => {
                    if (error2) {
                      reject(new Error(error2));
                    } else if (settlePromise) {
                      settlePromise();
                    } else {
                      triggerAnotherBuild();
                    }
                  });
                };
                triggerAnotherBuild();
              });
              return latestResultPromise;
            },
            watch: (options2 = {}) => new Promise((resolve, reject) => {
              if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
              const keys = {};
              const delay = getFlag(options2, keys, "delay", mustBeInteger);
              checkForInvalidFlags(options2, keys, `in watch() call`);
              const request2 = {
                command: "watch",
                key: buildKey
              };
              if (delay) request2.delay = delay;
              sendRequest(refs, request2, (error2) => {
                if (error2) reject(new Error(error2));
                else resolve(void 0);
              });
            }),
            serve: (options2 = {}) => new Promise((resolve, reject) => {
              if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
              const keys = {};
              const port = getFlag(options2, keys, "port", mustBeValidPortNumber);
              const host = getFlag(options2, keys, "host", mustBeString);
              const servedir = getFlag(options2, keys, "servedir", mustBeString);
              const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
              const certfile = getFlag(options2, keys, "certfile", mustBeString);
              const fallback = getFlag(options2, keys, "fallback", mustBeString);
              const cors = getFlag(options2, keys, "cors", mustBeObject);
              const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
              checkForInvalidFlags(options2, keys, `in serve() call`);
              const request2 = {
                command: "serve",
                key: buildKey,
                onRequest: !!onRequest
              };
              if (port !== void 0) request2.port = port;
              if (host !== void 0) request2.host = host;
              if (servedir !== void 0) request2.servedir = servedir;
              if (keyfile !== void 0) request2.keyfile = keyfile;
              if (certfile !== void 0) request2.certfile = certfile;
              if (fallback !== void 0) request2.fallback = fallback;
              if (cors) {
                const corsKeys = {};
                const origin = getFlag(cors, corsKeys, "origin", mustBeStringOrArrayOfStrings);
                checkForInvalidFlags(cors, corsKeys, `on "cors" object`);
                if (Array.isArray(origin)) request2.corsOrigin = origin;
                else if (origin !== void 0) request2.corsOrigin = [origin];
              }
              sendRequest(refs, request2, (error2, response2) => {
                if (error2) return reject(new Error(error2));
                if (onRequest) {
                  requestCallbacks["serve-request"] = (id, request3) => {
                    onRequest(request3.args);
                    sendResponse(id, {});
                  };
                }
                resolve(response2);
              });
            }),
            cancel: () => new Promise((resolve) => {
              if (didDispose) return resolve();
              const request2 = {
                command: "cancel",
                key: buildKey
              };
              sendRequest(refs, request2, () => {
                resolve();
              });
            }),
            dispose: () => new Promise((resolve) => {
              if (didDispose) return resolve();
              didDispose = true;
              const request2 = {
                command: "dispose",
                key: buildKey
              };
              sendRequest(refs, request2, () => {
                resolve();
                scheduleOnDisposeCallbacks();
                refs.unref();
              });
            })
          };
          refs.ref();
          callback(null, result);
        });
      }
    }
    var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => {
      let onStartCallbacks = [];
      let onEndCallbacks = [];
      let onResolveCallbacks = {};
      let onLoadCallbacks = {};
      let onDisposeCallbacks = [];
      let nextCallbackID = 0;
      let i = 0;
      let requestPlugins = [];
      let isSetupDone = false;
      plugins = [...plugins];
      for (let item of plugins) {
        let keys = {};
        if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
        const name = getFlag(item, keys, "name", mustBeString);
        if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
        try {
          let setup = getFlag(item, keys, "setup", mustBeFunction);
          if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
          checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
          let plugin = {
            name,
            onStart: false,
            onEnd: false,
            onResolve: [],
            onLoad: []
          };
          i++;
          let resolve = (path32, options = {}) => {
            if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
            if (typeof path32 !== "string") throw new Error(`The path to resolve must be a string`);
            let keys2 = /* @__PURE__ */ Object.create(null);
            let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
            let importer = getFlag(options, keys2, "importer", mustBeString);
            let namespace = getFlag(options, keys2, "namespace", mustBeString);
            let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
            let kind = getFlag(options, keys2, "kind", mustBeString);
            let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
            let importAttributes = getFlag(options, keys2, "with", mustBeObject);
            checkForInvalidFlags(options, keys2, "in resolve() call");
            return new Promise((resolve2, reject) => {
              const request = {
                command: "resolve",
                path: path32,
                key: buildKey,
                pluginName: name
              };
              if (pluginName != null) request.pluginName = pluginName;
              if (importer != null) request.importer = importer;
              if (namespace != null) request.namespace = namespace;
              if (resolveDir != null) request.resolveDir = resolveDir;
              if (kind != null) request.kind = kind;
              else throw new Error(`Must specify "kind" when calling "resolve"`);
              if (pluginData != null) request.pluginData = details.store(pluginData);
              if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
              sendRequest(refs, request, (error, response) => {
                if (error !== null) reject(new Error(error));
                else resolve2({
                  errors: replaceDetailsInMessages(response.errors, details),
                  warnings: replaceDetailsInMessages(response.warnings, details),
                  path: response.path,
                  external: response.external,
                  sideEffects: response.sideEffects,
                  namespace: response.namespace,
                  suffix: response.suffix,
                  pluginData: details.load(response.pluginData)
                });
              });
            });
          };
          let promise = setup({
            initialOptions,
            resolve,
            onStart(callback) {
              let registeredText = `This error came from the "onStart" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
              onStartCallbacks.push({ name, callback, note: registeredNote });
              plugin.onStart = true;
            },
            onEnd(callback) {
              let registeredText = `This error came from the "onEnd" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
              onEndCallbacks.push({ name, callback, note: registeredNote });
              plugin.onEnd = true;
            },
            onResolve(options, callback) {
              let registeredText = `This error came from the "onResolve" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
              let keys2 = {};
              let filter = getFlag(options, keys2, "filter", mustBeRegExp);
              let namespace = getFlag(options, keys2, "namespace", mustBeString);
              checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
              if (filter == null) throw new Error(`onResolve() call is missing a filter`);
              let id = nextCallbackID++;
              onResolveCallbacks[id] = { name, callback, note: registeredNote };
              plugin.onResolve.push({ id, filter: jsRegExpToGoRegExp(filter), namespace: namespace || "" });
            },
            onLoad(options, callback) {
              let registeredText = `This error came from the "onLoad" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
              let keys2 = {};
              let filter = getFlag(options, keys2, "filter", mustBeRegExp);
              let namespace = getFlag(options, keys2, "namespace", mustBeString);
              checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
              if (filter == null) throw new Error(`onLoad() call is missing a filter`);
              let id = nextCallbackID++;
              onLoadCallbacks[id] = { name, callback, note: registeredNote };
              plugin.onLoad.push({ id, filter: jsRegExpToGoRegExp(filter), namespace: namespace || "" });
            },
            onDispose(callback) {
              onDisposeCallbacks.push(callback);
            },
            esbuild: streamIn.esbuild
          });
          if (promise) await promise;
          requestPlugins.push(plugin);
        } catch (e) {
          return { ok: false, error: e, pluginName: name };
        }
      }
      requestCallbacks["on-start"] = async (id, request) => {
        details.clear();
        let response = { errors: [], warnings: [] };
        await Promise.all(onStartCallbacks.map(async ({ name, callback, note }) => {
          try {
            let result = await callback();
            if (result != null) {
              if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
              let keys = {};
              let errors = getFlag(result, keys, "errors", mustBeArray);
              let warnings = getFlag(result, keys, "warnings", mustBeArray);
              checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
              if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
              if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
            }
          } catch (e) {
            response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
          }
        }));
        sendResponse(id, response);
      };
      requestCallbacks["on-resolve"] = async (id, request) => {
        let response = {}, name = "", callback, note;
        for (let id2 of request.ids) {
          try {
            ({ name, callback, note } = onResolveCallbacks[id2]);
            let result = await callback({
              path: request.path,
              importer: request.importer,
              namespace: request.namespace,
              resolveDir: request.resolveDir,
              kind: request.kind,
              pluginData: details.load(request.pluginData),
              with: request.with
            });
            if (result != null) {
              if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
              let keys = {};
              let pluginName = getFlag(result, keys, "pluginName", mustBeString);
              let path32 = getFlag(result, keys, "path", mustBeString);
              let namespace = getFlag(result, keys, "namespace", mustBeString);
              let suffix = getFlag(result, keys, "suffix", mustBeString);
              let external = getFlag(result, keys, "external", mustBeBoolean);
              let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
              let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
              let errors = getFlag(result, keys, "errors", mustBeArray);
              let warnings = getFlag(result, keys, "warnings", mustBeArray);
              let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
              let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
              checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
              response.id = id2;
              if (pluginName != null) response.pluginName = pluginName;
              if (path32 != null) response.path = path32;
              if (namespace != null) response.namespace = namespace;
              if (suffix != null) response.suffix = suffix;
              if (external != null) response.external = external;
              if (sideEffects != null) response.sideEffects = sideEffects;
              if (pluginData != null) response.pluginData = details.store(pluginData);
              if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
              if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
              if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
              if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
              break;
            }
          } catch (e) {
            response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
            break;
          }
        }
        sendResponse(id, response);
      };
      requestCallbacks["on-load"] = async (id, request) => {
        let response = {}, name = "", callback, note;
        for (let id2 of request.ids) {
          try {
            ({ name, callback, note } = onLoadCallbacks[id2]);
            let result = await callback({
              path: request.path,
              namespace: request.namespace,
              suffix: request.suffix,
              pluginData: details.load(request.pluginData),
              with: request.with
            });
            if (result != null) {
              if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
              let keys = {};
              let pluginName = getFlag(result, keys, "pluginName", mustBeString);
              let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
              let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
              let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
              let loader = getFlag(result, keys, "loader", mustBeString);
              let errors = getFlag(result, keys, "errors", mustBeArray);
              let warnings = getFlag(result, keys, "warnings", mustBeArray);
              let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
              let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
              checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
              response.id = id2;
              if (pluginName != null) response.pluginName = pluginName;
              if (contents instanceof Uint8Array) response.contents = contents;
              else if (contents != null) response.contents = encodeUTF8(contents);
              if (resolveDir != null) response.resolveDir = resolveDir;
              if (pluginData != null) response.pluginData = details.store(pluginData);
              if (loader != null) response.loader = loader;
              if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
              if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
              if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
              if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
              break;
            }
          } catch (e) {
            response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
            break;
          }
        }
        sendResponse(id, response);
      };
      let runOnEndCallbacks = (result, done) => done([], []);
      if (onEndCallbacks.length > 0) {
        runOnEndCallbacks = (result, done) => {
          (async () => {
            const onEndErrors = [];
            const onEndWarnings = [];
            for (const { name, callback, note } of onEndCallbacks) {
              let newErrors;
              let newWarnings;
              try {
                const value = await callback(result);
                if (value != null) {
                  if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
                  let keys = {};
                  let errors = getFlag(value, keys, "errors", mustBeArray);
                  let warnings = getFlag(value, keys, "warnings", mustBeArray);
                  checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
                  if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
                  if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                }
              } catch (e) {
                newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
              }
              if (newErrors) {
                onEndErrors.push(...newErrors);
                try {
                  result.errors.push(...newErrors);
                } catch {
                }
              }
              if (newWarnings) {
                onEndWarnings.push(...newWarnings);
                try {
                  result.warnings.push(...newWarnings);
                } catch {
                }
              }
            }
            done(onEndErrors, onEndWarnings);
          })();
        };
      }
      let scheduleOnDisposeCallbacks = () => {
        for (const cb of onDisposeCallbacks) {
          setTimeout(() => cb(), 0);
        }
      };
      isSetupDone = true;
      return {
        ok: true,
        requestPlugins,
        runOnEndCallbacks,
        scheduleOnDisposeCallbacks
      };
    };
    function createObjectStash() {
      const map = /* @__PURE__ */ new Map();
      let nextID = 0;
      return {
        clear() {
          map.clear();
        },
        load(id) {
          return map.get(id);
        },
        store(value) {
          if (value === void 0) return -1;
          const id = nextID++;
          map.set(id, value);
          return id;
        }
      };
    }
    function extractCallerV8(e, streamIn, ident) {
      let note;
      let tried = false;
      return () => {
        if (tried) return note;
        tried = true;
        try {
          let lines = (e.stack + "").split("\n");
          lines.splice(1, 1);
          let location = parseStackLinesV8(streamIn, lines, ident);
          if (location) {
            note = { text: e.message, location };
            return note;
          }
        } catch {
        }
      };
    }
    function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
      let text = "Internal error";
      let location = null;
      try {
        text = (e && e.message || e) + "";
      } catch {
      }
      try {
        location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
      } catch {
      }
      return { id: "", pluginName, text, location, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
    }
    function parseStackLinesV8(streamIn, lines, ident) {
      let at = "    at ";
      if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
        for (let i = 1; i < lines.length; i++) {
          let line = lines[i];
          if (!line.startsWith(at)) continue;
          line = line.slice(at.length);
          while (true) {
            let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
            if (match) {
              line = match[1];
              continue;
            }
            match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
            if (match) {
              line = match[1];
              continue;
            }
            match = /^(\S+):(\d+):(\d+)$/.exec(line);
            if (match) {
              let contents;
              try {
                contents = streamIn.readFileSync(match[1], "utf8");
              } catch {
                break;
              }
              let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
              let column = +match[3] - 1;
              let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
              return {
                file: match[1],
                namespace: "file",
                line: +match[2],
                column: encodeUTF8(lineText.slice(0, column)).length,
                length: encodeUTF8(lineText.slice(column, column + length)).length,
                lineText: lineText + "\n" + lines.slice(1).join("\n"),
                suggestion: ""
              };
            }
            break;
          }
        }
      }
      return null;
    }
    function failureErrorWithLog(text, errors, warnings) {
      let limit = 5;
      text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
        if (i === limit) return "\n...";
        if (!e.location) return `
error: ${e.text}`;
        let { file, line, column } = e.location;
        let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
        return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
      }).join("");
      let error = new Error(text);
      for (const [key, value] of [["errors", errors], ["warnings", warnings]]) {
        Object.defineProperty(error, key, {
          configurable: true,
          enumerable: true,
          get: () => value,
          set: (value2) => Object.defineProperty(error, key, {
            configurable: true,
            enumerable: true,
            value: value2
          })
        });
      }
      return error;
    }
    function replaceDetailsInMessages(messages, stash) {
      for (const message of messages) {
        message.detail = stash.load(message.detail);
      }
      return messages;
    }
    function sanitizeLocation(location, where, terminalWidth) {
      if (location == null) return null;
      let keys = {};
      let file = getFlag(location, keys, "file", mustBeString);
      let namespace = getFlag(location, keys, "namespace", mustBeString);
      let line = getFlag(location, keys, "line", mustBeInteger);
      let column = getFlag(location, keys, "column", mustBeInteger);
      let length = getFlag(location, keys, "length", mustBeInteger);
      let lineText = getFlag(location, keys, "lineText", mustBeString);
      let suggestion = getFlag(location, keys, "suggestion", mustBeString);
      checkForInvalidFlags(location, keys, where);
      if (lineText) {
        const relevantASCII = lineText.slice(
          0,
          (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80)
        );
        if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
          lineText = relevantASCII;
        }
      }
      return {
        file: file || "",
        namespace: namespace || "",
        line: line || 0,
        column: column || 0,
        length: length || 0,
        lineText: lineText || "",
        suggestion: suggestion || ""
      };
    }
    function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
      let messagesClone = [];
      let index = 0;
      for (const message of messages) {
        let keys = {};
        let id = getFlag(message, keys, "id", mustBeString);
        let pluginName = getFlag(message, keys, "pluginName", mustBeString);
        let text = getFlag(message, keys, "text", mustBeString);
        let location = getFlag(message, keys, "location", mustBeObjectOrNull);
        let notes = getFlag(message, keys, "notes", mustBeArray);
        let detail = getFlag(message, keys, "detail", canBeAnything);
        let where = `in element ${index} of "${property}"`;
        checkForInvalidFlags(message, keys, where);
        let notesClone = [];
        if (notes) {
          for (const note of notes) {
            let noteKeys = {};
            let noteText = getFlag(note, noteKeys, "text", mustBeString);
            let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
            checkForInvalidFlags(note, noteKeys, where);
            notesClone.push({
              text: noteText || "",
              location: sanitizeLocation(noteLocation, where, terminalWidth)
            });
          }
        }
        messagesClone.push({
          id: id || "",
          pluginName: pluginName || fallbackPluginName,
          text: text || "",
          location: sanitizeLocation(location, where, terminalWidth),
          notes: notesClone,
          detail: stash ? stash.store(detail) : -1
        });
        index++;
      }
      return messagesClone;
    }
    function sanitizeStringArray(values, property) {
      const result = [];
      for (const value of values) {
        if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
        result.push(value);
      }
      return result;
    }
    function sanitizeStringMap(map, property) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key in map) {
        const value = map[key];
        if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
        result[key] = value;
      }
      return result;
    }
    function convertOutputFiles({ path: path32, contents, hash }) {
      let text = null;
      return {
        path: path32,
        contents,
        hash,
        get text() {
          const binary = this.contents;
          if (text === null || binary !== contents) {
            contents = binary;
            text = decodeUTF8(binary);
          }
          return text;
        }
      };
    }
    function jsRegExpToGoRegExp(regexp) {
      let result = regexp.source;
      if (regexp.flags) result = `(?${regexp.flags})${result}`;
      return result;
    }
    function parseJSON(bytes) {
      let text;
      try {
        text = decodeUTF8(bytes);
      } catch {
        return JSON_parse(bytes);
      }
      return JSON.parse(text);
    }
    var fs9 = __require("fs");
    var os4 = __require("os");
    var path9 = __require("path");
    var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
    var isValidBinaryPath = (x) => !!x && x !== "/usr/bin/esbuild";
    var packageDarwin_arm64 = "@esbuild/darwin-arm64";
    var packageDarwin_x64 = "@esbuild/darwin-x64";
    var knownWindowsPackages = {
      "win32 arm64 LE": "@esbuild/win32-arm64",
      "win32 ia32 LE": "@esbuild/win32-ia32",
      "win32 x64 LE": "@esbuild/win32-x64"
    };
    var knownUnixlikePackages = {
      "aix ppc64 BE": "@esbuild/aix-ppc64",
      "android arm64 LE": "@esbuild/android-arm64",
      "darwin arm64 LE": "@esbuild/darwin-arm64",
      "darwin x64 LE": "@esbuild/darwin-x64",
      "freebsd arm64 LE": "@esbuild/freebsd-arm64",
      "freebsd x64 LE": "@esbuild/freebsd-x64",
      "linux arm LE": "@esbuild/linux-arm",
      "linux arm64 LE": "@esbuild/linux-arm64",
      "linux ia32 LE": "@esbuild/linux-ia32",
      "linux mips64el LE": "@esbuild/linux-mips64el",
      "linux ppc64 LE": "@esbuild/linux-ppc64",
      "linux riscv64 LE": "@esbuild/linux-riscv64",
      "linux s390x BE": "@esbuild/linux-s390x",
      "linux x64 LE": "@esbuild/linux-x64",
      "linux loong64 LE": "@esbuild/linux-loong64",
      "netbsd arm64 LE": "@esbuild/netbsd-arm64",
      "netbsd x64 LE": "@esbuild/netbsd-x64",
      "openbsd arm64 LE": "@esbuild/openbsd-arm64",
      "openbsd x64 LE": "@esbuild/openbsd-x64",
      "sunos x64 LE": "@esbuild/sunos-x64"
    };
    var knownWebAssemblyFallbackPackages = {
      "android arm LE": "@esbuild/android-arm",
      "android x64 LE": "@esbuild/android-x64",
      "openharmony arm64 LE": "@esbuild/openharmony-arm64"
    };
    function pkgAndSubpathForCurrentPlatform() {
      let pkg;
      let subpath;
      let isWASM = false;
      let platformKey = `${process.platform} ${os4.arch()} ${os4.endianness()}`;
      if (platformKey in knownWindowsPackages) {
        pkg = knownWindowsPackages[platformKey];
        subpath = "esbuild.exe";
      } else if (platformKey in knownUnixlikePackages) {
        pkg = knownUnixlikePackages[platformKey];
        subpath = "bin/esbuild";
      } else if (platformKey in knownWebAssemblyFallbackPackages) {
        pkg = knownWebAssemblyFallbackPackages[platformKey];
        subpath = "bin/esbuild";
        isWASM = true;
      } else {
        throw new Error(`Unsupported platform: ${platformKey}`);
      }
      return { pkg, subpath, isWASM };
    }
    function pkgForSomeOtherPlatform() {
      const libMainJS = __require.resolve("esbuild");
      const nodeModulesDirectory = path9.dirname(path9.dirname(path9.dirname(libMainJS)));
      if (path9.basename(nodeModulesDirectory) === "node_modules") {
        for (const unixKey in knownUnixlikePackages) {
          try {
            const pkg = knownUnixlikePackages[unixKey];
            if (fs9.existsSync(path9.join(nodeModulesDirectory, pkg))) return pkg;
          } catch {
          }
        }
        for (const windowsKey in knownWindowsPackages) {
          try {
            const pkg = knownWindowsPackages[windowsKey];
            if (fs9.existsSync(path9.join(nodeModulesDirectory, pkg))) return pkg;
          } catch {
          }
        }
      }
      return null;
    }
    function downloadedBinPath(pkg, subpath) {
      const esbuildLibDir = path9.dirname(__require.resolve("esbuild"));
      return path9.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path9.basename(subpath)}`);
    }
    function generateBinPath() {
      if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
        if (!fs9.existsSync(ESBUILD_BINARY_PATH)) {
          console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
        } else {
          return { binPath: ESBUILD_BINARY_PATH, isWASM: false };
        }
      }
      const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
      let binPath;
      try {
        binPath = __require.resolve(`${pkg}/${subpath}`);
      } catch (e) {
        binPath = downloadedBinPath(pkg, subpath);
        if (!fs9.existsSync(binPath)) {
          try {
            __require.resolve(pkg);
          } catch {
            const otherPkg = pkgForSomeOtherPlatform();
            if (otherPkg) {
              let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
              if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) {
                suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
              }
              throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
            }
            throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
          }
          throw e;
        }
      }
      if (/\.zip\//.test(binPath)) {
        let pnpapi;
        try {
          pnpapi = __require("pnpapi");
        } catch (e) {
        }
        if (pnpapi) {
          const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
          const binTargetPath = path9.join(
            root,
            "node_modules",
            ".cache",
            "esbuild",
            `pnpapi-${pkg.replace("/", "-")}-${"0.28.1"}-${path9.basename(subpath)}`
          );
          if (!fs9.existsSync(binTargetPath)) {
            fs9.mkdirSync(path9.dirname(binTargetPath), { recursive: true });
            fs9.copyFileSync(binPath, binTargetPath);
            fs9.chmodSync(binTargetPath, 493);
          }
          return { binPath: binTargetPath, isWASM };
        }
      }
      return { binPath, isWASM };
    }
    var child_process = __require("child_process");
    var crypto = __require("crypto");
    var path22 = __require("path");
    var fs22 = __require("fs");
    var os22 = __require("os");
    var tty = __require("tty");
    var worker_threads;
    if (process.env.ESBUILD_WORKER_THREADS !== "0") {
      try {
        worker_threads = __require("worker_threads");
      } catch {
      }
      let [major, minor] = process.versions.node.split(".");
      if (
        // <v12.17.0 does not work
        +major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13
      ) {
        worker_threads = void 0;
      }
    }
    var _a;
    var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.28.1";
    var esbuildCommandAndArgs = () => {
      if ((!ESBUILD_BINARY_PATH || false) && (path22.basename(__filename) !== "main.js" || path22.basename(__dirname) !== "lib")) {
        throw new Error(
          `The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${__filename}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`
        );
      }
      if (false) {
        return ["node", [path22.join(__dirname, "..", "bin", "esbuild")]];
      } else {
        const { binPath, isWASM } = generateBinPath();
        if (isWASM) {
          return ["node", [binPath]];
        } else {
          return [binPath, []];
        }
      }
    };
    var isTTY = () => tty.isatty(2);
    var fsSync = {
      readFile(tempFile, callback) {
        try {
          let contents = fs22.readFileSync(tempFile, "utf8");
          try {
            fs22.unlinkSync(tempFile);
          } catch {
          }
          callback(null, contents);
        } catch (err) {
          callback(err, null);
        }
      },
      writeFile(contents, callback) {
        try {
          let tempFile = randomFileName();
          fs22.writeFileSync(tempFile, contents);
          callback(tempFile);
        } catch {
          callback(null);
        }
      }
    };
    var fsAsync = {
      readFile(tempFile, callback) {
        try {
          fs22.readFile(tempFile, "utf8", (err, contents) => {
            try {
              fs22.unlink(tempFile, () => callback(err, contents));
            } catch {
              callback(err, contents);
            }
          });
        } catch (err) {
          callback(err, null);
        }
      },
      writeFile(contents, callback) {
        try {
          let tempFile = randomFileName();
          fs22.writeFile(tempFile, contents, (err) => err !== null ? callback(null) : callback(tempFile));
        } catch {
          callback(null);
        }
      }
    };
    var version = "0.28.1";
    var build = (options) => ensureServiceIsRunning().build(options);
    var context = (buildOptions) => ensureServiceIsRunning().context(buildOptions);
    var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
    var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
    var analyzeMetafile = (messages, options) => ensureServiceIsRunning().analyzeMetafile(messages, options);
    var buildSync = (options) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.buildSync(options);
      }
      let result;
      runServiceSync((service) => service.buildOrContext({
        callName: "buildSync",
        refs: null,
        options,
        isTTY: isTTY(),
        defaultWD,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var transformSync = (input, options) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.transformSync(input, options);
      }
      let result;
      runServiceSync((service) => service.transform({
        callName: "transformSync",
        refs: null,
        input,
        options: options || {},
        isTTY: isTTY(),
        fs: fsSync,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var formatMessagesSync = (messages, options) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.formatMessagesSync(messages, options);
      }
      let result;
      runServiceSync((service) => service.formatMessages({
        callName: "formatMessagesSync",
        refs: null,
        messages,
        options,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var analyzeMetafileSync = (metafile, options) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.analyzeMetafileSync(metafile, options);
      }
      let result;
      runServiceSync((service) => service.analyzeMetafile({
        callName: "analyzeMetafileSync",
        refs: null,
        metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
        options,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var stop = () => {
      if (stopService) stopService();
      if (workerThreadService) workerThreadService.stop();
      return Promise.resolve();
    };
    var initializeWasCalled = false;
    var initialize = (options) => {
      options = validateInitializeOptions(options || {});
      if (options.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
      if (options.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
      if (options.worker) throw new Error(`The "worker" option only works in the browser`);
      if (initializeWasCalled) throw new Error('Cannot call "initialize" more than once');
      ensureServiceIsRunning();
      initializeWasCalled = true;
      return Promise.resolve();
    };
    var defaultWD = process.cwd();
    var longLivedService;
    var stopService;
    var ensureServiceIsRunning = () => {
      if (longLivedService) return longLivedService;
      let [command, args] = esbuildCommandAndArgs();
      let child = child_process.spawn(command, args.concat(`--service=${"0.28.1"}`, "--ping"), {
        windowsHide: true,
        stdio: ["pipe", "pipe", "inherit"],
        cwd: defaultWD
      });
      let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin(bytes) {
          child.stdin.write(bytes, (err) => {
            if (err) afterClose(err);
          });
        },
        readFileSync: fs22.readFileSync,
        isSync: false,
        hasFS: true,
        esbuild: node_exports
      });
      child.stdin.on("error", afterClose);
      child.on("error", afterClose);
      const stdin = child.stdin;
      const stdout = child.stdout;
      stdout.on("data", readFromStdout);
      stdout.on("end", afterClose);
      stopService = () => {
        stdin.destroy();
        stdout.destroy();
        child.kill();
        initializeWasCalled = false;
        longLivedService = void 0;
        stopService = void 0;
      };
      let refCount = 0;
      child.unref();
      if (stdin.unref) {
        stdin.unref();
      }
      if (stdout.unref) {
        stdout.unref();
      }
      const refs = {
        ref() {
          if (++refCount === 1) child.ref();
        },
        unref() {
          if (--refCount === 0) child.unref();
        }
      };
      longLivedService = {
        build: (options) => new Promise((resolve, reject) => {
          service.buildOrContext({
            callName: "build",
            refs,
            options,
            isTTY: isTTY(),
            defaultWD,
            callback: (err, res) => err ? reject(err) : resolve(res)
          });
        }),
        context: (options) => new Promise((resolve, reject) => service.buildOrContext({
          callName: "context",
          refs,
          options,
          isTTY: isTTY(),
          defaultWD,
          callback: (err, res) => err ? reject(err) : resolve(res)
        })),
        transform: (input, options) => new Promise((resolve, reject) => service.transform({
          callName: "transform",
          refs,
          input,
          options: options || {},
          isTTY: isTTY(),
          fs: fsAsync,
          callback: (err, res) => err ? reject(err) : resolve(res)
        })),
        formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
          callName: "formatMessages",
          refs,
          messages,
          options,
          callback: (err, res) => err ? reject(err) : resolve(res)
        })),
        analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
          callName: "analyzeMetafile",
          refs,
          metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
          options,
          callback: (err, res) => err ? reject(err) : resolve(res)
        }))
      };
      return longLivedService;
    };
    var runServiceSync = (callback) => {
      let [command, args] = esbuildCommandAndArgs();
      let stdin = new Uint8Array();
      let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin(bytes) {
          if (stdin.length !== 0) throw new Error("Must run at most one command");
          stdin = bytes;
        },
        isSync: true,
        hasFS: true,
        esbuild: node_exports
      });
      callback(service);
      let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.28.1"}`), {
        cwd: defaultWD,
        windowsHide: true,
        input: stdin,
        // We don't know how large the output could be. If it's too large, the
        // command will fail with ENOBUFS. Reserve 16mb for now since that feels
        // like it should be enough. Also allow overriding this with an environment
        // variable.
        maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
      });
      readFromStdout(stdout);
      afterClose(null);
    };
    var randomFileName = () => {
      return path22.join(os22.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
    };
    var workerThreadService = null;
    var startWorkerThreadService = (worker_threads2) => {
      let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
      let worker = new worker_threads2.Worker(__filename, {
        workerData: { workerPort, defaultWD, esbuildVersion: "0.28.1" },
        transferList: [workerPort],
        // From node's documentation: https://nodejs.org/api/worker_threads.html
        //
        //   Take care when launching worker threads from preload scripts (scripts loaded
        //   and run using the `-r` command line flag). Unless the `execArgv` option is
        //   explicitly set, new Worker threads automatically inherit the command line flags
        //   from the running process and will preload the same preload scripts as the main
        //   thread. If the preload script unconditionally launches a worker thread, every
        //   thread spawned will spawn another until the application crashes.
        //
        execArgv: []
      });
      let nextID = 0;
      let fakeBuildError = (text) => {
        let error = new Error(`Build failed with 1 error:
error: ${text}`);
        let errors = [{ id: "", pluginName: "", text, location: null, notes: [], detail: void 0 }];
        error.errors = errors;
        error.warnings = [];
        return error;
      };
      let validateBuildSyncOptions = (options) => {
        if (!options) return;
        let plugins = options.plugins;
        if (plugins && plugins.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
      };
      let applyProperties = (object, properties) => {
        for (let key in properties) {
          object[key] = properties[key];
        }
      };
      let runCallSync = (command, args) => {
        let id = nextID++;
        let sharedBuffer = new SharedArrayBuffer(8);
        let sharedBufferView = new Int32Array(sharedBuffer);
        let msg = { sharedBuffer, id, command, args };
        worker.postMessage(msg);
        let status = Atomics.wait(sharedBufferView, 0, 0);
        if (status !== "ok" && status !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status);
        let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
        if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
        if (reject) {
          applyProperties(reject, properties);
          throw reject;
        }
        return resolve;
      };
      worker.unref();
      return {
        buildSync(options) {
          validateBuildSyncOptions(options);
          return runCallSync("build", [options]);
        },
        transformSync(input, options) {
          return runCallSync("transform", [input, options]);
        },
        formatMessagesSync(messages, options) {
          return runCallSync("formatMessages", [messages, options]);
        },
        analyzeMetafileSync(metafile, options) {
          return runCallSync("analyzeMetafile", [metafile, options]);
        },
        stop() {
          worker.terminate();
          workerThreadService = null;
        }
      };
    };
    var startSyncServiceWorker = () => {
      let workerPort = worker_threads.workerData.workerPort;
      let parentPort = worker_threads.parentPort;
      let extractProperties = (object) => {
        let properties = {};
        if (object && typeof object === "object") {
          for (let key in object) {
            properties[key] = object[key];
          }
        }
        return properties;
      };
      try {
        let service = ensureServiceIsRunning();
        defaultWD = worker_threads.workerData.defaultWD;
        parentPort.on("message", (msg) => {
          (async () => {
            let { sharedBuffer, id, command, args } = msg;
            let sharedBufferView = new Int32Array(sharedBuffer);
            try {
              switch (command) {
                case "build":
                  workerPort.postMessage({ id, resolve: await service.build(args[0]) });
                  break;
                case "transform":
                  workerPort.postMessage({ id, resolve: await service.transform(args[0], args[1]) });
                  break;
                case "formatMessages":
                  workerPort.postMessage({ id, resolve: await service.formatMessages(args[0], args[1]) });
                  break;
                case "analyzeMetafile":
                  workerPort.postMessage({ id, resolve: await service.analyzeMetafile(args[0], args[1]) });
                  break;
                default:
                  throw new Error(`Invalid command: ${command}`);
              }
            } catch (reject) {
              workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
            }
            Atomics.add(sharedBufferView, 0, 1);
            Atomics.notify(sharedBufferView, 0, Infinity);
          })();
        });
      } catch (reject) {
        parentPort.on("message", (msg) => {
          let { sharedBuffer, id } = msg;
          let sharedBufferView = new Int32Array(sharedBuffer);
          workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
          Atomics.add(sharedBufferView, 0, 1);
          Atomics.notify(sharedBufferView, 0, Infinity);
        });
      }
    };
    if (isInternalWorkerThread) {
      startSyncServiceWorker();
    }
    var node_default = node_exports;
  }
});

// src/analitica/cli.ts
var import_config = __toESM(require_config(), 1);
import fs8 from "node:fs";
import os3 from "node:os";
import path8 from "node:path";
import { execFileSync as execFileSync2 } from "node:child_process";

// src/analitica/registro.ts
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
var DATOS = process.env.CONTRATITULAR_DATOS || path.join(os.homedir(), "Contratitular");
var idDe = (e) => e.id ?? path.basename(e.carpeta);
var archivo = (datos) => path.join(datos, "registro.json");
function leerRegistro(datos) {
  try {
    return JSON.parse(fs.readFileSync(archivo(datos), "utf8"));
  } catch {
    return [];
  }
}
function registrarAntiguo(datos, dir, duracion, extra = {}) {
  const g = JSON.parse(fs.readFileSync(path.join(dir, "guion.json"), "utf8").replace(/^﻿/, ""));
  const frases = g.bloques.map((b) => b.frase.trim());
  const pesos = frases.map((f) => f.split(/\s+/).length);
  const total = pesos.reduce((a, b) => a + b, 0), util = duracion - 1.6;
  let acum = 0;
  const escenas = frases.map((frase, i2) => {
    const inicio = acum / total * util;
    acum += pesos[i2];
    return { n: i2 + 1, inicio: +inicio.toFixed(2), fin: +(i2 === frases.length - 1 ? duracion : acum / total * util).toFixed(2), frase, tipo: g.bloques[i2].grafico?.tipo ?? "dibujo" };
  });
  const e = {
    carpeta: dir,
    id: path.basename(dir),
    titulo: g.titulo,
    fecha: fs.statSync(path.join(dir, "video.mp4")).mtime.toISOString().slice(0, 10),
    duracion: +duracion.toFixed(1),
    estilo: g.estilo,
    serie: g.serie,
    gancho: frases[0],
    palabras: frases.join(" ").split(/\s+/).length,
    escenas,
    datos: g.bloques.flatMap((b) => b.grafico ? [b.grafico.tipo] : []),
    metricas: [],
    texto: `${g.titulo} ${g.texto_post ?? ""} ${frases.join(" ")}`,
    familia: extra.familia ?? g.sonido,
    voz: extra.voz ?? g.voz
  };
  const r = leerRegistro(datos);
  const i = r.findIndex((x) => idDe(x) === idDe(e));
  if (i >= 0) r[i] = { ...e, metricas: r[i].metricas };
  else r.push(e);
  fs.mkdirSync(datos, { recursive: true });
  fs.writeFileSync(archivo(datos), JSON.stringify(r, null, 1), "utf8");
}

// src/analitica/redes.ts
import fs2 from "node:fs";
import path2 from "node:path";
var API = "https://api.upload-post.com/api";
var dirRedes = (datos) => path2.join(datos, "redes");
var archivoPub = (datos) => path2.join(dirRedes(datos), "publicaciones.json");
var fechaISO = (v) => {
  const n = Number(v);
  if (v !== null && v !== "" && isFinite(n)) return new Date(n < 1e12 ? n * 1e3 : n).toISOString();
  const d = Date.parse(String(v));
  return isNaN(d) ? (/* @__PURE__ */ new Date()).toISOString() : new Date(d).toISOString();
};
function leerPublicaciones(datos) {
  try {
    const a = JSON.parse(fs2.readFileSync(archivoPub(datos), "utf8"));
    for (const p of Object.values(a)) {
      p.publicado = fechaISO(p.publicado);
      if (p.video === void 0) p.video = p.carpeta ? path2.basename(p.carpeta) : null;
      delete p.carpeta;
    }
    return a;
  } catch {
    return {};
  }
}
function guardarPublicaciones(datos, a) {
  fs2.mkdirSync(dirRedes(datos), { recursive: true });
  fs2.writeFileSync(archivoPub(datos), JSON.stringify(a, null, 1), "utf8");
}
function credenciales() {
  const clave = process.env.UPLOADPOST_API_KEY?.trim(), usuario = process.env.UPLOADPOST_USER?.trim();
  if (!clave || !usuario) throw new Error("Faltan UPLOADPOST_API_KEY y UPLOADPOST_USER en ~/Contratitular/config.env (ver referencia/redes.md).");
  return { clave, usuario };
}
var espera = (ms) => new Promise((r) => setTimeout(r, ms));
async function pedir(ruta, clave) {
  for (let intento = 0; intento < 3; intento++) {
    const r = await fetch(API + ruta, { headers: { Authorization: `Apikey ${clave}` } });
    if (r.status === 429) {
      await espera(Math.min(60, Number(r.headers.get("retry-after") ?? 30)) * 1e3);
      continue;
    }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(`Upload-Post ${r.status}: ${JSON.stringify(j).slice(0, 160)}`);
    return j;
  }
  throw new Error("Upload-Post: demasiadas peticiones; prueba m\xE1s tarde.");
}
var norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ñ ]/g, " ");
var fichas = (s) => new Set(norm(s).split(/\s+/).filter((w) => w.length > 3));
function textoDeVideo(e) {
  let extra = "";
  try {
    const g = JSON.parse(fs2.readFileSync(path2.join(e.carpeta, "guion.json"), "utf8"));
    extra = `${g.texto_post ?? ""} ${(g.bloques ?? []).map((b) => b.frase).join(" ")}`;
  } catch {
  }
  return `${e.titulo} ${e.gancho} ${e.texto ?? ""} ${extra}`;
}
function emparejarTodo(almacen, registro) {
  if (!registro.length) return;
  const textos = new Map(registro.map((e) => [e, fichas(textoDeVideo(e))]));
  const df = /* @__PURE__ */ new Map();
  for (const s of textos.values()) for (const w of s) df.set(w, (df.get(w) ?? 0) + 1);
  const util = (w) => registro.length < 4 || (df.get(w) ?? 0) / registro.length <= 0.5;
  const pubs = Object.values(almacen);
  for (const red of new Set(pubs.map((p) => p.red))) {
    const deRed = pubs.filter((p) => p.red === red);
    const usados = new Set(deRed.filter((p) => p.manual && p.video).map((p) => p.video));
    const libres = deRed.filter((p) => !p.manual);
    const pares = [];
    for (const p of libres) {
      const a = [...fichas(p.texto)].filter(util);
      if (a.length < 2) continue;
      for (const e of registro) {
        if (usados.has(idDe(e)) || Date.parse(p.publicado) < Date.parse(e.fecha) - 3 * 864e5) continue;
        const b = new Set([...textos.get(e)].filter(util));
        const s = a.filter((w) => b.has(w)).length / Math.min(a.length, b.size || 1);
        if (s >= 0.3) pares.push({ p, e, s });
      }
    }
    pares.sort((x, y) => y.s - x.s);
    const hecha = /* @__PURE__ */ new Set();
    for (const { p, e } of pares) {
      if (hecha.has(p) || usados.has(idDe(e))) continue;
      hecha.add(p);
      usados.add(idDe(e));
      Object.assign(p, { video: idDe(e), titulo: e.titulo });
    }
    for (const p of libres) if (!hecha.has(p)) Object.assign(p, { video: null, titulo: null });
  }
  for (const p of pubs) {
    if (p.video) continue;
    const t = Date.parse(p.publicado);
    const ids = new Set(pubs.filter((q) => q.red !== p.red && q.video && Math.abs(Date.parse(q.publicado) - t) < 10 * 6e4).map((q) => q.video));
    const [id] = ids;
    if (ids.size !== 1 || pubs.some((q) => q.red === p.red && q.video === id)) continue;
    const e = registro.find((x) => idDe(x) === id);
    if (e) Object.assign(p, { video: id, titulo: e.titulo });
  }
}
function vincular(datos, red, id, carpeta) {
  const a = leerPublicaciones(datos);
  const p = a[`${red}:${id}`];
  if (!p) throw new Error(`No conozco ${red}:${id}. Ejecuta antes \xABrecoger\xBB.`);
  const e = leerRegistro(datos).find((x) => idDe(x) === path2.basename(path2.resolve(carpeta)));
  if (!e) throw new Error(`Ese v\xEDdeo no est\xE1 en el registro: ${carpeta} (usa \xABregistrar\xBB si es anterior al registro).`);
  Object.assign(p, { video: idDe(e), titulo: e.titulo, manual: true });
  guardarPublicaciones(datos, a);
}
async function recoger(datos, op = {}) {
  const { clave, usuario } = credenciales();
  const redes = (op.redes ?? process.env.UPLOADPOST_REDES ?? "instagram,tiktok,youtube,facebook").split(",").map((r) => r.trim()).filter(Boolean);
  const dias = op.dias ?? 60;
  const almacen = leerPublicaciones(datos);
  const registro = leerRegistro(datos);
  const ahora = Date.now();
  let nuevas = 0, fotos = 0, errores = 0;
  for (const red of redes) {
    let lista = [];
    try {
      lista = (await pedir(`/uploadposts/media?platform=${red}&user=${encodeURIComponent(usuario)}&limit=${red === "tiktok" ? 20 : 50}`, clave)).media ?? [];
    } catch (e) {
      console.log(`\u26A0 ${red}: ${e.message}`);
      continue;
    }
    for (const m of lista) {
      if (m.media_type && !/video|reel/i.test(String(m.media_type))) continue;
      const k = `${red}:${m.id}`;
      if (!almacen[k]) {
        almacen[k] = { red, id: String(m.id), url: m.permalink ?? null, texto: `${m.title ?? ""} ${m.caption ?? ""}`.trim(), publicado: fechaISO(m.timestamp ?? m.create_time), video: null, titulo: null, fotos: [] };
        nuevas++;
      }
    }
    emparejarTodo(almacen, registro);
    const cada = (p) => {
      const h = (ahora - Date.parse(p.publicado)) / 36e5;
      return op.minHoras ?? (h < 72 ? 0.9 : h < 14 * 24 ? 5.5 : 23);
    };
    const pendientes = Object.values(almacen).filter((p) => p.red === red && ahora - Date.parse(p.publicado) < dias * 864e5 && (op.todo || !p.fotos.length || ahora - Date.parse(p.fotos.at(-1).t) > cada(p) * 36e5));
    for (const p of pendientes) {
      try {
        const j = await pedir(`/uploadposts/post-analytics?platform_post_id=${encodeURIComponent(p.id)}&platform=${red}&user=${encodeURIComponent(usuario)}`, clave);
        const r = j.platforms?.[red];
        if (r?.post_metrics) {
          p.fotos.push({ t: (/* @__PURE__ */ new Date()).toISOString(), horas: +((Date.now() - Date.parse(p.publicado)) / 36e5).toFixed(1), m: r.post_metrics });
          fotos++;
        } else if (r?.post_metrics_error) {
          errores++;
          console.log(`\u26A0 ${red} ${p.id}: ${r.post_metrics_error}`);
        } else console.log(`\u2139 ${red} ${p.id}: la red a\xFAn no da cifras (se reintenta en la pr\xF3xima recogida).`);
      } catch (e) {
        errores++;
        console.log(`\u26A0 ${red} ${p.id}: ${e.message}`);
      }
      await espera(3100);
    }
  }
  emparejarTodo(almacen, registro);
  guardarPublicaciones(datos, almacen);
  try {
    const cuentas = path2.join(dirRedes(datos), "cuentas.json");
    const hist = fs2.existsSync(cuentas) ? JSON.parse(fs2.readFileSync(cuentas, "utf8")) : [];
    if (!hist.length || ahora - Date.parse(hist.at(-1).t) > 20 * 36e5) {
      hist.push({ t: (/* @__PURE__ */ new Date()).toISOString(), datos: await pedir(`/analytics/${encodeURIComponent(usuario)}?platforms=${redes.join(",")}${process.env.UPLOADPOST_FACEBOOK_PAGE_ID ? `&page_id=${encodeURIComponent(process.env.UPLOADPOST_FACEBOOK_PAGE_ID)}` : ""}`, clave) });
      fs2.writeFileSync(cuentas, JSON.stringify(hist, null, 1), "utf8");
    }
  } catch (e) {
    console.log(`\u26A0 cuenta: ${e.message}`);
  }
  const sinVideo = Object.values(almacen).filter((p) => !p.video).length;
  return { publicaciones: Object.keys(almacen).length, nuevas, fotos, errores, sinVideo };
}
var num = (v) => typeof v === "number" && isFinite(v) ? v : typeof v === "string" && v.trim() && isFinite(Number(v)) ? Number(v) : void 0;
var mediana = (xs) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const k = Math.floor(s.length / 2);
  return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2;
};
var vistasDe = (m) => num(m.views) ?? num(m.plays) ?? num(m.impressions) ?? num(m.reach) ?? 0;
function vistasA(p, h) {
  const f = p.fotos.filter((x) => vistasDe(x.m) > 0 || x.horas > 0);
  if (!f.length) return void 0;
  if (f.at(-1).horas < h) return void 0;
  const ant = [...f].reverse().find((x) => x.horas <= h), sig = f.find((x) => x.horas >= h);
  if (!ant) return vistasDe(sig.m) * h / Math.max(h, sig.horas);
  if (sig.horas === ant.horas) return vistasDe(ant.m);
  return vistasDe(ant.m) + (vistasDe(sig.m) - vistasDe(ant.m)) * (h - ant.horas) / (sig.horas - ant.horas);
}
function filas(datos) {
  const registro = leerRegistro(datos);
  const pubs = Object.values(leerPublicaciones(datos)).filter((p) => p.fotos.length);
  const res = [];
  const porRed = /* @__PURE__ */ new Map();
  for (const p of pubs) porRed.set(p.red, [...porRed.get(p.red) ?? [], p]);
  for (const [, lista] of porRed) {
    lista.sort((a, b) => Date.parse(a.publicado) - Date.parse(b.publicado));
    const edad = (p) => p.fotos.at(-1).horas;
    const ref = (p) => vistasA(p, 72) ?? vistasDe(p.fotos.at(-1).m);
    const ratioDe = (p, i) => {
      if (edad(p) < 3) return NaN;
      const h = edad(p) >= 72 ? 72 : edad(p) >= 24 ? 24 : edad(p);
      const a = (q) => vistasA(q, h);
      const previas = lista.slice(Math.max(0, i - 10), i).map(a).filter((v) => v !== void 0 && v > 0);
      const base = previas.length >= 3 ? mediana(previas) : mediana(lista.map(a).filter((v) => v !== void 0 && v > 0)) || 1;
      return (a(p) ?? ref(p)) / (base || 1);
    };
    for (const [i, p] of lista.entries()) {
      const m = p.fotos.at(-1).m;
      const e = p.video ? registro.find((x) => idDe(x) === p.video) ?? null : null;
      const vistas = vistasDe(m);
      const likes = num(m.likes) || num(m.reactions) || 0, coms = num(m.comments) ?? 0, comp = num(m.shares) ?? 0, guard = num(m.saves) ?? num(m.favorites) ?? 0;
      const dur = e?.duracion;
      const visionado = (num(m.average_view_percentage) || void 0) ?? (dur && num(m.ig_reels_avg_watch_time) ? num(m.ig_reels_avg_watch_time) / 1e3 / dur * 100 : void 0) ?? (dur && num(m.average_time_watched) ? num(m.average_time_watched) / dur * 100 : void 0);
      const fyp = Array.isArray(m.impression_sources) ? m.impression_sources.find((s) => /for ?you/i.test(s.impression_source))?.percentage : void 0;
      res.push({
        p,
        e,
        vistas,
        v24: vistasA(p, 24),
        v72: vistasA(p, 72),
        ratio: ratioDe(p, i),
        interaccion: vistas ? (likes + coms + comp + guard) / vistas * 100 : 0,
        compartir: vistas ? comp / vistas * 100 : 0,
        guardar: vistas ? guard / vistas * 100 : 0,
        visionado,
        completado: num(m.full_video_watched_rate) !== void 0 ? num(m.full_video_watched_rate) * 100 : void 0,
        seguidores: num(m.new_followers),
        paraTi: fyp !== void 0 ? fyp * 100 : void 0
      });
    }
  }
  return res;
}
var etiqueta = (r) => r >= 3 ? "\u{1F525} viral" : r >= 1.5 ? "\u2B06 bueno" : r >= 0.6 ? "\xB7 normal" : "\u2B07 flojo";
function rasgos(f) {
  const e = f.e, d = new Date(f.p.publicado);
  const hora = Number(d.toLocaleString("es-ES", { hour: "2-digit", hour12: false, timeZone: "Europe/Madrid" }));
  const r = {
    "d\xEDa": d.toLocaleDateString("es-ES", { weekday: "long", timeZone: "Europe/Madrid" }),
    franja: hora < 12 ? "ma\xF1ana" : hora < 16 ? "mediod\xEDa" : hora < 20 ? "tarde" : "noche"
  };
  if (!e) return r;
  r.estilo = e.estilo;
  r.serie = e.serie;
  r["duraci\xF3n"] = e.duracion < 33 ? "<33 s" : e.duracion < 43 ? "33-43 s" : ">43 s";
  r.gancho = /\?/.test(e.gancho) ? "pregunta" : /\d/.test(e.gancho) ? "con cifra" : "afirmaci\xF3n";
  r["gancho largo"] = e.gancho.split(/\s+/).length <= 12 ? "corto (\u226412)" : "largo (>12)";
  r["escenas de datos"] = e.datos.length ? "s\xED" : "no";
  const h = e.huella;
  if (h) {
    r.ritmo = h.medido.palabras_s < 2.4 ? "pausado (<2,4 pal/s)" : h.medido.palabras_s <= 2.9 ? "medio" : "r\xE1pido (>2,9 pal/s)";
    r.cortes = h.medido.escenas_min < 12 ? "pocos (<12/min)" : h.medido.escenas_min <= 18 ? "medios" : "muchos (>18/min)";
    r["cifra en 5 primeras palabras"] = h.medido.cifra_al_inicio ? "s\xED" : "no";
    for (const [k, v] of Object.entries(h.visto ?? {})) if (k !== "por_que" && v) r[k === "gancho_tipo" ? "tipo de gancho" : k.replace(/_/g, " ")] = v;
  }
  if (e.experimento) r[`exp: ${e.experimento.variable}`] = e.experimento.variante;
  return r;
}
function caidasTikTok(f) {
  const ret = f.p.fotos.at(-1).m.retention;
  if (!f.e || !Array.isArray(ret) || ret.length < 3) return [];
  const c = ret.map((x) => [Number(x.second), x.percentage * 100]).sort((a, b) => a[0] - b[0]);
  const tr = c.slice(1).map((p, i) => ({ s: c[i][0], h: p[0], cae: c[i][1] - p[1], v: (c[i][1] - p[1]) / Math.max(0.5, p[0] - c[i][0]) }));
  return tr.filter((t) => t.cae > 2).sort((a, b) => b.v - a.v).slice(0, 2).map((t) => {
    const esc = f.e.escenas.find((x) => t.s >= x.inicio - 0.01 && t.s < x.fin) ?? f.e.escenas.at(-1);
    return `seg ${t.s}-${t.h}: \u2212${t.cae.toFixed(0)} pts en escena ${esc.n} \xAB${esc.frase.slice(0, 60)}\u2026\xBB`;
  });
}
function diagnostico(datos) {
  const fs_ = filas(datos);
  const L = [`# Diagn\xF3stico de redes \xB7 ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`, ""];
  if (!fs_.length) return { texto: "A\xFAn no hay cifras: ejecuta \xABrecoger\xBB (y espera a que los v\xEDdeos lleven unas horas publicados).", archivo: null };
  const f2 = (v, s = "") => v === void 0 || isNaN(v) ? "\u2014" : `${v.toFixed(v < 10 ? 1 : 0)}${s}`;
  for (const red of [...new Set(fs_.map((f) => f.p.red))]) {
    const xs = fs_.filter((f) => f.p.red === red).sort((a, b) => b.ratio - a.ratio);
    L.push(`## ${red} (${xs.length} v\xEDdeos \xB7 mediana de la cuenta = 1,0\xD7)`, "", "| v\xEDdeo | vistas | 24 h | 72 h | vs. cuenta | interacci\xF3n | comparte | guarda | visionado | completo | seguidores | \xABPara ti\xBB |", "|---|---|---|---|---|---|---|---|---|---|---|---|");
    for (const f of xs) {
      L.push(`| ${(f.e?.titulo ?? f.p.texto).slice(0, 48)}${f.e ? "" : " *(sin vincular)*"} | ${f.vistas} | ${f2(f.v24)} | ${f2(f.v72)} | ${etiqueta(f.ratio)} ${f.ratio.toFixed(1)}\xD7 | ${f2(f.interaccion, " %")} | ${f2(f.compartir, " %")} | ${f2(f.guardar, " %")} | ${f2(f.visionado, " %")} | ${f2(f.completado, " %")} | ${f.seguidores ?? "\u2014"} | ${f2(f.paraTi, " %")} |`);
    }
    for (const f of xs) for (const c of caidasTikTok(f)) L.push(`- \u2198 ${(f.e?.titulo ?? "").slice(0, 40)}: ${c}`);
    L.push("");
  }
  const conVideo = fs_.filter((f) => f.e && isFinite(f.ratio));
  const porVideo = /* @__PURE__ */ new Map();
  const claveSuelta = (f) => `?${norm(f.p.texto).split(/\s+/).filter((w) => w.length > 3).slice(0, 5).join(" ")}`;
  for (const f of fs_.filter((x) => isFinite(x.ratio))) {
    const k = f.e ? idDe(f.e) : claveSuelta(f);
    porVideo.set(k, [...porVideo.get(k) ?? [], f]);
  }
  const indice = (xs) => Math.exp(xs.reduce((a, f) => a + Math.log(Math.max(0.05, f.ratio)), 0) / xs.length);
  L.push("## Qu\xE9 tienen los que m\xE1s funcionan", "", `\xCDndice = cu\xE1ntas veces la mediana de la cuenta, de media en todas las redes (n = n\xBA de publicaciones). Con menos de 5 v\xEDdeos por grupo, es solo una pista.`, "");
  const nombres = [...new Set(conVideo.flatMap((f) => Object.keys(rasgos(f))))];
  for (const n of nombres) {
    const g = /* @__PURE__ */ new Map();
    for (const f of fs_) {
      const v = rasgos(f)[n];
      if (v) g.set(v, [...g.get(v) ?? [], f]);
    }
    if (g.size < 2) continue;
    L.push(`- **${n}**: ${[...g].sort((a, b) => indice(b[1]) - indice(a[1])).map(([k, v]) => `${k} ${indice(v).toFixed(2)}\xD7 (n=${v.length})`).join(" \xB7 ")}`);
  }
  const resumen = [...porVideo.values()].map((xs) => ({ xs, i: indice(xs) })).sort((a, b) => b.i - a.i);
  const linea = ({ xs, i }) => `- ${i.toFixed(2)}\xD7 \xB7 **${xs[0].e?.titulo ?? xs[0].p.texto.slice(0, 60)}** \xB7 gancho: \xAB${xs[0].e?.gancho ?? "\u2014"}\xBB \xB7 ${xs.map((f) => `${f.p.red} ${f.vistas}`).join(", ")}`;
  L.push("", "## Los que m\xE1s y los que menos", "", "**Arriba**", ...resumen.slice(0, 3).map(linea), "", "**Abajo**", ...resumen.slice(-3).reverse().map(linea));
  const sinV = fs_.filter((f) => !f.e).length;
  if (sinV) L.push("", `\u2139 ${sinV} publicaciones sin vincular a su v\xEDdeo: sus rasgos no cuentan. Vinc\xFAlalas con \xABvincular\xBB o reg\xEDstralas con \xABregistrar\xBB.`);
  if (porVideo.size < 8) L.push("", `\u26A0 Solo ${porVideo.size} v\xEDdeos con cifras: trata todo como hip\xF3tesis hasta tener 8-10.`);
  const texto = L.join("\n");
  const dir = path2.join(dirRedes(datos), "diagnosticos");
  fs2.mkdirSync(dir, { recursive: true });
  const archivo3 = path2.join(dir, `${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.md`);
  fs2.writeFileSync(archivo3, texto, "utf8");
  return { texto, archivo: archivo3 };
}

// src/analitica/aprendizaje.ts
import fs4 from "node:fs";
import path4 from "node:path";

// src/analitica/experimentos.ts
import fs3 from "node:fs";
import path3 from "node:path";
var INICIALES = [
  { variable: "gancho_tipo", pregunta: "\xBFQu\xE9 primera frase retiene m\xE1s: cifra chocante, pregunta o contradicci\xF3n?", variantes: [
    { id: "cifra chocante", instruccion: "La PRIMERA frase abre con la cifra o el hecho chocante en sus 3 primeras palabras (p. ej. \xAB25 millones de personas\u2026\xBB). Nada de preguntas al principio." },
    { id: "pregunta", instruccion: "La PRIMERA frase es una pregunta directa al espectador, corta (\u2264 10 palabras), que no sepa responder y cuya respuesta sea el v\xEDdeo." },
    { id: "contradicci\xF3n", instruccion: "La PRIMERA frase niega algo que casi todo el mundo cree (\xABTe ense\xF1aron que X. Es falso.\xBB), en \u2264 12 palabras." }
  ] },
  { variable: "texto_0s", pregunta: "\xBFUn titular grande en pantalla desde el primer fotograma ayuda o estorba?", variantes: [
    { id: "con titular", instruccion: "La primera escena lleva desde el fotograma 0 un titular grande (\u2264 6 palabras) que resume el gancho, adem\xE1s del dibujo." },
    { id: "sin titular", instruccion: "La primera escena NO lleva texto en pantalla (solo los subt\xEDtulos): todo lo cuenta el dibujo en movimiento." }
  ] },
  { variable: "duracion", pregunta: "\xBFRinde m\xE1s un v\xEDdeo corto o uno largo con m\xE1s historia?", variantes: [
    { id: "corto", instruccion: "Duraci\xF3n objetivo 25-32 s: una sola idea, sin desv\xEDos." },
    { id: "largo", instruccion: "Duraci\xF3n objetivo 48-58 s: con desarrollo, giro y al menos dos reenganches." }
  ] },
  { variable: "cierre", pregunta: "\xBFQu\xE9 final hace que se vuelva a ver o se comente m\xE1s?", variantes: [
    { id: "bucle", instruccion: "La \xDALTIMA frase enlaza con la primera, de forma que al repetirse el v\xEDdeo la frase inicial la contin\xFAa (bucle)." },
    { id: "pregunta", instruccion: "La \xDALTIMA frase es una pregunta al espectador para que conteste en los comentarios, relacionada con el dato." }
  ] }
];
var archivo2 = (datos) => path3.join(datos, "redes", "experimentos.json");
function leer(datos) {
  try {
    return JSON.parse(fs3.readFileSync(archivo2(datos), "utf8"));
  } catch {
    return { activo: null, cola: INICIALES.map((x) => ({ ...x })), cerrados: [] };
  }
}
function escribir(datos, e) {
  fs3.mkdirSync(path3.dirname(archivo2(datos)), { recursive: true });
  fs3.writeFileSync(archivo2(datos), JSON.stringify(e, null, 1), "utf8");
}
function asignar(datos) {
  const est = leer(datos);
  if (!est.activo) {
    const sig = est.cola.shift();
    if (!sig) {
      escribir(datos, est);
      return null;
    }
    est.activo = { min_por_variante: 8, max_dias: 35, ...sig, inicio: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), asignados: {} };
  }
  const a = est.activo;
  a.asignados ??= {};
  const min = Math.min(...a.variantes.map((v2) => a.asignados[v2.id] ?? 0));
  const candidatas = a.variantes.filter((v2) => (a.asignados[v2.id] ?? 0) === min);
  const v = candidatas[Math.floor(Math.random() * candidatas.length)];
  a.asignados[v.id] = (a.asignados[v.id] ?? 0) + 1;
  escribir(datos, est);
  return { variable: a.variable, variante: v.id, instruccion: v.instruccion };
}
function permutacion(grupos, iter = 4e3) {
  const media = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const estad = (gs) => {
    const m = gs.map(media);
    return Math.max(...m) - Math.min(...m);
  };
  const obs = estad(grupos), todos = grupos.flat(), tam = grupos.map((g) => g.length);
  let mayores = 0;
  for (let k = 0; k < iter; k++) {
    const s = [...todos].sort(() => Math.random() - 0.5);
    let i = 0;
    const gs = tam.map((t) => s.slice(i, i += t));
    if (estad(gs) >= obs - 1e-12) mayores++;
  }
  return (mayores + 1) / (iter + 1);
}
function evaluar(datos, indicePorVideo) {
  const est = leer(datos);
  const a = est.activo;
  if (!a) return null;
  const grupos = a.variantes.map((v) => [...indicePorVideo.values()].filter((x) => x.variable === a.variable && x.variante === v.id).map((x) => Math.log(Math.max(0.05, x.indice))));
  const minN = Math.min(...grupos.map((g) => g.length));
  const dias = a.inicio ? (Date.now() - Date.parse(a.inicio)) / 864e5 : 0;
  const listo = minN >= (a.min_por_variante ?? 8) || dias > (a.max_dias ?? 35) && minN >= 3;
  if (!listo) return null;
  const resultado = a.variantes.map((v, i) => ({ variante: v.id, n: grupos[i].length, indice: +Math.exp(grupos[i].reduce((s, x) => s + x, 0) / Math.max(1, grupos[i].length)).toFixed(2) })).sort((x, y) => y.indice - x.indice);
  const p = +permutacion(grupos.filter((g) => g.length)).toFixed(3);
  const ventaja = resultado[0].indice / Math.max(0.05, resultado[1]?.indice ?? 1);
  const ganadora = p < 0.1 && ventaja >= 1.25 ? resultado[0].variante : null;
  const conclusion = ganadora ? `\xAB${ganadora}\xBB gana: ${resultado[0].indice.toFixed(2)}\xD7 frente a ${resultado.slice(1).map((r) => `\xAB${r.variante}\xBB ${r.indice.toFixed(2)}\xD7`).join(", ")} (p=${p}).` : `Sin diferencia clara (${resultado.map((r) => `\xAB${r.variante}\xBB ${r.indice.toFixed(2)}\xD7, n=${r.n}`).join("; ")}; p=${p}). Se puede usar cualquiera.`;
  const cerrado = { ...a, fin: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), resultado, ganadora, p, conclusion };
  est.cerrados.push(cerrado);
  est.activo = null;
  escribir(datos, est);
  return cerrado;
}
function proponer(datos, nuevos) {
  const est = leer(datos);
  const usadas = /* @__PURE__ */ new Set([est.activo?.variable, ...est.cola.map((x) => x.variable), ...est.cerrados.map((x) => x.variable)]);
  for (const n of nuevos) if (n.variantes?.length >= 2 && !usadas.has(n.variable)) {
    est.cola.push(n);
    usadas.add(n.variable);
  }
  escribir(datos, est);
}

// src/analitica/aprendizaje.ts
var FAMILIAS = ["pop", "gota", "madera", "marimba", "kalimba", "campanita", "cuerda", "burbuja", "tum"];
var ESTILOS = ["papel", "neon", "pop", "pizarra", "limpio"];
var K = 2;
var MIN_HORAS = 12;
var mediana2 = (xs) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const k = Math.floor(s.length / 2);
  return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2;
};
function retencionPorTramo(xs) {
  const acum = {};
  for (const f of xs) {
    const ret = f.p.fotos.at(-1).m.retention;
    if (!f.e || !Array.isArray(ret) || ret.length < 4) continue;
    const c = ret.map((x) => [Number(x.second), x.percentage * 100]).sort((a, b) => a[0] - b[0]);
    const en = (t) => {
      const a = [...c].reverse().find((p) => p[0] <= t) ?? c[0], b = c.find((p) => p[0] >= t) ?? c.at(-1);
      return b[0] === a[0] ? a[1] : a[1] + (b[1] - a[1]) * (t - a[0]) / (b[0] - a[0]);
    };
    const esc = f.e.escenas, fin1 = esc[0]?.fin ?? 3, iniUlt = esc.at(-1)?.inicio ?? f.e.duracion - 3, dur = Math.min(f.e.duracion, c.at(-1)[0]);
    const tramos = [["0-1,5 s (gancho)", 0, 1.5], ["resto de la 1.\xAA escena", 1.5, fin1], ["escenas centrales", fin1, iniUlt], ["\xFAltima escena", iniUlt, dur]];
    for (const [k, a, b] of tramos) {
      if (b - a < 0.5) continue;
      acum[k] ??= { n: 0, s: 0 };
      acum[k].n++;
      acum[k].s += (en(a) - en(b)) / (b - a);
    }
  }
  return Object.fromEntries(Object.entries(acum).map(([k, v]) => [k, { n: v.n, pierde_s: +(v.s / v.n).toFixed(1) }]));
}
function todosLosRasgos(f) {
  const r = rasgos(f);
  const h = Number(new Date(f.p.publicado).toLocaleString("es-ES", { hour: "2-digit", hour12: false, timeZone: "Europe/Madrid" }));
  r.hora = `${String(h - h % 2).padStart(2, "0")}-${String(h - h % 2 + 2).padStart(2, "0")} h`;
  r.red = f.p.red;
  if (f.e?.familia) r.sonido = f.e.familia;
  if (f.e?.voz) r.voz = f.e.voz.replace(/^es-ES-/, "").replace(/:DragonHDLatestNeural$/, " HD").replace(/Neural$/, "");
  return r;
}
function calcular(datos) {
  const todas = filas(datos);
  const maduras = todas.filter((f) => f.p.fotos.at(-1).horas >= MIN_HORAS);
  const medInter = /* @__PURE__ */ new Map();
  for (const red of new Set(maduras.map((f) => f.p.red))) medInter.set(red, mediana2(maduras.filter((f) => f.p.red === red && f.interaccion > 0).map((f) => f.interaccion)) || 1);
  const lv = (x) => Math.log(Math.max(0.05, x));
  const factores = {};
  const acum = {};
  for (const f of maduras) {
    const ri = f.interaccion / (medInter.get(f.p.red) ?? 1);
    for (const [k, v] of Object.entries(todosLosRasgos(f))) {
      acum[k] ??= {};
      acum[k][v] ??= { n: 0, v: 0, i: 0, ids: /* @__PURE__ */ new Set() };
      acum[k][v].n++;
      acum[k][v].ids.add(f.e ? idDe(f.e) : f.p.texto.slice(0, 40));
      acum[k][v].v += lv(f.ratio);
      acum[k][v].i += lv(ri || 0.05);
    }
  }
  for (const [k, niveles] of Object.entries(acum)) {
    factores[k] = {};
    for (const [v, a] of Object.entries(niveles)) factores[k][v] = { n: a.n, videos: a.ids.size, vistas: +Math.exp(a.v / (a.n + K)).toFixed(2), interaccion: +Math.exp(a.i / (a.n + K)).toFixed(2) };
  }
  const conclusiones = [];
  for (const [k, niveles] of Object.entries(factores)) {
    if (k === "red") continue;
    const ord = Object.entries(niveles).sort((a, b) => b[1].vistas - a[1].vistas);
    if (ord.length < 2) continue;
    const [mejor, seg] = [ord[0], ord[1]];
    const total = ord.reduce((s, [, x]) => s + x.videos, 0);
    const ventaja = mejor[1].vistas / Math.max(0.05, seg[1].vistas);
    const regla = total >= 8 && mejor[1].videos >= 5 && seg[1].videos >= 3 && ventaja >= 1.25;
    const pista = mejor[1].videos >= 3 && seg[1].videos >= 2 && ventaja >= 1.2;
    if (!regla && !pista) continue;
    const resto = ord.slice(1, 3).map(([v, x]) => `${v} ${x.vistas.toFixed(2)}\xD7 (${x.videos} v\xEDdeos)`).join(", ");
    conclusiones.push({
      tipo: regla ? "regla" : "hipotesis",
      factor: k,
      mejor: mejor[0],
      n: total,
      detalle: { mejor: { v: mejor[0], vistas: mejor[1].vistas, interaccion: mejor[1].interaccion, n: mejor[1].n }, resto: ord.slice(1, 3).map(([v, x]) => ({ v, vistas: x.vistas, n: x.n })) },
      texto: `${k}: \xAB${mejor[0]}\xBB consigue ${mejor[1].vistas.toFixed(2)}\xD7 el alcance medio (${mejor[1].videos} v\xEDdeos) e interacci\xF3n ${mejor[1].interaccion.toFixed(2)}\xD7; frente a ${resto}.`
    });
  }
  const pesosDe = (k, todos) => {
    const exp = factores[k] ?? {};
    const raw = Object.fromEntries(todos.map((v) => [v, exp[v] ? Math.sqrt(exp[v].vistas * exp[v].interaccion) : 1]));
    const tot = Object.values(raw).reduce((a, b) => a + b, 0) || 1;
    const explorar = maduras.length < 30 ? 0.35 : 0.2;
    return Object.fromEntries(todos.map((v) => [v, +((1 - explorar) * (raw[v] / tot) + explorar / todos.length).toFixed(3)]));
  };
  const horas = Object.entries(factores.hora ?? {}).filter(([, x]) => x.n >= 3).sort((a, b) => b[1].vistas - a[1].vistas).slice(0, 2).map(([h]) => h);
  const videos = new Set(maduras.map((f) => f.e ? f.e.titulo : f.p.texto.slice(0, 30))).size;
  const porVideo = /* @__PURE__ */ new Map();
  for (const f of maduras) if (f.e) porVideo.set(idDe(f.e), [...porVideo.get(idDe(f.e)) ?? [], f]);
  const videos_indice = [...porVideo].map(([id, xs]) => ({
    id,
    titulo: xs[0].e.titulo,
    indice: +Math.exp(xs.reduce((a, f) => a + lv(f.ratio), 0) / xs.length).toFixed(2),
    variable: xs[0].e.experimento?.variable,
    variante: xs[0].e.experimento?.variante
  })).sort((a, b) => b.indice - a.indice);
  const est = leer(datos);
  const experimentos = {
    activo: est.activo ? { variable: est.activo.variable, pregunta: est.activo.pregunta, asignados: est.activo.asignados ?? {} } : null,
    cerrados: est.cerrados.map(({ variable, pregunta, conclusion, ganadora, fin }) => ({ variable, pregunta, conclusion, ganadora, fin }))
  };
  return {
    actualizado: (/* @__PURE__ */ new Date()).toISOString(),
    publicaciones: maduras.length,
    videos,
    factores,
    conclusiones,
    pesos: { familia: pesosDe("sonido", FAMILIAS), estilo: pesosDe("estilo", ESTILOS) },
    horas_recomendadas: horas,
    retencion: retencionPorTramo(maduras.filter((f) => f.p.red === "tiktok")),
    videos_indice,
    experimentos
  };
}
function guardar(datos, a, skillDir) {
  fs4.mkdirSync(path4.join(datos, "redes"), { recursive: true });
  fs4.writeFileSync(path4.join(datos, "redes", "aprendizaje.json"), JSON.stringify(a, null, 1), "utf8");
  if (!skillDir) return;
  const motor = { actualizado: a.actualizado.slice(0, 10), basado_en: { videos: a.videos, publicaciones: a.publicaciones }, pesos: a.pesos };
  fs4.writeFileSync(path4.join(skillDir, "motor", "aprendizaje.json"), JSON.stringify(motor, null, 1) + "\n", "utf8");
  const md = path4.join(skillDir, "referencia", "aprendizajes.md");
  const ini = "<!-- auto:inicio -->", fin = "<!-- auto:fin -->";
  const bloque = [
    ini,
    `### Medido (actualizado ${a.actualizado.slice(0, 10)} \xB7 ${a.videos} v\xEDdeos, ${a.publicaciones} publicaciones)`,
    "\xCDndice = alcance frente a la media de la cuenta en cada red (1\xD7 = lo normal). \xABRegla\xBB: probada con datos suficientes; \xABhip\xF3tesis\xBB: pista que hay que confirmar.",
    "",
    ...a.conclusiones.length ? a.conclusiones.map((c) => `- **${c.tipo === "regla" ? "Regla" : "Hip\xF3tesis"}** \xB7 ${c.texto}`) : ["- A\xFAn no hay datos suficientes para sacar conclusiones medidas."],
    fin
  ].join("\n");
  let texto = fs4.existsSync(md) ? fs4.readFileSync(md, "utf8") : "";
  texto = texto.includes(ini) && texto.includes(fin) ? texto.replace(new RegExp(`${ini}[\\s\\S]*?${fin}`), bloque) : `${texto.trimEnd()}

${bloque}
`;
  fs4.writeFileSync(md, texto, "utf8");
}

// src/analitica/observatorio.ts
import fs5 from "node:fs";
import path5 from "node:path";

// src/analitica/hora.ts
var K2 = 2;
var mediana3 = (xs) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const k = Math.floor(s.length / 2);
  return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2;
};
var lg = (x) => Math.log(Math.max(0.05, x));
var geo = (xs, k = 0) => xs.length ? +Math.exp(xs.reduce((a, x) => a + lg(x), 0) / (xs.length + k)).toFixed(2) : null;
var madrid = (iso) => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date(iso)).map((x) => [x.type, x.value]));
  return { fecha: `${p.year}-${p.month}-${p.day}`, hm: `${p.hour}:${p.minute}`, h: Number(p.hour) + Number(p.minute) / 60 };
};
var franjaDe = (h) => h < 12 ? "ma\xF1ana" : h < 16 ? "mediod\xEDa" : h < 20 ? "tarde" : "noche";
function indicesA(lista, h) {
  const res = /* @__PURE__ */ new Map();
  const ord = [...lista].sort((a2, b) => Date.parse(a2.publicado) - Date.parse(b.publicado));
  const a = (q) => vistasA(q, h);
  for (const [i, p] of ord.entries()) {
    const v = a(p);
    if (v === void 0) continue;
    const previas = ord.slice(Math.max(0, i - 10), i).map(a).filter((x) => x !== void 0 && x > 0);
    const base = previas.length >= 3 ? mediana3(previas) : mediana3(ord.map(a).filter((x) => x !== void 0 && x > 0));
    if (base > 0) res.set(p, v / base);
  }
  return res;
}
function permutacion2(d) {
  if (d.length < 2) return null;
  const obs = Math.abs(d.reduce((a, b) => a + b, 0));
  let extremos = 0, total = 0;
  const prueba = (signos) => {
    total++;
    if (Math.abs(d.reduce((a, x, i) => a + signos(i) * x, 0)) >= obs - 1e-12) extremos++;
  };
  if (d.length <= 14) for (let m = 0; m < 1 << d.length; m++) prueba((i) => m >> i & 1 ? -1 : 1);
  else for (let k = 0; k < 2e4; k++) prueba(() => Math.random() < 0.5 ? -1 : 1);
  return +(extremos / total).toFixed(3);
}
function analizarHora(datos) {
  const pubs = Object.values(leerPublicaciones(datos)).filter((p2) => p2.fotos.length);
  const redes = [...new Set(pubs.map((p2) => p2.red))];
  const filas2 = [];
  for (const red of redes) {
    const lista2 = pubs.filter((p2) => p2.red === red);
    const i24 = indicesA(lista2, 24), i3 = indicesA(lista2, 3);
    for (const p2 of lista2) {
      const x = i24.get(p2);
      if (x === void 0 || p2.fotos.at(-1).horas < 24) continue;
      const m = madrid(p2.publicado);
      filas2.push({ red, video: p2.video ?? `sin-vincular:${Math.round(Date.parse(p2.publicado) / 9e5)}`, titulo: p2.titulo ?? (p2.texto.split(/[.!?\n]/)[0] || p2.id), fecha: m.fecha, hm: m.hm, h: m.h, franja: franjaDe(m.h), i3: i3.get(p2) ?? null, i24: x });
    }
  }
  const porVideo = /* @__PURE__ */ new Map();
  for (const f of filas2) porVideo.set(f.video, [...porVideo.get(f.video) ?? [], f]);
  const lista = [...porVideo.values()].map((xs) => {
    const hs = xs.map((x) => x.h).sort((a, b) => a - b), h = hs[Math.floor(hs.length / 2)];
    const ref = xs.find((x) => x.h === h);
    const i3s = xs.map((x) => x.i3).filter((v) => v != null);
    return {
      titulo: ref.titulo.length > 38 ? ref.titulo.slice(0, 37).trimEnd() + "\u2026" : ref.titulo,
      fecha: ref.fecha,
      hm: ref.hm,
      h,
      franja: ref.franja,
      indice: geo(xs.map((x) => x.i24)),
      i3: geo(i3s),
      redes: xs.length
    };
  }).sort((a, b) => a.h - b.h);
  const porHora = [...new Set(filas2.map((f) => Math.floor(f.h)))].sort((a, b) => a - b).map((h) => {
    const xs = filas2.filter((f) => Math.floor(f.h) === h);
    return {
      h,
      n: xs.length,
      videos: new Set(xs.map((x) => x.video)).size,
      indice: geo(xs.map((x) => x.i24), K2),
      porRed: Object.fromEntries(redes.map((r) => {
        const ys = xs.filter((x) => x.red === r).map((x) => x.i24);
        return [r, ys.length ? geo(ys) : null];
      }))
    };
  });
  const franjas = ["ma\xF1ana", "mediod\xEDa", "tarde", "noche"].map((fr) => {
    const xs = filas2.filter((f) => f.franja === fr);
    return { franja: fr, n: xs.length, videos: new Set(xs.map((x) => x.video)).size, i3: geo(xs.map((x) => x.i3).filter((v) => v != null), K2), i24: geo(xs.map((x) => x.i24), K2) };
  }).filter((x) => x.n);
  const pares = [];
  for (const fecha of [...new Set(lista.map((v) => v.fecha))].sort()) {
    const m = lista.filter((v) => v.fecha === fecha && v.h < 16), n = lista.filter((v) => v.fecha === fecha && v.h >= 19);
    if (!m.length || !n.length) continue;
    pares.push({ fecha, mediodia: m.map((v) => v.hm).join("/"), noche: n.map((v) => v.hm).join("/"), im: geo(m.map((v) => v.indice)), in: geo(n.map((v) => v.indice)) });
  }
  const d = pares.map((x) => lg(x.im) - lg(x.in));
  const cociente = d.length ? +Math.exp(d.reduce((a, b) => a + b, 0) / d.length).toFixed(2) : null;
  const p = permutacion2(d);
  const veredicto = pares.length < 6 ? "pocos" : p !== null && p < 0.1 && cociente !== null && (cociente >= 1.25 || cociente <= 0.8) ? cociente > 1 ? "mediodia" : "noche" : "igual";
  return {
    publicaciones: filas2.length,
    videos: lista.length,
    lista: lista.map(({ h, ...x }) => x),
    porHora,
    franjas,
    pares,
    resumen: { dias: pares.length, ganaMediodia: d.filter((x) => x > 0).length, cociente, p, veredicto }
  };
}
function textoHora(a) {
  const r = a.resumen;
  return [
    `\xCDndice a las 24 h por franja (n = publicaciones): ${a.franjas.map((f) => `${f.franja} ${f.i24}\xD7 a 24 h, ${f.i3 ?? "\u2014"}\xD7 a 3 h (n=${f.n})`).join("; ")}.`,
    `Por hora: ${a.porHora.map((x) => `${x.h} h ${x.indice}\xD7 (n=${x.n})`).join(", ")}.`,
    `Pares mismo d\xEDa mediod\xEDa vs noche: ${r.dias} d\xEDas, gana mediod\xEDa ${r.ganaMediodia}, cociente medio ${r.cociente ?? "\u2014"}\xD7, p=${r.p ?? "\u2014"} \u2192 ${r.veredicto}.`
  ].join("\n");
}

// src/analitica/entreRedes.ts
var EDAD = 24;
var K3 = 1;
var lg2 = (x) => Math.log(Math.max(0.05, x));
var geo2 = (xs, k = 0) => xs.length ? +Math.exp(xs.reduce((a, x) => a + lg2(x), 0) / (xs.length + k)).toFixed(2) : null;
var corto = (s, n = 40) => s.length > n ? s.slice(0, n - 1).trimEnd() + "\u2026" : s;
function rangos(xs) {
  const o = xs.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  const r = new Array(xs.length);
  for (let i = 0; i < o.length; ) {
    let j = i;
    while (j + 1 < o.length && o[j + 1][0] === o[i][0]) j++;
    for (let k = i; k <= j; k++) r[o[k][1]] = (i + j) / 2 + 1;
    i = j + 1;
  }
  return r;
}
function spearman(a, b) {
  if (a.length < 3) return null;
  const ra = rangos(a), rb = rangos(b), n = a.length, ma = (n + 1) / 2;
  let sab = 0, saa = 0, sbb = 0;
  for (let i = 0; i < n; i++) {
    sab += (ra[i] - ma) * (rb[i] - ma);
    saa += (ra[i] - ma) ** 2;
    sbb += (rb[i] - ma) ** 2;
  }
  return saa && sbb ? +(sab / Math.sqrt(saa * sbb)).toFixed(2) : null;
}
function analizarRedes(datos) {
  const pubs = Object.values(leerPublicaciones(datos)).filter((p) => p.fotos.length);
  const reg = new Map(leerRegistro(datos).map((e) => [idDe(e), e]));
  const redes = [...new Set(pubs.map((p) => p.red))];
  const idx = /* @__PURE__ */ new Map();
  for (const red of redes) for (const [p, x] of indicesA(pubs.filter((q) => q.red === red), EDAD)) if (p.fotos.at(-1).horas >= EDAD) idx.set(p, x);
  const grupos = /* @__PURE__ */ new Map();
  for (const p of idx.keys()) {
    const k = p.video ?? `sin-vincular:${Math.round(Date.parse(p.publicado) / 9e5)}`;
    grupos.set(k, [...grupos.get(k) ?? [], p]);
  }
  const videos = [];
  for (const [video, xs] of grupos) {
    if (xs.length < 2) continue;
    const indices = Object.fromEntries(redes.map((r) => {
      const p = xs.find((q) => q.red === r);
      return [r, p ? +idx.get(p).toFixed(2) : null];
    }));
    const con = Object.entries(indices).filter((x) => x[1] != null).sort((a, b) => b[1] - a[1]);
    const [mejor, mx] = con[0], [peor, mn] = con.at(-1);
    const restoMejor = geo2(con.slice(1).map((x) => x[1]));
    const perfil = con.every((x) => x[1] >= 1.5) ? "todas" : mx >= 1.5 && mx / restoMejor >= 2 && con.slice(1).every((x) => x[1] < 1.5) ? "una" : con.every((x) => x[1] < 0.67) ? "ninguna" : mx / Math.max(0.05, mn) >= 3 ? "desigual" : "parejo";
    const p0 = xs[0], e = p0.video ? reg.get(p0.video) : void 0;
    videos.push({
      video,
      titulo: corto(e?.titulo ?? p0.titulo ?? (p0.texto.split(/[.!?\n]/)[0] || p0.id)),
      fecha: p0.publicado.slice(0, 10),
      indices,
      mejor,
      peor,
      separacion: +(mx / Math.max(0.05, mn)).toFixed(1),
      perfil
    });
  }
  videos.sort((a, b) => b.fecha.localeCompare(a.fecha) || b.separacion - a.separacion);
  const parejas = [];
  for (let i = 0; i < redes.length; i++) for (let j = i + 1; j < redes.length; j++) {
    const a = redes[i], b = redes[j];
    const ok = videos.filter((v) => v.indices[a] != null && v.indices[b] != null);
    parejas.push({ a, b, n: ok.length, rho: spearman(ok.map((v) => lg2(v.indices[a])), ok.map((v) => lg2(v.indices[b]))) });
  }
  const validas = parejas.filter((x) => x.rho != null && x.n >= 3);
  const rhoMedia = validas.length ? +(validas.reduce((s, x) => s + x.rho * x.n, 0) / validas.reduce((s, x) => s + x.n, 0)).toFixed(2) : null;
  const acum = {};
  for (const [p, x] of idx) {
    const e = p.video ? reg.get(p.video) ?? null : null;
    if (!e) continue;
    for (const [k, v] of Object.entries(rasgos({ p, e }))) {
      if (k === "d\xEDa" || k === "franja" || k.startsWith("exp:")) continue;
      const n = ((acum[k] ??= {})[p.red] ??= {})[v] ??= { ls: [], ids: /* @__PURE__ */ new Set() };
      n.ls.push(x);
      n.ids.add(idDe(e));
    }
  }
  const rasgosOut = [];
  for (const [k, porRed] of Object.entries(acum)) {
    const fila = {};
    for (const r of redes) {
      const ord = Object.entries(porRed[r] ?? {}).map(([v, a]) => ({ v, i: geo2(a.ls, K3), n: a.ids.size })).sort((a, b) => b.i - a.i);
      fila[r] = ord.length >= 2 ? { nivel: ord[0].v, indice: ord[0].i, videos: ord[0].n, segundo: ord[1].v, indiceSegundo: ord[1].i } : null;
    }
    const ganadores = Object.values(fila).filter((x) => !!x && x.indice / Math.max(0.05, x.indiceSegundo ?? 1) >= 1.2);
    if (ganadores.length < 2) continue;
    rasgosOut.push({ rasgo: k, porRed: fila, distinto: new Set(ganadores.map((x) => x.nivel)).size > 1 });
  }
  rasgosOut.sort((a, b) => Number(b.distinto) - Number(a.distinto));
  const veredicto = videos.length < 6 || rhoMedia == null ? "pocos" : rhoMedia >= 0.5 ? "video" : rhoMedia <= 0.2 ? "red" : "mixto";
  return {
    edad: EDAD,
    redes,
    videos,
    parejas,
    rasgos: rasgosOut,
    resumen: { videos: videos.length, rhoMedia, soloUna: videos.filter((v) => v.perfil === "una").length, desiguales: videos.filter((v) => v.perfil === "una" || v.perfil === "desigual").length, veredicto }
  };
}
function textoRedes(a) {
  const r = a.resumen;
  return [
    `\xCDndice a las ${a.edad} h en cada red (1\xD7 = lo normal en esa red), ${r.videos} v\xEDdeos con al menos dos redes:`,
    ...a.videos.map((v) => `- ${v.titulo}: ${Object.entries(v.indices).filter(([, x]) => x != null).map(([k, x]) => `${k} ${x}\xD7`).join(", ")} \u2192 ${v.perfil}${v.perfil === "una" ? ` (solo ${v.mejor})` : ""}`),
    `Correlaci\xF3n entre redes (Spearman, n = v\xEDdeos): ${a.parejas.map((p) => `${p.a}-${p.b} ${p.rho ?? "\u2014"} (n=${p.n})`).join("; ")}. Media ${r.rhoMedia ?? "\u2014"} \u2192 ${r.veredicto}.`,
    a.rasgos.length ? `Rasgo que gana en cada red: ${a.rasgos.map((x) => `${x.rasgo}: ${Object.entries(x.porRed).filter(([, y]) => y).map(([k, y]) => `${k} \xAB${y.nivel}\xBB ${y.indice}\xD7`).join(", ")}${x.distinto ? " [CAMBIA SEG\xDAN LA RED]" : ""}`).join(" | ")}` : "A\xFAn no hay rasgos con ganador claro en dos redes."
  ].join("\n");
}

// src/analitica/observatorio.ts
var HORAS = Array.from({ length: 72 }, (_, i) => i + 1);
function vistasHora(p, h) {
  const f = p.fotos;
  const ant = [...f].reverse().find((x) => x.horas <= h), sig = f.find((x) => x.horas >= h);
  if (!ant || !sig || sig.horas - ant.horas > 2.5) return null;
  if (sig.horas === ant.horas) return vistasDe(ant.m);
  return Math.round(vistasDe(ant.m) + (vistasDe(sig.m) - vistasDe(ant.m)) * (h - ant.horas) / (sig.horas - ant.horas));
}
var r1 = (v) => v == null || !isFinite(v) ? null : Math.round(v * 10) / 10;
var corto2 = (s, n = 34) => s.length > n ? s.slice(0, n - 1).trimEnd() + "\u2026" : s;
var titulo = (f) => corto2(f.e?.titulo ?? f.p.texto.split(/[.!?\n]/)[0] ?? f.p.id);
function exportar(datos, webDir) {
  const todas = filas(datos);
  const pubs = Object.values(leerPublicaciones(datos));
  const redes = [...new Set(pubs.map((p) => p.red))];
  const salida = { meta: { actualizado: (/* @__PURE__ */ new Date()).toISOString(), cuenta: process.env.OBS_CUENTA ?? "", redes } };
  let seguidores = {};
  try {
    const hist = JSON.parse(fs5.readFileSync(path5.join(datos, "redes", "cuentas.json"), "utf8"));
    const ult = hist.at(-1)?.datos ?? {};
    seguidores = Object.fromEntries(redes.map((r) => [r, typeof ult[r]?.followers === "number" ? ult[r].followers : null]));
  } catch {
  }
  const primero = Math.min(...pubs.map((p) => Date.parse(p.publicado)));
  const dias = [];
  for (let d = new Date(new Date(primero).toISOString().slice(0, 10)); d.getTime() <= Date.now(); d.setUTCDate(d.getUTCDate() + 1)) dias.push(d.toISOString().slice(0, 10));
  const acumuladas = (red) => dias.map((dia) => {
    const finDia = Date.parse(`${dia}T23:59:59Z`);
    let s = 0;
    for (const p of pubs.filter((x) => x.red === red)) {
      const f = [...p.fotos].reverse().find((x) => Date.parse(x.t) <= finDia);
      if (f) s += vistasDe(f.m);
    }
    return s;
  });
  const porRed = {};
  for (const red of redes) {
    const fs_ = todas.filter((f) => f.p.red === red).sort((a2, b) => Date.parse(b.p.publicado) - Date.parse(a2.p.publicado));
    const media = (xs) => {
      const v = xs.filter((x) => x !== void 0 && isFinite(x));
      return v.length ? v.reduce((a2, b) => a2 + b, 0) / v.length : null;
    };
    const recientes = fs_.slice(0, 8);
    const ret = red === "tiktok" ? recientes.filter((f) => Array.isArray(f.p.fotos.at(-1).m.retention)) : [];
    const maxSeg = Math.min(60, Math.max(0, ...ret.map((f) => f.p.fotos.at(-1).m.retention.length - 1)));
    const fuentes = {};
    if (red === "tiktok") for (const f of fs_) for (const s of f.p.fotos.at(-1).m.impression_sources ?? []) (fuentes[s.impression_source] ??= []).push(s.percentage * 100);
    porRed[red] = {
      kpi: {
        vistas: fs_.reduce((a2, f) => a2 + f.vistas, 0),
        videos: fs_.length,
        seguidores: seguidores[red] ?? null,
        interaccion: r1(media(fs_.map((f) => f.interaccion))),
        compartir: r1(media(fs_.map((f) => f.compartir))),
        guardar: r1(media(fs_.map((f) => f.guardar))),
        visionado: r1(media(fs_.map((f) => f.visionado))),
        completado: r1(media(fs_.map((f) => f.completado))),
        paraTi: r1(media(fs_.map((f) => f.paraTi)))
      },
      evolucion: { x: dias, v: acumuladas(red) },
      // fechas ISO: la web las rotula en su idioma
      videos: fs_.map((f) => ({
        titulo: titulo(f),
        publicado: (({ fecha, hm }) => `${fecha} ${hm}`)(madrid(f.p.publicado)),
        url: f.p.url,
        vistas: f.vistas,
        v24: r1(f.v24),
        v72: r1(f.v72),
        indice: r1(f.ratio),
        interaccion: r1(f.interaccion),
        compartir: r1(f.compartir),
        guardar: r1(f.guardar),
        visionado: r1(f.visionado),
        completado: r1(f.completado),
        seguidores: f.seguidores ?? null
      })),
      crecimiento: { x: HORAS, series: fs_.slice(0, 10).map((f) => ({ name: titulo(f), data: HORAS.map((h) => vistasHora(f.p, h)) })) },
      retencion: ret.length ? { x: Array.from({ length: maxSeg + 1 }, (_, s) => `${s} s`), series: ret.map((f) => ({ name: titulo(f), data: Array.from({ length: maxSeg + 1 }, (_, s) => {
        const c = f.p.fotos.at(-1).m.retention.find((x) => Number(x.second) === s);
        return c ? Math.round(c.percentage * 1e3) / 10 : null;
      }) })) } : null,
      fuentes: Object.keys(fuentes).length ? { x: Object.keys(fuentes), v: Object.values(fuentes).map((xs) => r1(xs.reduce((a2, b) => a2 + b, 0) / xs.length)) } : null
    };
  }
  salida.redes = porRed;
  const a = calcular(datos);
  salida.aprendizaje = {
    publicaciones: a.publicaciones,
    videos: a.videos,
    conclusiones: a.conclusiones,
    horas: a.horas_recomendadas,
    factores: Object.fromEntries(Object.entries(a.factores).map(([k, niveles]) => {
      const ord = Object.entries(niveles).sort((x, y) => y[1].vistas - x[1].vistas);
      return [k, { niveles: ord.map(([v]) => v), n: ord.map(([, x]) => x.videos ?? x.n), vistas: ord.map(([, x]) => x.vistas), interaccion: ord.map(([, x]) => x.interaccion) }];
    })),
    retencion: a.retencion
  };
  const reg = new Map(leerRegistro(datos).map((e) => [idDe(e), e]));
  const est = leer(datos);
  salida.viralidad = {
    videos: a.videos_indice.map((v) => {
      const e = reg.get(v.id);
      return { titulo: corto2(v.titulo, 40), indice: v.indice, huella: e?.huella?.visto ?? null, medido: e?.huella?.medido ?? null, experimento: e?.experimento ?? null };
    }),
    activo: est.activo ? {
      variable: est.activo.variable,
      pregunta: est.activo.pregunta,
      inicio: est.activo.inicio,
      variantes: est.activo.variantes.map((x) => x.id),
      asignados: est.activo.asignados ?? {},
      indices: est.activo.variantes.map((x) => {
        const vs = a.videos_indice.filter((v) => v.variable === est.activo.variable && v.variante === x.id);
        return { n: vs.length, indice: vs.length ? +Math.exp(vs.reduce((s, v) => s + Math.log(Math.max(0.05, v.indice)), 0) / vs.length).toFixed(2) : null };
      })
    } : null,
    cola: est.cola.map((x) => ({ variable: x.variable, pregunta: x.pregunta })),
    cerrados: est.cerrados.map((c) => ({ variable: c.variable, pregunta: c.pregunta, conclusion: c.conclusion, ganadora: c.ganadora, fin: c.fin }))
  };
  salida.hora = analizarHora(datos);
  salida.entreRedes = analizarRedes(datos);
  const destino = path5.join(webDir, "data", "data.js");
  fs5.mkdirSync(path5.dirname(destino), { recursive: true });
  fs5.writeFileSync(destino, `/* Generado por la anal\xEDtica de Contratitular \u2014 no editar a mano. */
window.DATOS = ${JSON.stringify(salida)};
`, "utf8");
  return `${destino} (${Math.round(fs5.statSync(destino).size / 1024)} KB \xB7 ${redes.length} redes \xB7 ${todas.length} publicaciones con cifras)`;
}

// src/analitica/huella.ts
import fs6 from "node:fs";
import os2 from "node:os";
import path6 from "node:path";
import { execFileSync, spawn } from "node:child_process";
var VERSION_HUELLA = 1;
var TAXONOMIA = {
  tema: ["historia", "ciencia", "naturaleza", "cuerpo humano", "tecnolog\xEDa", "econom\xEDa", "sociedad", "geograf\xEDa", "cultura", "deporte", "otro"],
  emocion: ["asombro", "intriga", "indignaci\xF3n", "miedo", "humor", "ternura", "orgullo"],
  gancho_tipo: ["cifra chocante", "pregunta", "contradicci\xF3n", "misterio", "peligro", "segunda persona", "historia en marcha", "otro"],
  cercania: ["Espa\xF1a", "Europa", "mundo", "universal"],
  promesa: ["s\xED", "no"],
  giro: ["s\xED", "no"],
  cierre: ["bucle", "pregunta", "dato final", "moraleja", "llamada a la acci\xF3n"],
  primer_fotograma_claro: ["s\xED", "no"],
  movimiento_1s: ["s\xED", "no"],
  texto_0s: ["s\xED", "no"],
  personaje: ["s\xED", "no"]
};
var NUMEROS = /\b(\d|un[oa]?s?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|cien|mil|millón|millones|mitad|doble|triple)\b/i;
function leerGuion(dir) {
  try {
    return JSON.parse(fs6.readFileSync(path6.join(dir, "guion.json"), "utf8").replace(/^﻿/, ""));
  } catch {
    return null;
  }
}
function medir(e, g) {
  const dur = Math.max(1, e.duracion);
  return {
    palabras_s: +(e.palabras / dur).toFixed(2),
    escenas_min: +(e.escenas.length / dur * 60).toFixed(1),
    cifra_al_inicio: NUMEROS.test(e.gancho.split(/\s+/).slice(0, 5).join(" ")),
    gancho_palabras: e.gancho.split(/\s+/).length,
    portada_texto: !!g?.portada_texto,
    giro_en_guion: !!g?.historia?.giro
  };
}
function ffmpeg() {
  const base = path6.join(process.cwd(), "node_modules", "@remotion");
  const comp = fs6.readdirSync(base).find((d) => d.startsWith(`compositor-${process.platform}-${process.arch}`));
  if (!comp) throw new Error("No encuentro el ffmpeg de Remotion (ejecuta desde la ra\xEDz de instagram-curiosidades)");
  return path6.join(base, comp, process.platform === "win32" ? "ffmpeg.exe" : "ffmpeg");
}
function fotogramas(video, dur, salida) {
  fs6.mkdirSync(salida, { recursive: true });
  const exe = ffmpeg();
  const tiempos = [0.1, 1, 3, Math.max(4, dur - 2)];
  return tiempos.map((t, i) => {
    const f = path6.join(salida, `f${i}-${t.toFixed(1)}s.jpg`);
    execFileSync(exe, ["-y", "-v", "error", "-ss", String(t), "-i", video, "-frames:v", "1", "-vf", "scale=540:-2", f], { cwd: path6.dirname(exe) });
    return f;
  });
}
function claude(prompt, dir, minutos = 6) {
  const args = [
    "-p",
    "--model",
    process.env.HUELLA_MODELO ?? "sonnet",
    "--output-format",
    "json",
    "--no-session-persistence",
    "--strict-mcp-config",
    "--add-dir",
    dir,
    "--tools",
    "Read",
    "--allowedTools",
    "Read",
    "--permission-mode",
    "dontAsk"
  ];
  const env = { ...process.env };
  delete env.ANTHROPIC_API_KEY;
  return new Promise((ok, mal) => {
    const p = spawn("claude", args, { cwd: dir, env, windowsHide: true, shell: process.platform === "win32" });
    let out = "";
    const reloj = setTimeout(() => {
      p.kill();
      mal(new Error("Claude tard\xF3 demasiado"));
    }, minutos * 6e4);
    p.stdout.on("data", (d) => out += d);
    p.on("error", (e) => {
      clearTimeout(reloj);
      mal(e);
    });
    p.on("close", () => {
      clearTimeout(reloj);
      ok(out);
    });
    p.stdin.end(prompt, "utf8");
  });
}
function jsonDeClaude(salida) {
  let txt = salida;
  try {
    const j = JSON.parse(salida);
    if (j.is_error) throw new Error(String(j.result ?? j.subtype));
    txt = String(j.result ?? "");
  } catch (e) {
    if (/is_error|límite|limit/i.test(String(e))) throw e;
  }
  const m = txt.match(/\{[\s\S]*\}/);
  if (!m) throw new Error(`Claude no devolvi\xF3 JSON: ${txt.slice(0, 200)}`);
  return JSON.parse(m[0]);
}
async function ver(e, g, dir) {
  const tmp = fs6.mkdtempSync(path6.join(os2.tmpdir(), "huella-"));
  try {
    const fs_ = fotogramas(path6.join(dir, "video.mp4"), e.duracion, tmp);
    const frases = (g?.bloques ?? []).map((b, i) => `${i + 1}. ${b.frase}`).join("\n") || e.escenas.map((x) => `${x.n}. ${x.frase}`).join("\n");
    const prompt = [
      "Eres analista de v\xEDdeos cortos verticales (Reels/TikTok/Shorts) de curiosidades. Clasifica ESTE v\xEDdeo con la taxonom\xEDa cerrada de abajo.",
      `Mira los fotogramas con la herramienta Read (son del segundo 0,1, 1, 3 y del final): ${fs_.join(" \xB7 ")}`,
      `T\xEDtulo: ${e.titulo}
Duraci\xF3n: ${e.duracion} s
Guion (una frase por escena):
${frases}`,
      g?.historia ? `Historia declarada por el autor: ${JSON.stringify(g.historia)}` : "",
      "Taxonom\xEDa (elige EXACTAMENTE uno de los valores de cada lista):",
      ...Object.entries(TAXONOMIA).map(([k, v]) => `- ${k}: ${v.join(" | ")}`),
      "Criterios: gancho_tipo = c\xF3mo abre la PRIMERA frase; promesa = \xBFla primera frase promete una recompensa concreta que obliga a ver hasta el final?; cierre = c\xF3mo acaba la \xFAltima frase (\xABbucle\xBB si enlaza con el principio para que se vea otra vez); primer_fotograma_claro = \xBFel fotograma 0,1 s se entiende sin leer nada?; movimiento_1s = \xBFcambia algo visible entre 0,1 s y 1 s?; texto_0s = \xBFhay texto grande legible en el fotograma 0,1 s?; personaje = \xBFhay un protagonista con cara/personaje?",
      "A\xF1ade \xABpor_que\xBB: UNA frase (m\xE1x. 200 caracteres) con lo que m\xE1s puede hacer que este v\xEDdeo enganche o se abandone.",
      "Responde SOLO con el objeto JSON, sin texto alrededor."
    ].filter(Boolean).join("\n");
    const j = jsonDeClaude(await claude(prompt, tmp));
    const visto = {};
    for (const [k, v] of Object.entries(TAXONOMIA)) if (v.includes(j[k])) visto[k] = j[k];
    if (typeof j.por_que === "string") visto.por_que = j.por_que.slice(0, 240);
    return visto;
  } finally {
    fs6.rmSync(tmp, { recursive: true, force: true });
  }
}
async function huellas(datos, op = {}) {
  const archivo3 = path6.join(datos, "registro.json");
  const reg = leerRegistro(datos);
  let hechas = 0;
  for (const e of reg) {
    const dir = e.carpeta;
    const g = leerGuion(dir);
    try {
      e.experimento ??= JSON.parse(fs6.readFileSync(path6.join(dir, "experimento.json"), "utf8"));
    } catch {
    }
    if (!op.todas && e.huella?.version === VERSION_HUELLA && (e.huella.visto || op.sinClaude)) continue;
    if (!fs6.existsSync(path6.join(dir, "video.mp4"))) {
      console.log(`\xB7 ${idDe(e)}: sin v\xEDdeo en el PC, salto`);
      continue;
    }
    const h = { version: VERSION_HUELLA, fecha: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), medido: medir(e, g) };
    if (!op.sinClaude) {
      try {
        h.visto = await ver(e, g, dir);
      } catch (err) {
        console.log(`\u26A0 ${idDe(e)}: ${err.message.slice(0, 160)}`);
      }
    }
    e.huella = h;
    hechas++;
    console.log(`\u2705 ${idDe(e)} \xB7 ${h.visto ? Object.entries(h.visto).filter(([k]) => k !== "por_que").map(([, v]) => v).join(" \xB7 ") : "solo medido"}`);
    fs6.writeFileSync(archivo3, JSON.stringify(reg, null, 1), "utf8");
  }
  return hechas;
}

// src/analitica/revisar.ts
import fs7 from "node:fs";
import path7 from "node:path";
import { spawn as spawn2 } from "node:child_process";
function claude2(prompt, minutos = 10) {
  const args = ["-p", "--model", process.env.REVISION_MODELO ?? "opus", "--output-format", "json", "--no-session-persistence", "--strict-mcp-config", "--permission-mode", "dontAsk"];
  const env = { ...process.env };
  delete env.ANTHROPIC_API_KEY;
  return new Promise((ok, mal) => {
    const p = spawn2("claude", args, { env, windowsHide: true, shell: process.platform === "win32" });
    let out = "";
    const reloj = setTimeout(() => {
      p.kill();
      mal(new Error("Claude tard\xF3 demasiado"));
    }, minutos * 6e4);
    p.stdout.on("data", (d) => out += d);
    p.on("error", (e) => {
      clearTimeout(reloj);
      mal(e);
    });
    p.on("close", () => {
      clearTimeout(reloj);
      ok(out);
    });
    p.stdin.end(prompt, "utf8");
  });
}
async function revisar(datos, skillDir, op = {}) {
  const dir = path7.join(datos, "redes", "revisiones");
  fs7.mkdirSync(dir, { recursive: true });
  const ultima = fs7.readdirSync(dir).filter((f) => f.endsWith(".md")).sort().at(-1);
  if (!op.forzar && ultima && Date.now() - Date.parse(ultima.slice(0, 10)) < 6.5 * 864e5) return `\xDAltima revisi\xF3n ${ultima.slice(0, 10)}: a\xFAn no toca (semanal).`;
  const a = calcular(datos);
  if (a.videos_indice.length < 4 && !op.forzar) return `Solo ${a.videos_indice.length} v\xEDdeos con cifras maduras: la revisi\xF3n empieza con 4.`;
  const reg = new Map(leerRegistro(datos).map((e) => [idDe(e), e]));
  const ficha = (v) => {
    const e = reg.get(v.id);
    return [
      `### ${v.indice}\xD7 \xB7 ${v.titulo}`,
      e?.huella ? `Huella: ${JSON.stringify({ ...e.huella.medido, ...e.huella.visto })}` : "",
      e?.experimento ? `Experimento: ${e.experimento.variable} = ${e.experimento.variante}` : "",
      `Duraci\xF3n ${e?.duracion} s \xB7 estilo ${e?.estilo} \xB7 voz ${e?.voz ?? "\u2014"}`,
      "Guion:",
      ...(e?.escenas ?? []).map((x) => `  ${x.n}. [${x.inicio.toFixed(1)}-${x.fin.toFixed(1)} s] ${x.frase}`)
    ].filter(Boolean).join("\n");
  };
  const arriba = a.videos_indice.slice(0, 3), abajo = a.videos_indice.slice(-3).reverse();
  const est = leer(datos);
  const prompt = [
    "Eres el analista de una cuenta de v\xEDdeos cortos verticales de curiosidades (Instagram, TikTok, YouTube Shorts, Facebook).",
    "Tu trabajo: descubrir POR QU\xC9 unos v\xEDdeos llegan a mucha m\xE1s gente que otros y c\xF3mo hacer los siguientes m\xE1s virales.",
    "\xCDndice = vistas frente a las publicaciones anteriores de la cuenta en la misma red y a la misma edad (1\xD7 = lo normal).",
    `Hay ${a.videos} v\xEDdeos. Con tan pocos, desconf\xEDa de las coincidencias: busca mecanismos (qu\xE9 hace el espectador en el primer segundo, si hay promesa, si se entiende sin sonido, si hay giro\u2026), no correlaciones sueltas.`,
    "",
    "## Rasgos frente al alcance (\xEDndice por nivel, n = publicaciones)",
    JSON.stringify(a.factores),
    "",
    "## Retenci\xF3n (TikTok): puntos perdidos por segundo en cada tramo",
    JSON.stringify(a.retencion),
    "",
    "## Hora de publicaci\xF3n (\xEDndice a la misma edad; horas.ts sortea la hora dentro de cada ventana)",
    textoHora(analizarHora(datos)),
    "",
    "## Entre redes: el MISMO v\xEDdeo en cada red (si funciona en una y no en otra, manda la red: p\xFAblico y algoritmo distintos)",
    textoRedes(analizarRedes(datos)),
    "Si un v\xEDdeo destaca solo en una red o un rasgo gana en una red y pierde en otra, dilo y prop\xF3n c\xF3mo adaptar a cada red lo que se pueda adaptar sin rehacer el v\xEDdeo (texto del post, t\xEDtulo, portada, hora).",
    "",
    "## Los que M\xC1S funcionaron",
    ...arriba.map(ficha),
    "",
    "## Los que MENOS funcionaron",
    ...abajo.map(ficha),
    "",
    `## Experimentos: activo ${est.activo?.variable ?? "ninguno"}; en cola ${est.cola.map((x) => x.variable).join(", ") || "ninguno"}; cerrados: ${est.cerrados.map((c) => c.conclusion).join(" | ") || "ninguno"}`,
    "",
    "Responde SOLO con un JSON as\xED:",
    '{"analisis": "6-12 frases en espa\xF1ol con lo que separa a los mejores de los peores y por qu\xE9",',
    ' "hipotesis": [{"texto": "lecci\xF3n GENERAL aplicable a cualquier v\xEDdeo de curiosidades, en imperativo, sin t\xEDtulos ni nombres de cuenta (m\xE1x. 220 caracteres)", "confianza": "alta|media|baja"}],',
    ' "experimentos": [{"variable": "nombre_corto_sin_espacios", "pregunta": "...", "variantes": [{"id": "corto", "instruccion": "orden concreta para el guionista, comprobable en el v\xEDdeo"}]}]}',
    "M\xE1ximo 5 hip\xF3tesis y 2 experimentos (cada experimento con 2-3 variantes que cambien SOLO esa variable y que no repitan las variables ya probadas o en cola)."
  ].join("\n");
  const j = jsonDeClaude(await claude2(prompt));
  const hip = (j.hipotesis ?? []).slice(0, 5);
  const exps = (j.experimentos ?? []).slice(0, 2).map((x) => ({ ...x, origen: `revisi\xF3n ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}` }));
  proponer(datos, exps);
  const hoy = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const informe = [
    `# Revisi\xF3n ${hoy} \xB7 ${a.videos} v\xEDdeos`,
    "",
    j.analisis ?? "",
    "",
    "## Hip\xF3tesis",
    ...hip.map((h) => `- (${h.confianza}) ${h.texto}`),
    "",
    "## Experimentos propuestos",
    ...exps.map((x) => `- ${x.variable}: ${x.pregunta} \u2192 ${x.variantes.map((v) => v.id).join(" / ")}`),
    "",
    "## Mejores",
    ...arriba.map(ficha),
    "",
    "## Peores",
    ...abajo.map(ficha)
  ].join("\n");
  fs7.writeFileSync(path7.join(dir, `${hoy}.md`), informe, "utf8");
  if (skillDir && hip.length) {
    const md = path7.join(skillDir, "referencia", "aprendizajes.md");
    const ini = "<!-- revision:inicio -->", fin = "<!-- revision:fin -->";
    const bloque = [
      ini,
      `### Pistas de la \xFAltima revisi\xF3n (${hoy} \xB7 ${a.videos} v\xEDdeos; hip\xF3tesis pendientes de experimento)`,
      ...hip.map((h) => `- **Hip\xF3tesis (${h.confianza})** \xB7 ${h.texto}`),
      fin
    ].join("\n");
    let texto = fs7.existsSync(md) ? fs7.readFileSync(md, "utf8") : "";
    texto = texto.includes(ini) ? texto.replace(new RegExp(`${ini}[\\s\\S]*?${fin}`), bloque) : `${texto.trimEnd()}

${bloque}
`;
    fs7.writeFileSync(md, texto, "utf8");
  }
  return informe;
}

// src/analitica/cli.ts
var SKILL_DEV = process.env.SKILL_DEV ?? path8.join(os3.homedir(), "dev", "contratitular-skill", "contratitular-videos");
function opciones(desde) {
  const a = process.argv.slice(desde), op = {};
  for (let k = 0; k < a.length; k++) if (a[k].startsWith("--")) op[a[k].slice(2)] = a[k + 1] && !a[k + 1].startsWith("--") ? a[++k] : "";
  return op;
}
async function main() {
  const [orden, arg1, arg2, arg3] = process.argv.slice(2);
  const op = opciones(3);
  switch (orden) {
    case "recoger": {
      const r = await recoger(DATOS, { redes: op.redes, todo: "todo" in op });
      console.log(`\u2705 ${r.publicaciones} publicaciones \xB7 ${r.nuevas} nuevas \xB7 ${r.fotos} con cifras nuevas \xB7 ${r.errores} errores \xB7 ${r.sinVideo} sin vincular`);
      break;
    }
    case "diagnostico": {
      const { texto, archivo: archivo3 } = diagnostico(DATOS);
      console.log(texto);
      if (archivo3) console.log(`
\u{1F4DD} ${archivo3}`);
      break;
    }
    case "aprender": {
      let a = calcular(DATOS);
      const cerrado = evaluar(DATOS, new Map(a.videos_indice.map((v) => [v.id, v])));
      if (cerrado) {
        console.log(`\u{1F9EA} Experimento cerrado (${cerrado.variable}): ${cerrado.conclusion}`);
        a = calcular(DATOS);
      }
      const skill = "sin-skill" in op || !fs8.existsSync(SKILL_DEV) ? null : SKILL_DEV;
      guardar(DATOS, a, skill);
      console.log(`\u2705 ${a.videos} v\xEDdeos, ${a.publicaciones} publicaciones maduras \xB7 ${a.conclusiones.filter((c) => c.tipo === "regla").length} reglas, ${a.conclusiones.filter((c) => c.tipo === "hipotesis").length} hip\xF3tesis`);
      for (const c of a.conclusiones) console.log(`  ${c.tipo === "regla" ? "\u25A0" : "\u25A1"} ${c.texto}`);
      console.log(skill ? `\u21B3 Volcado a la skill: motor/aprendizaje.json y referencia/aprendizajes.md (${skill})` : "\u21B3 Solo privado (sin tocar la skill)");
      break;
    }
    case "observatorio": {
      if (!arg1) throw new Error("Uso: observatorio <carpeta de la web>");
      console.log(`\u2705 ${exportar(DATOS, arg1)}`);
      break;
    }
    case "colector": {
      if (!arg1) throw new Error("Uso: colector <carpeta de la web>");
      const r = await recoger(DATOS, {});
      console.log(`recoger: ${r.publicaciones} publicaciones, ${r.fotos} con cifras nuevas, ${r.errores} errores`);
      guardar(DATOS, calcular(DATOS), null);
      console.log(`web: ${exportar(DATOS, arg1)}`);
      break;
    }
    case "sincronizar": {
      if (!arg1) throw new Error("Uso: sincronizar <carpeta de la web>");
      const web = path8.resolve(arg1), git = (...a) => execFileSync2("git", a, { cwd: web, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
      const esGit = fs8.existsSync(path8.join(web, ".git"));
      if (esGit) {
        try {
          git("pull", "--rebase", "--autostash", "-q");
        } catch (e) {
          console.log(`\u26A0 git pull: ${e.message.split("\n")[0]}`);
        }
      }
      try {
        await huellas(DATOS);
      } catch (e) {
        console.log(`\u26A0 huellas: ${e.message.split("\n")[0]}`);
      }
      for (const f of ["publicaciones.json", "cuentas.json", "aprendizaje.json"]) {
        const o = path8.join(web, "datos", "redes", f), d = path8.join(DATOS, "redes", f);
        if (fs8.existsSync(o) && (!fs8.existsSync(d) || fs8.statSync(o).size >= fs8.statSync(d).size)) {
          fs8.mkdirSync(path8.dirname(d), { recursive: true });
          fs8.copyFileSync(o, d);
        }
      }
      const limpio = leerRegistro(DATOS).map((e) => ({ ...e, carpeta: idDe(e), id: idDe(e), metricas: [] }));
      fs8.mkdirSync(path8.join(web, "datos"), { recursive: true });
      fs8.writeFileSync(path8.join(web, "datos", "registro.json"), JSON.stringify(limpio, null, 1), "utf8");
      const exp = path8.join(DATOS, "redes", "experimentos.json");
      if (fs8.existsSync(exp)) {
        fs8.mkdirSync(path8.join(web, "datos", "redes"), { recursive: true });
        fs8.copyFileSync(exp, path8.join(web, "datos", "redes", "experimentos.json"));
      }
      const { build } = await Promise.resolve().then(() => __toESM(require_main(), 1));
      await build({
        entryPoints: ["src/analitica/cli.ts"],
        bundle: true,
        platform: "node",
        format: "esm",
        logLevel: "warning",
        outfile: path8.join(web, "pipeline", "colector.mjs"),
        banner: { js: '// Colector del observatorio de Contratitular (generado: no editar).\nimport { createRequire as __cr } from "module"; const require = __cr(import.meta.url);' }
      });
      console.log(`\u2705 Registro (${limpio.length} v\xEDdeos) y colector copiados a ${web}`);
      if (esGit) {
        git("add", "-A");
        try {
          git("commit", "-q", "-m", `Sincronizado ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 16)}`);
          git("push", "-q");
          console.log("\u2705 Publicado en GitHub");
        } catch (e) {
          console.log(`\u2139 ${e.message.includes("nothing to commit") ? "Sin cambios" : e.message.split("\n")[0]}`);
        }
      }
      break;
    }
    case "registrar": {
      if (!arg1) throw new Error("Uso: registrar <carpeta del v\xEDdeo>");
      const dir = path8.resolve(arg1.replace(/guion\.json$/i, ""));
      const base = path8.join(process.cwd(), "node_modules", "@remotion");
      const comp = fs8.readdirSync(base).find((d) => d.startsWith(`compositor-${process.platform}-${process.arch}`));
      const exe = path8.join(base, comp, process.platform === "win32" ? "ffprobe.exe" : "ffprobe");
      const dur = Number(execFileSync2(exe, ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path8.join(dir, "video.mp4")], { cwd: path8.dirname(exe), encoding: "utf8" }).trim());
      registrarAntiguo(DATOS, dir, dur, { familia: op.familia, voz: op.voz });
      console.log(`\u2705 Registrado (${dur.toFixed(1)} s): ${path8.basename(dir)}`);
      break;
    }
    case "vincular": {
      if (!arg1 || !arg2 || !arg3) throw new Error("Uso: vincular <red> <id> <carpeta del v\xEDdeo>");
      vincular(DATOS, arg1, arg2, arg3);
      console.log(`\u2705 ${arg1}:${arg2} \u2192 ${path8.basename(arg3)}`);
      break;
    }
    case "huella": {
      const n = await huellas(DATOS, { todas: "todas" in op, sinClaude: "sin-claude" in op });
      console.log(`\u2705 ${n} huellas nuevas`);
      break;
    }
    case "experimento": {
      if (arg1 === "asignar") {
        console.log(JSON.stringify(asignar(DATOS), null, 1));
        break;
      }
      const e = leer(DATOS);
      console.log(e.activo ? `\u{1F9EA} Activo: ${e.activo.pregunta} (desde ${e.activo.inicio}) \xB7 ${JSON.stringify(e.activo.asignados ?? {})}` : "\u{1F9EA} Ninguno activo (arranca con el pr\xF3ximo v\xEDdeo)");
      console.log(`En cola: ${e.cola.map((x) => x.variable).join(", ") || "\u2014"}`);
      for (const c of e.cerrados) console.log(`  \u2714 ${c.fin} ${c.variable}: ${c.conclusion}`);
      break;
    }
    case "revisar": {
      const skill = "sin-skill" in op || !fs8.existsSync(SKILL_DEV) ? null : SKILL_DEV;
      console.log(await revisar(DATOS, skill, { forzar: "forzar" in op }));
      break;
    }
    default:
      console.log("\xD3rdenes: recoger \xB7 diagnostico \xB7 aprender \xB7 observatorio \xB7 colector \xB7 registrar \xB7 vincular \xB7 huella \xB7 experimento \xB7 revisar");
  }
}
main().catch((e) => {
  console.error(`\u274C ${e instanceof Error ? e.message : e}`);
  process.exitCode = 1;
});
