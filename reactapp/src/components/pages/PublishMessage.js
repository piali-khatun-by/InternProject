import React from "react";
import {useState} from "react";
import axios  from "axios";
import SideBar from "./SideBar";

function PublishMessage() {
    const url = "http://localhost:9992/publish"
    const [data, setData] = useState({
      message: ""
    })

    function handle(e){
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
    }
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            message: data.message,
        })
        .then(res=>{
          alert("submitted")
            console.log(res.data)
        })
    }
    return(
      <div class="row">
            <div class="column"><SideBar /></div>

        <div class="row" className="login-form1">
        <h2>Publish Message</h2><br></br>
          <form onSubmit={(e)=> submit(e)}>
              <label for="message">Enter The Message</label>
            <input onChange={(e) => handle(e)} id="message" value={data.message} type = "text" size="40"></input><br /><br />
             <button>Submit</button>
          </form>
          </div>
        </div>
    
      ); 
    
}
export default PublishMessage;