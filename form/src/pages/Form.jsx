import React, { useState } from "react";
import {
  TextField,
  Typography,
  TextareaAutosize,
  Button,
  Box,
  Stack,
  Paper,
} from "@mui/material";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    feedback: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
    setFormData({
      fullname: "",
      email: "",
      password: "",
      feedback: "",
      file: null,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={4} sx={{ p: 4, maxWidth: 500, width: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Fill the{" "}
          <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
            Basic Form
          </Box>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              spellCheck
              type="text"
              label="Enter Fullname"
              variant="outlined"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              spellCheck
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              spellCheck
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
            />
            <TextareaAutosize
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              maxRows={10}
              minRows={5}
              placeholder="Send feedback"
              style={{
                width: "100%",
                padding: 10,
                fontSize: 16,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
            <Box>
              <input type="file" onChange={handleFileChange} />
              {formData.file && (
                <Typography variant="body2" mt={1}>
                  Selected File: {formData.file.name}
                </Typography>
              )}
            </Box>
            <Button variant="contained" color="primary" type="submit">
              SUBMIT
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Form;
