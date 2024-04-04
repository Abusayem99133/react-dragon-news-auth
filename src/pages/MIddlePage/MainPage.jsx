import { useEffect, useState } from "react";
import profile from "../../assets/IMG_20220930_181146.jpg";
import moment from "moment";
import { CiBookmark, CiShare2 } from "react-icons/ci";
const MainPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
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
      <div>
        <img src="" alt="" />
        <p>
          Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
          United States, Worthy News (Worthy News) U.S. President Joe Biden has
          announced nearly $3 billion in new U.S. military a.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default MainPage;
