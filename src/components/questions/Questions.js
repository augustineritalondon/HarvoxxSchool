import React, { useState } from 'react'
import './Questions.css'

const Questions = () => {
    const questions = [
        {
            id:0,
            show:false,
            question: 'What does harvox Tech Hub do ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pellentesque lacus eu vehicula. Sed in dui viverra'
        },
        {
            id:1,
            show:false,
            question: 'What does harvox Tech Hub do ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pellentesque lacus eu vehicula. Sed in dui viverra'
        },
        {
            id:2,
            show:false,
            question: 'What does harvox Tech Hub do ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pellentesque lacus eu vehicula. Sed in dui viverra'
        },
        {
            id:3,
            show:false,
            question: 'What does harvox Tech Hub do ?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pellentesque lacus eu vehicula. Sed in dui viverra'
        }
    ]


    const [show, setShow] = useState(false)
    const [question, setQuestion] = useState(questions)
    console.log(question)

    const [answer, setAnswer] = useState("");

    const handleShow = (index) => {
        // setShow(!show)
        // console.log(index)
        // questions.map((question)=>{
        //     if(question.id == index){
        //         questions[index].show = !questions[index].show;
        //     }
        // })
        var new_questions = [];
        for(var i=0; i<question.length; i++){
            new_questions.push(question[i])
        }
        for(var i=0; i<new_questions.length; i++){
            if(new_questions[i].id == index){
                new_questions[i].show = !new_questions[i].show;
                // setQuestion((state)=>{
                //     return [{...state,  show:!question[index].show}]
                // })
                setQuestion(new_questions);
            
            }
        }

        
        // console.log(questions)
        
    }

    return (
        <section>
            <div className="fa-container question"
            data-aos="fade-up"
            data-aos-duration="3000">
                <h1>Frequently Asked Question</h1>
                <div className="hs-btn">
                    {question.map((questionItem, index) => {
                        return(
                            <div key={index}>
                                <button className={questionItem.show ? 'active': null} onClick={()=>handleShow(index)}>{questionItem.question}
                                <i className={show ? "fas fa-minus" : "fas fa-plus"} />
                                </button>
                                { console.log(questionItem.show)}
                                {
    
                                    questionItem.show ?
                                    <p>{questionItem.answer}</p>
                                    : null
                                }
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}

export default Questions