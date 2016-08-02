// import {Dimensions} from 'react'
import {Dimensions, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  textInput: {
    width: width-10,
    alignSelf: 'stretch',
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
})
