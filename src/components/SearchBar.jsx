import { Search } from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'



const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius: 20, 
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}
    >
    
    <input
    placeholder='Search'
    className='search-bar'
    type="text"
    onChange={ () => {}}
    />

    <IconButton 
    type='submit'
    sx={{
        p: '10px', 
        color: 'red',
        '&:hover': {
            background: "#bcbcbc"}
    }}>
        <Search />
    </IconButton>

    </Paper>
  )
}

export default SearchBar