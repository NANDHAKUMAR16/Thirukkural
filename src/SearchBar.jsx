import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Kurals from "./kural.json";

const SearchBar = () => {
    const [showForm, setShowForm] = useState(false);
    const [kuralNumber, setKuralNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearchClick = () => {
        setShowForm((prev) => !prev);
        setError('');  // Clear any previous errors when opening the form
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setKuralNumber(value);
        }
    };

    const handleSubmit = () => {
        const item = Kurals.filter((kural) => kural.number === parseInt(kuralNumber, 10));

        if (item.length > 0) {
            setShowForm(false);
            navigate("/kural", { state: { thirukkural: item[0] } });
        } else {
            setError("Invalid Kural number. Please enter a number between 1 and 1330.");
        }
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{
                width: "100%",
                backgroundColor: "#00000040",
                padding: ".7rem",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: showForm ? 1 : 10,
                opacity: showForm ? 0.5 : 1, 
                transition: 'opacity 0.3s ease-in-out',     
            }}>
                <Typography align="center" sx={{ fontSize: "22px", color: "white" }} gutterBottom>
                    திருக்குறள்
                </Typography>
                <Box onClick={handleSearchClick} sx={{
                    backgroundColor: "#00000080",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 1rem",
                    cursor: "pointer",
                }}>
                    <Typography sx={{ margin: "1px 5px", color: "white" }}>குரல் எண்</Typography>
                    <SearchIcon sx={{ color: "white" }} />
                </Box>
            </Box>

            {showForm && (
                <>
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',  
                            zIndex: 999, 
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            zIndex: 1000,
                            top: '500%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            padding: '2rem',
                            width: "70%",
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <Typography variant="h6" gutterBottom style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                            குரல் எண்னை டைப் செய்யுங்கள்
                        </Typography>
                        <TextField
                            fullWidth
                            label="குரல் எண்"
                            variant="outlined"
                            value={kuralNumber}
                            onChange={handleInputChange}
                            error={Boolean(error)}
                            helperText={error}
                        />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginTop: '1rem', fontFamily: "Poppins" }}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SearchBar;
