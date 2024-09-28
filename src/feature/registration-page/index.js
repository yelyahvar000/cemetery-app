import { Button, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';


export const RegistrationPage = () => {
  return (
    <div>
      kendz
      <Grid container spacing={2}>
        <Grid item xs={8}>
         <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </Grid>
        <Grid item xs={8}>
         <Button variant="outlined">Sign Up</Button>
          </Grid>
      </Grid>
      </Grid>
      
      <TextField
        id="outlined-basic"
        label="Re-enter Password"
        variant="outlined"
      />
      
    </div>
  );
};
