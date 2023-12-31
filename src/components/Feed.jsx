import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    (async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data.items);
    })();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{ 
        height: {sx: 'auto', md: '92vh'}, 
        borderRight: '1px solid #3d3d3d', 
        px: { sx: 0, md: 2},
        }}>
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography variant="body2" sx={{ mt: 1.5, 
            color: '#fff' , display: 'sticky'}}>
            Copyright 2023 Youbloom.in
          </Typography>
      </Box>
      
      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography 
        variant="h4" 
        color="white" 
        fontWeight='bold'
        mb={2}
        sx={{
          color: 'white'
        }}
        >
          {selectedCategory} <span style={{ color: '#FC1503'}}>videos</span>
        </Typography>

        <Videos videos={ videos }/>
      </Box>

    </Stack>
  )
}

export default Feed