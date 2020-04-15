const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('src'),
            'components': utils.resolve('components'),
            'uidemo': utils.resolve('components/index.js'),
        }
    },

}
