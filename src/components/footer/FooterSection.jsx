import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-white text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div className="text-center">
  <img
    src="/images/logo.png"
    alt="GoodlySoft Logo"
    className="h-12 mx-auto"
  />

  <p className="text-sm mb-4">
    Build and Earn with your online store with lots of cool and
    exclusive features
  </p>
  <div className="flex justify-center space-x-4 text-blue-500 text-xl">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaPinterestP /></a>
  </div>
</div>


        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & License</a></li>
            <li><a href="#" className="hover:text-blue-500">Support Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Refund Policy</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Help Link</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Market Earning */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Market Earning</h3>
          <p className="text-sm mb-4">
            Online store with lots of cool and exclusive features GoodlySoft
          </p>
          <div className="flex justify-between text-sm font-medium">
            
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
