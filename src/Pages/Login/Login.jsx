import React, { useContext } from "react";
import image from "../../assets/login-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faLock,
  faQuestion,
  faStar,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { sendDataToLogin } from "../../services/login-services";
import { tokenContext } from "../../Components/Context/TokenProvider";
export default function Login() {
  let location = useLocation();
  let {token , setToken } = useContext(tokenContext);

  let navigate = useNavigate();
  let passRegex = /^[A-Za-z0-9]{8,20}$/;

  let schema = yup.object({
    email: yup
      .string()
      .required("Email Is Required")
      .email("enter a valid password"),
    password: yup
      .string()
      .required("Password Is Required")
      .matches(
        passRegex,
        "It must contain capital letters, lowercase letters, and numbers, and must not be less than 8."
      ),
  });

  async function getLoginData(values) {
    try {
      let response = await sendDataToLogin(values);
      if (response.success) {
        toast.success("Done successfully");
        
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          if(location.state){
            navigate(location.state.from )
          }
          else {
           navigate('home')
          }
        }, 3000);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: getLoginData,
  });
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="container lg:flex p-3 gap-5 items-center ">
          {/* left */}
          <div className=" p-4 md:p-10 w-full lg:w-1/2 ">
            <div className=" shadow-xl rounded-md overflow-hidden ">
              <img className="w-1/2 object-cover  mx-auto" src={image} alt="" />
            </div>
            <div className="space-y-4 text-center mt-3">
              <h3 className="text-3xl font-bold">Fresh Groceries Delivered</h3>
              <p className="text-gray-400">
                Join thousands of happy customers who trust FreshCart for their{" "}
                <br />
                daily grocery needs
              </p>
              <ul className=" flex items-center justify-around px-12 gap-5 *:flex *:items-center *:gap-3">
                <li>
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-primary-400"
                  />
                  <span>Free Delivery </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className="text-primary-400"
                  />
                  <span>Secure Payment </span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faClockFour}
                    className="text-primary-400"
                  />
                  <span>24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className="bg-white p-4 md:p-10  w-full lg:w-1/2">
            <div className="space-y-12 py-5 px-8">
              <div className="space-y-2 text-center">
                <h2 className="text-4xl font-black">
                  <span className="text-primary-400">Fresh</span>Cart
                </h2>
                <h3 className="text-4xl font-black">Welcome Back!</h3>
                <p className="text-xl text-gray-400">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>
              <div className=" *:w-full space-y-4 *:flex *:items-center *:gap-3 *:justify-center *:border *:border-gray-400/40 *:p-3 *:rounded-xl">
                <button>
                  <FontAwesomeIcon icon={faGoogle} className="text-red-400" />
                  <span className="font-semibold">Continue with Google</span>
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-400"
                  />
                  <span className="font-semibold">Continue with Facebook</span>
                </button>
              </div>
              <form className="space-y-7" onSubmit={formik.handleSubmit}>
                <div>
                  <label className="font-semibold" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-400">*{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="font-semibold" htmlFor="password">
                      Password
                    </label>
                    <Link className="text-primary-400" to={"forget-password"}>
                      Forget Password?
                    </Link>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-400">*{formik.errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-primary-600 text-white font-semibold w-full p-3 rounded-xl mt-4"
                >
                  Sign In
                </button>
              </form>
            </div>
            <div className="text-center ">
              <p className="py-6 font-bold text-gray-400">
                New to FreshCart?{" "}
                <Link className="text-primary-400" to={"signup"}>
                  Create an account
                </Link>
              </p>
              <ul className="flex items-center justify-center gap-8 *:flex *:items-center *:gap-2 *:text-gray-400">
                <li>
                  <FontAwesomeIcon icon={faLock} />
                  <span>SSL Secured</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Users</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} />
                  <span>4.9 Rating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
