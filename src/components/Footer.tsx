import React from "react";
import Link from "next/link";
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#b3d7f4] text-gray-800 pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16 px-6 sm:px-8 md:px-16 lg:px-32">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-20 mb-12 md:mb-14">
          <div className="flex items-start space-x-4">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Image src="/logo.svg" width={36} height={28} alt="Logo" className="w-9 h-7" />
                <span className="text-xl font-bold text-gray-900">E-Comm</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-700 max-w-xs sm:max-w-[250px] md:max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. It has been the industry&apos;s
                standard dummy text ever. Since the 1500s, when an unknown
                printer.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3">Follow Us</h3>
            <p className="text-xs text-gray-700 mb-4 max-w-xs sm:max-w-[250px] md:max-w-xs">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex space-x-6 md:space-x-10 mt-6">
              <Link href="#">
                <Image src="/footer/facebook.svg" width={18} height={18} alt="Facebook" className="h-auto w-auto" />
              </Link>
              <Link href="#">
                <Image src="/footer/twitter.svg" width={18} height={18} alt="Twitter" className="h-auto w-auto" />
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-44 pb-6 md:pb-4 mb-10 md:mb-12">
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

        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 mt-4 md:mt-0">
            <Image width={40} height={24}
              src="/footer/western-union.png"
              alt="Western Union"
              className="h-6 w-auto"
            />
            <Image src="/footer/master-card.png" width={40} height={24} alt="Master Card" className="h-6 w-auto" />
            <Image src="/footer/paypal.png" width={40} height={24} alt="Paypal" className="h-6 w-auto" />
            <Image src="/footer/visa.png" width={40} height={24} alt="Visa" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
