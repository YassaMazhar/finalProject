import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  Link } from "react-router";
import logo from '../../assets/mini-logo.png'
export default function Footer() {
  return (
    <>
      <footer className=" border-t border-gray-500/20">
        <div className="container ">
          <div className="grid md:grid-col-3 space-y-3 lg:grid-cols-5 py-8 px-5 space-x-4">
            <div className="col-span-2 space-y-3">
              <h3 className="text-2xl font-bold "><span className="text-primary-500">Fresh</span>Cart</h3>
              <p className="text-gray-500/70">
                FreshCart is your one-stop destination for fresh groceries,
                organic produce, and household essentials delivered right to
                your doorstep.
              </p>
              <ul className="flex items-center gap-3">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-xl font-bold">Categories</h2>
              <ul className="space-y-2 mt-2 *:text-gray-500/70">
                <li>
                  <Link to={""}>Fruits & Vegetables</Link>
                </li>
                <li>
                  <Link to={""}>Dairy & Eggs</Link>
                </li>
                <li>
                  <Link to={""}>Bakery & Snacks </Link>
                </li>
                <li>
                  <Link to={""}>Meat & Seafood</Link>
                </li>
                <li>
                  <Link to={""}>Beverages </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold">Quick Links</h2>
              <ul className="space-y-2 mt-2 *:text-gray-500/70">
                <li>
                  <Link to={""}>About Us</Link>
                </li>
                <li>
                  <Link to={""}>Contact Us</Link>
                </li>
                <li>
                  <Link to={""}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={""}>Terms of Service</Link>
                </li>
                <li>
                  <Link to={""}>Shipping Policy </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold">Customer Service</h2>
              <ul className="space-y-2 mt-2 *:text-gray-500/70">
                <li>
                  <Link to={""}>My Account</Link>
                </li>
                <li>
                  <Link to={""}>Order History</Link>
                </li>
                <li>
                  <Link to={""}>Wishlist </Link>
                </li>
                <li>
                  <Link to={""}>Returns & Refunds</Link>
                </li>
                <li>
                  <Link to={""}>Help Center </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex p-5 justify-between items-center border-t border-gray-500/20 py-4">
            <p className="text-gray-500/70">&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>
            <img className="w-[30px]" src={logo} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
