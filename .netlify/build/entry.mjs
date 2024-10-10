import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CoYVpptl.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BFh3hUSD.mjs');
const _page1 = () => import('./chunks/adopcja_DzGxj6_F.mjs');
const _page2 = () => import('./chunks/_reports__CNL7wRBr.mjs');
const _page3 = () => import('./chunks/_slug__BmdAr4dV.mjs');
const _page4 = () => import('./chunks/blog_CWXFOw19.mjs');
const _page5 = () => import('./chunks/Dawki_vdfERdpT.mjs');
const _page6 = () => import('./chunks/_interventions__DcwTmc85.mjs');
const _page7 = () => import('./chunks/jak-nam-pomóc_B2MJqKeR.mjs');
const _page8 = () => import('./chunks/kontakt_DEtiPkZQ.mjs');
const _page9 = () => import('./chunks/_meetups__B1tV1U_7.mjs');
const _page10 = () => import('./chunks/meetups_1v6wKJx-.mjs');
const _page11 = () => import('./chunks/o-nas_DEjyN2G1.mjs');
const _page12 = () => import('./chunks/wolontariat_COuEDsSt.mjs');
const _page13 = () => import('./chunks/Znalazłem gołębia_BjRa6wQ_.mjs');
const _page14 = () => import('./chunks/znalazłem-dzikie-zwierzę__lKMQfFw.mjs');
const _page15 = () => import('./chunks/index_CveqS0FM.mjs');
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
    "middlewareSecret": "d447af96-87a1-4c6c-a950-76423357606a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
