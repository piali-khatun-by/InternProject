import React from "react";
import SideBar from "./SideBar";
import ListtopicPublish from "../connection/ListtopicPublish";
function ViewAllTopics(){
    return(
<div class="row">
<div class="column"><SideBar /></div>

<div class="column"> <h2>List Of All Topics</h2><br></br>
<ListtopicPublish/></div>
</div>
 );
}
export  default ViewAllTopics;