import { AiFillBug, AiFillDatabase } from 'react-icons/ai';
import { MdDeveloperMode, MdPeopleOutline } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { GrTechnology, GrAnalytics } from 'react-icons/gr';
import { MdDeveloperBoard } from 'react-icons/md';
import DataAnalytics from '../../pages/DataAnalytics';
import DatabaseMgt from '../../pages/DatabaseMgt';
import { IctConsultancy } from '../../pages/IctConsultancy';
import MobileDevelopment from '../../pages/MobileDevelopment';
import SEO from '../../pages/SEO';
import SocialMediaMgt from '../../pages/SocialMediaMgt';
import SoftwareDevelopment from '../../pages/SoftwareDevelopment';
import WebDevelopment from '../../pages/WebDevelopment';


const serviceRoutes = [
  {
    path: '/data-analytics',
    name: 'Data Analytics',
    page: DataAnalytics,
    layout: '/services',
    icon: <GrAnalytics />,
    detail:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    path: '/mobile-app-development',
    name: 'Mobile App Development',
    page: MobileDevelopment,
    layout: '/services',
    icon: <MdDeveloperMode />,
    detail:
      'With Mobile technology taking center stage in today’s world, organizations are keen on making significant advancements in the mobile space.'
  },
  {
    path: '/web-development',
    name: 'Web Development',
    page: WebDevelopment,
    layout: '/services',
    icon: <CgWebsite />,
    detail:
      'A strong online presence is an effective medium of displaying your product and services among your target audience.'
  },
  {
    path: '/software-development',
    name: 'Software Development',
    page: SoftwareDevelopment,
    layout: '/services',
    icon: <MdDeveloperBoard />,
    detail:
      'Companies, organizations and institutions are seeking ways to reduce costs and improve business processes.'
  },
  {
    path: '/social-media-marketing',
    name: 'Social Media Marketing',
    page: SocialMediaMgt,
    layout: '/services',
    icon: <MdPeopleOutline />,
    detail:
      'Engage and expand your audience across the web with social media marketing.'
  },
  {
    path: '/ict-consultancy',
    name: 'ICT Concultancy',
    page: IctConsultancy,
    layout: '/services',
    icon: <GrTechnology />,
    detail:
      'We are a dedicated team with experience in business computing and technical operations.'
  },
  {
    path: '/database-management',
    name: 'Database Management',
    page: DatabaseMgt,
    layout: '/services',
    icon: <AiFillDatabase />,
    detail:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    path: '/search-engine-optimization',
    name: 'Search Engine Optimization',
    page: SEO,
    layout: '/services',
    icon: <AiFillBug />,
    detail:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  }
];

export default serviceRoutes;
