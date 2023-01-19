import {
    // Hot
    curtisMacnewton, mosaMoseneke, rawpixel,

    // Profiles
    copy1, copy2, copy3,

    // Clubs
    copy9, copy11, copy12, copy13,
} from './images';

export const hot = [
    {
        id: 1,
        img: curtisMacnewton,
        title: "Early Stage of Football Industry",
        date: "June, 29",
    },
    {
        id: 2,
        img: rawpixel,
        title: "Early Stage of Football Industry",
        date: "June, 29",
    },
    {
        id: 3,
        img: mosaMoseneke,
        title: "Early Stage of Football Industry",
        date: "June, 29",
    },
]

export const profiles = [
    {
        img: copy1,
        name: "JOAO FELIX",
        club: "Atletico Madrid",
        born: "28 Apr 1993",
        position: "AMF",
        height: "1.81",
        weight: "80",
        statistic: {
            winRate: 75,
            playedGames: 79,
            draw: 62,
            games: 34,
            goals: 25,
            assist: 25,
        },
        moreInfo: "João Félix Sequeira  born 10 November 1999) is a Portuguese professional footballer who plays for Spanish club Atlético Madrid and the Portugal national team as a striker. He can also play as a winger or an attacking midfielder. Félix initially trained at Porto's youth ranks before moving to rivals Benfica in 2015. He began playing for the club's reserve side a year later and was promoted to the first-team in 2018, making his professional debut at 18 years old."
    },
    {
        img: copy2,
        name: "Amadou Haida",
        club: "Salzburg",
        born: "",
        position: "",
        height: "",
        weight: "",
        statistic: {
            winRate: 0,
            playedGames: 0,
            draw: 0,
            games: 0,
            goals: 0,
            assist: 0,
        },
        moreInfo: ""
    },
    {
        img: copy3,
        name: "Luka Jović",
        club: "Frankfurt ",
        born: "",
        position: "",
        height: "",
        weight: "",
        statistic: {
            winRate: 75,
            playedGames: 79,
            draw: 62,
            games: 34,
            goals: 25,
            assist: 25,
        },
        moreInfo: ""
    },
];

export const matchScores = [
    {
        id: 1,
        type: "Premier League",
        time: "Fulltime",
        date: "27 June, 2019",
        leftClub: {
            img: copy13,
            name: "Manchester Utd",
            goals: 0,
        },
        rightClub: {
            img: copy9,
            name: "Arsenal",
            goals: 2,
        }
    },
    {
        id: 2,
        type: "Premier League",
        time: "Fulltime",
        date: "27 June, 2019",
        leftClub: {
            img: copy11,
            name: "Liverpool",
            goals: 3,
        },
        rightClub: {
            img: copy12,
            name: "Chelsea",
            goals: 1,
        }
    },
];

