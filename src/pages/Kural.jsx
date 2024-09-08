import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import SearchBar from '../SearchBar';

function Kural() {
    const location = useLocation();
    const { thirukkural } = location.state || {};

    return (
        <>
            <SearchBar />
            <Box sx={{ marginBottom: "1rem", backgroundColor: "#fff", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", margin: "15px", backgroundColor: "#00000040", width: "50px", height: "50px", justifyContent: "center", borderRadius: "50%" }}>
                    <Typography style={{ fontFamily: "Poppins" }} align='center'>{thirukkural.number}</Typography>
                </div>
                <div style={{ cursor: "pointer" }}>
                    <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#2E8B57", textAlign: "left" }}>{thirukkural.line1}</Typography>
                    <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left" }}>{thirukkural.line2}</Typography>
                </div>
            </Box>
            <div style={{ backgroundColor: "#00000008", borderRadius: "8px", margin: "10px" }}    >
                <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left", padding: "1rem", }}>
                    <Typography sx={{ fontWeight: "600", fontFamily: "Poppins", color: "red" }}>பால் : </Typography>
                    {thirukkural.sect_tam}</Typography>
                <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left", padding: "1rem", }}>
                    <Typography sx={{ fontWeight: "600", fontFamily: "Poppins", color: "red" }}>இயல் : </Typography>
                    {thirukkural.chapgrp_tam}</Typography>
                <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left", padding: "1rem", }}><Typography sx={{ fontWeight: "600", fontFamily: "Poppins", color: "red" }}>தமிழ் அர்த்தம் : </Typography>{thirukkural.tam_exp}</Typography>
            </div>
            <div style={{ backgroundColor: "#00000008", borderRadius: "8px", margin: "10px" }}>
                <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left", padding: ".7rem 1rem", }}>
                    <Typography sx={{ fontWeight: "600", fontFamily: "Poppins", color: "red" }}>பால் : </Typography>
                    {thirukkural.sect_eng}</Typography>

                <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left", padding: "1rem", }}>
                <Typography sx={{ fontWeight: "600", fontFamily: "Poppins", color: "red" }}>இயல் : </Typography>
                    
                    {thirukkural.chapgrp_eng}</Typography>
                <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left", padding: ".7rem 1rem", }}>
                <Typography sx={{ fontWeight: "600", fontFamily: "Poppins", color: "red" }}>ஆங்கிலம் அர்த்தம் : </Typography>
                    {thirukkural.eng_exp}</Typography>
            </div>
        </>
    );
}

export default Kural;
