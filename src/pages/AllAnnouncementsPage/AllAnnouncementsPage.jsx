import { useEffect, useState } from "react";



const AllAnnouncementsPage = () => {
    const [announcements, setAnnouncements] = useState([]);


    useEffect(() => {
        // Fetch announcements from your server
        fetch('https://server-side-online-forum.vercel.app/announcement')
          .then((response) => response.json())
          .then((data) => setAnnouncements(data))
          .catch((error) => console.error('Error fetching announcements:', error));
      }, []);
    
      const announcementHeight = 100; // Adjust this value based on your design
    
      const sectionHeight = announcements.length * announcementHeight;


    return (
        <>
        <h2 className="text-4xl font-semibold text-center mt-10">All Announcements</h2>
      {announcements.length > 0 && (
        
        <div className={`bg-base-200 pt-4 px-10 w-7/12 mx-auto rounded-md my-10 `} style={{ height: `${sectionHeight}px` }}>
          <span className='font-bold  hover:underline'>All Announcements</span>
          <div>
            {announcements.map((announcement, index) => (
              <div key={announcement._id} className="my-4 font-semibold">
                <h2>{`${index + 1}. ${announcement.title}`}</h2>
                
              </div>
            ))}
          </div>
        </div>
      )}
     
    </>
    );
};

export default AllAnnouncementsPage;