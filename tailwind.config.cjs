/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bright-red': "hsl(12, 88%, 59%)",
				'dark-blue': "hsl(228, 39%, 23%)",
				'dark-grayish-blue': 'hsl(227, 12%, 61%)',
				'very-dark-blue': 'hsl(233, 12%, 13%)',
				'very-pale-red': 'hsl(13, 100%, 96%)',
				'very-light-gray': 'hsl(0, 0%, 98%)'
			},
			fontFamily: {
				'vietnam': ['Be Vietnam Pro','sans-serif'],
			},
			backgroundImage: {
				'hamburger-icon': "url('/images/icon-hamburger.svg')",
				'close-icon': "url('/images/icon-close.svg')",
			},
			gridTemplateAreas: {
				'mobile': [
					'form',
					'navigation',
					'social-media',
					'logo',
					'copy',
				],
				'md': [
					'logo         navigation form',
        			'social-media navigation copy',
				  ]
			},
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	  ],
	variants: {
		gridTemplateAreas: ['responsive']
	}
}
