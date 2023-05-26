const sidebar = require('./sidebar.js');

module.exports = {
    base:'/',
    title: 'Ödeme İste',
    footer: 'Made by  with ❤',
    description: ' ',
    plugins: [
        ['@vuepress/search', {searchMaxSuggestions: 10}]
    ],
    themeConfig: {

        searchMaxSuggestions: 10,
        footer: `
    `,
        sidebar,
        logo: "/assets/TCMB_logo.svg.png"
    }
}
