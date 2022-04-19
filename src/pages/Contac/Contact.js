import React from 'react'
import { Grid, Typography, TextField } from "@material-ui/core";
import CustomButton from '../../components/Buttons/CustomButton';
import Details from '../../utils/resumeData';
import './Contact.css';

const Contact = () => {
  return (
    <React.Fragment>
        <Grid container className='section pg' spacing={3}>
            <Grid item={true} xs={12} lg={7}>
              <Grid item={true} className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact Me</h6>
              </Grid>
              <Grid item={true}>
                <Grid container spacing={2}>
                    <Grid item={true} xs={12} sm={6}>
                        <TextField fullWidth name='name' label='Name' />
                    </Grid>
                    <Grid item={true} xs={12} sm={6}>
                        <TextField fullWidth name='email' label='E-Mail' />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField fullWidth name='message' label='Message' multiline rows={4} />
                    </Grid>
                    <Grid item={true}>
                        <CustomButton text={'submit'} icon={null}/>
                    </Grid>
                </Grid>
              </Grid>  
            </Grid>
            <Grid item={true} xs={12} lg={5}>
               <Grid container>
                    <Grid item={true} className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Contact Information</h6>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Grid container spacing={2} className='contact_info'>
                            <Grid item={true} xs={12}>
                                <Typography className='contact_item'>
                                    <span>Address: </span>
                                    {Details.address}
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography className='contact_item'>
                                    <span>Phone: </span>
                                    {Details.phone}
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography className='contact_item'>
                                    <span>Email: </span>
                                    {Details.email}
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography className='contact_item'>
                                    <span>Job: </span>
                                    {Details.title}
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography className='contact_item'>
                                    <span>Skype: </span>
                                    {Details.phone}
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                    {Object.keys(Details.socials).map(social =>{
                                        return <a className='contact_socials' href={Details.socials[social].link}>{Details.socials[social].icon}</a>
                                    })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </Grid>
        </Grid>
        <Grid container className='section pg'>
            <Grid item={true} className="section_title mb_30">
                 <span></span>
                 <h6 className="section_title_text">Contact Map</h6>
            </Grid>        
            <Grid item={true} xs={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28021.515285760517!2d77.2153952450921!3d28.609093001408354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2db961be393%3A0xf6c7ef5ee6dd10ae!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1650276387136!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-hidden="false" tabIndex="0"></iframe>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default Contact