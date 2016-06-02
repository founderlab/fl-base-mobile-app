import Platform from 'Platform'
export default (Platform.OS.toLowerCase() === 'android') ? require('./pane.android.js') : require('./pane.ios.js')
