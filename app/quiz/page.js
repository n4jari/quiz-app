"use client"
import { useContext, useState } from "react"
import { questions } from './data'
import Result from "./(result)/Result"
import styles from './page.module.css'
import Skeleton from "react-loading-skeleton"
import { ThemeContext } from "@/context/ThemeContext"

export default function Quiz() {
    const { mode } = useContext(ThemeContext)
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
                    <p className={styles.title}>
                        <span>{`${currentQuestion + 1}/${questions.length} : `}</span>
                        <span>{question}</span>
                    </p>
                    <div className={styles.items}>
                        {awnsers ? (
                            awnsers.map((item, index) => (
                                <p
                                    tabIndex={index}
                                    key={index}
                                    onClick={(e) => handleSelectedAwnser(e, item)}
                                    className={styles.item}
                                >
                                    {item}
                                </p>
                            ))
                        ) : <Skeleton
                            height={50}
                            count={4}
                            baseColor={mode === "light" ? "#eee" : "#222"}
                            highlightColor={mode === "light" ? "#ccc" : "#222"}
                        />

                        }
                        <button className={styles.btn} onClick={handleSubmit}>
                            {questions.length - 1 === currentQuestion ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            ) : <Result count={questions.length} points={points} />
            }
        </div >
    )
}