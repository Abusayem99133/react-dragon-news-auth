import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl mt-4 font-bold text-center mb-4">
          Please Register
        </h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  mx-auto">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
          <p className="ml-16 p-2">
            Already have an account{" "}
            <Link
              onClick={handleLogin}
              to="/login"
              className="text-blue-600 font-bold mt-4"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
