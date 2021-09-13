import Home from "../pages/home";
import React, { useState, useEffect } from "react"

function Countdown() {
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval;

    const startTimer = () => {
        const countdownDate = new Date('May 17, 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                //stop the timer

                clearInterval(interval.current)

            } else {
                //update the timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        startTimer();
    })

    return (
        <div className="Countdown">
            <Home
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
            />
        </div>
    )
}

export default Countdown