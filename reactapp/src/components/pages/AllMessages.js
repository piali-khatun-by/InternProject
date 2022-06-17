import React from "react";
import PublishComponent from "../connection/PublishComponent";
import SideBar from "./SideBar";
import {Row,Col, Container} from "reactstrap";
function AllMessages(){
    return(
        <div class="row">
            <div class="column"><SideBar /></div>
            <div class="column"> <h2>List Of All Messages</h2><br></br><br />
            <PublishComponent/></div>
        </div>

    );
}
export  default AllMessages;