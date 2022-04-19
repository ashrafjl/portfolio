import React from "react";
import Typography from "@material-ui/core/Typography";
import ProfileImage from "../../assets/images/profile.jpg";
import "./Profile.css";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/CustomTimeline";
import Details from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Timeline, TimelineContent, TimelineItem } from "@material-ui/lab";
import CustomButton from "../Buttons/CustomButton";
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({title, text, link})=>(
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timelineItem_content">
      
      {link ? <Typography className="timelineItem_text">{<span>{title}: </span>} <a href={link} target='_blank'>{text}</a></Typography> : <Typography className="timelineItem_text">{<span>{title}: </span>}{text}</Typography>}
    </TimelineContent>
  </TimelineItem>
);


function Profile() {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{Details.name}</Typography>
        <Typography className="title">{Details.title}</Typography>
      </div>
      <div className="profile_image">
        <img src={ProfileImage} alt="" />
      </div>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title={'Name'} text={Details.name}/>
          <CustomTimelineItem title={'Job'} text={Details.title}/>
          <CustomTimelineItem title={'Email'} text={Details.email}/>
          <CustomTimelineItem title={'Skype'} text={Details.phone}/>
        </CustomTimeline>
          <div className="btn_container">
          <CustomButton text={'Download CV'} icon={<GetAppIcon />}/>
          </div>
      </div>
    </div>
  );
}

export default Profile;
