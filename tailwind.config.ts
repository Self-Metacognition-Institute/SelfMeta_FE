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
        opacity: generateOpacityRange(1, 100),
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
            colors: {
                primary: "#3896BD",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
        container: {
            center: true,
            padding: "16px"
        }
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
