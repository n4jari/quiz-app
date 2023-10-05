"use client"
import { useState } from "react"
import { questions } from './data'
import Result from "./(result)/Result"
import styles from './page.module.css'

export default function Quiz() {
    const [points, setPoints] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAwnser, setSelectedAwnser] = useState("")

    const { question, awnsers, carrectAwnser } = questions[currentQuestion]

    const handleSelectedAwnser = (e, value) => setSelectedAwnser(value)

    const handleSubmit = () => {
        if (selectedAwnser === carrectAwnser)
            setPoints((prev) => prev + 1)

        if (currentQuestion !== questions.length - 1) {
            setSelectedAwnser("")
            setCurrentQuestion(prev => prev + 1)
        } else {
            setShowResult(true)
        }
    }

    return (
        <div className={styles.container}>
            {!showResult ? (
                <div className={styles.content}>
                    <h1 className={styles.title}>{question}</h1>
                    <div className={styles.items}>
                        {awnsers.map((item, index) => (
                            <p
                                tabIndex={index}
                                key={index}
                                onClick={(e) => handleSelectedAwnser(e, item)}
                                className={styles.item}
                            >
                                {item}
                            </p>
                        ))}
                        <button className={styles.btn} onClick={handleSubmit}>
                            {questions.length - 1 === currentQuestion ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            ) : <Result count={questions.length} points={points} />
            }
        </div>
    )
}