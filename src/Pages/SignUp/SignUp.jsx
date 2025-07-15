import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faFeatherPointed,
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFormik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { sendDataToSignup } from "../../services/signup-services";
export default function SignUp() {
  let navigate = useNavigate();
  let passwordRegex = /^[0-9]{8,15}$/;
  let phoneRegex = /^01[0125][0-9]{8}$/;

  let schema = yup.object({
    name: yup
      .string()
      .required("The Name Is Required")
      .min(3, "It must be at least 3 letters and no more than 20 letters.")
      .max(20, "It must be at least 3 letters and no more than 20 letters."),
    email: yup
      .string()
      .required("The Email Is Required")
      .email("Enter a Valid Email"),
    password: yup
      .string()
      .required("The Password Is Required")
      .matches(
        passwordRegex,
        "Enter numbers only, no less than 8 numbers and no more than 15 numbers."
      ),
    rePassword: yup
      .string()
      .required("The RePassword Is Required")
      .oneOf([yup.ref("password")], "Must be similar to the password"),
    phone: yup
      .string()
      .required("The Phone Is Required")
      .matches(phoneRegex, "Must be an Egyptian number containing 11 digits"),
  });

  async function handelRegister(values) {
    try {
      await sendDataToSignup(values);
      toast.success("Successfully toasted!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error);
    }
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: handelRegister,
  });

  return (
    <>
      <div className="bg-gray-100 py-5">
        <div className="container lg:flex items-center gap-4 ">
          {/* left */}
          <div className="space-y-6 p-14 w-full lg:w-1/2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">
                Welcome to <span className="text-primary-400">FreshCart</span>
              </h2>
              <p className="text-black/50  text-xl">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
              </p>
            </div>

            <div>
              <ul className=" *:flex *:items-center *:gap-3 space-y-5">
                <li>
                  <div className="size-10 bg-primary-100 text-primary-600 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faFeatherPointed} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Fresh & Organic</h4>
                    <p className="text-gray-500/80">
                      Premium quality products sourced directly from farms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="size-10 bg-primary-100 text-primary-600 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Fast Delivery</h4>
                    <p className="text-gray-500/80">
                      Same-day delivery available in most arcas
                    </p>
                  </div>
                </li>
                <li>
                  <div className="size-10 bg-primary-100 text-primary-600 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Secure Shopping</h4>
                    <p className="text-gray-500/80">
                      Your data and payments are completely secure
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/30 shadow-lg rounded-xl px-5 py-5 space-y-3 ">
              <div className="flex gap-3">
                <div className="size-10 rounded-full overflow-hidden ">
                  <img
                    className=""
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <div className=" *:text-yellow-300">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
              <div>
                <blockquote className="text-black/60 italic text-lg">
                  "FreshCart has completely changed how I shop for groceries.
                  The quality is amazing and delivery is always on time! "
                </blockquote>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="bg-white/80 p-16 rounded-md space-y-8 w-full lg:w-1/2">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold">Create Your Account</h2>
              <p className="text-gray-400/90">
                Start your fresh journey with us today
              </p>
            </div>

            <div className="flex gap-5 ">
              <button className="flex gap-2 hover:bg-gray-200 items-center justify-center px-3 py-2 border border-gray-400/50 rounded-md w-1/2">
                <FontAwesomeIcon icon={faGoogle} className="text-red-400" />
                <span>Google</span>
              </button>
              <button className="flex gap-2 hover:bg-gray-200 items-center justify-center px-3 py-2 border border-gray-400/50 rounded-md w-1/2">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
                <span>Faceboke</span>
              </button>
            </div>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name *</label>
                <input
                  className="form-control"
                  id="firstName"
                  type="text"
                  placeholder="Yassa Mazhar"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-500">*{formik.errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="yassa1@gmail.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-500">*{formik.errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="011 2634 9201"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <p className="text-red-500">*{formik.errors.phone}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="password">Password *</label>
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="text-red-500">*{formik.errors.password}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="password">Confirm Password *</label>
                <input
                  className="form-control"
                  id="rePassword"
                  type="password"
                  placeholder="Confirm your password"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <p className="text-red-500">*{formik.errors.rePassword}</p>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <input
                  className=" accent-primary-400 size-4"
                  type="checkbox"
                  name=""
                  id="confirm"
                />
                <label htmlFor="confirm">
                  I agree lo the{" "}
                  <a href="#" className="text-primary-400 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary-400 underline">
                    Privacy Policy
                  </a>{" "}
                  *
                </label>
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 w-full p-1.5 rounded-md text-white flex items-center gap-2 justify-center"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span> Create My Account</span>
              </button>
            </form>

            <p className="text-center py-2">
              Already have an account?{" "}
              <Link className="text-primary-400" to={"/login"}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
