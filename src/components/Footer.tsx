import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#b3d7f4] text-gray-800 pt-36 pb-[4.5rem] px-32">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-56 mb-14">
          <div className="flex items-start space-x-4">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <img src="/logo.svg" alt="Logo" className="w-9 h-7" />
                <span className="text-xl font-bold text-gray-900">E-Comm</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-700 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. It has been the industry&apos;s
                standard dummy text ever. Since the 1500s, when an unknown
                printer.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3">Follow Us</h3>
            <p className="text-xs text-gray-700 mb-4 max-w-xs">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex space-x-10 mt-6">
              <Link href="#">
                <img src="facebook.svg" alt="Facebook" />
              </Link>
              <Link href="#">
               <img src="twitter.svg" alt="Twitter" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3">Contact Us</h3>
            <p className="text-xs text-gray-700">
              E-Comm, 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-44 pb-4 mb-12">
          {["Infomation", "Service", "My Account", "Our Offers"].map(
            (section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{section}</h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Infomation</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>

        <div className="border-t-2 border-gray-200 my-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-400">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img
              src="/western-union.png"
              alt="Western Union"
              className="h-6"
            />
            <img src="/master-card.png" alt="Master Card" className="h-6" />
            <img src="/paypal.png" alt="Paypal" className="h-6" />
            <img src="/visa.png" alt="Visa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
