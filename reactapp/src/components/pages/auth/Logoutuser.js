import React from 'react';
import { Grid } from "@mui/material";
import LoginReg from './LoginReg';

const Logoutuser = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
      <LoginReg />
              </Grid>
    </Grid>
  </>;
};

export default Logoutuser;
