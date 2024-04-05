import profile from "../../assets/IMG_20220930_181146.jpg";
import moment from "moment";
import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const MainPage = ({ aNews }) => {
  const { title, image_url, details, _id } = aNews;
  return (
    <div>
      <h1 className=" font-display text-2xl">Dragon News Home</h1>
      {/* <div>
        <img className="" src={profile} alt="" />
        
      </div> */}
      <div className="flex justify-between p-4 bg-slate-300 items-center mt-5">
        <div className="flex gap-4">
          <div className="w-12 ">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src={profile}
            />
          </div>
          <div className="mt-2">
            <p>Md. Abu Sayem</p>
            <p className="  mt-1">{moment().format("MM/D/YYYY")}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CiBookmark></CiBookmark>
          <CiShare2 />
        </div>
      </div>
      <p className="mt-3 text-2xl p-4">
        Biden Pledges Nearly S3 Billion To Ukraine in Largest U.S Military Aic
        Package Yet
      </p>

      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}{" "}
          <Link to={`/aNews/${_id}`} className="text-red-600 font-bold">
            Read More...
          </Link>
        </p>
      ) : (
        <p>{details}</p>
      )}
      <div>
        <img src={image_url} alt="" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MainPage;
MainPage.propTypes = {
  aNews: PropTypes.object,
};
