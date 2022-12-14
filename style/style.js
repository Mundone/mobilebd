import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    containerMain: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    text: {
      fontSize: 24,
      color: '#000',
      marginBottom: 20,
      marginTop: 15,
      textAlign: 'center',
      fontWeight: 'bold',

    },
    text1: {
      fontSize: 25,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
      fontSize: 15,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    pointUser: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
      textAlign: 'center',
      top: 15
    },
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    backImg: {
      
    },
});
  
export { styles }
