import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Koalicja „Niech Żyją” (której członkiem jest też Chatka Gołębia), składa zawiadomienie do prokuratury i będzie się też domagać usunięcia z Polskiego Związku Łowieckiego, myśliwego, który pomylił grzywacze z siniakami. O ile polowania na grzywacze są legalne, o tyle siniaki są w Polsce objęte ochroną ścisłą.</p>\n<p>Jeden z myśliwych na portalu Passion 4Hunters pochwalił się swoim pierwszym polowaniem „na pióro”. Czujne oko miłośników zwierząt okazało się lepsze od oczu myśliwego, który nie zauważył, że wśród zabitych przez niego grzywaczy są też siniaki.</p>\n<p>Zdjęcie bardzo szybko zniknęło z portalu, ale w porę zostało zabezpieczone m.in. przez dr. Roberta Maślaka</p>\n<p><strong>Źródła</strong></p>\n<p>x/niechzyja, fb/robertmaslak</p>";

				const frontmatter = {"title":"Myśliwi, nawet gdy mają ptaka w ręku, nie umieją rozpoznać gatunku","author":"Dariusz Grochal","pubDate":"08.22.2024","image":"/images/posts/2024_08_22.png","description":"Sezon polowań na grzywacze zaczął się 15 sierpnia, a już pierwszy myśliwy będzie tłumaczył się przed prokuratorem."};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/reports/myśliwi-nawet-gdy-mają-ptaka-w-ręku-nie-umieją-rozpoznać-gatunku.md";
				const url = undefined;
				function rawContent() {
					return "Koalicja „Niech Żyją” (której członkiem jest też Chatka Gołębia), składa zawiadomienie do prokuratury i będzie się też domagać usunięcia z Polskiego Związku Łowieckiego, myśliwego, który pomylił grzywacze z siniakami. O ile polowania na grzywacze są legalne, o tyle siniaki są w Polsce objęte ochroną ścisłą.\r\n\r\nJeden z myśliwych na portalu Passion 4Hunters pochwalił się swoim pierwszym polowaniem „na pióro”. Czujne oko miłośników zwierząt okazało się lepsze od oczu myśliwego, który nie zauważył, że wśród zabitych przez niego grzywaczy są też siniaki.\r\n\r\nZdjęcie bardzo szybko zniknęło z portalu, ale w porę zostało zabezpieczone m.in. przez dr. Roberta Maślaka\r\n\r\n**Źródła**\r\n\r\nx/niechzyja, fb/robertmaslak\r\n";
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
