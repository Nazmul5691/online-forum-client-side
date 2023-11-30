/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PostsCard = ({ post }) => {
  const {
    _id,
    authorName,
    authorImage,
    postTitle,
    tag,
    voteCount,
    commentsCount,
    postTime,
  } = post;

  return (
    <Link to={`/viewPost/${_id}`}>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="flex">
          <figure className="px-10 ">
            <img
              src={authorImage}
              alt=""
              className="rounded-full w-[50px] h-[50px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold">{postTitle}</h2>
            <p className="">#{tag}</p>
            <p>{postTime}</p>
            <div className="flex">
              <div className="mr-5">Comments: {commentsCount ?? 0}</div>
              <div>Votes: {voteCount ?? 0}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostsCard;
