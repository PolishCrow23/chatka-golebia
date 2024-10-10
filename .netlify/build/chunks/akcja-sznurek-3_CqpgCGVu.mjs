import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Kolejna Akcja Sznurek odbędzie się 22 czerwca 2024 roku.</p>\n<p>Spotykamy się jak zawsze na Rynku Głównym pod fontanną.</p>\n<p>Uwaga! Akcja rozpocznie się o godzinie 11:00! Zmiana spowodowana jest godzinnymi pracy kliniki weterynaryjnej Salamandra, do której trafiają po akcji gołębie.</p>\n<p>Jak zawsze zapewniamy cały osprzęt, a więc: rękawiczki, skalpele, ziarno dla gołębi. Przed startem akcji udzielimy jeszcze krótkiej informacji. Osoby, które były na poprzednich akcjach wiedzą już co i jak robić. Odławiamy gołębie, które mają zaplątane sznurki na nogach. W razie możliwości udzielamy im pomocy weterynaryjnej na miejscu, poważniejsze przypadki zabezpieczamy do kartonów. Po akcji organizatorzy zawiozą gołębie do kliniki Salamandra, gdzie zostanie im udzielona pomoc.</p>\n<p>Dwie pierwsze akcje okazały się sukcesem i chcemy dalej rozwijać nasz sztandarowy projekt. W planach mamy kupno stolika, gdzie będziemy mogli prezentować materiały kampanijne, druk banneru. W tym celu zakładamy zrzutkę dedykowaną tej akcji. Koszt jeden akcji to ok. 500 zł, więc prosimy o wpłaty, gdyż tylko nadwyżka pozwoli nam na dalsze inwestycje.</p>";

				const frontmatter = {"title":"Akcja Sznurek 3. Edycja","pubDate":"2024.08.25","description":"Zapraszamy na kolejną edycję Akcji Sznurek! 22 czerwca, 11:00, krakowski rynek.","image":"/images/meetups/akcja-sznurek-4.jpg"};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/meetups/akcja-sznurek-3.md";
				const url = undefined;
				function rawContent() {
					return "\r\nKolejna Akcja Sznurek odbędzie się 22 czerwca 2024 roku.\r\n\r\nSpotykamy się jak zawsze na Rynku Głównym pod fontanną.\r\n\r\nUwaga! Akcja rozpocznie się o godzinie 11:00! Zmiana spowodowana jest godzinnymi pracy kliniki weterynaryjnej Salamandra, do której trafiają po akcji gołębie.\r\n\r\nJak zawsze zapewniamy cały osprzęt, a więc: rękawiczki, skalpele, ziarno dla gołębi. Przed startem akcji udzielimy jeszcze krótkiej informacji. Osoby, które były na poprzednich akcjach wiedzą już co i jak robić. Odławiamy gołębie, które mają zaplątane sznurki na nogach. W razie możliwości udzielamy im pomocy weterynaryjnej na miejscu, poważniejsze przypadki zabezpieczamy do kartonów. Po akcji organizatorzy zawiozą gołębie do kliniki Salamandra, gdzie zostanie im udzielona pomoc.\r\n\r\nDwie pierwsze akcje okazały się sukcesem i chcemy dalej rozwijać nasz sztandarowy projekt. W planach mamy kupno stolika, gdzie będziemy mogli prezentować materiały kampanijne, druk banneru. W tym celu zakładamy zrzutkę dedykowaną tej akcji. Koszt jeden akcji to ok. 500 zł, więc prosimy o wpłaty, gdyż tylko nadwyżka pozwoli nam na dalsze inwestycje.";
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
