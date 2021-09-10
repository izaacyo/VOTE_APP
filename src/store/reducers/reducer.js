import * as actionTypes from "../actions/actions";

const reducer = (state = [], action) => {

    if (actionTypes === actionTypes.GET_CANDIDATES) {
        return action.data
    } else {
        return state
    }
}

export default reducer