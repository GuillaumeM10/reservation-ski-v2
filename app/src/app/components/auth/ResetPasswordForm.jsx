import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AuthService from "../../../setup/services/auth.service";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState({});
  const [result, setResult] = useState({ type: "", message: "" });

  const onChangePassword = (e) => {
    // setPassword(e.target.value);
    const {name, value} = e.target;
    setPassword({
        ...password,
        [name]: value
    })
  };

  useEffect(() => {
    console.log(password);
  }, [password]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    
    try {
      if(password.password === password.cpassword) {
        await  AuthService.resetPassword(token, { password: password.password });
        setPassword("");
        setResult({
          type: "success",
          message: "Password reset successfully",
        });
      } else {
        setResult({
          type: "error",
          message: "Passwords do not match",
        });
      }
    } catch (error) {
      setResult({ type: "error", message: error.response.data.message });
    }
  };
  
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h1">Reset password form</Typography>
      <Box 
        component={"form"} 
        onSubmit={onSubmitForm}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            onChange={onChangePassword}
            sx={{ margin: "0.5rem 0" }}
          />
          <TextField
            variant="outlined"
            label="Confirm password"
            type="password"
            name="cpassword"
            onChange={onChangePassword}
            sx={{ margin: "0.5rem 0" }}
            
          />
        </FormGroup>
        {result.type === "success" && (
          <Typography variant="p" color="success">
            {result.message}
          </Typography>
        )}
        {result.type === "error" && (
          <Typography variant="p" color="error">
            {result.message}
          </Typography>
        )}
        <Button type="submit" variant="contained">
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;