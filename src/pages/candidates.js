import React from 'react';
import { useSelector } from "react-redux";
import "./style/candidates.css"
import candidate from "./media/candidate.jpg"

const CandidatesPage = () => {
    const candidates = useSelector((state) => state);

    return (
        <div className="cardd">
            {candidates.map(i =>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={candidate} alt="Card image cap" width="140" height="160" />
                        <div className="card-body">
                            <h5 className="card-title">{i.name}</h5>
                            <p className="card-text">{i.age}</p>
                            <p className="card-text"><small className="text-muted">{i.party}</small></p>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )

};

export default CandidatesPage
