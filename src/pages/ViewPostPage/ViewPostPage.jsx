/* eslint-disable no-unused-vars */
import {  useLoaderData, useNavigate } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import AuthProvider, { AuthContext } from "../../provider/Authprovider";
import { useContext, useEffect, useState } from "react";


const ViewPostPage = () => {
  const viewPost = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 

  const handlePostComment = () => {
    if (!user) {
        // Store the post ID in the state before redirecting to the login page
       
        navigate("/login");
      } else {
        // Implement your comment posting logic here
        console.log("Posting comment...");
      }
    };

    const handleGiveUpVote = () => {
        if (!user) {
            // Store the post ID in the state before redirecting to the login page
           
            navigate("/login");
          } else {
            // Implement your comment posting logic here
            console.log("Give up vote...");
          }
        };

        const handleGiveDownVote = () => {
            if (!user) {
                // Store the post ID in the state before redirecting to the login page
               
                navigate("/login");
              } else {
                // Implement your comment posting logic here
                console.log("Give down vote...");
              }
            };

            
            const handleSharePost = () => {
                if (!user) {
                    // Store the post ID in the state before redirecting to the login page
                   
                    navigate("/login");
                  } else {
                    // Implement your comment posting logic here
                    console.log("share...");
                  }
                };
  
    
    

  const {
    _id,
    authorName,
    authorImage,
    postDescription,
    postTitle,
    tag,
    voteCount,
    commentsCount,
    postTime,
  } = viewPost;
  return (
    <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
      <div className="flex">
        <div>
          <div>
            <figure className="px-10 pt-12">
              <img
                src={authorImage}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
            </figure>
          </div>
          <div className="ml-7 font-semibold">{authorName}</div>
        </div>

        <div className="card-body">
          <h2 className="card-title font-semibold">{postTitle}</h2>
          <p>{postDescription}</p>
          <p className="text-sm">#{tag}</p>
          <p>{postTime}</p>
          {/* <div className="flex">
            <div className="mr-5">Comments: {commentsCount}</div>
            <div>Votes: {voteCount}</div>
          </div> */}
        </div>
      </div>
      <div>
        
        <input
          className="h-20 w-8/12 border-green-500 border ml-36 mb-2 rounded p-2"
          type="text"
          name="input"
          id="textField"
          placeholder="Types your comment here"
        />
        <div className="ml-36 mb-7">
          <button onClick={handlePostComment} className="btn btn-primary">Post comment</button>
        </div>
      </div>
      <div className="flex">
      <div>
        <BiLike onClick={handleGiveUpVote} className="text-4xl ml-36 mb-10 mr-4 hover:cursor-pointer"/>
      </div>
      <div>
        <BiDislike onClick={handleGiveDownVote} className="text-4xl mr-10 hover:cursor-pointer"/>
      </div>
      <div>
      <FaShare onClick={handleSharePost} className="text-3xl hover:cursor-pointer"/>
      </div>
      </div>
    </div>
  );
};

export default ViewPostPage;
