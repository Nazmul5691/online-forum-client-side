import { useContext } from "react";
import { AuthContext } from "../../../provider/Authprovider";
import { useState } from "react";
import { useEffect } from "react";


const AdminProfile = () => {
    const {user} = useContext(AuthContext)
    const [ users, setUsers ]  = useState([])


    const url = `https://server-side-online-forum.vercel.app/user?email=${user?.email}`

    // console.log(myAssignments);


    useEffect( () =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[url] )

    return (
        <div>
            
            {
                users.map((item) => <tr key={item._id}>
                    
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.photo}
                              alt=""
                            />
                          </div>
                        </div>
                        <h2>{item.email}</h2>
                        
                      </div>
                    </td>
                    <td >
                      <div>
                      <h2 className="ml-20">{item.name}</h2>
                      </div>
                    </td>
                   
                    
                  </tr>)
            }
        </div>
    );
};

export default AdminProfile;