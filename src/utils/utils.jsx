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

export const getEnding = (num) => {
    const str = String(num);
    if (str.length > 1) {
        const lastSymbols = str[str.length - 2] + str[str.length - 1];
        if (![11, 12, 13, 14].includes(Number(lastSymbols))) {
            const lastSymbol = str[str.length - 1];
            if (Number(lastSymbol) === 1) {
                return '';
            } else if ([2, 3, 4].includes(Number(lastSymbol))) {
                return 'а';
            } else {
                return 'ов';
            }
        } else {
            return 'ов';
        }
    } else {
        const lastSymbol = str[str.length - 1];
        if (Number(lastSymbol) === 1) {
            return '';
        } else if ([2, 3, 4].includes(Number(lastSymbol))) {
            return 'а';
        } else {
            return 'ов';
        }
    }
};

export const getEndingsTwo = (num, word) => {
    const str = String(num);

    if (str.endsWith('1')) {
        if (str.length > 1) {
            const lastSymbols = str[str.length - 2] + str[str.length - 1];
            if (lastSymbols === '11') {
                return ` ${word}о`;
            }
        }
    } else {
        return ` ${word}о`;
    }

    return ` ${word}`;
};

export const scrollToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
};
