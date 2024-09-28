import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				accent: '#0095e0',
				'accent-dark-1': '#0086c9',
				'accent-dark-2': '#0077b3',
				'accent-dark-3': '#00689c',
				'blue-dark': '#002538',
				text: '#212529',
			},
			fontSize: {
				base: '16px',
			},
			lineHeight: {
				base: '1.45',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [nextui()],
}
