import { Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import './Portfolio.css'
import Details from '../../utils/resumeData'

function Portfolio() {
  const [tabValue, setTabValue] = useState('All');
  const [dialogBox, setDialogBox] = useState(false)
  const changeHandler = (event, newValue)=>{
    setTabValue(newValue)

  }
  return (
    <Grid container className='section pg'>
      <Grid item={true} className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid> 
      <Grid item={true} xs={12}>
      <Tabs value={tabValue} indicatorColor='white' className='custom_tabs' onChange={changeHandler}>
          <Tab label='All' value={'All'} className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />
          {
            [...new Set(Details.portfolio.map(item => item.tag))].map(tag => {
              return <Tab label={tag} value={tag} className={tabValue == tag ? 'customTabs_item active' : 'customTabs_item'}/>
            })
          }
        </Tabs>
      </Grid>  
      <Grid item={true} xs={12}>
          <Grid container spacing={3} className='top_10 item_container'>
              {Details.portfolio.map((portfolio,index) =>{
                return <>
                { tabValue == portfolio.tag || tabValue == 'All' ?
                  <Grid item xs={12} md={6} lg={4} sm={6} key={index}>
                  <Grow in timeout={1000}>
                  <Card className='custom_card' onClick={()=> setDialogBox(portfolio)}>
                    <CardActionArea>
                      <CardMedia className='custom_card_image' image={portfolio.image} title={portfolio.title}/>
                      <CardContent>
                        <Typography className='custom_card_title' variant='h6'>{portfolio.title}</Typography>
                        <Typography variant='body2' className='custom_card_description'>{portfolio.description}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  </Grow>
                </Grid> :
                null
                }
                </>
                
              })}
          </Grid>
      </Grid>

    <Dialog 
    open={dialogBox}
    maxWidth={'sm'}
    fullWidth
    onClose={()=> setDialogBox(false)}
    className='dialog_box'
    >
      <DialogTitle onClose={()=> setDialogBox(false)}>
          <Typography className='dialog_title'>
          {dialogBox.title}
          </Typography>
      </DialogTitle>
      <img src={dialogBox.image} className='dialog_image'/>
      <DialogContent>
          <Typography className='dialog_description'>
          {dialogBox.description}
          </Typography>
      </DialogContent>
      <DialogActions className='dialog_actions'>
              {dialogBox?.links?.map(link =>{
                return <a href={link.link} className='dialog_icon'>{link.icon}</a>
              })}
            <Button onClick={() => setDialogBox(false)}>Close</Button>
      </DialogActions>
    </Dialog>


    </Grid>
  )
}

export default Portfolio