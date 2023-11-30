import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/Authprovider";

const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);


  const url = `https://server-side-online-forum.vercel.app/allPost?email=${user?.email}`


  useEffect( () =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setMyPosts(data))
    // .then(data => console.log(data))
},[url] )

  return (
    <div>
    <h2 className="text-5xl font-bold text-center mb-5 ">My Posts</h2>
    {
        myPosts.map((item, index) => <tr key={item._id}>
            
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  
                </div>
                <h2 className="font-semibold my-5">{`${index + 1}. ${item.postTitle}.`}</h2>
                <h2>Total Votes: {item.votes}</h2>
                <button className="btn btn-primary ml-2">Comment</button>
                <button className="btn btn-secondary ml-2">Delete</button>
              </div>
            </td>
            <td>
              {/* {item.name} */}
            </td>
            <td>
              {/* {item.postTitle} */}
            </td>
            
           
            
          </tr>)
    }
</div>
  );
};

export default MyPost;
