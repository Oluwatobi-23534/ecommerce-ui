import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            {" "}
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-xl"
            >
              Esell
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
              facere eum maiores et corporis est rem consequatur ex sunt dolores
              libero.
            </p>
            <p className="text-gray-500 mt-4">Magic by Tobi Daniel 💎</p>
            <a
              href="https://www.youtube.com/channel/dummylink"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our Youtube channel
            </a>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:dark:text-white duration-300 dark:text-gray-400"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:dark:text-white duration-300 dark:text-gray-400"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Ikeja, Lagos</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+2349162837696</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="">
                    <FaInstagram className="text-3xl hover:text-primary duration-100" />
                  </a>
                  <a href="">
                    <FaFacebook className="text-3xl hover:text-primary duration-100" />
                  </a>
                  <a href="">
                    <FaLinkedin className="text-3xl hover:text-primary duration-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
