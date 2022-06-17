import React from "react";

import SideBar from "./SideBar";
import DescribeTopicsPublish from "../connection/DescribeTopicsPublish";
function ViewTopicDescription(){
    return(
        <div class="row">
            <div class="column"><SideBar /></div>
            <div class="column"> <h2>Topic Description</h2><br></br><br />
            <DescribeTopicsPublish/>
            </div>
        </div>

    );
}
export  default ViewTopicDescription;