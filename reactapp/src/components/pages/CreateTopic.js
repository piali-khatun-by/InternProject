import React from "react";
import {useState} from "react";
import axios  from "axios";
import SideBar from "./SideBar";

function CreateKafkaTopic() {
    const url = "http://localhost:9992/topic"
    const [data, setData] = useState({
      name: "",
      partition:""
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
            name: data.name,
            partitions:data.partition
        })
        .then(res=>{
          alert("topic created")
            console.log(res.data)
            
        })
    }
    return(
      <div class="row">
             
            <div class="column"><SideBar /></div>
            <div class="column" className="login-form1">
            <h2>Create Topic</h2><br></br>
          <form onSubmit={(e)=> submit(e)}>
            <label for="name">Enter Topic name</label>
            <input onChange={(e) => handle(e)} id="name" value={data.name} type = "text"></input><br /><br />

            <label for="partition">Enter Number of Partitions</label>
            <input onChange={(e) => handle(e)} id="partition" value={data.partition} type = "int"></input><br /><br />
             <button>Submit</button>
          </form>
          </div>
        </div>
    
      ); 
    
}
export default CreateKafkaTopic;