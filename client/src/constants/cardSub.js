import { COLORS } from "./colors";

export const CARD_INFO = [
    {
        sub: 'BASIC',
        info: [
            'Subscription to 1 martial art',
            '1 hour per day',
            'Unlimited use of Fitness Center'
        ],
        price: '70$',
        img: '/assets/images/imgs/plan-basic.jpg',
        color: COLORS.brown50,
        position:'600px'
    },
    {
        sub:'PREMIUM',
        info: [
            'Subscription to 2 martial art',
            '3 hour per day',
            'Unlimited use of Fitness Center'
        ],        price:'150$',
        img:'/assets/images/imgs/plan-premium.jpg',
        color:COLORS.yellow,
        position:'650px'
    },
    {
        sub:'PRO',
        info: [
            'Subscription to all martial art',
            'Unlimited classes',
            'Unlimited use of Fitness Center',
            'Space reservation'
        ],
        price:'400$',
        img:'/assets/images/imgs/plan-professional.jpg',
        color:COLORS.black,
        position:'750px'
    },
]