import { HomePage, Profile, Services, About, Contact } from '../views';

import { Dashboard } from "material-ui-icons";

const appRoutes = [
    {
        id: 1,
        path: "/home",
        sidebarName: "home",
        navbarName: "Home",
        documentTitle: "Home",
        documentDescription: "Home Description",
        icon: Dashboard,
        component: HomePage
    },
    {
        id: 2,
        path: "/profile",
        sidebarName: "Profile",
        navbarName: "Profile",
        documentTitle: "Profile",
        documentDescription: "User Profile",
        icon: Dashboard,
        component: Profile
    },
    {
        id: 3,
        path: "/services",
        sidebarName: "Services",
        navbarName: "Services",
        documentTitle: "Services",
        documentDescription: "Services Provided",
        icon: Dashboard,
        component: Services
    },
    {
        id: 4,
        path: "/about",
        sidebarName: "About Us",
        navbarName: "About Us",
        documentTitle: "About Us",
        documentDescription: "About Us",
        icon: Dashboard,
        component: About
    },
    {
        id: 5,
        path: "/contact",
        sidebarName: "Contact Us",
        navbarName: "Contact Us",
        documentTitle: "Contact Us",
        documentDescription: "Contact Us",
        icon: Dashboard,
        component: Contact
    },
    { id: 6, redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default appRoutes;
