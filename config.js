const langs = [
    { title: 'English', path: '/home', matchPath: /^\/home/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'EPicker',
    repo: 'Eling486/EPicker',
    'edit-link': 'https://github.com/Eling486/EPicker-docs/blob/gh-pages/README.md',
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
            indexName: 'epicker',
            tags: ['english', 'zh-Hans'],
            url: 'https://epicker.js.org'
        }),
        evanyou(),
        selector()
    ]
});

function selector() {
    return function (context) {
        context.event.on('landing:updated', function () {
            selector0();
        });
    };
}

function selector0() {
    window.es0 = new EPicker({
        container: document.getElementById('epicker'),
        type: 'calendar',
        rules: 'all',
        target: document.getElementById('input'),
        readonly: true,
        theme: 'sakura_light'
    });
}