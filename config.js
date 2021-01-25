const langs = [
    { title: 'English', path: '/home', matchPath: /^\/home/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'ESelector',
    repo: 'Eling486/ESelector',
    'edit-link': 'https://github.com/Eling486/ESelector-docs',
    nav: {
        default: [
            {
                title: 'Home', path: '/'
            },
            {
                title: 'Docs', path: '/home'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/'
            },
            {
                title: '文档', path: '/zh-Hans/'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'eselector',
            tags: ['english', 'zh-Hans'],
            url: 'https://eselector.js.org'
        }),
        evanyou(),
    ]
});

function selector0() {
    if (!window.es0) {
        document.querySelector(".input#input").removeAttribute("hidden");
        window.es0 = new ESelector({
            container: document.getElementById('eselector'),
            type: 'calendar',
            rules: 'all',
            target: document.getElementById('input'),
            readonly: true,
            theme: 'sakura_light'
        });
    }

}