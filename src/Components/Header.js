import { fetchRoute } from "../Actions/action";

function Header(){
    const getRoute = (e) => {
        e.preventDefault();

        //fetch from my api
    }

    return(
        <div className="code-header">
            <input type='text' id="codeText"/>
            <button onClick={() => fetchRoute()}>Apply</button>
        </div>
    )
}

export default Header;