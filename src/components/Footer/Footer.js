import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Details from '../../utils/resumeData'
import './Footer.css'
function Footer() {
  return (
    <Grid container className='section footer'>
      <Grid item xs={12} sm={12} lg={6}>
        <div className='footer_left'>
            <Typography className='footer_name'>
                {Details.name}  
            </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <div className='footer_right'>
          <Typography className='footer_copy_rights'>
              <span>Designed by</span> <a href='https://twitter.com/ashraflucky99' target={'_blank'}>Ashraf Jamal </a>
              <span>Inspired by</span> <a href='http://onurtavil.net/html/mat/model/index.html' target={'_blank'}>Travonline</a>
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default Footer