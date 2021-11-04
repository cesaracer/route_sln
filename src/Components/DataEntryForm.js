import { useState } from "react";
import { connect } from "react-redux"
import { addWaypoint, fetchRoute, setDestination, setOrigin } from "../Actions/action";

function DataEntryForm(props){
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [waypoint, setWaypoint] = useState('');

    const handleAdd = () => {
        props.addWaypoint(waypoint);
        setWaypoint('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.setOrigin(origin);
        props.setDestination(destination);
        props.fetchRoute(origin, destination, props.waypoints);
    }

    return(
        <form>
            <h2>Destination Entry</h2>
                <div className='form-group-cell'>
                    <label>Origin:</label>
                    <input type='text' value={origin} onChange={e => setOrigin(e.target.value)}/>
                </div>
                <div className='form-group-cell'>
                    <label>Destination:</label>
                    <input type='text' value={destination} onChange={e => setDestination(e.target.value)}/>
                </div>
                <div className='form-group-cell'>
                    <label>Waypoint:</label>
                    <div className='form-group-cell-2'>
                        <input type='text' id="input" onChange={e => setWaypoint(e.target.value)} value={waypoint} />
                        {
                            waypoint ?
                            <input type='button' onClick={() => handleAdd()} value='Add Waypoint' />
                            :
                            <input type='button' disabled value='Add Waypoint' />
                        }
                    </div>
                </div>
            <div className='form-group-btn'>
                {
                    origin && destination ?
                    <button onClick={(e) => handleSubmit(e)}>Get Route</button>
                    :
                    <button disabled>Get Route</button>
                }
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return{
        waypoints: state.waypoints
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setOrigin: (o) => dispatch(setOrigin(o)),
        setDestination: (d) => dispatch(setDestination(d)),
        addWaypoint: (point) => dispatch(addWaypoint(point)),
        fetchRoute: (origin, destination, waypoints) => dispatch(fetchRoute(origin, destination, waypoints))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataEntryForm)