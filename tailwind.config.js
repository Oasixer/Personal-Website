/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				pink: {
					accent: '#f472b6'
				},
				green: {
					subdued: '#348f6c',
					accent: '#4bc596'
				}
			},
			borderWidth: {
				1: '1px'
			}
			// screens: {}
		},
		screens: {
			// xs = anything smaller, & default
			//
			sm: '475px',
			// sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '1175px',
			// => @media (min-width: 768px) { ... }

			lg: '1400px'
			// => @media (min-width: 1024px) { ... }

			// xl: '1280px'
			// => @media (min-width: 1280px) { ... }
			//
			// defaultTheme.screens.2xl
			// ...defaultTheme.screens
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			blue: {
				100: '#f0f4fe',
				200: '#d4def8',
				300: '#95aeed',
				400: '#758ce0',
				500: '#6175de',
				600: '#495dc6',
				700: '#3547a4',
				800: '#253586',
				900: '#1f2c6d',
				bgOuter: '#0f172a',
				bgInner: '#1e293b',
				light: '#7dd3fc', // equivalent to sky-300
				bright: '#38bdf8',
				subdued: '#5d8fb6'
			},
			grey: {
				100: '#f8f9fa',
				200: '#e1e7ec',
				300: '#d5dde5',
				400: '#cbd3da',
				500: '#aebecd',
				600: '#929fb1',
				700: '#6e7a8a',
				800: '#404b5a',
				900: '#202833',

				'00': '#cbd3da',
				0: '#a3b3c8', // for labels
				1: '#94a3b8', // for labels
				2: '#64748b',
				3: '#353f4f',
				4: '#1e2739'
			},
			black: '#000000',
			greyOG: colors.grey,
			slate: colors.slate,
			purple: colors.purple,
			violet: colors.violet,
			pink: colors.pink,
			green: colors.green,
			red: colors.red,
			// 	subdued: '#348f6c',
			// 	accent: '#4bc596'
			// 100: colors.green["100"],
			// 200: colors.green["100"],
			// 300: colors.green.100,
			// 400: colors.green.100,
			// 500: colors.green.100,
			// 600: colors.green.100,
			// },
			amber: colors.amber,
			orange: colors.orange,
			yellow: colors.yellow,
			lime: colors.lime,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky

			// 'tahiti': {
			//   100: '#cffafe',
			//   200: '#a5f3fc',
			//   300: '#67e8f9',
			//   400: '#22d3ee',
			//   500: '#06b6d4',
			//   600: '#0891b2',
			//   700: '#0e7490',
			//   800: '#155e75',
			//   900: '#164e63',
			// },
			// ...
		},
		fontSize: {
			szXs: [
				'0.75rem', // 12px
				{
					lineHeight: '1rem'
					//fontWeight: '400', // letterSpacing: '-0.01em',
				}
			],
			szSm: ['0.875rem' /* 14px */, { lineHeight: '1.00rem' /* idk px */ }],
			szBase: ['1rem' /* 16px */, { lineHeight: '1.125rem' /* idk px */ }],
			szLg: ['1.0625rem' /* 18px */, { lineHeight: '1.1rem' /* idk px */ }],
			szXl: ['1.125rem' /* 18px */, { lineHeight: '1.15rem' /* idk px */ }],
			sz2xl: ['1.25rem' /* 20px */, { lineHeight: '1.4rem' /* 28px */ }],
			sz3xl: ['1.5rem' /* 24px */, { lineHeight: '1.7rem' /* 32px */ }],
			sz4xl: ['1.875rem' /* 30px */, { lineHeight: '2rem' /* 36px */ }],
			sz5xl: ['2.25rem' /* 36px */, { lineHeight: '2.5rem' /* 40px */ }],
			sz6xl: ['3rem' /* 48px */, { lineHeight: '1' }],
			sz7xl: ['3.75rem' /* 60px */, { lineHeight: '1' }],
			sz8xl: ['4.5rem' /* 72px */, { lineHeight: '1' }],
			sz9xl: ['6rem' /* 96px */, { lineHeight: '1' }],
			sz9xl: ['8rem' /* 128px */, { lineHeight: '1' }]
		},
		fontFamily: {
			thicc9: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 900`
				}
			],
			thicc8: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 800`
				}
			],
			thicc7: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 700`
				}
			],
			thicc6: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 600`
				}
			],
			thicc5: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 500`
				}
			],
			thicc4: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 400`
				}
			],
			thicc3: [
				'MontserratVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 300`
				}
			],
			rubik9: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 900`
				}
			],
			rubik8: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 800`
				}
			],
			rubik7: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 700`
				}
			],
			rubik6: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 600`
				}
			],
			rubik5: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 500`
				}
			],
			rubik4: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 400`
				}
			],
			rubik3: [
				'RubikVariable, sans-serif',
				{
					fontVariationSettings: `"wght" 300`
				}
			],
			sans: ['Barlow, sans-serif']
		},
		fontWeight: {
			wgt100: '100',
			wgt200: '200',
			wgt300: '300',
			wgt400: '400',
			wgt500: '500',
			wgt600: '600',
			wgt700: '700',
			wgt800: '800',
			wgt900: '900'
		}
	},
	plugins: []
	// headerBold: {
	// 	fontFamily: 'headerBold',
	// 	color: 'white'
	// }
};
