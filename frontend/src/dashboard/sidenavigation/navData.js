import HomeIcon from './icons/home';
import TasksIcon from './icons/tasks';
import ReportsIcon from './icons/reports';
import SettingsIcon from './icons/settings';
import CalendarIcon from './icons/calendar';
import ProjectsIcon from './icons/projects';
import TimeManageIcon from './icons/time-manage';
import DocumentationIcon from './icons/documentation';

export const adminNav = [
  {
    title: 'Admin Home',
    icon: <HomeIcon />,
    link: '/admin',
  },
  {
    title: 'Pending Approvals',
    icon: <ProjectsIcon />,
    link: '/admin/pending',
  },
];

export const doctorNav = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/doctor',
  },
  {
    title: 'Patients',
    icon: <ProjectsIcon />,
    link: '/doctor/patients',
  },

]