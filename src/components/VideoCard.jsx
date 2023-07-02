import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video: {id: {videoId}, snippet } }) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{ width: {md: '320px', xs: '100%'}, 
    boxShadow: 'none', 
    borderRadius: '0' }}>
      
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ height: '180px' }}  
      />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="white" fontWeight='bold'> 
            { snippet?.title.slice(0,60) 
              || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        
        <Link to={snippet?.channelId ? `/channelId/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="grey" fontWeight='bold'>
            { snippet?.channelTitle.slice(0,60) 
              || demoChannelTitle.slice(0,60)}

            <CheckCircle sx={ { fontSize: 12, color: '#66ccff', ml: '5px'}}/>
          </Typography>
          
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard