/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
	theme: {
		screens:{
			'low':'300px',
			'sm':'568px',
			'lg':'900px',
		},
    extend: {},
  },
  plugins: [],
}
