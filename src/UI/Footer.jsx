import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <div>
        <p className="text-2xl font-bold pb-4">Services</p>
        <p className="text-2xl pb-4">Flight</p>
        <p className="text-2xl pb-4">Hotel</p>
        <p className="text-2xl pb-4">Visa</p>
        <p className="text-2xl pb-4">Deals</p>
        <p className="text-2xl">Rent</p>
      </div>
      <div>
        <p className="text-2xl font-bold pb-4">Account</p>
        <p className="text-2xl pb-4">Affiliate</p>
        <p className="text-2xl pb-4">My Account</p>
      </div>
      <div>
        <div className="flex items-center space-x-2 pb-4 justify-end">
          <FaSquareXTwitter size={26} />
          <RiInstagramFill size={26} />
        </div>
        <p className="font-bold text-2xl">Soar_Far_inc</p>
      </div>
    </>
  );
}
