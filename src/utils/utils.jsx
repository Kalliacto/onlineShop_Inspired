export const genderList = [
    {
        link: 'women',
        title: 'Женщины',
    },
    {
        link: 'men',
        title: 'Мужчины',
    },
];

export const categoryList = [
    {
        link: 'bras',
        title: 'Бюстгальтеры',
    },
    {
        link: 'panties',
        title: 'Трусы',
    },
    {
        link: 'socks',
        title: 'Носки',
    },
    {
        link: 'bathorobes',
        title: 'Халаты',
    },
    {
        link: 'thermal',
        title: 'Термобелье',
    },
    {
        link: 'pijamas',
        title: 'Пижамы',
    },
];

export const footerList = [
    {
        link: 'women',
        title: 'Женщины',
        categories: [
            {
                link: 'bras',
                title: 'Бюстгальтеры',
            },
            {
                link: 'panties',
                title: 'Трусы',
            },
            {
                link: 'socks',
                title: 'носки',
            },
            {
                link: 'bathorobes',
                title: 'Халаты',
            },
            {
                link: 'thermal',
                title: 'Термобелье',
            },
            {
                link: 'pijamas',
                title: 'Пижамы',
            },
        ],
    },
    {
        link: 'men',
        title: 'Мужчины',
        categories: [
            {
                link: 'panties',
                title: 'Трусы',
            },
            {
                link: 'socks',
                title: 'носки',
            },
            {
                link: 'bathorobes',
                title: 'Халаты',
            },
            {
                link: 'thermal',
                title: 'Термобелье',
            },
        ],
    },
];

export const getEndings = (num, word) => {
    const res = num % 10;
    if (res === 1) {
        return ` ${word}`;
    } else if (1 < res && res < 5) {
        return ` ${word}а`;
    } else if (num > 5 || !num) {
        return ` ${word}ов`;
    }
};
