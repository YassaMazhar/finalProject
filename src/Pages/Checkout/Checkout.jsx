import { useFormik } from "formik";
import { useContext } from "react";
import { CartContext } from "../../Components/Context/CartProvider";
import { tokenContext } from "../../Components/Context/TokenProvider";
import axios from "axios";
import toast from "react-hot-toast";

export default function ResetPassword() {
  let { cartInfo } = useContext(CartContext);
  let { token } = useContext(tokenContext);

  async function handlePayMent(values) {
    try {
      let test = {
        shippingAddress: values,
      };
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.cartId}?url=http://localhost:5173`,
        method: "post",
        data: test,
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      toast.success('order made successfully')
      setTimeout(() => {
        location.replace(data.session.url)
      }, 1000);      
    } catch (error) {
      toast.error('error')
    }
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handlePayMent,
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white w-[450px] p-5 border border-gray-400/30 rounded-lg my-5">
          <div className="space-y-12 py-5 px-5">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-black">
                <span className="text-primary-400">Fresh</span>Cart
              </h2>
              <h3 className="text-3xl font-black">Pay New</h3>
            </div>

            <form className="space-y-7" onSubmit={formik.handleSubmit}>
              <div>
                <label className="font-semibold" htmlFor="details">
                  Details
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="details"
                  id="details"
                  placeholder="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <div className="">
                  <label className="font-semibold" htmlFor="phone">
                    phone
                  </label>
                </div>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="01010700999"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <div className="">
                  <label className="font-semibold" htmlFor="city">
                    city
                  </label>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Cairo"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <button
                type="submit"
                className="bg-primary-600 text-white font-semibold w-full p-3 rounded-xl mt-4"
              >
                Pay New
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
