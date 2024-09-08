import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        year: '',
        department: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        const { name, year, department } = formData;

        if (name && year && department) {
            setError('');
            setFormData({ name: "", year: "", department: "" });

            try {
                await Promise.all([
                    axios.post("https://66dc75f947d749b72acba2b3.mockapi.io/users/names", formData),
                    localStorage.setItem("ThirukkuralLogin", JSON.stringify(formData))
                ]);

                window.location.reload();
            } catch (error) {
                console.error("Error occurred:", error);
                setError("Failed to submit data. Please try again.");
            }
        } else {
            setError('Please fill out all fields.');
        }
    };


    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 1000,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#00000010',
                    padding: '2rem',
                    width: "90%",
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography variant="h5" gutterBottom align="center" style={{ fontFamily: "Poppins" }}>
                    பதிவு செய்யுங்கள்
                </Typography>

                <TextField
                    fullWidth
                    label="பெயர்"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                />

                <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel id="year-label">ஆண்டு</InputLabel>
                    <Select
                        labelId="year-label"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        label="ஆண்டு"
                    >
                        <MenuItem style={{ fontFamily: "Poppins" }} value="I">I ஆண்டு</MenuItem>
                        <MenuItem style={{ fontFamily: "Poppins" }} value="II">II ஆண்டு</MenuItem>
                        <MenuItem style={{ fontFamily: "Poppins" }} value="III">III ஆண்டு</MenuItem>
                        <MenuItem style={{ fontFamily: "Poppins" }} value="IV">IV ஆண்டு</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="துறை"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                />

                {error && (
                    <Typography color="error" sx={{ mt: 2, mb: 2, fontFamily: "Poppins" }}>
                        {error}
                    </Typography>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: '1rem', fontFamily: "Poppins" }}
                        onClick={handleSubmit}
                    >
                        சமர்ப்பிக்க
                    </Button>
                </div>
            </Box>
            <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                <Typography style={{ fontFamily: "Poppins", fontWeight: "600" }}>- நந்தகுமார்</Typography>
            </div>
        </>
    );
};

export default Register;
