module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 4000,
        https: false,
        hotOnly: false,
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: ' @import "@/assets/styles/style.scss"; '
            }
        }
    }
}