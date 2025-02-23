import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent } from './astro/server_ByiVjAKM.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const $$Astro$2 = createAstro("https://chatkagolebia.pl");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="image"${addAttribute(image, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/Roboto-Medium.ttf" as="font" type="font/ttf" crossorigin>`;
}, "C:/Users/Iga/Documents/Code/chatka-golebia/src/components/essentials/BaseHead.astro", void 0);

const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="social-links" data-astro-cid-4gd4aa4r> <a href="https://www.facebook.com/chatkagolebia/" data-astro-cid-4gd4aa4r> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-4gd4aa4r><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" data-astro-cid-4gd4aa4r></path></svg> </a> <a href="https://www.facebook.com/groups/chatkagolebiagrupa" data-astro-cid-4gd4aa4r> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" data-astro-cid-4gd4aa4r><g fill="none" data-astro-cid-4gd4aa4r><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" data-astro-cid-4gd4aa4r></path><path fill="currentColor" d="M13 13a4 4 0 0 1 4 4v1.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 2 18.5V17a4 4 0 0 1 4-4zm6 0a3 3 0 0 1 3 3v1.5a1.5 1.5 0 0 1-1.5 1.5H19v-2a5 5 0 0 0-2-4zM9.5 3a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M18 6a3 3 0 1 1 0 6a3 3 0 0 1 0-6" data-astro-cid-4gd4aa4r></path></g></svg> </a> <a href="https://www.instagram.com/chatka_golebia/" data-astro-cid-4gd4aa4r> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-4gd4aa4r><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-4gd4aa4r><rect width="20" height="20" x="2" y="2" rx="5" ry="5" data-astro-cid-4gd4aa4r></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37zm1.5-4.87h.01" data-astro-cid-4gd4aa4r></path></g></svg> </a> </div> `;
}, "C:/Users/Iga/Documents/Code/chatka-golebia/src/components/essentials/SocialLinks.astro", void 0);

const $$Astro$1 = createAstro("https://chatkagolebia.pl");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { backgroundColor } = Astro2.props;
  const headerStyle = backgroundColor ? `background-color: ${backgroundColor};` : `background-color: var(--cream);`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(headerStyle, "style")} data-astro-cid-wjoipca7> <div class="social-links-container" data-astro-cid-wjoipca7> <div class="" data-astro-cid-wjoipca7> <!-- <a href="#" id="newsletter">ZAPISZ SIĘ DO NASZEGO NEWSLETTERA</a> --> </div> <div data-astro-cid-wjoipca7> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "data-astro-cid-wjoipca7": true })} </div> </div> <div class="text" data-astro-cid-wjoipca7> <nav data-astro-cid-wjoipca7> <a href="/" data-astro-cid-wjoipca7><div class="logo-div item1" data-astro-cid-wjoipca7> <img class="logo" src="/images/meta/logo.png" data-astro-cid-wjoipca7> </div></a> <div class="links" data-astro-cid-wjoipca7> <div class="buttons" data-astro-cid-wjoipca7> <a class="button button-peach" href="/znalazlem-golebia" data-astro-cid-wjoipca7>ZNALAZŁEM GOŁĘBIA</a> <a class="button button-grass" href="https://zrzutka.pl/profile/fundacja-chatka-golebia-464519" data-astro-cid-wjoipca7>WSPOMÓŻ NAS</a> </div> <button id="nav-toggle" class="nav-button" data-astro-cid-wjoipca7><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 15 15" data-astro-cid-wjoipca7><path fill="currentColor" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5" clip-rule="evenodd" data-astro-cid-wjoipca7></path></svg></button> <div id="nav-menu" class="nav-menu" data-astro-cid-wjoipca7> <ul class="nav-list" data-astro-cid-wjoipca7> <li data-astro-cid-wjoipca7><a href="/o-nas" data-astro-cid-wjoipca7>O nas</a></li> <li data-astro-cid-wjoipca7><a href="/adopcja" data-astro-cid-wjoipca7>Adopcja</a></li> <!-- <li><a href="/golebie-do-adopcji">Gołębie do adopcji</a></li>          --> <li data-astro-cid-wjoipca7><a href="/aktualnosci" data-astro-cid-wjoipca7>Aktualności</a></li> <li data-astro-cid-wjoipca7><a href="/poradniki" data-astro-cid-wjoipca7>Poradniki</a></li> <!-- <li><a href="/kalkulator-dawek">Kalkulator dawek</a></li> --> <!-- <li><a href="/atlas-gołębi">Atlas gołębi</a></li> --> <li data-astro-cid-wjoipca7><a href="/sponsorzy" data-astro-cid-wjoipca7>Partnerzy</a></li> <li data-astro-cid-wjoipca7><a href="/kontakt" data-astro-cid-wjoipca7>Kontakt</a></li> </ul> </div> </div> </nav></div> </header>  `;
}, "C:/Users/Iga/Documents/Code/chatka-golebia/src/components/essentials/Header.astro", void 0);

const $$Astro = createAstro("https://chatkagolebia.pl");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sdbaykjx> <div class="container" data-astro-cid-sdbaykjx> <div class="logo-div" data-astro-cid-sdbaykjx> <div class="logo" data-astro-cid-sdbaykjx> <h2 data-astro-cid-sdbaykjx>Fundacja<br data-astro-cid-sdbaykjx> Chatka Gołębia</h2> </div> <div data-astro-cid-sdbaykjx> <ul data-astro-cid-sdbaykjx> <li data-astro-cid-sdbaykjx>
KRS: 0001104995
</li> <li data-astro-cid-sdbaykjx>
Numer konta: 51 1140 2004 0000 3102 8487 4428
</li> </ul> </div> <div class="social-links-container" data-astro-cid-sdbaykjx> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "data-astro-cid-sdbaykjx": true })} </div> <div data-astro-cid-sdbaykjx> <span data-astro-cid-sdbaykjx>
Projekt graficzny: 
                    Ula Taraszka. Programowanie: Iga Spodzieja.
</span> <span data-astro-cid-sdbaykjx>
Wykonane w <a href="https://astro.build" data-astro-cid-sdbaykjx>Astro</a>.
</span> </div> </div> <div class="fond-info" data-astro-cid-sdbaykjx> <div data-astro-cid-sdbaykjx> <ul data-astro-cid-sdbaykjx> <h4 data-astro-cid-sdbaykjx>Menu</h4> <li data-astro-cid-sdbaykjx> <a href="/o-nas" data-astro-cid-sdbaykjx>O nas</a> </li> <li data-astro-cid-sdbaykjx> <a href="/adopcja" data-astro-cid-sdbaykjx>Adopcje</a> </li><li data-astro-cid-sdbaykjx> <a href="/poradniki" data-astro-cid-sdbaykjx>Poradniki</a> </li> <li data-astro-cid-sdbaykjx> <a href="/aktualnosci" data-astro-cid-sdbaykjx>Aktualności</a> </li> <li data-astro-cid-sdbaykjx> <a href="/kontakt" data-astro-cid-sdbaykjx>Kontakt</a> </li> </ul> </div> </div> </div> </footer> `;
}, "C:/Users/Iga/Documents/Code/chatka-golebia/src/components/essentials/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
