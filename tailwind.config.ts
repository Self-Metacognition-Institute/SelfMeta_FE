import type {Config} from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'min-2xl': {min: "1681px"},
            'min-xl': {min: "1441px"},
            'min-lg': {min: "1281px"},
            'min-md': {min: "1025px"},
            'min-sm': {min: "769px"},
            'min-xsm': {min: "577px"},
            'min-xs': {min: "481px"},
            '2xl': {max: "1680px"},
            'xl': {max: "1440px"},
            'lg': {max: "1280px"},
            'md': {max: "1024px"},
            'sm': {max: "768px"},
            'xsm': {max: "576px"},
            'xs': {max: "480px"},
            '2xs': {max: "375px"},
        },
        opacity: generateOpacityRange(0, 100),
        zIndex: generateZIndexRange(1, 100),
        transitionDuration: generateTransitionDurationRange(100, 1000),
        transitionDelay: generateDelayRange(100, 1000),
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9',
            unset: 'unset',
        },
        fontFamily: {
            sans: ["__Archivo_565873", "__Archivo_Fallback_565873", 'Montserrat', 'Liberation Mono', 'Menlo', 'Courier', 'monospace']
        },
        extend: {
            boxShadow: {
                general: "0px 2px 8px 0px rgba(0, 0, 0, 0.15)"
            },
            spacing: {
                0.75: '0.1875rem',
                4.5: '1.125rem',
                5.5: '1.375rem',
                6.5: '1.625rem',
                7.5: '1.875rem',
                8.5: '2.125rem',
                9.5: '2.375rem',
                13: '3.25rem',
                15: '3.75rem',
                17: '4.375rem',
                18: '4.5rem',
                22: '5.625rem',
                30: '7.5rem',
                54: '13.5rem',
            },
            fontSize: {
                h1: ['38px', '46px'],
                h2: ['30px', '40px'],
                h3: ['24px', '32px'],
                h4: ['20px', '28px'],
                h5: ['16px', '24px'],
                regular: ['14px', '22px']
            },
            borderRadius: {
                main: "9px"
            },
            colors: {
                red: {
                    1: '#fff1f0',
                    2: '#ffccc7',
                    3: '#ffa39e',
                    4: '#ff7875',
                    5: '#ff4d4f',
                    6: '#f5222d',
                    7: '#cf1322',
                    8: '#a8071a',
                    9: '#820014',
                    10: '#5c0011',
                },
                volcano: {
                    1: '#fff2e8',
                    2: '#ffd8bf',
                    3: '#ffbb96',
                    4: '#ff9c6e',
                    5: '#ff7a45',
                    6: '#fa541c',
                    7: '#d4380d',
                    8: '#ad2102',
                    9: '#871400',
                    10: '#610b00',
                },
                orange: {
                    1: '#fff7e6',
                    2: '#ffe7ba',
                    3: '#ffd591',
                    4: '#ffc069',
                    5: '#ffa940',
                    6: '#fa8c16',
                    7: '#d46b08',
                    8: '#ad4e00',
                    9: '#873800',
                    10: '#612500',
                },
                gold: {
                    1: '#fffbe6',
                    2: '#fff1b8',
                    3: '#ffe58f',
                    4: '#ffd666',
                    5: '#ffc53d',
                    6: '#faad14',
                    7: '#d48806',
                    8: '#ad6800',
                    9: '#874d00',
                    10: '#613400',
                },
                yellow: {
                    1: '#feffe6',
                    2: '#ffffb8',
                    3: '#fffb8f',
                    4: '#fff566',
                    5: '#ffec3d',
                    6: '#fadb14',
                    7: '#d4b106',
                    8: '#ad8b00',
                    9: '#876800',
                    10: '#614700',
                },
                lime: {
                    1: '#fcffe6',
                    2: '#f4ffb8',
                    3: '#eaff8f',
                    4: '#d3f261',
                    5: '#bae637',
                    6: '#a0d911',
                    7: '#7cb305',
                    8: '#5b8c00',
                    9: '#3f6600',
                    10: '#254000',
                },
                green: {
                    1: '#f6ffed',
                    2: '#d9f7be',
                    3: '#b7eb8f',
                    4: '#95de64',
                    5: '#73d13d',
                    6: '#52c41a',
                    7: '#389e0d',
                    8: '#237804',
                    9: '#135200',
                    10: '#092b00',
                },
                cyan: {
                    1: '#e6fffb',
                    2: '#b5f5ec',
                    3: '#87e8de',
                    4: '#5cdbd3',
                    5: '#36cfc9',
                    6: '#13c2c2',
                    7: '#08979c',
                    8: '#006d75',
                    9: '#00474f',
                    10: '#002329',
                },
                blue: {
                    1: '#e6f7ff',
                    2: '#bae7ff',
                    3: '#91d5ff',
                    4: '#69c0ff',
                    5: '#40a9ff',
                    6: '#1890ff',
                    7: '#096dd9',
                    8: '#0050b3',
                    9: '#003a8c',
                    10: '#002766',
                },
                geekblue: {
                    1: '#f0f5ff',
                    2: '#d6e4ff',
                    3: '#adc6ff',
                    4: '#85a5ff',
                    5: '#597ef7',
                    6: '#2f54eb',
                    7: '#1d39c4',
                    8: '#10239e',
                    9: '#061178',
                    10: '#030852',
                },
                purple: {
                    1: '#f9f0ff',
                    2: '#efdbff',
                    3: '#d3adf7',
                    4: '#b37feb',
                    5: '#9254de',
                    6: '#722ed1',
                    7: '#531dab',
                    8: '#391085',
                    9: '#22075e',
                    10: '#120338',
                },
                magenta: {
                    1: '#fff0f6',
                    2: '#ffd6e7',
                    3: '#ffadd2',
                    4: '#ff85c0',
                    5: '#f759ab',
                    6: '#eb2f96',
                    7: '#c41d7f',
                    8: '#9e1068',
                    9: '#780650',
                    10: '#520339',
                },
                gray: {
                    1: '#ffffff',
                    2: '#fafafa',
                    3: '#f5f5f5',
                    4: '#e8e8e8',
                    5: '#d9d9d9',
                    6: '#bfbfbf',
                    7: '#8c8c8c',
                    8: '#595959',
                    9: '#434343',
                    10: '#262626',
                    11: '#1f1f1f',
                    12: '#141414',
                    13: '#000000',
                },
                primary: "#3896BD",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
        container: {
            center: true,
            padding: "16px"
        },
    },
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                ".flex-center": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            })
        })
    ],
};

// Generate Opacities
function generateOpacityRange(start: number, end: number) {
    const opacityRange = {};
    for (let i = start; i <= end; i++) {
        // @ts-ignore
        opacityRange[i] = (i / 100).toString();
    }
    return opacityRange;
}

// Generate z-indexes
function generateZIndexRange(start: number, end: number) {
    const zIndexRange = {};
    for (let i = start; i <= end; i++) {
        // @ts-ignore
        zIndexRange[i] = i.toString();
    }
    return zIndexRange;
}

// Generate Transition Durations
function generateTransitionDurationRange(start: number, end: number) {
    const transitionDurationRange = {};
    for (let i = start; i <= end; i += 50) {
        // @ts-ignore
        transitionDurationRange[i] = (i + "ms").toString();
    }
    return transitionDurationRange;
}

// Generate Transition Delays
function generateDelayRange(start: number, end: number) {
    const delayRange = {};
    for (let i = start; i <= end; i += 50) {
        // @ts-ignore
        delayRange[i] = (i + "ms").toString();
    }
    return delayRange;
}

export default config;
