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
      fontSize: 20,
      color: '#333333'
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
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
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
