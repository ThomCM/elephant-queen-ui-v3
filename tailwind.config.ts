import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        colors: {
            black: '#000000',
            blue: {
                DEFAULT: '#39B8FF',
                900: '#3662FF',
            },
            facebook: '#4267B3',
            gray: {
                DEFAULT: '#C0C0C0',
                900: '#969696',
            },
            instagram: '#833AB4',
            red: {
                DEFAULT: '#CB0000',
            },
            transparent: 'transparent',
            twitter: '#1FA1F2',
            white: '#ffffff',
        },
        fontSize: {
            sm: ['13px', '20px'],
            base: ['17px', '24px'],
            lg: ['21px', '28px'],
            xl: ['27px', '34px'],
            '2xl': ['33px', '40px'],
            '3xl': ['44px', '51px'],
            '4xl': ['66px', '73px'],
            '5xl': ['99px', '106px'],
        },
        extend: {
            borderWidth: {
                '3': '3px',
            },
            fontFamily: {
                'museo-sans': ['museo-sans', 'sans-serif'],
            },
            height: {
                '1/10': '10%',
                '9/10': '90%',
            },
            screens: {
                '3xl': '1920px',
            },
            width: {
                '1/10': '10%',
                '9/10': '90%',
            },
        },
    },
    variants: {
        extend: {
            height: ['hover'],
        },
    },
}
