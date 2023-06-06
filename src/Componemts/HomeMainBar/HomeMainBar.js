import React from "react";
import './HomeMainBar.css';
import {useLocation ,useNavigate} from 'react-router-dom'
import QuestionList from "./QuestionList";
import {useSelector} from 'react-redux'

const HomeMainBar=()=>
{
    const location=useLocation();
    const user=7;
    const navigate=useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
    //  console.log(questionsList);

    // const questionsList=[{
    //     _id:'1',
    //     upVotes:4,
    //     downVotes:2,
    //     noOfAnswer:2,
    //     questionTitel:"What is a function?",
    //     questionBody:"It meant to be",
    //     questionTags:["java","node js","react js","mongoDB"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswer:'Kumer',
    //         answerOn:'jan 2',
    //         userId:2,
    //     }]
    // },
    // {
    //     _id:2,
    //     upVotes:2,
    //     downVotes:3,
    //     noOfAnswer:2,
    //     questionTitel:"What is a function?",
    //     questionBody:"It meant to be",
    //     questionTags:["java","node js","react js","mongoDB"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswer:'Kumer',
    //         answerOn:'jan 2',
    //         userId:2,
    //     }]
    // },
    // {
    //     _id:3,
    //     upVotes:3,
    //     downVotes:4,
    //     noOfAnswer:2,
    //     questionTitel:"What is a function?",
    //     questionBody:"It meant to be",
    //     questionTags:["java","node js","react js","mongoDB"],
    //     userPosted:"mano",
    //     userId:3,
    //     askedOn:"jan 1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswer:'Kumer',
    //         answerOn:'jan 2',
    //         userId:2,
    //     }]
    // }

    // ]
     
    const checkAuth=()=>{
        if(user===null)
        {
            alert("login or signup to ask a question")
            navigate('/Auth') 
        }
        else{
            navigate('./AskQuestion')
        }
    }
    
    return(
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname==='/'? <h1>Top Question</h1>: <h1>All Question</h1>
                }
                <button onClick={checkAuth} className="ask-btn">Ask Question</button>
                </div>
            <div>
                {
                 questionsList.data===null?
                 <h1>Loding...</h1>:
                 <>
                  <p>{questionsList.data.length} Question</p>
                  <QuestionList QuestionList={questionsList.data}/>
                 </>
                
                }
            </div>
        </div>
    )
}
export default HomeMainBar;