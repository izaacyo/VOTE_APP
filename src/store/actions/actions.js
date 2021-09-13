import { getCandidates } from "../../services/candidates";

export const GET_CANDIDATES = "GET_CANDIDATES";
export const REMOVE_CANDIDATES = "REMOVE_CANDIDATES"

export const initializeCandidates = () => {
    return async (dispatch) => {
        const candidates = await getCandidates();
        dispatch({
            type: GET_CANDIDATES,
            data: candidates
        });
    };
};


