import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BSax0pqb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Co to była za niedziela!</p>\n<p>Dostaliśmy sygnał o dwóch pisklakach, którym ktoś, ściągając drabinę, nieumyślnie zniszczył gniazdo. Pisklaki były odpowiednio zabezpieczone, dogrzewane, ale czas naglił. W Krakowie znalezienie pomocy dla gołębia na co dzień jest problemem a co dopiero dla dwóch piskląt w niedzielne popołudnie. Łącza rozpaliły się do czerwoności, kilka osób naraz zaczęło pisać, gdzie tylko się da i już po godzinie mieliśmy gotowe rozwiązanie.</p>\n<p>Pisklęta na jedną noc do siebie zdecydowali się wziąć nasi wspaniali wolontariusze Maciej Satkiewicz i ▪️Anna Żelechowska▪️  Maciek pojechał je odebrać. Zdalnie na bieżąco wszelkich instrukcji udzielała Iga Spodzieja , której w udało się załatwić dla maluchów miejsce w Akcja Dla Dzikich Zwierząt.  Pisklaki dostały troskliwą opiekę, odpowiednie warunki, zostały nakarmione.\r\nDziś rano zostały przekazane do ośrodka.</p>\n<p>Gorąco dziękujemy Akcji za przyjęcie piskląt!</p>\n<p>Jeszcze goręcej dziękujemy Ani i Michałowi za poświęcenie niedzielnego popołudnia i nocy!</p>";

				const frontmatter = {"title":"Uratowane pisklaki","pubDate":"10.07.2024","author":"Dariusz Grochal","image":"/images/interventions/uratowane-pisklaki/pisklaki.jpg","description":"Dostaliśmy sygnał o dwóch pisklakach, którym ktoś, ściągając drabinę, nieumyślnie zniszczył gniazdo."};
				const file = "C:/Users/Iga/Documents/Code/chatka-golebia/src/content/interventions/Uratowane pisklaki.md";
				const url = undefined;
				function rawContent() {
					return "\r\nCo to była za niedziela!\r\n\r\nDostaliśmy sygnał o dwóch pisklakach, którym ktoś, ściągając drabinę, nieumyślnie zniszczył gniazdo. Pisklaki były odpowiednio zabezpieczone, dogrzewane, ale czas naglił. W Krakowie znalezienie pomocy dla gołębia na co dzień jest problemem a co dopiero dla dwóch piskląt w niedzielne popołudnie. Łącza rozpaliły się do czerwoności, kilka osób naraz zaczęło pisać, gdzie tylko się da i już po godzinie mieliśmy gotowe rozwiązanie.\r\n\r\nPisklęta na jedną noc do siebie zdecydowali się wziąć nasi wspaniali wolontariusze Maciej Satkiewicz i ▪️Anna Żelechowska▪️  Maciek pojechał je odebrać. Zdalnie na bieżąco wszelkich instrukcji udzielała Iga Spodzieja , której w udało się załatwić dla maluchów miejsce w Akcja Dla Dzikich Zwierząt.  Pisklaki dostały troskliwą opiekę, odpowiednie warunki, zostały nakarmione.\r\nDziś rano zostały przekazane do ośrodka. \r\n\r\nGorąco dziękujemy Akcji za przyjęcie piskląt!\r\n\r\nJeszcze goręcej dziękujemy Ani i Michałowi za poświęcenie niedzielnego popołudnia i nocy!\r\n";
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
