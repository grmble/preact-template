import pkgInfo from '../package.json'

export const PUBLIC_PATH: string =
    process.env.NODE_ENF !== 'production'
        ? ''
        : pkgInfo.publicPath.endsWith("/")
        ? pkgInfo.publicPath.substring(0, pkgInfo.publicPath.length - 1)
        : pkgInfo.publicPath
