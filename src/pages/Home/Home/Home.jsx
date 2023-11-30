import AllPost from "../AllPost/AllPost";
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import Banner from "../Banner/Banner";
import TagSection from "../TagsSection/TagSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col lg:flex-row mb-10 mt-10">
        <div className="">
          <div className="mb-5">
            <AnnouncementSection />
          </div>
          <div>
            <TagSection />
          </div>
        </div>
        <div className="lg:ml-20 p-5 w-full lg:pr-16">
          <AllPost></AllPost>
        </div>
      </div>
    </div>
  );
};

export default Home;
