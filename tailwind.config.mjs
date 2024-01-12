/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

// `hexToRgb`
// From: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
// Copyright (c) Tailwind Labs, Inc.
// License: MIT
const hexToRgb = (hex) => {
	hex = hex.replace('#', '')
	hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)
	return `${r} ${g} ${b}`
}

// === end of `hexToRgb`

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			inherit: "inherit",
			transparent: 'transparent',
			current: 'currentColor',
			black: "#000",
			white: "#fff",
			'neutral': {
				'100': '#f2fbff',
				'200': '#e4f7ff',
				'300': '#b5d7e5',
				'400': '#7496a3',
				'500': '#d04b17',
				'600': '#4c6d79',
				'700': '#40616d',
				'800': '#052c37',
				'900': '#001f28',
			},
			'link': {
				'100': '#3c91e8',
				'900': '#006dbd',
			},
			'linkVisited': {
				'100': '#c95cfb',
				'900': '#a132d3',
			},
			'brand': {
				'300': '#ffc8b7',
				'500': '#c94611',
				'700': '#701f00',
			},
			'success': {
				'300': '#00f38e',
				'500': '#00834a',
				'700': '#004525',
			},
			'error': {
				'300': '#ffc6ca',
				'500': '#e2004e',
				'700': '#7c0026',
			},
			'warning': {
				'300': '#fbd024',
				'500': '#897000',
				'700': '#483a00',
			},
			'info': {
				'300': '#c4d4ff',
				'500': '#5371b1',
				'700': '#163976',
			},
		},
		extend: {
			fontFamily: {
				'serif': ['Roboto Serif Variable', ...defaultTheme.fontFamily.serif],
			},
			typography: ({ theme }) => ({
				custom: {
					css: {
						'--tw-prose-body': theme('colors.neutral[800]'),
						'--tw-prose-headings': theme('colors.neutral[900]'),
						'--tw-prose-lead': theme('colors.neutral[700]'),
						'--tw-prose-links': theme('colors.neutral[900]'),
						'--tw-prose-bold': theme('colors.neutral[900]'),
						'--tw-prose-counters': theme('colors.neutral[600]'),
						'--tw-prose-bullets': theme('colors.neutral[400]'),
						'--tw-prose-hr': theme('colors.neutral[300]'),
						'--tw-prose-quotes': theme('colors.neutral[900]'),
						'--tw-prose-quote-borders': theme('colors.neutral[300]'),
						'--tw-prose-captions': theme('colors.neutral[700]'),
						'--tw-prose-kbd': theme('colors.neutral[900]'),
						'--tw-prose-kbd-shadows': hexToRgb(theme('colors.neutral[100]')),
						'--tw-prose-code': theme('colors.neutral[900]'),
						'--tw-prose-pre-code': theme('colors.neutral[100]'),
						'--tw-prose-pre-bg': theme('colors.neutral[900]'),
						'--tw-prose-th-borders': theme('colors.neutral[300]'),
						'--tw-prose-td-borders': theme('colors.neutral[200]'),
						'--tw-prose-invert-body': theme('colors.neutral[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.neutral[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.neutral[400]'),
						'--tw-prose-invert-bullets': theme('colors.neutral[600]'),
						'--tw-prose-invert-hr': theme('colors.neutral[700]'),
						'--tw-prose-invert-quotes': theme('colors.neutral[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
						'--tw-prose-invert-captions': theme('colors.neutral[400]'),
						'--tw-prose-invert-kbd': theme('colors.neutral[100]'),
						'--tw-prose-invert-kbd-shadows': hexToRgb(theme('colors.neutral[100]')),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.neutral[600]'),
						'--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
