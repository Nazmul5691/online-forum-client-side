import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold text-center my-10">
        Make a Payment and get golden membership
      </h1>
      <Link to="/payment">
            <button className="btn btn-primary">Click here for payment</button>
      </Link>
    </div>
  );
};

export default Membership;
