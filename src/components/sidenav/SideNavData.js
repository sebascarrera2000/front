import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export const  SideNavData = [
    {
        title:"Inico",
        icon: <HomeIcon/>,
        link:"/home"
    },
    {
        title:"Dispatch",
        icon: <MedicalServicesIcon/>,
        link:"../pages/dispatch.js"
    },
    {
        title:"Home Medic",
        icon: <ContactEmergencyIcon/>,
        link:"/homemedic"
    },
    {
        title:"Driver Module",
        icon: <DriveEtaIcon/>,
        link:"/drivermdule"
    }

 ]
