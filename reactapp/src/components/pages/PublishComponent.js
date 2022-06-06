import React from "react";
import serviceapi from "./auth/serviceapi";

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
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Messages</td>
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