import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Równo z hejnałem o godzinie 11:00, przystąpiliśmy do działań. Jak zawsze działo się dużo a wszystko przebiegało dynamicznie. Odławianie gołębi, usuwanie sznurków, zabezpieczanie chorych, rozdawanie ziarna, ulotek, rozmowy z turystami i mieszkańcami Krakowa. Dwie godziny intensywnej pracy zaowocowały tym, że pomoc uzyskało ponad 30 gołębi!</p>\n<p>Akcja stała się już sztandarowym projektem Fundacji i na dobre wpisała się w krajobraz starego miasta. Wielką radość sprawiało nam to, że widzieliśmy gołębie, którym pomocy udzieliliśmy na poprzednich akcjach.</p>\n<blockquote>\n<p>Akcja w liczbach:</p>\n<ul>\n<li>Ilość zdjętych sznurków: ok. 20</li>\n<li>Ilość chorych gołębi, którym pomoc udzieliła Przychodnia Salamandra: 9</li>\n<li>Ilość gołębi przekazanych do KTOZ: 13</li>\n<li>Ilość gołębi przejętych przez naszych wolontariuszy: 2</li>\n<li>Ilość rozdanego ziarna: 35 kilogramów</li>\n</ul>\n</blockquote>\n<p>Bonus – uratowaliśmy też jedną kawkę nad którą opiekę przejęła Akcja dla Dzikich Zwierząt działająca przy Przychodni Weterynaryjnej „Vetika”</p>\n<p>Gorąco dziękujemy wszystkim którzy wzięli udział w akcji i jej przygotowaniach. Bez waszej pracy nie udałoby nam się tak sprawnie przeprowadzić akcji.</p>\n<p>Dziękujemy również Przychodni Weterynaryjnej „Salamandra” , za przyjęcie nieco większej liczby gołębi, niż było to w planach.</p>";

				const frontmatter = {"title":"Akcja Sznurek – kolejny sukces!","pubDate":"09.04.2024","image":"/images/posts/img_2338.jpg","description":"W sobotę 31 sierpnia na krakowskim rynku, już po raz czwarty, Fundacja Chatka Gołębia, zorganizowała „Akcję Sznurek”"};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/meetups/akcja-sznurek-–-kolejny-sukces.md";
				const url = undefined;
				function rawContent() {
					return "Równo z hejnałem o godzinie 11:00, przystąpiliśmy do działań. Jak zawsze działo się dużo a wszystko przebiegało dynamicznie. Odławianie gołębi, usuwanie sznurków, zabezpieczanie chorych, rozdawanie ziarna, ulotek, rozmowy z turystami i mieszkańcami Krakowa. Dwie godziny intensywnej pracy zaowocowały tym, że pomoc uzyskało ponad 30 gołębi!\r\n\r\nAkcja stała się już sztandarowym projektem Fundacji i na dobre wpisała się w krajobraz starego miasta. Wielką radość sprawiało nam to, że widzieliśmy gołębie, którym pomocy udzieliliśmy na poprzednich akcjach. \r\n\r\n> Akcja w liczbach:\r\n>\r\n> * Ilość zdjętych sznurków: ok. 20\r\n> * Ilość chorych gołębi, którym pomoc udzieliła Przychodnia Salamandra: 9\r\n> * Ilość gołębi przekazanych do KTOZ: 13\r\n> * Ilość gołębi przejętych przez naszych wolontariuszy: 2\r\n> * Ilość rozdanego ziarna: 35 kilogramów\r\n\r\nBonus – uratowaliśmy też jedną kawkę nad którą opiekę przejęła Akcja dla Dzikich Zwierząt działająca przy Przychodni Weterynaryjnej „Vetika”\r\n\r\n\r\n\r\nGorąco dziękujemy wszystkim którzy wzięli udział w akcji i jej przygotowaniach. Bez waszej pracy nie udałoby nam się tak sprawnie przeprowadzić akcji. \r\n\r\nDziękujemy również Przychodni Weterynaryjnej „Salamandra” , za przyjęcie nieco większej liczby gołębi, niż było to w planach.\r\n";
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
