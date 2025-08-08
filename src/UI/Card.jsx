import stars from "../assets/Img/stars.svg";
import Logo from "../assets/Img/Logo.svg";
import Button from "./Button";

export default function Card({ destination, price, cardImg }) {
  return (
    <div className="bg-card-blue w-[24.188rem] flex-none flex flex-col space-y-6 h-[31.192rem] shadow-lg rounded-2xl p-6">
      <div className="w-full h-72 bg-red-500 overflow-hidden rounded-2xl">
        <img src={cardImg} className="object-cover h-full w-full" alt="" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">{destination}</h3>
        <img src={stars} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">${price}</h3>
        <Button type="bookNow">Book Now</Button>
      </div>
      <div className="flex gap-2">
        <img src={Logo} alt="logo" className="w-5" />
        <p className="font-normal"> Soar Far</p>
      </div>
    </div>
  );
}
