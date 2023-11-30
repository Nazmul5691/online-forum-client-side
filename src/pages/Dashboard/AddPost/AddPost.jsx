import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/Authprovider";

const AddPost = () => {

    const { user } = useContext(AuthContext);
  const handleAddPost = (event) => {
    event.preventDefault();

    const form = event.target;
    const authorName = form.authorName.value;
    // const email = form.email.value;
    const description = form.description.value;
    const authorImage = form.authorImage.value;
    const postTitle = form.postTitle.value;
    const upVote = form.upVote.value;
    const downVote = form.downVote.value;
    const tag = form.tag.value;
    const comment = form.comment.value;
    const votes = form.votes.value;

    const newProduct = {
      authorName,
      email: user.email,
      description,
      authorImage,
      postTitle,
      upVote,
      downVote,
      tag,
      comment,
      votes
    };
    // console.log(newProduct);

    // Send data to the server
    fetch("https://server-side-online-forum.vercel.app/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Post successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-300 p-24">
        <h2 className="text-3xl font-extrabold text-center mb-5"> Add Post</h2>
        <form onSubmit={handleAddPost}>
          <div className="md:flex  mb-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Author Name"
                  name="authorName"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

           
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2  ">
              <label className="label">
                <span className="label-text">Author Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Author Image Url"
                  name="authorImage"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Post Title"
                  name="postTitle"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2  ">
              <label className="label">
                <span className="label-text">Up Vote</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Up Vote"
                  name="upVote"
                  defaultValue={0}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Down Vote</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Down Vote"
                  name="downVote"
                  defaultValue={0}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2  ">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Comment"
                  name="comment"
                  defaultValue={0}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Votes</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Votes"
                  name="votes"
                  defaultValue={0}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>



          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 mb-16">
              <label className="label">
                <span className="label-text">Select a Tag</span>
              </label>
              <label className="select">
                <select name="tag" className="select  w-full">
                  <option value="Covid-19">Covid-19</option>
                  <option value="Technology">Technology</option>
                  <option value="RussiaWar">RussiaWar</option>
                  <option value="ClimateChange">ClimateChange</option>
                </select>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Post"
            className="bg-slate-800 text-white hover:bg-slate-600 btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPost;


 {/* <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Author Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="Author Email"
                  name="email"
                  className="input input-bordered w-full"
                />
              </label>
            </div> */}