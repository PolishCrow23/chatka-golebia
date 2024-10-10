import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"strony\">Strony</h2>\n<ul>\n<li><a href=\"https://www.pigeonrescue.org/\">Palomacy</a></li>\n<li><a href=\"https://www.diamonddove.info/index.html\">Diamond Dove</a></li>\n<li><a href=\"https://www.pigeons.biz/forums/\">Pigeon.biz</a></li>\n</ul>\n<h2 id=\"artykuły\">Artykuły</h2>\n<ul>\n<li><a href=\"http://www.papugi.dt.pl/pci/pcitrujacerosliny.asp\">Trujące rośliny</a></li>\n<li><a href=\"http://www.dovepage.com/species/domestic/Ringneck/ringneckcolorlist.html?\">Warianty upierzenia u cukrówki</a></li>\n<li><a href=\"https://www.pigeonrescue.org/birds/creating-an-aviary/\">Jak zbudować gołębnik? (en)</a></li>\n<li><a href=\"https://czarnaowca.org/blog/ratunku-na-moim-balkonie-zamieszkaly-golebie/\">Ratunku, na moim balkonie zamieszkały gołębie!</a></li>\n<li><a href=\"https://czarnaowca.org/blog/gdy-chca-nam-zabronic-karmienia-zwierzat/\">Gdy chcą nam zakazać karmienia zwierząt…</a></li>\n</ul>\n<h2 id=\"książki\">Książki</h2>\n<ul>\n<li>Johnston, R. F.; Janiga, M. <strong>Feral Pigeons.</strong> Oxford University Press, 1995.</li>\n<li>Gibbs, D.; Barnes E.; Cox, J. <strong>Pigeons and Doves: A Guide to the Pigeons and Doves of the World.</strong> 2010.</li>\n</ul>\n<h2 id=\"podcasty\">Podcasty</h2>\n<ul>\n<li><a href=\"https://www.scienceofbirds.com/\">The Science of Birds</a></li>\n</ul>\n<h2 id=\"sklepy\">Sklepy</h2>\n<ul>\n<li><a href=\"https://zurawinka-bakalie.pl/karma-dla-golebi-firmy-mdm,30\">Żurawinka - pokarm dla gołębi</a></li>\n<li><a href=\"https://waruj.pl/category/metalowe-klatki-kojce-klatki\">Waruj.pl - klatki kennelowe</a></li>\n</ul>\n<h2 id=\"inne\">Inne</h2>\n<ul>\n<li><a href=\"https://www.google.com/maps/d/u/0/viewer?mid=1Zzb9DNho0v9q7D0_pXt0LlcK_63nr6AI&#x26;ll=51.915896281834065%2C18.871016900000004&#x26;z=7\">Gołębi weterynarze w Polsce</a></li>\n</ul>";

				const frontmatter = {"title":"Polecane","author":"Iga Spodzieja","pubDate":"02.20.2021","description":"Polecane strony, artykuły, książki, podcasty i sklepy.","longDescription":"Polecane strony, artykuły, książki, podcasty i sklepy.","image":"/images/posts/polecane/domino.jpg"};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/posts/Polecane.md";
				const url = undefined;
				function rawContent() {
					return "## Strony\r\n- [Palomacy](https://www.pigeonrescue.org/)\r\n- [Diamond Dove](https://www.diamonddove.info/index.html)\r\n- [Pigeon.biz](https://www.pigeons.biz/forums/)\r\n\r\n## Artykuły\r\n- [Trujące rośliny](http://www.papugi.dt.pl/pci/pcitrujacerosliny.asp)\r\n- [Warianty upierzenia u cukrówki](http://www.dovepage.com/species/domestic/Ringneck/ringneckcolorlist.html?)\r\n- [Jak zbudować gołębnik? (en)](https://www.pigeonrescue.org/birds/creating-an-aviary/)\r\n- [Ratunku, na moim balkonie zamieszkały gołębie!](https://czarnaowca.org/blog/ratunku-na-moim-balkonie-zamieszkaly-golebie/)\r\n- [Gdy chcą nam zakazać karmienia zwierząt...](https://czarnaowca.org/blog/gdy-chca-nam-zabronic-karmienia-zwierzat/)\r\n\r\n## Książki\r\n- Johnston, R. F.; Janiga, M. **Feral Pigeons.** Oxford University Press, 1995.\r\n- Gibbs, D.; Barnes E.; Cox, J. **Pigeons and Doves: A Guide to the Pigeons and Doves of the World.** 2010.\r\n\r\n## Podcasty\r\n- [The Science of Birds](https://www.scienceofbirds.com/)\r\n\r\n## Sklepy\r\n- [Żurawinka - pokarm dla gołębi](https://zurawinka-bakalie.pl/karma-dla-golebi-firmy-mdm,30)\r\n- [Waruj.pl - klatki kennelowe](https://waruj.pl/category/metalowe-klatki-kojce-klatki)\r\n\r\n## Inne\r\n- [Gołębi weterynarze w Polsce](https://www.google.com/maps/d/u/0/viewer?mid=1Zzb9DNho0v9q7D0_pXt0LlcK_63nr6AI&ll=51.915896281834065%2C18.871016900000004&z=7)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"strony","text":"Strony"},{"depth":2,"slug":"artykuły","text":"Artykuły"},{"depth":2,"slug":"książki","text":"Książki"},{"depth":2,"slug":"podcasty","text":"Podcasty"},{"depth":2,"slug":"sklepy","text":"Sklepy"},{"depth":2,"slug":"inne","text":"Inne"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
