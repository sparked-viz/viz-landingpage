/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /* ── Brand ── */
                brand: {
                    DEFAULT: '#2E9D48',           /* SparkEdu green */
                    hover:   '#268040',
                    subtle:  'rgba(46,157,72,0.10)',
                },

                /* ── Backgrounds ── */
                bg: {
                    DEFAULT:  '#FFFFFF',
                    secondary:'#F0F4FF',           /* subtle blue-tinted gray */
                    dark:     '#0D3A8C',           /* SparkEdu brand blue */
                    raised:   '#1A4EAA',           /* elevated on dark blue */
                },

                /* ── Text ── */
                ink: {
                    DEFAULT:  '#0D3A8C',           /* SparkEdu brand blue — headings & primary */
                    secondary:'#4A5568',
                    tertiary: '#718096',
                },

                /* ── Borders ── */
                line: {
                    DEFAULT: 'rgba(13,58,140,0.10)',
                    strong:  'rgba(13,58,140,0.18)',
                    dark:    'rgba(255,255,255,0.12)',
                    'dark-strong': 'rgba(255,255,255,0.22)',
                },
            },

            fontFamily: {
                sans: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                ],
            },

            fontSize: {
                /* Display — cinematic hero */
                'display-2xl': ['clamp(3rem, 8vw, 6rem)',    { lineHeight: '1.04', letterSpacing: '-0.03em' }],
                'display-xl':  ['clamp(2.5rem, 6vw, 4.5rem)',{ lineHeight: '1.06', letterSpacing: '-0.028em' }],
                'display-lg':  ['clamp(2rem, 4.5vw, 3.5rem)',{ lineHeight: '1.08', letterSpacing: '-0.025em' }],
                /* Body */
                'body-lg':     ['1.125rem', { lineHeight: '1.6' }],   /* 18px */
                'body-md':     ['1.0625rem',{ lineHeight: '1.6' }],   /* 17px */
                'body-sm':     ['0.9375rem',{ lineHeight: '1.55' }],  /* 15px */
                /* Label */
                'label-md':    ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.005em' }],  /* 14px */
                'label-sm':    ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.06em'  }],  /* 12px */
            },

            borderRadius: {
                sm:   '6px',
                md:   '12px',
                lg:   '18px',
                xl:   '24px',
                '2xl':'32px',
                pill: '9999px',
            },

            boxShadow: {
                sm:  '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                md:  '0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
                lg:  '0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
                xl:  '0 24px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)',
            },

            spacing: {
                '18':  '4.5rem',
                '22':  '5.5rem',
                '26':  '6.5rem',
                '30':  '7.5rem',
                '34':  '8.5rem',
                '38':  '9.5rem',
            },

            transitionTimingFunction: {
                'standard': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                'out':      'cubic-bezier(0, 0, 0.2, 1)',
                'in-out':   'cubic-bezier(0.4, 0, 0.2, 1)',
            },

            transitionDuration: {
                '150': '150ms',
                '250': '250ms',
                '400': '400ms',
            },
        },
    },
    plugins: [],
}
