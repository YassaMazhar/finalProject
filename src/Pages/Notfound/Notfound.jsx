import {
  faComment,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import notFoundImage from "../../assets/undraw_page-not-found_6wni.svg";
import { Link } from "react-router";
export default function Notfound() {
  return (
    <>
      <div className=" h-screen ">
        <div className=" container">
          <div className="py-5">
            <img className=" size-96 mx-auto" src={notFoundImage} alt="" />
          </div>
          <div className=" text-center space-y-3 bg-primary-400/10 w-fit mx-auto py-4 px-10  rounded-lg">
            <h5 className="text-2xl font-bold">Need Help?</h5>
            <p>Our customer support team is here to assist you 24/7</p>
            <ul className="flex items-center justify-center gap-4 *:flex *:items-center *:gap-2">
              <li>
                <FontAwesomeIcon icon={faPhone} className="text-primary-400" />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary-400"
                />
                <a href="mailto:support@frcshcart.com">support@frcshcart.com</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-primary-400"
                />
                <a href="#">Live Chat</a>
              </li>
            </ul>
            <div>
              <Link to={"home"} className="text-primary-400 text-lg ">
                Return to the home page...?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
