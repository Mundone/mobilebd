// import React, {useEffect, useContext, useState} from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FormButton from '../components/FormButton';
// import LoginScreen from './LoginScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { AuthContext } from '../navigation/AuthProvider';
// import { styles } from "../style/style";
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import SoundPlayer from 'react-native-sound-player'


// function Play1({navigation}) {
//     const {user, logout} = useContext(AuthContext);
//     const [questionData, setQuestionData] = useState(null);

//   //   const getQuestion = async() => {
//   //     const currentUser = await firestore()
//   //     .collection('questions')
//   //     .doc('q1')
//   //     .get()
//   //     .then((documentSnapshot) => {
//   //       if( documentSnapshot.exists ) {
//   //         console.log('User Data', documentSnapshot.data());
//   //         setQuestionData(documentSnapshot.data());
//   //       }
//   //     })
//   // }

//   useEffect(() => {
//     // getQuestion();
//   }, []);

//   // console.log(questionData.answer);

//   function s () {
//     try {
//       // play the file tone.mp3
//       // SoundPlayer.playSoundFile('gang', 'mp3')
//       // or play from url
//       // SoundPlayer.playUrl('https://cvws.icloud-content.com/B/AWvaEmmnAl5gD9VUYyu_lnRzdmYnAfzYxT7fqWT5O6hqAwqhz-FoTOtQ/gangbay.mp3?o=AuGZscWoT662yDwLIiMN8gMxQdeyYGH28QBxDM6GEaSO&v=1&x=3&a=CAog2yo3TrRkzv8njSykZ78gZyPnZtUnVXD5rccPBuvKHUYSbxDC2Y6x0DAYwrbqstAwIgEAUgRzdmYnWgRoTOtQaidgLY8oADjQMdwa5IhNvpWotjoj_L7smZlfzJGzoWZGiwFWcXIn4A9yJ4FeHshXPHbzYpMDJ1h0r9mIJ3GXWf-mz9XyFfoE4anExrgkag_1iA&e=1670848879&fl=&r=0c785960-444b-4390-9933-7aaf14a393d6-1&k=ry9DQuCKJqhKT7OGQJKM3Q&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=-703QesuJGhlyeUtjV6akNY7CcE&cd=i')
//       SoundPlayer.playUrl('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3')
//     } catch (e) {
//         console.log(`cannot play the sound file`, e)
//     }
//   }
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Play хэсэг</Text>
//       {/* <Text style={styles.text}>{questionData.answer}</Text> */}
//       <Button
//         onPress={s}
//         title="Learn More"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </View>
//   );
// }

// export default Play1;






















// import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, StyleSheet, Button } from 'react-native'
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useContext, useState} from 'react';
import SoundPlayer from 'react-native-sound-player';

// const Stack = createNativeStackNavigator();


const Play1 = ({route, navigation}) => {

    const [buttonText, setButtonText] = useState('Тоглуулах');

    // const year = useNavigationParam('year');
    const [isPlaying, setIsPlaying] = useState(false);
    const [questionData, setQuestionData] = useState([]);

    const getQuestion = async() => {    
        // const {ParamName}= route.params;

                    //  console.log("Function ajillaj baina: " + route.params.year);
        await firestore().collection('questions').doc('song').collection(route.params.singer).get()
        .then((querySnapshot) => {
            const tempDoc = []
            querySnapshot.forEach((doc) => 
              tempDoc.push(doc.data())
            )
            console.log("tempDoc: " + tempDoc)
            setQuestionData(tempDoc); 
            // return tempDoc; 
            //  console.log("Gadnah function ajillaj baina");
    
        })   
       }
       console.log("Data: " + questionData);
       const allQuestions = questionData;
    //    allQuestions.length = 0;

    

    useEffect(() => {

        getQuestion();    

    }, []);
    // if(allQuestions!=null){

    
    

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    function playSong () {
        try {
            if(isPlaying == false){
                setIsPlaying(true);

            // play the file tone.mp3
            // SoundPlayer.playSoundFile('gang', 'mp3')
            // or play from url
            // SoundPlayer.playUrl('https://cvws.icloud-content.com/B/AWvaEmmnAl5gD9VUYyu_lnRzdmYnAfzYxT7fqWT5O6hqAwqhz-FoTOtQ/gangbay.mp3?o=AuGZscWoT662yDwLIiMN8gMxQdeyYGH28QBxDM6GEaSO&v=1&x=3&a=CAog2yo3TrRkzv8njSykZ78gZyPnZtUnVXD5rccPBuvKHUYSbxDC2Y6x0DAYwrbqstAwIgEAUgRzdmYnWgRoTOtQaidgLY8oADjQMdwa5IhNvpWotjoj_L7smZlfzJGzoWZGiwFWcXIn4A9yJ4FeHshXPHbzYpMDJ1h0r9mIJ3GXWf-mz9XyFfoE4anExrgkag_1iA&e=1670848879&fl=&r=0c785960-444b-4390-9933-7aaf14a393d6-1&k=ry9DQuCKJqhKT7OGQJKM3Q&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=45&s=-703QesuJGhlyeUtjV6akNY7CcE&cd=i')
                // SoundPlayer.playUrl('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3')
                console.log("q: " + questionData.question);
                SoundPlayer.playUrl(allQuestions[currentQuestionIndex]['question'])
                setButtonText('Зогсоох');
            }
            else{
                SoundPlayer.stop();
                setIsPlaying(false);
                setButtonText('Тоглуулах');
            }
            
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        SoundPlayer.stop();
                setIsPlaying(false);
                setButtonText('Тоглуулах');

        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }



    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 20
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                {/* <Text style={{
                    color: COLORS.white,
                    fontSize: 30
                }}>{allQuestions[currentQuestionIndex]?.question}</Text> */}

                <Button
                    onPress={playSong}
                    title={buttonText}
                    color="#841584"
                    style={{padding: 40}}
                    // accessibilityLabel="Play Song"
                />

            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'20'
                            : option==currentOptionSelected 
                            ? COLORS.error +'20'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding:15, borderRadius: 5
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Retry Quiz</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Background Image */}
               {/* <Image
                source={require('../assets/back.jpg')}
                style={{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
                /> */}

           </View>
       </SafeAreaView>
    )

}

export default Play1;










