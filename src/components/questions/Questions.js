import React, { useState } from 'react'
import './Questions.css'

const Questions = () => {
    const questions = [
        {
            id:0,
            show:false,
            question: 'What is DSP-300? ',
            answer: 'DSP-300 Is a well-structured digital skills training for youths in Rivers State. The training is free.'
        },
        {
            id:1,
            show:false,
            question: 'What is the ultimate goal for DSP-300?',
            answer: 'The ultimate goal is to train at least 5000 Rivers youth on various digital skills and mentor them to achieve success. It will go a long way to reduce unemployment and boost the economy of our state.'
        },
        {
            id:2,
            show:false,
            question: 'How much does it cost to be part of DSP-300?',
            answer: 'The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE.'
        },
        {
            id:3,
            show:false,
            question: 'How are people selected for the training?',
            answer: 'The announcement of beneficiaries will come after an online screening exercise. Some trainees, however, are also selected based on the recommendation from very reputable individuals.'
        },
        {
            id:4,
            show:false,
            question: 'How many digital skills are available for DSP-300?',
            answer: 'Currently, you can choose from about seven (7) digital skills. They are: •	Product design (UI/UX) •	Website development (Frontend) •	Website development (Backend) •	Digital marketing •	Cyber security (Powered by Hackify.io) •	Mobile app development (Flutter) •	Graphic design/ product branding. You can select any of these packages during the application.'
        },
        {
            id:5,
            show:false,
            question: 'Can someone apply for more than one package?',
            answer: 'No. You are not allowed to apply for more than one package. NOTE: Duplicate applications by applicants will lead to disqualification, So, before applying, make up your mind on which package tickles your fancy.'
        },
        {
            id:6,
            show:false,
            question: 'How does DSP-300 work?',
            answer: '•	Selected persons will be under training for three (3) months (depending on the category). •	Trainees are drawn from different categories to form a team of 5 or 7. •	Each team will be assigned a project for three (3) months after training. •	Each team will be under the supervision of an experienced mentor. •	Successful teams and their projects are subscribed to techlauncher.io to help raise funds and commercialize their products. •	Trainees will get a recommendation for immediate employment.'
        },
        {
            id:7,
            show:false,
            question: 'What happens to me after training?',
            answer: 'Don’t be scared. We have drafted after-training programs that will help you start your journey smoothly in any path you choose. If you decide to become a tech founder, we will help you achieve that. If you decide to become a high-earning employee, we will help you achieve that. If you decide to become a high-earning freelancer, we will also help you to achieve that. If you even decide to walk through two of these paths, we will still be here to help you achieve that.'
        },
        {
            id:8,
            show:false,
            question: 'How do I know the package that’s good for me?',
            answer: 'All of the packages are fantastic. They are all digital skills that you can earn so much from overtime. You can do a little research about each package to see which one you will like or call: 09030643105 to learn more about those packages. '
        },
        {
            id:9,
            show:false,
            question: 'What more can I gain during the training?',
            answer: 'We have painstakingly put measures in place that will help gain more than just acquiring the digital skills, for example: •	Personal branding •	Business of Tech •	How to raise funds •	How to get high-paying clients •	How to build a high-performance team. You will also have the opportunity to find a co-founder.'
        },
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