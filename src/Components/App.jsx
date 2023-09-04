import react,{useState} from "react";
import ReactDOM from "react-dom";

function App() {

    var now = new Date().toLocaleTimeString()

    var[time ,setTime]= useState(now)


    function newtime() {
        document.getElementById("btn").style.boxShadow="none"

        const time= new Date().toLocaleTimeString()

        setTime(time)




        setTimeout(()=>{
            document.getElementById("btn").style.boxShadow="2px 2px 2px black"
            newtime()

        },100)


    }



    return(<div className="body">
            <h1>{time}</h1>
        <button id="btn" onClick={newtime}>Get time</button>

    </div>)
}
export default App;