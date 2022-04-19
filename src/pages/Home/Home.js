import { Grid, Paper, Typography } from '@material-ui/core'
import TimelineDot from '@material-ui/lab/TimelineDot';
import React from 'react'
import Details from '../../utils/resumeData'
import './Home.css';

const Home = () => {
  return (
   <React.Fragment>
       <Grid container className="section pg">
        <Grid item={true} className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid>
          <Typography className="aboutme_text" variant="body2">
            {Details.about}
          </Typography>
        </Grid>
      </Grid>

     

      <Grid
        container
        justifyContent="space-between"
        className="section graybg pg"
      >
        <Grid xs={12} item={true}>
          <Grid container justifyContent="space-between" spacing={3}>
            {Details.skills.map((skill) => {
              return (
                <Grid item={true} xs={12} sm={6} md={3}>
                  <Paper elevation={0} className="skill">
                    <Typography variant="h6" className="skill_title">
                      {skill.title}
                    </Typography>
                    {skill.description.map((element) => {
                      return (
                        <Typography
                          variant="body2"
                          className="skill_description"
                        >
                          <TimelineDot
                            variant="outlined"
                            className="timeline_dot"
                          />
                          {element}
                        </Typography>
                      );
                    })}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>


      <Grid container className="section pg">
        <Grid item={true} className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Services</h6>
        </Grid>
        <Grid item={true} xs={12}>
          <Grid container justifyContent="space-around" spacing={2}>
            {Details.services.map((service,id) => {
              return (
                <Grid item={true} xs={12} sm={6} md={3} key={id}>
                  <div className="service">
                    <div className="service_icon">{service.icon}</div>
                    <Typography className="service_title" variant="h6">
                      {service.title}
                    </Typography>
                    <Typography className="service_description" variant="body2">
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
   </React.Fragment>
  )
}

export default Home