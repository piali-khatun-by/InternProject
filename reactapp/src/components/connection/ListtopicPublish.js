import React from "react";
import ListtopicServiceapi from "../api/ListtopicServiceapi";

class ListtopicPublish extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            topic: []
        }
    }
    componentDidMount() {
        ListtopicServiceapi.getTopic().then((response) => {
            this.setState({ topic: response.data })

        });
    }
    render() {


        return (
            <div>
                <table className="table1">
                    <thead>
                        <tr>
                            <th>List of All Topics</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.topic.map(
                                listTopics =>
                                    <tr key={listTopics}>
                                        <td>{listTopics} </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListtopicPublish;