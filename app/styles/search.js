import { StyleSheet } from 'react-native'

const search = StyleSheet.create({
  wrapper: {
    width: 60,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
  },
  text: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export default search