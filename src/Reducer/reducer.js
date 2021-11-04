import { combineReducers } from "redux";
import { ADD_WAYPOINT, REMOVE_WAYPOINT, SET_ROUTE } from "../Actions/actionTypes";

const waypointsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_WAYPOINT:
            return [
                ...state,
                action.point
            ]
        // case REMOVE_WAYPOINT:
        //     let index = state.findIndex(action.point)
        //     return[
        //         ...state.slice(0, index),
        //         ...state.slice(index++)
        //     ]
        default:
            return state
    }
}

const routeReducer = (state = [], action) => {
    switch(action.type){
        case SET_ROUTE:
            return state = action.route
        default:
            return state
    }
}

const rootReducer = combineReducers({
    waypoints: waypointsReducer,
    route: routeReducer
});

export default rootReducer;