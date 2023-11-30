import { useEffect, useState } from "react";
import PostsCard from "./PostsCard";


const AllPost = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() =>{
        fetch('https://server-side-online-forum.vercel.app/allPost')
        .then(res => res.json())
        .then(data => setPosts(data));
    })

    return (
        <div>
            
            <div className="grid grid-cols-1 gap-6 mb-20 mt-10">
                {
                    posts.map(post => <PostsCard key={post._id} post={post}></PostsCard>)
                }
            </div>

        </div>
    );
};

export default AllPost;