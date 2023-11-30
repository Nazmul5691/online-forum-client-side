import Swal from "sweetalert2";

const Announcement = () => {
  const handleMakeAnnouncement = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const AuthorName = form.AuthorName.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const newProduct = { title, AuthorName, description, photo };
    console.log(newProduct);

    // Send data to the server
    fetch("https://server-side-online-forum.vercel.app/announcement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Announcement created successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-300 p-24">
        <h2 className="text-3xl font-extrabold text-center mb-5">
          Make a Announcement
        </h2>
        <form onSubmit={handleMakeAnnouncement}>
          <div className="md:flex mb-8">
            <div className="form-control w-7/12 mx-auto ">
              <label className="label">
                <span className="label-text">Author Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo url"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control w-7/12 mx-auto">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Author Name"
                  name="AuthorName"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control w-7/12 mx-auto">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control w-7/12 mx-auto ">
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

          <div className="flex items-center justify-center ">
            <input
              type="submit"
              value="Make Announcement"
              className="bg-slate-800 text-white hover:bg-slate-600 btn w-7/12 mx-auto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Announcement;
