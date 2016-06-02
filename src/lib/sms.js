import Platform from 'Platform'
import Queue from 'queue-async'

export function sendAndroid(numbers, message, callback) {
  console.log('TODO: Android SMS')
  const SmsAndroid = require('react-native-sms-android')
  const queue = new Queue(1)

  numbers.forEach(number => queue.defer(callback => {
    SmsAndroid.sms(number, message, 'sendDirect', (err, message) => {
      console.log('android sms sent', err, message)
      callback(err, message)
    })
  }))

  queue.await(callback)
}

export function sendIOS(numbers, message, callback) {
  const Composer = require('NativeModules').RNMessageComposer

  Composer.messagingSupported(supported => {
    console.log('Composer.messagingSupported check: ', supported)
    // do something like change the view based on whether or not messaging is supported
    // for example you could use this in componentWill/DidMount and show/hide components based on result
    // you could also use this to set state within app which would make showing/hiding components easier

    Composer.composeMessageWithArgs({messageText: message, recipients: numbers}, result => {

      console.log('result: ', result)

      switch (result) {
        case Composer.Sent:
          console.log('the message has been sent')
          break
        case Composer.Cancelled:
          console.log('user cancelled sending the message')
          break
        case Composer.Failed:
          console.log('failed to send the message')
          break
        case Composer.NotSupported:
          console.log('this device does not support sending texts')
          break
        default:
          console.log('something unexpected happened')
          break
      }

      callback(null, result)
    })
  })
}

export default function sms(numbers, message, callback) {
  Platform.OS === 'android' ? sendAndroid(numbers, message, callback) : sendIOS(numbers, message, callback)
}

