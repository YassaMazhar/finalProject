import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomePartOne() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-white shadow-md rounded-lg px-2 py-4">
              <div className="size-10 bg-primary-100 text-primary-600 font-bold rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Free Delivery</h3>
                <p className="text-gray-400">Orders $50 or more</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md rounded-lg px-2 py-4">
              <div className="size-10 bg-primary-100 text-primary-600 font-bold rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faRotateLeft} />
              </div>
              <div>
                <h3 className="text-lg font-bold">30 Days Return</h3>
                <p className="text-gray-400">Satisfaction guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md rounded-lg px-2 py-4">
              <div className="size-10 bg-primary-100 text-primary-600 font-bold rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Secure Payment</h3>
                <p className="text-gray-400">100% protected checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md rounded-lg px-2 py-4">
              <div className="size-10 bg-primary-100 text-primary-600 font-bold rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div>
                <h3 className="text-lg font-bold">24/7 Support</h3>
                <p className="text-gray-400">Ready to help anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
