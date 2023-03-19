import tailwindcss from "tailwindcss"
import { publicPath } from "./package.json"
import webpack from "webpack"

/**
 * Function that mutates the original webpack config.
 * Supports asynchronous changes when a promise is returned (or it's an async function).
 *
 * @param {import('preact-cli').Config} config - original webpack config
 * @param {import('preact-cli').Env} env - current environment and options pass to the CLI
 * @param {import('preact-cli').Helpers} helpers - object with useful helpers for working with the webpack config
 * @param {Record<string, unknown>} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
 */
export default (config, _env, helpers, _options) => {
  const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader")
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.postcssOptions.plugins
    plugins.unshift(tailwindcss)
  })

  // publicPath for serving non-root
  config.output = config.output || {}
  if (process.env.NODE_ENV === "production") {
    config.output.publicPath = publicPath
  }
}
