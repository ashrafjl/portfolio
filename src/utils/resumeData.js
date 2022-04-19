import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Work1 from '../assets/images/work1.jpg'
import Work2 from '../assets/images/work2.jpg'
import Work3 from '../assets/images/work3.jpg'
import Work4 from '../assets/images/work4.jpg'
import Work5 from '../assets/images/work5.jpg'
import Work6 from '../assets/images/work6.jpg'
import Work7 from '../assets/images/work7.jpg'
import Work8 from '../assets/images/work8.jpg'
const Details = {
    name: 'Sufiya Zaman',
    title: 'Front-End Developer',
    birthday: 'December 8, 2001',
    email: 'sufy@gmail.com',
    phone: '880018xx9x',
    address: '268 New Delhi, India',
    about: `Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.

    \n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.`,
    experience:[
        {
            title: 'Art Director - Facebook Inc',
            date: '2018 - Present',
            description: `Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.`
        },
        {
            title: 'Senior Designer - Google',
            date: '2012 - 2018',
            description: `So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.`
        },
        {
            title: 'Junior Designer - Creative Shake',
            date: '2010 - 2012',
            description: `Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.`
        }
    ],
    education:[
        {
            title: 'Abc University of Los Angeles',
            date: '2004 - 2009',
            description: `Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.`
        },
        {
            title: 'Drawing Course',
            date: '2003 - 2004',
            description: `So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.`
        },
        {
            title: 'Abc High School',
            date: '2000 - 2003',
            description: `Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.`
        }
    ],
    services:[
        {
            title: 'Web Development',
            description: 'I have been working on web design for 10 years.',
            icon: <CodeIcon />
        },
        {
            title: 'Branding Identity',
            description: 'We will make you a brand that is catchy and leaves a trace.',
            icon: <AssignmentIcon />
        },
        {
            title: 'App Development',
            description: 'I have been working on illustration design for 6 years.',
            icon: <ImportantDevicesIcon />
        },
        {
            title: 'Illustrator',
            description: 'I have been working on illustration design for 6 years.',
            icon: <BrandingWatermarkIcon />
        },
    ],
    skills:[
        {
            title: 'Frontend',
            description:[
                'React JS',
                'Javascript',
                'TypeScript',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title: 'Backend',
            description:[
                'Node JS',
                'Java',
                'Python',
                'PHP',
                'Silidity'
            ]
        },
        {
            title: 'Database',
            description:[
                'Firebase',
                'MySql',
                'Mongo DB',
                'Firebase',
                'SQL'
            ]
        },
        {
            title: 'Source Control',
            description:[
                'Git',
                'GitHub',
                'Scrum/Agile',
                'Git',
                'GitHub'
            ]
        }

    ],
    socials:{
        Facebook:{
            link: 'https://www.facebook.com',
            text: 'SufZaman',
            icon: <FacebookIcon />
        },
        Twitter:{
            link: 'https://twitter.com/ashraflucky99',
            text: 'SufZaman',
            icon: <TwitterIcon />
        },
        Linkedin:{
            link: 'https://www.linkedin.com/login',
            text: 'SufZaman',
            icon: <LinkedInIcon />
        },
        Github:{
            link: 'https://github.com/ashrafjl',
            text: 'SufZaman',
            icon: <GitHubIcon />
        }
    },
    portfolio: [
        {
            tag: 'React',
            image: Work2,
            title: 'Project 1',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'React',
            image: Work3,
            caption: 'Image Caption',
            title: 'Project 4',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'React',
            image: Work1,
            caption: 'Image Caption',
            title: 'Project 3',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'Python',
            image: Work4,
            caption: 'Image Caption',
            title: 'Project 2',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'Python',
            image: Work5,
            caption: 'Image Caption',
            title: 'Project 4',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'Java',
            image: Work6,
            caption: 'Image Caption',
            title: 'Project 4',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'Java',
            image: Work7,
            caption: 'Image Caption',
            title: 'Project 4',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'Php',
            image: Work8,
            caption: 'Image Caption',
            title: 'Project 4',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
        {
            tag: 'Flutter',
            image: Work3,
            caption: 'Image Caption',
            title: 'Project 4',
            description: 'This is a project description',
            links: [
                {link: 'https://www.google.com',icon: <YouTubeIcon />},
                {link: 'https://www.github.com',icon: <GitHubIcon />},
                {link: 'https://www.twitter.com',icon: <TwitterIcon />}
            ]
        },
    ]
}
export default Details;