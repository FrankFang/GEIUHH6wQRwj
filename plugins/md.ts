// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    name: 'markdown',
    transform(src, id) {
      if (id.endsWith('.md')) {
        return {
          code: mdToJs(src),
          map: null // provide source map if available
        }
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // custom handle request...
        if (req.url.endsWith('.md')) {
          res.type = 'js'
          const filePath = path.join(process.cwd(), req.url)
          res.body = mdToJs(fs.readFileSync(filePath).toString())
        } else {
          await next()
        }
      })
    }
  }
}
