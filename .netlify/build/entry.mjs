import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BSax_e7E.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/adopcja.astro.mjs');
const _page1 = () => import('./pages/aktualnosci.astro.mjs');
const _page2 = () => import('./pages/aktualności/_reports_.astro.mjs');
const _page3 = () => import('./pages/atlas-gołębi/_pigeons_.astro.mjs');
const _page4 = () => import('./pages/atlas-gołębi.astro.mjs');
const _page5 = () => import('./pages/golebie-do-adopcji/_adoptions_.astro.mjs');
const _page6 = () => import('./pages/golebie-do-adopcji.astro.mjs');
const _page7 = () => import('./pages/interwencje/_interventions_.astro.mjs');
const _page8 = () => import('./pages/kalkulator-dawek.astro.mjs');
const _page9 = () => import('./pages/kontakt.astro.mjs');
const _page10 = () => import('./pages/media-o-nas.astro.mjs');
const _page11 = () => import('./pages/meetups/_meetups_.astro.mjs');
const _page12 = () => import('./pages/o-nas.astro.mjs');
const _page13 = () => import('./pages/poradniki/_slug_.astro.mjs');
const _page14 = () => import('./pages/poradniki.astro.mjs');
const _page15 = () => import('./pages/skrzydlate-historie/_stories_.astro.mjs');
const _page16 = () => import('./pages/sponsorzy.astro.mjs');
const _page17 = () => import('./pages/wspomoz-nas.astro.mjs');
const _page18 = () => import('./pages/znalazlem-golebia.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/adopcja.md", _page0],
    ["src/pages/aktualnosci.astro", _page1],
    ["src/pages/aktualności/[reports].astro", _page2],
    ["src/pages/atlas-gołębi/[pigeons].astro", _page3],
    ["src/pages/atlas-gołębi.astro", _page4],
    ["src/pages/golebie-do-adopcji/[adoptions].astro", _page5],
    ["src/pages/golebie-do-adopcji.astro", _page6],
    ["src/pages/interwencje/[interventions].astro", _page7],
    ["src/pages/kalkulator-dawek.md", _page8],
    ["src/pages/kontakt.astro", _page9],
    ["src/pages/media-o-nas.md", _page10],
    ["src/pages/meetups/[meetups].astro", _page11],
    ["src/pages/o-nas.astro", _page12],
    ["src/pages/poradniki/[slug].astro", _page13],
    ["src/pages/poradniki.astro", _page14],
    ["src/pages/skrzydlate-historie/[stories].astro", _page15],
    ["src/pages/sponsorzy.md", _page16],
    ["src/pages/wspomoz-nas.md", _page17],
    ["src/pages/znalazlem-golebia.md", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3356ac99-a9b1-483c-8b30-d376a71cf98d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
