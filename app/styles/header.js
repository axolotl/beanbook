import { StyleSheet } from 'react-native'

const header = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export default header
