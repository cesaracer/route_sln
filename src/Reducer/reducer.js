import { combineReducers } from "redux";
import { ADD_WAYPOINT, REMOVE_WAYPOINT, SET_DESTINATION, SET_ORIGIN, SET_ROUTE } from "../Actions/actionTypes";

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

const originReducer = (state = '', action) => {
    switch(action.type){
        case SET_ORIGIN:
            return state = action.origin
        default:
            return state
    }
}

const destinationReducer = (state = '', action) => {
    switch(action.type){
        case SET_DESTINATION:
            return state = action.destination
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    origin: originReducer,
    destination: destinationReducer,
    waypoints: waypointsReducer,
    route: routeReducer
});

export default rootReducer;