import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>O ile w Internecie można znaleźć sporo informacji na temat opieki nad pisklętami gołębi w języku angielskim, to poradniki w języku polskim są bardzo ogólne i dotyczą wielu gatunków ptaków, a nie konkretnie gołębi. Dlatego pomyślałam, że taki post może być pomocny dla osób, które, np. znalazły wyrzucone pisklęta gołębia hodowlanego na śmietniku i chciałyby się nimi zaopiekować.</p>\n<p>Poradnik oparty jest na 22 źródłach: ornitologicznych, weterynaryjnych i fundacyjnych oraz zawiera podstawowe informacje na temat opieki nad pisklętami gołębi: określenie wieku, ogrzewanie, karmienie sposobem “strzykawka i balon” oraz zapewnienie lokum.</p>\n<p>W razie chęci otrzymania dostępu do posta, proszę o kontakt mailowy na adres <a href=\"mailto:chatka.golebia@gmail.com\">chatka.golebia@gmail.com</a> lub kontakt w wiadomości prywatnej na <a href=\"https://www.facebook.com/chatkagolebia\">stronie na Facebooku</a>.</p>\n<p>Poradnik nie zastąpi pomocy weterynarza specjalizującego się w leczeniu ptaków albo przyjaznego dla gołębi ośrodka rehabilitacji dzikich zwierząt lub fundacji.</p>\n<p><img src=\"/images/posts/pisklęta/pisklęta-małe.jpg\" alt=\"\"></p>";

				const frontmatter = {"pubDate":"2022.11.23","author":"Iga Spodzieja","title":"Opieka nad pisklętami gołębi","description":"Określenie wieku, ogrzewanie, karmienie, lokum.","image":"/images/posts/pisklęta/pisklęta-front.jpg","longDescription":"O ile w Internecie można znaleźć sporo informacji na temat opieki nad pisklętami gołębi w języku angielskim, to poradniki w języku polskim są bardzo ogólne i dotyczą wielu gatunków ptaków, a nie konkretnie gołębi. Dlatego ten post może być pomocny dla osób, które, np. znalazły wyrzucone pisklęta gołębia hodowlanego na śmietniku i chciałyby się nimi zaopiekować. "};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/posts/Opieka nad pisklętami gołębi - intro.md";
				const url = undefined;
				function rawContent() {
					return "\r\nO ile w Internecie można znaleźć sporo informacji na temat opieki nad pisklętami gołębi w języku angielskim, to poradniki w języku polskim są bardzo ogólne i dotyczą wielu gatunków ptaków, a nie konkretnie gołębi. Dlatego pomyślałam, że taki post może być pomocny dla osób, które, np. znalazły wyrzucone pisklęta gołębia hodowlanego na śmietniku i chciałyby się nimi zaopiekować. \r\n\r\nPoradnik oparty jest na 22 źródłach: ornitologicznych, weterynaryjnych i fundacyjnych oraz zawiera podstawowe informacje na temat opieki nad pisklętami gołębi: określenie wieku, ogrzewanie, karmienie sposobem \"strzykawka i balon\" oraz zapewnienie lokum.\r\n\r\nW razie chęci otrzymania dostępu do posta, proszę o kontakt mailowy na adres chatka.golebia@gmail.com lub kontakt w wiadomości prywatnej na [stronie na Facebooku](https://www.facebook.com/chatkagolebia).\r\n\r\nPoradnik nie zastąpi pomocy weterynarza specjalizującego się w leczeniu ptaków albo przyjaznego dla gołębi ośrodka rehabilitacji dzikich zwierząt lub fundacji.\r\n\r\n![](/images/posts/pisklęta/pisklęta-małe.jpg)\r\n\r\n\r\n";
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
