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
    <Box>
      <Typography variant="h1">Forget password</Typography>
      <Box component={"form"} onSubmit={onSubmitForm}>
        <FormGroup>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
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
          Confirm
        </Button>
        <Typography variant="p" to="/auth/signin" component={Link}>
          Cancel
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;