import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Fundacja Chatka Gołębia zaprasza na kolejną Akcję Sznurek.\r\nAkcja Sznurek – to cykliczne wydarzenie organizowane przez Fundację Chatka Gołębia.\r\nCelem akcji jest udzielanie pomocy weterynaryjnej gołębiom miejskim oraz promocja pozytywnego wizerunku gołębi.\r\nW trakcie trwania akcji będziecie mogli uczestniczyć w odławianiu gołębi wymagających pomocy medycznej. Nasi wolontariusze będą udzielać pomocy gołębiom na miejscu (zdjęcie sznurków z nóg). Gołębie, którym udzielenie pomocy na miejscu będzie niemożliwe, zostaną zabezpieczone, i przewiezione do Kliniki Weterynaryjnej „Salamandra”.</p>\n<p>Cały czas będzie też czynne nasze stoisko, gdzie będziecie mogli za darmo pobrać ziarno dla gołąbków, materiały informacyjne, ulotki. Będziecie mogli również porozmawiać z nami o gołębiach; dowiedzieć się jak na co dzień żyją gołębie miejskie; dlaczego są wyjątkowym gatunkiem zdziczałych, a nie dzikich ptaków?\r\nNasze stoisko będzie funkcjonować do godziny 15:00.</p>\n<p>Chętne osoby będą mogły przekazać darowiznę na rzecz fundacji do specjalnej puszki. Gorąco zapraszamy!</p>\n<p>AKCJA SZNUREK</p>\n<p><strong>Data: 31.08.2024</strong></p>\n<p><strong>Godzina: 11:00 – 15:00</strong></p>\n<p><strong>Miejsce: Rynek Główny w Krakowie (obok fontanny)</strong></p>\n<p>Organizator wydarzenia</p>\n<p>Fundacja Chatka Gołębia</p>\n<p><a href=\"http://www.chatkagolebia.pl\">www.chatkagolebia.pl</a></p>\n<p><a href=\"mailto:fundacja@chatkagolebia.pl\">fundacja@chatkagolebia.pl</a></p>";

				const frontmatter = {"title":"Akcja Sznurek 4. Edycja","pubDate":"2024.08.24","description":"Zapraszamy na kolejną edycję Akcji Sznurek! 31 sierpnia, 11:00, krakowski rynek.","image":"/images/posts/2dfe94fb-79ab-4f46-98a6-e94e44c74300.jpeg"};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/meetups/akcja-sznurek-4.md";
				const url = undefined;
				function rawContent() {
					return "\r\nFundacja Chatka Gołębia zaprasza na kolejną Akcję Sznurek.\r\nAkcja Sznurek – to cykliczne wydarzenie organizowane przez Fundację Chatka Gołębia.\r\nCelem akcji jest udzielanie pomocy weterynaryjnej gołębiom miejskim oraz promocja pozytywnego wizerunku gołębi.\r\nW trakcie trwania akcji będziecie mogli uczestniczyć w odławianiu gołębi wymagających pomocy medycznej. Nasi wolontariusze będą udzielać pomocy gołębiom na miejscu (zdjęcie sznurków z nóg). Gołębie, którym udzielenie pomocy na miejscu będzie niemożliwe, zostaną zabezpieczone, i przewiezione do Kliniki Weterynaryjnej „Salamandra”.\r\n\r\nCały czas będzie też czynne nasze stoisko, gdzie będziecie mogli za darmo pobrać ziarno dla gołąbków, materiały informacyjne, ulotki. Będziecie mogli również porozmawiać z nami o gołębiach; dowiedzieć się jak na co dzień żyją gołębie miejskie; dlaczego są wyjątkowym gatunkiem zdziczałych, a nie dzikich ptaków?\r\nNasze stoisko będzie funkcjonować do godziny 15:00.\r\n\r\nChętne osoby będą mogły przekazać darowiznę na rzecz fundacji do specjalnej puszki. Gorąco zapraszamy!\r\n\r\nAKCJA SZNUREK\r\n\r\n**Data: 31.08.2024**\r\n\r\n**Godzina: 11:00 – 15:00**\r\n\r\n**Miejsce: Rynek Główny w Krakowie (obok fontanny)**\r\n\r\nOrganizator wydarzenia\r\n\r\nFundacja Chatka Gołębia\r\n\r\nwww.chatkagolebia.pl\r\n\r\nfundacja@chatkagolebia.pl\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
