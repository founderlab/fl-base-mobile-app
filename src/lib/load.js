import Platform from 'Platform'

export default function load(sourcePath) {
  const os = Platform.OS.toLowerCase()
  const finalPath = `./${sourcePath}.${os}.js`
  console.log('loading', sourcePath, 'on', os, 'from', finalPath)
  console.log('req1', require('./routes/app.ios'))
  console.log('req2', require('./routes/app.ios.js'))
  console.log('req3', require(finalPath))
  return require(finalPath)
}
