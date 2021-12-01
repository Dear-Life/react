const CracoLessPlugin = require('craco-less');
const px2rem = require("postcss-px2rem");

module.exports = {
    babel: {
        plugins: [
            [
                "import",
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    style: {
        postcss: {
            plugins: [
                px2rem({
                    remUnit: 37.5,
                })
            ]
        }
    }
};