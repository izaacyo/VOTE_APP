import React, { useEffect } from "react";
import Main from "./pages/Main";

import { initializeCandidates } from "./store/actions/actions";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

import "./App.css";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeCandidates());
    }, { dispatch });

    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;