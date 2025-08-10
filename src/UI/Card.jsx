import stars from "../assets/Img/stars.svg";
import noStar from "../assets/Img/noStar.svg";
import halfStar from "../assets/Img/halfStar.svg";
import Logo from "../assets/Img/Logo.svg";
import Button from "./Button";

export default function Card({ destination, price, cardImg, starRating }) {
  return (
    <div className="bg-card-blue w-[24.188rem] flex-none flex flex-col space-y-6 h-[31.192rem] shadow-lg rounded-2xl p-6">
      <div className="w-full h-72 bg-red-500 overflow-hidden rounded-2xl">
        <img src={cardImg} className="object-cover h-full w-full" alt="" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">{destination}</h3>
        <p className="flex">
          {Array.from({ length: 5 }, (_, i) => {
            if (starRating >= i + 1) {
              // For the full star
              return <img key={i} src={stars} alt="full star" className="" />;
            } else if (starRating >= i + 0.5) {
              //I did this for the half star
              return (
                <img key={i} src={halfStar} alt="half star" className="" />
              );
            } else {
              // This is for when the star is empty
              return <img key={i} src={noStar} alt="empty star" className="" />;
            }
          })}
        </p>
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
