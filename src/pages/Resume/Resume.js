import React from "react";
import "./Resume.css";
import { Avatar, Grid, Typography } from "@material-ui/core";
import Details from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustomTimeline";
import WorkIcon from "@material-ui/icons/Work";
import { TimelineContent, TimelineItem } from "@material-ui/lab";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import Client1 from '../../assets/clients/client1.jpg';
import Client2 from '../../assets/clients/client2.jpg';
import Client3 from '../../assets/clients/client3.jpg';
import Client4 from '../../assets/clients/client4.jpg';
import Testimonial1 from '../../assets/testimonials/testimonial1.jpg'
import Testimonial2 from '../../assets/testimonials/testimonial2.jpg'
import Testimonial3 from '../../assets/testimonials/testimonial3.jpg'

function Resume() {
  return (
    <React.Fragment>
     
      <Grid container className="section pg">
        <Grid item={true} className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item={true} xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item={true} sm={12} md={6}>
              <CustomTimeline title={"Work Experience"} icon={<WorkIcon />}>
                {Details.experience.map((experience, index) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent>
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography className="timeline_date" variant="caption">
                          {experience.date}
                        </Typography>
                        <Typography
                          className="timeline_description"
                          variant="body2"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
            {/* Education  */}

            <Grid item={true} sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
                {Details.education.map((experience, index) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent>
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography className="timeline_date" variant="caption">
                          {experience.date}
                        </Typography>
                        <Typography
                          className="timeline_description"
                          variant="body2"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container className="section graybg">
          <Grid container className="section pg">
              <Grid item={true} className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Clients</h6>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12} lg={3} md={6} sm={6}>
                      <Paper elevation={0}>
                      <div className="client_img_container">
                        <img src={Client1} className='client_img'/>
                      </div>
                      </Paper>
                  </Grid>
                  <Grid item xs={12} lg={3} md={6} sm={6}>
                      <Paper elevation={0}>
                      <div className="client_img_container">
                        <img src={Client2} className='client_img'/>
                      </div>
                      </Paper>
                  </Grid>
                  <Grid item xs={12} lg={3} md={6} sm={6}>
                      <Paper elevation={0}>
                      <div className="client_img_container">
                        <img src={Client3} className='client_img'/>
                      </div>
                      </Paper>
                  </Grid>
                  <Grid item xs={12} lg={3} md={6} sm={6}>
                      <Paper elevation={0}>
                        <div className="client_img_container">
                          <img src={Client4} className='client_img'/>
                        </div>
                      </Paper>
                  </Grid>
              </Grid>
          </Grid>   
      </Grid>

    <Grid container className="section pg">
        <Grid item={true} className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Testimonials</h6>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item={true} xs={12} sm={6} lg={4}>
                  <Paper className="testimonial"> 
                      <div className="testimonial_header">
                          <div className="testimonial-img">
                          <Avatar alt="Remy Sharp" src={Testimonial1} />
                          </div>
                         <div>
                         <Typography variant="h6" className="testimonial_name">
                            A. Emma
                          </Typography>
                          <Typography variant="body2" className="testimonial_title">
                            Freelancer
                          </Typography>
                         </div>
                      </div>
                      <div className="testimonial_desc">
                          <Typography variant="body2">
                            Grest Designer! She finished our work wonderfully and just in time. thanks for everything.
                          </Typography>
                      </div>
                    </Paper>
                </Grid>
                <Grid item={true} xs={12} sm={6} lg={4}>
                  <Paper className="testimonial">
                      <div className="testimonial_header">
                          <div className="testimonial-img">
                          <Avatar alt="Remy Sharp" src={Testimonial2} />
                          </div>
                         <div>
                         <Typography variant="h6" className="testimonial_name">
                            N. Liam
                          </Typography>
                          <Typography variant="body2" className="testimonial_title">
                            Actor
                          </Typography>
                         </div>
                      </div>
                      <div className="testimonial_desc">
                          <Typography variant="body2">
                            Grest Designer! She finished our work wonderfully and just in time. thanks for everything.
                          </Typography>
                      </div>
                    </Paper>
                </Grid>
                <Grid item={true} xs={12} sm={6} lg={4}>
                    <Paper className="testimonial">
                      <div className="testimonial_header">
                          <div className="testimonial-img">
                          <Avatar alt="Remy Sharp" src={Testimonial3} />
                          </div>
                         <div>
                         <Typography variant="h6" className="testimonial_name">
                            S. Isabella
                          </Typography>
                          <Typography variant="body2" className="testimonial_title">
                            Actress
                          </Typography>
                         </div>
                      </div>
                      <div className="testimonial_desc">
                          <Typography variant="body2">
                            Grest Designer! She finished our work wonderfully and just in time. thanks for everything.
                          </Typography>
                      </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    </Grid>           
    </React.Fragment>
  );
}

export default Resume;
