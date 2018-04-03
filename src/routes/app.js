import { HomePage, Profile } from '../views';

import { Dashboard } from "material-ui-icons";

const appRoutes = [
    {
        id: 1,
        skipInNavBar: true,
        path: "/home",
        sidebarName: "home",
        navbarName: "Material Dashboard",
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
        path: "/test3",
        sidebarName: "App Test",
        navbarName: "Test",
        documentTitle: "Test App",
        documentDescription: "Test Description",
        icon: Dashboard,
        component: HomePage
    },
    {
        id: 4,
        path: "/test4",
        sidebarName: "App Test",
        navbarName: "Test",
        documentTitle: "Test App",
        documentDescription: "Test Description",
        icon: Dashboard,
        component: HomePage
    },
    {
        id: 5,
        path: "/test5",
        sidebarName: "App Test",
        navbarName: "Test",
        documentTitle: "Test App",
        documentDescription: "Test Description",
        icon: Dashboard,
        component: HomePage
    },
    { id: 6, redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default appRoutes;
