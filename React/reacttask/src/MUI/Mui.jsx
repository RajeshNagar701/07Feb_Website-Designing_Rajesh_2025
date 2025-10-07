
/*

Move faster
with intuitive React UI tools

MUI offers a comprehensive suite of free UI tools to help you ship new features faster. 
Start with Material UI, our fully-loaded component library, 
or bring your own design system to our production-ready components.

https://mui.com/material-ui/

Ready to use
Material Design
components

Material UI is an open-source React component library that implements Google's Material Design.
It's comprehensive and can be used in production out of the box.

npm install @mui/material @emotion/react @emotion/styled

@mui/icons-material
@mui/x-data-grid

*/

import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
function Mui() {
    return (
        <div className='container mt-5'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <hr />

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>

            <hr />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Mui