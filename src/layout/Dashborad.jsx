import { FaAd,  FaEnvelope, FaHome, FaList, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAnnouncement } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    // const [cart] = useCart();

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex m-10">
            
            <div className="w-64 min-h-screen  bg-base-200">
                
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
                        <li>
                        <NavLink to="/dashboard/adminProfile"> <FaHome></FaHome>Admin Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/users"> <FaUsers></FaUsers> All Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/activities"> <TbReport></TbReport>Reported Activities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/makeAnnouncement"> <MdAnnouncement></MdAnnouncement> Make Announcement</NavLink>
                        </li>
                        
                        
                        </>
                        :
                        <>
                        
                        <li>
                            <NavLink to="/dashboard/myProfile"> <CgProfile /> My Profile</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/dashboard/addPost"> <FaAd></FaAd> Add Post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myPost"> <FaList></FaList> My Post</NavLink>
                        </li>
                        </>
                    }
                
                    
                    {/* need a second bracke */}
                    {/* Shared navLinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome></FaHome>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="contact"> <FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
            {
                isAdmin ?
                <>
                <h2 className="text-5xl text-center  text-blue-600 mb-10 underline">Admin Profile</h2>
                </>
                : 
                <>
                <h2 className="text-5xl text-center  text-blue-600 mb-10 underline">User Profile</h2>
                </>
            }
                <Outlet></Outlet>
            </div>

        </div>

    );
};

export default Dashboard;