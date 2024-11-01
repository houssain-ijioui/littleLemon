import React, { useState } from "react"
import "./faq.css"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import data from "../../data/data";
import Question from "../../components/question/Question";

export default function Faq() {

    const [questions, setQuestions] = useState(data.questions);

    return (
        <>
            <Nav />
            <section className='faq-section'>
                <h1>Frequently Asked Questions</h1>
                <div className='questions'>
                    {questions.map(question => {
                        return (
                            <Question question={question.question} answer={question.answer} />
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}
