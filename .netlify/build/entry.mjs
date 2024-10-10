import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BiZbkAQ2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BFh3hUSD.mjs');
const _page1 = () => import('./chunks/adopcja_DKAOLq_W.mjs');
const _page2 = () => import('./chunks/_reports__Dglsa4Wr.mjs');
const _page3 = () => import('./chunks/_slug__CLX8h5Os.mjs');
const _page4 = () => import('./chunks/blog_BG74AwDn.mjs');
const _page5 = () => import('./chunks/Dawki_pcyfEQzA.mjs');
const _page6 = () => import('./chunks/_interventions__5Tjlazx3.mjs');
const _page7 = () => import('./chunks/jak-nam-pomóc_C_yvVfAV.mjs');
const _page8 = () => import('./chunks/kontakt_b_0Z70hq.mjs');
const _page9 = () => import('./chunks/_meetups__BWuLNZe4.mjs');
const _page10 = () => import('./chunks/meetups_Dpr5k8qk.mjs');
const _page11 = () => import('./chunks/o-nas_Cguvv65w.mjs');
const _page12 = () => import('./chunks/wolontariat_DGQCZsYp.mjs');
const _page13 = () => import('./chunks/Znalazłem gołębia_ClIEjv3f.mjs');
const _page14 = () => import('./chunks/znalazłem-dzikie-zwierzę_Cpza78jd.mjs');
const _page15 = () => import('./chunks/index_rG7dfgrV.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/adopcja.md", _page1],
    ["src/pages/aktualności/[reports].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/Dawki.md", _page5],
    ["src/pages/interwencje/[interventions].astro", _page6],
    ["src/pages/jak-nam-pomóc.md", _page7],
    ["src/pages/kontakt.astro", _page8],
    ["src/pages/meetups/[meetups].astro", _page9],
    ["src/pages/meetups.astro", _page10],
    ["src/pages/o-nas.md", _page11],
    ["src/pages/wolontariat.md", _page12],
    ["src/pages/Znalazłem gołębia.md", _page13],
    ["src/pages/znalazłem-dzikie-zwierzę.md", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "640d99dd-0f71-4756-bbcb-78497704c74c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
