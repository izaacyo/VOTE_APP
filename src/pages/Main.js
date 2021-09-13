import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./style/main.css"

import CandidatesPage from "../pages/candidates";
import Parties from "./parties";
import pastElections from "./pastElections";
import vote from "./vote"
import Countdown from "../services/countdown";


const Main = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Countdown} />
                    <Route path="/Candidates" component={CandidatesPage} />
                    <Route path="/PoliticalParties" component={Parties} />
                    <Route path="/PastElections" component={pastElections} />
                    <Route path="/Vote" component={vote} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Main;