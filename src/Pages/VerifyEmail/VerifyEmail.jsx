import image from "../../assets/VerifyResetCode.svg";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import {
  faClockFour,
  faQuestion,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import { SendToVerifyEmailPage } from "../../services/VerifyEmail";

export default function VerifyEmail() {
  let navigate = useNavigate();

  let schema = yup.object({
    resetCode: yup.string().required("Enter a valid Code and You can`t write spaces at the end"),
  });

  async function handleVerifyEmail(values) {
    try {
      let response = await SendToVerifyEmailPage(values);
      if (response.success) {
        toast.success(response.data.status);
        setTimeout(() => {
          navigate("/reset-password");
        }, 1000);
      }
    } catch (error) {
      
    }
  }

  let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: schema,
    onSubmit: handleVerifyEmail,
  });

  return (
    <>
      <div className="bg-gray-100 ">
        <div className="container lg:flex p-3 md:p- gap-7 space-y-4 items-center ">
          {/* left */}
          <div className="p-4 md:p-10 w-full lg:w-1/2 ">
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
          <div className="bg-white p-4  md:p-10  w-full lg:w-1/2">
            <div className="space-y-12 py-5 px-8">
              <div className="space-y-2 text-center">
                <h2 className="text-4xl font-black">
                  <span className="text-primary-400">Fresh</span>Cart
                </h2>
                <h3 className="text-2xl font-black mt-3">Verify Reset Code </h3>
              </div>

              <form className="space-y-7" onSubmit={formik.handleSubmit}>
                <div>
                  <label className="font-semibold" htmlFor="resetCode">
                    Enter the code sent to you
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="resetCode"
                    id="resetCode"
                    placeholder="Enter your Code"
                    value={formik.values.resetCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.resetCode && formik.touched.resetCode && (
                    <p className="text-red-400">*{formik.errors.resetCode}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-primary-600 text-white font-semibold w-full p-3 rounded-xl mt-4"
                >
                  Verify Code
                </button>
              </form>
            </div>

            <div className="text-center ">
              <p className="py-6 font-bold text-gray-400 flex items-center gap-1.5 justify-center">
                <Link className="text-primary-400" to={"/Login"}>
                  Back to Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
