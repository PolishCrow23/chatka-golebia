export interface Avatar {
    firstName: string;
    lastName: string;
    imageSrc: string;
    }

const imagePath = "/images/pages/o-nas";

export const avatars: Avatar[] = [
    {
        firstName: "Ula",
        lastName: "Taraszka",
        imageSrc: `${imagePath}/Ula.jpg`,
    },
    {
        firstName: "Iga",
        lastName: "Spodzieja",
        imageSrc: `${imagePath}/Iga.jpg`,
    },
    {
        firstName: "Dariusz",
        lastName: "Grochal",
        imageSrc: `${imagePath}/Dariusz.jpg`,
    },
    {
        firstName: "Julia",
        lastName: "Ziarkowska",
        imageSrc: `${imagePath}/Julia.jpg`,
    },
    {
        firstName: "Wiktoria",
        lastName: "Kędzierska",
        imageSrc: `${imagePath}/Wika.jpg`,
    },
    {
        firstName: "Tomasz",
        lastName: "Plasa",
        imageSrc: `${imagePath}/Tomasz.jpg`,
    },
    {
        firstName: "Anna",
        lastName: "Spodzieja",
        imageSrc: `${imagePath}/Anna.jpg`,
    }
];

export const altNames = avatars.map(avatar => avatar.firstName + avatar.lastName);