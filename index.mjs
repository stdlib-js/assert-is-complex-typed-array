// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs";var n=[s,e],o=["Complex64Array","Complex128Array"];function i(e){var s,i;if("object"!=typeof e||null===e)return!1;for(i=0;i<n.length;i++)if(e instanceof n[i])return!0;for(;e;){for(s=t(e),i=0;i<o.length;i++)if(o[i]===s)return!0;e=r(e)}return!1}export{i as default};
//# sourceMappingURL=index.mjs.map