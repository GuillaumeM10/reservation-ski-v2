import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AuthService from "../../../setup/services/auth.service";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState({ type: "", message: "" });

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await AuthService.forgotPassword({ email });
      setEmail("");
      setResult({ type: "success", message: "mail sent" });
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
      <Typography variant="h1">Forget password</Typography>
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
            padding: "1rem",
          }}
        >
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            required
            sx={{width: "100%"}}
          />
        </FormGroup>
        {result.type === "success" && (
          <Typography 
            variant="p" 
            color="success"
            sx={{ 
              marginBottom: "1rem",
              width: "100%",
            }}
          >
            {result.message}
          </Typography>
        )}
        {result.type === "error" && (
          <Typography 
            variant="p" 
            color="error"
            sx={{ 
              marginBottom: "1rem",
              width: "100%",
            }}
          >
            {result.message}
          </Typography>
        )}
        <Button type="submit" variant="contained">
          Confirm
        </Button>
        <Typography 
          variant="p" 
          to="/auth/signin" 
          component={Link}
          sx={{
            marginTop: "1rem",
          }}
        >
          Cancel
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;