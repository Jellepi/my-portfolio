import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import csharp from './csharp.png'
import dynamics from './dynamics.png';
import visualstudio from './visualstudio.png'
import postgre from './postgre.png'
import python from './python.png'
import github from './github.png'
import github_light from './github-light.png'


export const assets = {
    github,
    github_light,
    csharp,
    dynamics,
    visualstudio,
    postgre,
    python,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,

};

export const workData = [
  {
    tool: 'React | Tailwind CSS | Next.js',
    title: 'My Portfolio',
    description:
      'A React + Next.js + Tailwind CSS portfolio showcasing projects and skills. Features a modern, responsive UI and dark mode support, serving as a central hub for personal branding and development work.',
    bgImage: '/portfolio.jpg',
    link: '',
    githubLink: 'https://github.com/yourusername/portfolio',
    isPrivate: false,
  },
  {
    tool: 'Python | Flask | HTML | Javascript | CSS',
    title: 'HaraBuzz',
    description: 'An AI-powered UAV system that detects Onion Armyworm infestations using UNet++ for segmentation and YOLOv8 for classification, built as a thesis project to help farmers monitor crops more accurately.',
    bgImage: '/images/Harabuzz/image1.png',
    link: '#',
    githubLink: '#',
    isPrivate: true,
    hasDetails: true,
    extraImages: [
        '/images/Harabuzz/image1.png',
        '/images/Harabuzz/image2.png',
        '/images/Harabuzz/image3.png',
        '/images/Harabuzz/image4.png',
        '/images/Harabuzz/image5.png',
        '/images/Harabuzz/image6.jpg',
        ],
    longDescription:'',
    paperLink: 'https://drive.google.com/file/d/15TSrIYizAX5ts_lI2bzfV_bc64PvOE_k/view?usp=sharing',
  },
  {
    tool: 'C# | ASP.NET | Entity Framework | MVC | SQL Server Management',
    title: 'Lock & Ledger',
    description: 'A simple ASP.NET Core MVC Entity Framework web application for personal finance tracking.',
    bgImage: '/images/home.jpg',
    link: '',
    githubLink: 'https://github.com/Jellepi/LockAndLedger',
    isPrivate: false,
  },
  {
    tool: 'C# | ASP.NET | Entity Framework | Web API | SQL Server Management',
    title: 'FateMakeupAPI',
    description: 'A RESTful API for managing makeup product data, with full CRUD functionality.',
    bgImage: '/images/Scalar.jpg',
    link: '',
    githubLink: 'https://github.com/Jellepi/FateMakeupApi',
    isPrivate: false,
  },
   {
    tool: 'C# | WPF',
    title: 'SpendWise',
    description: 'A desktop app with login/logout, income & expense tracking, built to explore OOP concepts.',
    bgImage: 'images/SpendWise/SW_dashboard.jpg',
    link: '#', 
    githubLink: '#',
    isPrivate: true,
    hasDetails: true,
    extraImages: [
        '/images/SpendWise/SW_login.jpg',
        '/images/SpendWise/SW_dashboard.jpg',
        '/images/SpendWise/SW_expense.jpg',
        '/images/SpendWise/SW_income.jpg',
        ],
  }
];


export const serviceData = [
    { icon: assets.web_icon, title: 'Software Developer Intern', description: 'At Creative Dynamix Inc, I supported in building and improving ERP systems in Microsft Dynamics 365 under the Finance and Operations module. I gained hands-on experience in coding, problem-solving, and collaborating with a team.', 
        link: 'https://drive.google.com/file/d/1g4QttsmNlsrKHSMoM_XPVyAkXN8tWitb/view?usp=sharing' },
    // { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    // { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    // { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C#, Python, X++, SQL,  HTML, CSS, JavaScript' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Science in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.visualstudio, assets.dynamics, assets.postgre, assets.git, assets.csharp, assets.python
];