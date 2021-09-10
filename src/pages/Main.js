import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./style/main.css"


import home from "./home"
import { getCandidates } from "../services/candidates";
import parties from "./parties";
import pastElections from "./pastElections";
import vote from "./vote"


const Main = () => {
    return (
        <div class="main">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/Candidates" component={getCandidates} />
                    <Route path="/PoliticalParties" component={parties} />
                    <Route path="/PastElections" component={pastElections} />
                    <Route path="/Vote" component={vote} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Main;