import React, { useContext } from "react";
import { Await, Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { tokenContext } from "../../Components/Context/TokenProvider";
import { sendDataToResetPasswordPage } from "../../services/ResetPassword-services";


export default function ResetPassword() {
  let { setToken } = useContext(tokenContext);

  let navigate = useNavigate();
  let passRegex = /^[A-Za-z0-9]{8,20}$/;

  let schema = yup.object({
    email: yup
      .string()
      .required("Email Is Required")
      .email("enter a valid password"),
    newPassword: yup
      .string()
      .required("Password Is Required")
      .matches(
        passRegex,
        "It must contain capital letters, lowercase letters, and numbers, and must not be less than 8."
      ),
  });

  async function getNewPassword(values) {
    try {
      let response = await sendDataToResetPasswordPage(values)
      if(response.success){
        toast.success("The password has been changed successfully.")
        setToken(response.data.toke)
        setTimeout(() => {
          navigate('login')
        }, 2000);
      }
      
    } catch (error) {
      toast.error("try again")
   
      
      
    }
    
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: " ",
    },
    validationSchema: schema,
    onSubmit: getNewPassword,
  });


  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white w-[450px] p-5 border border-gray-400/30 rounded-lg my-5">
          <div className="space-y-12 py-5 px-5">
            <div className="space-y-3 text-center">
              <h2 className="text-4xl font-black">
                <span className="text-primary-400">Fresh</span>Cart
              </h2>
              <h3 className="text-3xl font-black">Reset Password!</h3>
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
                <div className="">
                  <label className="font-semibold" htmlFor="newPassword">
                    New Password
                  </label>
              
                </div>
                <input
                  className="form-control"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Enter your password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.newPassword && formik.touched.newPassword && (
                  <p className="text-red-400">*{formik.errors.newPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary-600 text-white font-semibold w-full p-3 rounded-xl mt-4"
              >
                Reset Password
              </button>
            </form>
          </div>
          <div className="text-center ">
            <p className="py-3 font-bold text-gray-400">
              Remember Your Password?{" "}
              <Link className="text-primary-400" to={"login"}>
               Login
              </Link>
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
