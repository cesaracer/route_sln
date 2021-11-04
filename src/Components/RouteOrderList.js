import { connect } from "react-redux"
import { useEffect, useState } from "react"

function RouteOrderList(props){
    const [waypointOrder, setWaypointOrder] = useState([]);

    useEffect(() => {
        handleRoute();
    },[props.route])

    const handleRoute = () => {
        let newArray = [];
        for (let index = 0; index < props.route.length; index++) {
            newArray.push(props.waypoints[props.route[index]])
            
        }
        setWaypointOrder(newArray)
    }

    return(
        <div className='order-list'>
            <h2>Route Order</h2>
            <ol>
                {
                    props.origin ?
                    <li>{props.origin}</li>
                    :
                    <li hidden></li>
                }
                
                {
                    waypointOrder.map(i => <li>{i}</li>)
                }
                {
                    props.destination ?
                    <li>{props.destination}</li>
                    :
                    <li hidden></li>
                }
                
            </ol>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        origin: state.origin,
        destination: state.destination,
        route: state.route,
        waypoints: state.waypoints
    }
}

export default connect(mapStateToProps)(RouteOrderList);