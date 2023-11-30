const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[90vh]"
        style={{ backgroundImage: "url(https://i.ibb.co/rwSX7LD/banner3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[600px">
            <h2 className="mb-5 text-2xl font-bold text-white">
              Connect, Discuss, and Explore
            </h2>
            <p>
              Embark on a Journey of Discovery and Connection -
              <br />
              <span className="font-semibold text-white">
                Unleashing the Power of Collective Conversations.
              </span>
            </p>
            <div className="inline-flex mt-4">
              <div className="text-center">
                <input
                  type="text"
                  placeholder="Search here...."
                  className=" rounded-l py-2 px-4 outline-none"
                />
                <button className="bg-blue-600 text-white rounded-r py-2 px-4 hover:bg-blue-600">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
