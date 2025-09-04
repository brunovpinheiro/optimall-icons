"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/Medal01.tsx
var Medal01_exports = {};
__export(Medal01_exports, {
  Medal01: () => Medal01,
  default: () => Medal01_default
});
module.exports = __toCommonJS(Medal01_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Medal01 = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.5 1.1q.07.001.137.011h2.279c.36 0 1.026-.04 1.598.035.615.083 1.351.319 1.866 1.014l.105.158c.228.373.322.78.367 1.192.05.454.048 1.016.048 1.669 0 .558.001 1.032-.032 1.425-.03.357-.09.695-.225 1.026l-.064.141c-.294.612-.756 1.02-1.2 1.312-.42.277-.913.505-1.24.673l-3.71 1.904c-.726.373-1.323.68-1.84.889l-.122.045q.22.126.462.27l.999.59c.357.212.685.403.942.593.275.202.525.441.711.775l.064.125c.139.293.197.59.225.889.03.323.03.71.03 1.143v1.043c0 .432 0 .819-.03 1.142a2.6 2.6 0 0 1-.225.889l-.064.125a2.4 2.4 0 0 1-.71.775c-.258.19-.585.381-.942.593l-.001-.001-1 .592c-.343.203-.657.39-.936.52A2.3 2.3 0 0 1 12 22.9c-.374 0-.696-.105-.992-.243a6 6 0 0 1-.444-.232l-.493-.288-1-.592c-.357-.212-.684-.402-.941-.592a2.5 2.5 0 0 1-.639-.654l-.072-.121c-.185-.332-.257-.673-.29-1.014-.03-.323-.03-.71-.03-1.143v-1.043c0-.432 0-.819.03-1.142.033-.341.105-.682.29-1.014l.072-.12a2.5 2.5 0 0 1 .639-.655q.195-.142.433-.288l.508-.305 1-.59.46-.271-.12-.044a13 13 0 0 1-.842-.383l-.999-.506-3.708-1.904c-.327-.168-.821-.395-1.242-.673-.388-.256-.79-.6-1.082-1.092l-.117-.22c-.18-.376-.255-.76-.29-1.167C2.1 6.21 2.1 5.737 2.1 5.179c0-.653-.001-1.215.048-1.67.052-.47.166-.935.472-1.349l.1-.125c.507-.6 1.19-.811 1.766-.889.572-.076 1.238-.035 1.598-.035h2.28A1 1 0 0 1 8.5 1.1q.07.001.137.011h6.726A1 1 0 0 1 15.5 1.1M12 13.9c-.019 0-.073 0-.234.076-.09.041-.19.095-.316.166l-.463.27-1 .592c-.388.23-.622.369-.789.492a1 1 0 0 0-.152.129l-.054.072c-.02.037-.051.107-.07.308-.02.219-.022.507-.022.974v1.043c0 .466.001.754.022.973.019.2.05.271.07.308l.054.072q.043.047.152.129c.084.061.184.127.312.206l.477.286 1 .592.463.27c.125.071.226.125.316.166.16.075.215.076.234.076s.073 0 .234-.076c.18-.083.404-.215.779-.436l1-.592.477-.286a5 5 0 0 0 .312-.206c.149-.11.187-.167.206-.201l.036-.093c.012-.047.025-.115.034-.215.02-.219.022-.507.022-.974v-1.043c0-.466-.001-.754-.022-.973-.01-.1-.021-.168-.034-.215l-.036-.093c-.02-.034-.057-.091-.206-.2a5 5 0 0 0-.312-.207l-.477-.286-1-.592a10 10 0 0 0-.779-.436c-.16-.075-.215-.076-.234-.076m-2.6-3.838.963.489c.276.135.51.244.722.33.407.165.672.219.915.219s.508-.054.915-.22c.422-.17.934-.432 1.685-.818v-7.15H9.4zm-3.316-7.15c-.551 0-.945-.037-1.36.019-.324.043-.501.129-.613.248l-.044.052c-.037.052-.095.156-.13.474-.036.334-.037.781-.037 1.474 0 .588 0 .974.026 1.275.024.286.066.431.117.538l.042.08c.107.18.275.342.527.508.311.205.64.353 1.072.574l1.916.984V2.912zm11.832 0H16.4v6.226l1.916-.984.582-.293c.175-.09.334-.178.49-.28.288-.191.466-.375.569-.589l.036-.089c.035-.1.063-.234.081-.449.025-.3.026-.687.026-1.275 0-.693-.001-1.14-.038-1.474-.026-.238-.065-.357-.098-.423l-.031-.05c-.108-.147-.287-.252-.658-.301-.414-.056-.808-.019-1.359-.019", clipRule: "evenodd" }) });
});
Medal01.displayName = "Medal01";
var Medal01_default = Medal01;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Medal01
});
//# sourceMappingURL=Medal01.cjs.map