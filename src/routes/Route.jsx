import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Announcement from "../pages/Announcement/Announcement";
import AllAnnouncementsPage from "../pages/AllAnnouncementsPage/AllAnnouncementsPage";
import ViewPostPage from "../pages/ViewPostPage/ViewPostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashborad";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import MyPost from "../pages/Dashboard/MyPost/MyPost";
import Membership from "../pages/Membership/Membership";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import Activities from "../pages/Dashboard/Activities/Activities";
import Contact from "../pages/Dashboard/Contact/Contact";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Payment/Payment";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home> 
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/payment',
            element: <Payment></Payment>
        },
        {
          path: '/viewPost/:id',
          element: <ViewPostPage></ViewPostPage>,
          loader: ({params}) => fetch(`https://server-side-online-forum.vercel.app/allPost/${params.id}`)
        },
        {
          path: '/membership',
          element: <PrivateRoute><Membership></Membership></PrivateRoute>
        },
        {
          path: 'allAnnouncements',
          element: <AllAnnouncementsPage></AllAnnouncementsPage>
        },

      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myProfile',
          element:<MyProfile></MyProfile>
         
        },
        {
          path: 'addPost',
          element: <AddPost></AddPost>
        },
        {
          path: 'myPost',
          element: <MyPost></MyPost>
       
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },

        // admin route
        {
          path: 'adminProfile',
          element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'allAnnouncements',
          element: <AllAnnouncementsPage></AllAnnouncementsPage>
        },
        {
          path: 'makeAnnouncement',
          element: <AdminRoute><Announcement></Announcement></AdminRoute>
        },
        {
          path: 'activities',
          element: <AdminRoute><Activities></Activities></AdminRoute>
        }
      ]
    }
  ]);

export default router;

