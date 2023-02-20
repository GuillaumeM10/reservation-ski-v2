import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AuthService from "../../../setup/services/auth.service";
import { useParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({ type: "", message: "" });

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await  AuthService.resetPassword(token, { password });
      setPassword("");
      setResult({
        type: "success",
        message: "Password reset successfully",
      });
    } catch (error) {
      setResult({ type: "error", message: error.response.data.message });
    }
  };
  
  return (
    <Box>
      <Typography variant="h1">Reset password form</Typography>
      <Box component={"form"} onSubmit={onSubmitForm}>
        <FormGroup>
          <TextField
            variant="outlined"
            label="Mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
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