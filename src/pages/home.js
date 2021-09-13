import React from 'react';
import "./style/home.css"

const Home = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {

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
