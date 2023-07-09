
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";


import {Sidebar, Videos} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack
    style={{
      background: 'black',
    }}
     sx={{ flexDirection: { sx: "column",
    md: "row",
     }}}>
    <Box sx={{ height: { sx: "auto", md: "100vh" },
    borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}
    // style={{
    //   background: 'black'
    // }}
    >

    <Sidebar 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
    <Typography className="copyright"
    variant="body2" sx={{mt: 0, color: 'white',}}>
    Copyright 2023 JSM Media
    </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4"
      fontWeight="bold" mb={2} sx={{
        color: 'white'
      }}>
      {selectedCategory} <span style={{
        color: '#F31503'
      }}>Videos</span>
      </Typography>

      <Videos videos = {videos}/>
      </Box>

    </Stack>


  );
};

export default Feed;