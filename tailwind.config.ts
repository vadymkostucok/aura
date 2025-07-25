module.exports = {
    theme: {
        extend: {
            fontFamily: {
                violet: ['VioletSans', 'sans-serif'],
                ibm: ['IBMPlexMono', 'monospace'],
                disket: ['DisketMono', 'monospace'],
            },
        },
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
}
