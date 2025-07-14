import {
  faAddressCard,
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faEnvelope,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/mini-logo.png";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { tokenContext } from "../Context/TokenProvider";
import { CartContext } from "../Context/CartProvider";

export default function Navbar() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  let { token, logOut } = useContext(tokenContext);
  let { cartInfo, isLoading } = useContext(CartContext);

  function changeMenuState() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="bg-white">
        <div className="container">
          {/* top navbar */}
          <div className="p-2 hidden lg:flex items-center justify-between border-b border-gray-200">
            <ul className="flex items-center gap-4 *:flex *:items-center *:gap-2">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567"> +1 (800) 123-4567 </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
            </ul>

            <ul className="flex items-center gap-6 *:hover:text-primary-500">
              <li>
                <NavLink to={"/track-order"}>Track Order</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <select className=" cursor-pointer">
                  <option>USD</option>
                  <option>EGP</option>
                </select>
              </li>
              <li>
                <select className=" cursor-pointer">
                  <option>العربية</option>
                  <option>English</option>
                </select>
              </li>
            </ul>
          </div>

          {/* main navbar */}
          <nav className="flex items-center justify-between px-2 py-5">
            <div className="flex items-center gap-1">
              <img className="w-[30px]" src={logo} alt="" />
              <h1 className="text-2xl font-extrabold ">
                <span className="text-primary-500">Fresh</span>Cart
              </h1>
            </div>

            <search className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search For Products.."
                className="px-3 py-1 focus:outline-none border border-gray-500/50 rounded-md w-[400px]"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className=" absolute top-1/2 -translate-y-1/2 right-4"
              />
            </search>

            <div className="hidden lg:block">
              <ul className="flex items-center gap-5  ">
                <li className="*:flex *:flex-col *:gap-1 *:hover:text-primary-500">
                  <NavLink
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""}`;
                    }}
                    to={"/wishlist"}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Wishlist</span>
                  </NavLink>
                </li>

                <li className="*:flex *:flex-col *:gap-1 *:hover:text-primary-500 relative">
                  <NavLink
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""}`;
                    }}
                    to={"/cart"}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Cart</span>
                  </NavLink>
                  {token && (
                    <span className=" absolute size-5 bg-primary-400 text-white rounded-full flex items-center justify-center -top-2.5 -right-1 text-sm">
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        cartInfo && cartInfo.numOfCartItems
                      )}
                    </span>
                  )}
                </li>
                <li className="*:flex *:flex-col *:gap-1 *:hover:text-primary-500">
                  <NavLink
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""}`;
                    }}
                    to={"/account"}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span>Account</span>
                  </NavLink>
                </li>
                {!token ? (
                  <>
                    <li className="*:flex *:flex-col *:gap-1 *:hover:text-primary-500">
                      <NavLink
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500" : ""}`;
                        }}
                        to={"/signup"}
                      >
                        <FontAwesomeIcon icon={faUserPlus} />
                        <span>Signup</span>
                      </NavLink>
                    </li>
                    <li className="*:flex *:flex-col *:gap-1 *:hover:text-primary-500">
                      <NavLink
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500" : ""}`;
                        }}
                        to={"/login"}
                      >
                        <FontAwesomeIcon icon={faAddressCard} />
                        <span>Login</span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
                {token ? (
                  <>
                    <li className="*:flex *:flex-col *:gap-1 *:hover:text-primary-500">
                      <button onClick={logOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <NavLink
                          className={({ isActive }) => {
                            return `${isActive ? "text-primary-500" : ""}`;
                          }}
                          to={"/login"}
                        >
                          Logout
                        </NavLink>
                      </button>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>

            <button
              className="lg:hidden size-10 bg-primary-500 rounded-lg text-white "
              onClick={changeMenuState}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>

        {/* categories navbar */}
        <nav className="hidden lg:block bg-gray-200 py-4 ">
          <div className="flex items-center gap-10 container px-3">
            <div className="relative group">
              <button className="bg-primary-600 flex items-center gap-2 text-white p-2 rounded-md">
                <FontAwesomeIcon icon={faBars} />
                All Categories
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <menu className="z-20 hidden w-[190px] *:hover:bg-gray-200 *:flex  *:items-center *:gap-3  bg-gray-100 group-hover:flex transition-all duration-1000 flex-col px-2 *:py-2 py-2 space-y-3 *:border-b *:border-gray-300/40 rounded-lg *:hover:text-primary-500 absolute">
                <Link to={""}>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    fixedWidth
                    icon={faPerson}
                  />
                  <span>Men`s Fashion</span>
                </Link>
                <Link to={""}>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    fixedWidth
                    icon={faPersonDress}
                  />
                  <span>Women`s Fashion</span>
                </Link>
                <Link to={""}>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    fixedWidth
                    icon={faBabyCarriage}
                  />
                  <span>Baby & Toys</span>
                </Link>
                <Link to={""}>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    fixedWidth
                    icon={faSuitcaseMedical}
                  />
                  <span>Beauty & Health</span>
                </Link>
                <Link to={""}>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    fixedWidth
                    icon={faBolt}
                  />
                  <span>Electronics</span>
                </Link>
                <Link to={""}>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    fixedWidth
                    icon={faEllipsis}
                  />
                  <span>View All Categories</span>
                </Link>
              </menu>
            </div>

            <ul className="flex items-center gap-6">
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}`;
                  }}
                  to={"/home"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}`;
                  }}
                  to={"/shop"}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}`;
                  }}
                  to={"/deals"}
                >
                  Deals
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}`;
                  }}
                  to={"/new-arrivals"}
                >
                  New Arrivals
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}`;
                  }}
                  to={"/categories"}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}`;
                  }}
                  to={"/brands"}
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {isMenuOpen ? (
          <>
            <div
              className="bg-black/50 fixed inset-0 z-20 cursor-pointer"
              onClick={changeMenuState}
            ></div>
            <div className="bg-white top-0 bottom-0 fixed z-30 p-5 space-y-5 ">
              <div className="flex justify-between items-center border-b border-gray-400/50 pb-4">
                <div className="flex items-center gap-1">
                  <img className="w-[30px]" src={logo} alt="" />
                  <h1 className="text-2xl font-extrabold ">
                    <span className="text-primary-500">Fresh</span>Cart
                  </h1>
                </div>
                <button
                  className="size-10 bg-gray-200 rounded-full "
                  onClick={changeMenuState}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>

              <search className="relative">
                <input
                  type="text"
                  placeholder="Search For Products.."
                  className="px-3 py-1 focus:outline-none border border-gray-500/40 rounded-md w-64"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className=" absolute top-1/2 -translate-y-1/2 right-4"
                />
              </search>

              <div className="border-b border-gray-400/40 pb-4">
                <h2 className="text-xl font-bold">Main Menu</h2>
                <ul className="space-y-3 mt-3">
                  <li className="*:flex *:gap-2  *:hover:text-primary-500">
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}`;
                      }}
                      to={"/wishlist"}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                      <span>Wishlist</span>
                    </NavLink>
                  </li>

                  <li className="*:flex *:gap-2  *:hover:text-primary-500">
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}`;
                      }}
                      to={"/cart"}
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span>Cart</span>
                    </NavLink>
                  </li>
                  <li className="*:flex *:gap-2  *:hover:text-primary-500">
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}`;
                      }}
                      to={"/account"}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span>Account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold">Account</h2>
                <ul className="space-y-3 mt-3">
                  {token ? (
                    ""
                  ) : (
                    <>
                      <li className="*:flex *:gap-2 *:hover:text-primary-500">
                        <NavLink
                          className={({ isActive }) => {
                            return `${isActive ? "text-primary-500" : ""}`;
                          }}
                          to={"/signup"}
                        >
                          <FontAwesomeIcon icon={faUserPlus} />
                          <span>Signup</span>
                        </NavLink>
                      </li>
                      <li className="*:flex *:gap-2 *:hover:text-primary-500">
                        <NavLink
                          className={({ isActive }) => {
                            return `${isActive ? "text-primary-500" : ""}`;
                          }}
                          to={"/login"}
                        >
                          <FontAwesomeIcon icon={faAddressCard} />
                          <span>Login</span>
                        </NavLink>
                      </li>
                    </>
                  )}

                  {token ? (
                    <>
                      <li className="*:flex *:gap-2 *:hover:text-primary-500">
                        <button onClick={logOut}>
                          <NavLink
                            className={({ isActive }) => {
                              return `${isActive ? "text-primary-500" : ""}`;
                            }}
                            to={"/login"}
                          >
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span>Logout</span>
                          </NavLink>
                        </button>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </header>
    </>
  );
}
