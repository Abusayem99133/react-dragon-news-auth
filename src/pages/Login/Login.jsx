import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("aitase register hoyte");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl mt-4 font-bold text-center mb-4">
          Please Login
        </h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  mx-auto">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-16 p-2">
            Do not have an account{" "}
            <Link
              to="/register"
              onClick={handleRegister}
              className="text-blue-600 font-bold mt-4"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
