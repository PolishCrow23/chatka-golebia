import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BHN5PFsG.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/adopcja.astro.mjs');
const _page2 = () => import('./pages/aktualnosci.astro.mjs');
const _page3 = () => import('./pages/aktualności/_reports_.astro.mjs');
const _page4 = () => import('./pages/api/auth/register.astro.mjs');
const _page5 = () => import('./pages/api/auth/signin.astro.mjs');
const _page6 = () => import('./pages/api/auth/signout.astro.mjs');
const _page7 = () => import('./pages/atlas-gołębi/_pigeons_.astro.mjs');
const _page8 = () => import('./pages/atlas-gołębi.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/golebie-do-adopcji/_adoptions_.astro.mjs');
const _page11 = () => import('./pages/golebie-do-adopcji.astro.mjs');
const _page12 = () => import('./pages/interwencje/_interventions_.astro.mjs');
const _page13 = () => import('./pages/kalkulator-dawek.astro.mjs');
const _page14 = () => import('./pages/kontakt.astro.mjs');
const _page15 = () => import('./pages/meetups/_meetups_.astro.mjs');
const _page16 = () => import('./pages/o-nas.astro.mjs');
const _page17 = () => import('./pages/poradniki/_slug_.astro.mjs');
const _page18 = () => import('./pages/poradniki.astro.mjs');
const _page19 = () => import('./pages/register.astro.mjs');
const _page20 = () => import('./pages/signin.astro.mjs');
const _page21 = () => import('./pages/sponsorzy.astro.mjs');
const _page22 = () => import('./pages/znalazlem-golebia.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/adopcja.md", _page1],
    ["src/pages/aktualnosci.astro", _page2],
    ["src/pages/aktualności/[reports].astro", _page3],
    ["src/pages/api/auth/register.ts", _page4],
    ["src/pages/api/auth/signin.ts", _page5],
    ["src/pages/api/auth/signout.ts", _page6],
    ["src/pages/atlas-gołębi/[pigeons].astro", _page7],
    ["src/pages/atlas-gołębi.astro", _page8],
    ["src/pages/dashboard.astro", _page9],
    ["src/pages/golebie-do-adopcji/[adoptions].astro", _page10],
    ["src/pages/golebie-do-adopcji.astro", _page11],
    ["src/pages/interwencje/[interventions].astro", _page12],
    ["src/pages/kalkulator-dawek.md", _page13],
    ["src/pages/kontakt.astro", _page14],
    ["src/pages/meetups/[meetups].astro", _page15],
    ["src/pages/o-nas.md", _page16],
    ["src/pages/poradniki/[slug].astro", _page17],
    ["src/pages/poradniki.astro", _page18],
    ["src/pages/register.astro", _page19],
    ["src/pages/signin.astro", _page20],
    ["src/pages/sponsorzy.astro", _page21],
    ["src/pages/znalazlem-golebia.md", _page22],
    ["src/pages/index.astro", _page23]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "24759ffc-0701-4581-bc59-159d55cf71df"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
