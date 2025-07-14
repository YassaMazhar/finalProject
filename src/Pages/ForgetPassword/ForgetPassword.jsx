import { useFormik } from "formik";
import image from "../../assets/forgetPassword.svg";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import {
  faClockFour,
  faQuestion,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SendToForgetPasswordPage } from "../../services/FogetPassword-services";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  let navigate = useNavigate();

  let schema = yup.object({
    email: yup
      .string()
      .required("Email Is Required")
      .email("enter a valid password"),
  });

  async function handleForgetPassword(values) {
    try {
      let response = await SendToForgetPasswordPage(values);
      if (response.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/verify-email");
        }, 3000);
      }
    } catch (error) {
      toast.error("Try another time");
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: handleForgetPassword,
  });

  return (
    <>
      <div className="bg-gray-100 ">
        <div className="container lg:flex p-2  md:p-5 gap-5 items-center ">
          {/* left */}
          <div className=" p-2 md:p-10 w-full lg:w-1/2 ">
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

                <button
                  type="submit"
                  className="bg-primary-600 text-white font-semibold w-full p-3 rounded-xl mt-4"
                >
                  Send Reset Link
                </button>
              </form>
            </div>

            <div className="text-center ">
              <p className="py-6 font-bold text-gray-400 flex items-center gap-1.5 justify-center">
                Remember Your Password ?
                <Link className="text-primary-400" to={"/Login"}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
