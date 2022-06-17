import React from "react";
import serviceapi from "../api/serviceapi";



class PublishComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: []
        }
    }
    componentDidMount() {
        serviceapi.getMessage().then((response) => {
            this.setState({ msg: response.data })
        });
    }
    render() {


        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Messages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.msg.map(
                                Message =>
                                    <tr key={Message.id}>
                                        <td>{Message.id}</td>
                                        <td>{Message.message} </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table> 
            </div>
        )
    }
}

export default PublishComponent;