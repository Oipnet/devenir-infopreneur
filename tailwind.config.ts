import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'primary':  {
                    DEFAULT: '#7cc3fb',
                },
                'secondary': {
                    DEFAULT: '#1f4489',
                },
                default: '#c0e0fd',
                'malibu': {
                    '50': '#eff7ff',
                    '100': '#dbedfe',
                    '200': '#c0e0fd',
                    '300': '#7cc3fb',
                    '400': '#62b2f8',
                    '500': '#3d93f4',
                    '600': '#2775e9',
                    '700': '#1f5fd6',
                    '800': '#204dad',
                    '900': '#1f4489',
                    '950': '#182a53',
                },
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
                'oswald': ['Oswald', 'sans-serif'],
            }
        }
    }
}