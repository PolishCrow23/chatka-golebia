import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute, f as renderSlot } from './astro/server_ByiVjAKM.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_DWPYVZ0Y.mjs';
/* empty css                               */
import { $ as $$PiwikPro } from './PiwikPro_Br3jcDrk.mjs';
/* empty css                           */

const $$Astro = createAstro("https://chatkagolebia.pl");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { frontmatter = {}, title, description, date, maxWidth = "720px" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-3zbxo6iv> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": frontmatter.title || title, "description": frontmatter.description || description, "date": frontmatter.date || date, "data-astro-cid-3zbxo6iv": true })}${renderHead()}</head> <body data-astro-cid-3zbxo6iv> ${renderComponent($$result, "PiwikPro", $$PiwikPro, { "data-astro-cid-3zbxo6iv": true })} ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-3zbxo6iv": true })} <main data-astro-cid-3zbxo6iv> <div class="post"${addAttribute(`max-width: ${maxWidth};`, "style")} data-astro-cid-3zbxo6iv> <div class="title" data-astro-cid-3zbxo6iv> <h1 data-astro-cid-3zbxo6iv>${frontmatter.title || title}</h1> </div> <div class="slot-wrapper" data-astro-cid-3zbxo6iv> ${renderSlot($$result, $$slots["default"])} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-3zbxo6iv": true })} </body></html>`;
}, "C:/Users/Iga/Documents/Code/chatka-golebia/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
