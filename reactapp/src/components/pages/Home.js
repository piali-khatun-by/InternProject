import React from 'react';
import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home </h1>
        <hr />
        <br/>
        <p>Kafka Monitor is a web UI for viewing Kafka topics and browsing consumer groups.The tool displays 
          information such as topics, partitions, and lets you view messages.</p><br/>

          <h3>Features</h3><br/>
          <p>1.Create new topics — topic and partition assignments, and controller status</p>
          <p>2.View topics — partition count, replication status, and custom configuration</p>
         <p> 3.Browse messages — JSON, plain text</p>
          <p>4.View failed messages</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
