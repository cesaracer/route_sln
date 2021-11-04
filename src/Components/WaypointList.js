import { connect } from "react-redux"

function WaypointList(props){
    return(
        <div className='order-list'>
            <h2>WayPoints</h2>
            <ul>
                {
                    props.waypoints.map(i => <li>{i}</li>)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        waypoints: state.waypoints
    }
}

export default connect(mapStateToProps)(WaypointList)