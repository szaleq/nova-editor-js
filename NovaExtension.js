const path = require('path');
const webpack = require('webpack');

class NovaExtension {
    name() {
        return 'nova-extension';
    }

    register(name) {
        this.name = name;
    }

    webpackPlugins() {
        return new webpack.ProvidePlugin({
            _: 'lodash',
            Errors: 'form-backend-validation',
        });
    }

    webpackConfig(webpackConfig) {
        webpackConfig.externals = {
            vue: 'Vue',
        };

        webpackConfig.resolve.alias = {
            ...(webpackConfig.resolve.alias || {}),
            'laravel-nova': path.join(
                __dirname,
                'vendor/laravel/nova/resources/js/mixins/packages.js'
            ),
        };

        webpackConfig.output = {
            uniqueName: this.name,
        };
    }
}

module.exports = NovaExtension;