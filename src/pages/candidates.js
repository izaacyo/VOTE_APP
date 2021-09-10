import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const candidatesPage = ({ candidates }) => {
    const candidates = useSelector((state) => state);
    const dispatch = useDispatch();

    return candidates.map((candidate) => (
        <ul
            key={candidate.id}
            onClick={() => dispatch(candidate.id)}
        > </ul>


    ))

};

export default candidatesPage
