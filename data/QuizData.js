import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useContext, useState} from 'react';


const QuizData = (navigation) => {


const [questionData, setQuestionData] = useState(null);


// export default data = [
//     {
//         question: "What’s the biggest planet in our solar system?",
//         options: ["Jupiter","Saturn","Neptune","Mercury"],
//         correct_option: "Jupiter"
//     },
//     {
//         question: "What attraction in India is one of the famus in the world?",
//         options: ["Chand Minar","Taj Mahal","Stadium"],
//         correct_option: "Taj Mahal"
//     },
//     {
//         question: "What land animal can open its mouth the widest?",
//         options: ["Alligator","Crocodile","Baboon","Hippo"],
//         correct_option: "Hippo"
//     },
//     {
//         question: "What is the largest animal on Earth?",
//         options: ["The African elephant","The blue whale","The sperm whale","The giant squid"],
//         correct_option: "The blue whale"
//     },
//     {
//         question: "What is the only flying mammal?",
//         options: ["The bat","The flying squirrel","The bald eagle","The colugo"],
//         correct_option: "The bat"
//     }
// ]




const getQuestion = async() => {
    await firestore().collection('questions').get()
    .then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => 
          tempDoc.push(doc.data())
        )
        // console.log("tempDoc: " + tempDoc)
        setQuestionData(tempDoc) 
        // return tempDoc; 
        //  console.log("Gadnah function ajillaj baina");

    })   
   }

   useEffect(() => {
    getQuestion();
  }, []);


  return(questionData);
}

export default QuizData;