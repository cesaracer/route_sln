import { useState } from "react";

function DestinationEntry(props){

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [isSameDestination, setIsSameDestination] = useState(false);
    const [waypoint, setWaypoint] = useState("");
    const [waypoints, setWaypoints] = useState([]);

    const changeDestination = (e) => {
        e.preventDefault();

        setIsSameDestination(!isSameDestination);
        setEnd(start);
    }

    //passing data to gmail api
    const getRoute = (e) => {
        e.preventDefault();

        setWaypoints([
            ...waypoints,
            waypoint
        ]);

         //api call
         //props.updateRouteFunct
    }

    return(
        <div id="destination">
            <form>
                <div id="destination-field-1">
                    <input type='text' placeholder="Starting Point" onChange={e => setStart(e.target.value)}/>
                    <input type='text' placeholder="End Point" onChange={e => setEnd(e.target.value)}/>
                </div>
                <div id="destination-field-2">
                    <input type='checkbox' id="checkbox" onChange={e => changeDestination(e)}/>
                </div>
                <div id="destination-field-3">
                    <input placeholder="Waypoint" onChange={e => setWaypoint(e.target.value)} />
                    <input type='button' value="Add" onClick={e => getRoute(e)} />
                </div>
                {
                    //button is disabled if fields are empty
                    start && end ?
                    <button>Calculate Best Route</button>
                    :
                    <button disabled>Calculate Best Route</button>
                }
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        //update route
    }
}

export default DestinationEntry;