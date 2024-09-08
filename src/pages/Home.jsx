import React, { useEffect, useState, useReducer } from 'react';
import Thirukkural from "../kural.json";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [kural, setKural] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();


  const itemsPerPage = 10;

  useEffect(() => {
    setKural(Thirukkural);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kural.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleKural = (item) => {
    navigate("/kural", { state: { thirukkural: item } });
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      <SearchBar />

      <Box sx={{ flex: 1, overflowY: 'auto', padding: '.5rem', display: "flex", flexDirection: "column" }}>
        {currentItems.map((item, index) => (
          <Box key={index} sx={{ marginBottom: "1rem", backgroundColor: "#fff", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", margin: "15px", backgroundColor: "#00000040", width: "50px", height: "50px", justifyContent: "center", borderRadius: "50%" }}>
              <Typography style={{ fontFamily: "Poppins" }} align='center'>{item.number}</Typography>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => handleKural(item)}>
              <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#2E8B57", textAlign: "left" }}>{item.line1}</Typography>
              <Typography style={{ fontFamily: "Poppins", fontWeight: "600", color: "#003366", textAlign: "left" }}>{item.line2}</Typography>
            </div>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", padding: ".8rem" }}>
        <Pagination
          count={Math.ceil(kural.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          style={{ fontFamily: "Poppins" }}
        />
      </Box>
    </Box>
  );
}

export default Home;
