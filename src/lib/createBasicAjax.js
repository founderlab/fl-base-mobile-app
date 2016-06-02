import request from 'superagent'

// Implement ajax requests with superagent
export default function createBasicAjax(config) {
  return function basicAjax(options) {
    if (options.type === null) options.type = 'GET'

    if (options.contentType) {
      if (!options.headers) options.headers = {}
      options.headers['Content-Type'] = options.contentType
    }

    const url = options.url.match(/^\//) ? config.url + options.url : options.url

    const req = request(options.type, url)

    // backboneORM adds query to the url, not by options
    // if (options.type === 'GET') {
    //   req.query(options.query || options.data || {})
    // }

    if (options.type === 'PUT' || options.type === 'POST') {
      req.send(options.data || {})
    }

    if (options.headers) {
      req.set(options.headers)
    }

    req.end((err, res) => {
      if ((err || !res.ok) && options.error) return options.error(res || err)
      options.success(res.body)
    })
  }
}
