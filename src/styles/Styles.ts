import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Search: {
    borderRadius: 20,
    backgroundColor: 'gray',
    width: 40,
    paddingLeft: 8,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 12,
  },
  secondHeader: {
    height: 50,
    width: 90,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#dedede',
    marginTop: 10,
    flexDirection: 'row',
  },
  headerTitle: {
    marginTop: 20,
    color: 'black',
    paddingLeft: 10,
  },
  cardHeader: {
    height: 150,
    width: 120,
    marginHorizontal: 10,

    borderRadius: 10,
    backgroundColor: '#dedede',
    marginTop: 10,
  },
  customHeader: {
    marginTop: 10,
    height: 500,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#dedede',
  },
  customPost: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 10,
  },
  follow: {
    marginLeft: 5,
    color: 'blue',
  },
  customImage: {
    height: 200,
    width: '100%',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  customLike: {
    marginTop: 10,
    flexDirection: 'row',
  },
  share: {
    marginLeft: 280,
  },
  search: {
    paddingLeft: 5,
  },
  customText: {
    marginTop: 10,
    paddingLeft: 5,
  },
  appointmentTitle: {
    marginTop: 10,
    color: 'black',
  },
  appointmentList: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
    paddingLeft: 25,
  },
  connectionPeople: {
    flexDirection: 'row',
    marginTop: 10,
  },
  people: {
    backgroundColor: '#b4b6d7',
    paddingLeft: 10,
    borderRadius: 30,
    height: 30,
    width: 30,
  },
  showPeople: {
    marginLeft: 35,
    color: 'black',
  },
  comments: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 30,
    width: '100%',
    marginTop: 30,
  },
});
export default Styles;
