import React, { useEffect, useRef, useState } from 'react';
import "./style/home.css"

const Home = () => {
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()


    let interval = useRef();

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

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })


    return (

        < section className="coming-soon" >
            <div>
                <h2>Time left until the Election Day</h2>
                <div className="countdown">
                    <div className="container-day">
                        <h3 className="day">Days</h3>
                        <h3>{timerDays}</h3>
                    </div>
                </div>
                <div className="countdown">
                    <div className="container-hour">
                        <h3 className="hour">Hours</h3>
                        <h3>{timerHours}</h3>
                    </div>
                </div>
                <div className="countdown">
                    <div className="container-minutes">
                        <h3 className="minutes">Minutes</h3>
                        <h3>{timerMinutes}</h3>
                    </div>
                </div>
                <div className="countdown">
                    <div className="container-seconds">
                        <h3 className="second">Seconds</h3>
                        <h3>{timerSeconds}</h3>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Home;
