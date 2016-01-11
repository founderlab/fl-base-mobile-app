import Platform from 'Platform'

export default function load(source_path) {
  const os = Platform.OS.toLowerCase()
  const final_path = `./${source_path}.${os}.js`
  console.log('loading', source_path, 'on', os, 'from', final_path)
  console.log('req1', require('./routes/app.ios'))
  console.log('req2', require('./routes/app.ios.js'))
  console.log('req3', require(final_path))
  return require(final_path)
}
