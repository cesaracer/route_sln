import { ADD_WAYPOINT, REMOVE_WAYPOINT, SET_DESTINATION, SET_ORIGIN, SET_ROUTE } from "./actionTypes"

export const addWaypoint = (point) => {
    return{
        type: ADD_WAYPOINT,
        point
    }
}

// export const removeWaypoint = (point) => {
//     return{
//         type: REMOVE_WAYPOINT,
//         point
//     }
// }

export const setRoute = (route) => {
    return{
        type: SET_ROUTE,
        route
    }
}

export const setOrigin = (origin) => {
    return{
        type: SET_ORIGIN,
        origin
    }
}

export const setDestination = (destination) => {
    return{
        type: SET_DESTINATION,
        destination
    }
}

export const fetchRoute = (origin, destination, waypoints) => {
    return(dispatch) => {
        let points = waypoints.join('8');

        fetch(`https://ramos-routeplanner.azurewebsites.net//map/route?Origin=${encodeURIComponent(origin)}&Destination=${encodeURIComponent(destination)}&Waypoints=${points}`)
        .then(res => res.json())
        .then(data => dispatch(setRoute(data["routes"]["0"]["waypoint_order"])))
        .catch(err => console.log(err));
    }
}