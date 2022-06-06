import React from "react";
import { FormGroup, Form, Input, Button } from "reactstrap";

function CreateKafkaTopic() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div className="container">
            <div className="login-form1">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label for="userName">Enter Topic Name :</label>
                    <Input type="text" style={{ width: "340px" }}></Input><br /><br />

                    <label for="id">Number of Partitions :</label>
                    <Input type="number" style={{ width: "320px" }}></Input><br /><br />

                    <Button type="submit" color="success" >Submit</Button>

                </FormGroup>
            </Form>

</div>

        </div>
    );
}
export default CreateKafkaTopic;