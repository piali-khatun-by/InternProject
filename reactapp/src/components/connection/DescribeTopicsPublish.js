import React from "react";
import DescribeServiceapi from "../api/DescribeServiceapi";



class DescribeTopicsPublish extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: []
        }
    }
    componentDidMount() {
        DescribeServiceapi. getTopicResponse().then((response) => {
            this.setState({ msg: response.data })
        });
    }
    render() {

        return (
            <div>
                <table className="table2">
                    <thead>
                        <tr>
                            <th>Partitions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.msg.map(
                                TopicResponse =>
                                    <tr key={TopicResponse.p}>
                                        <td>{TopicResponse.p}</td>
                                        
                                    </tr>
                            )
                        }
                    </tbody>
                </table> 
            </div>
        )
    }
}

export default DescribeTopicsPublish;