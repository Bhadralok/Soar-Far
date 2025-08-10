import Button from "../UI/Button";
import logo from "../assets/Img/Logo.svg";
import coverImg from "../assets/Img/Coverimg.png";
import Card from "../UI/Card";
import car from "../assets/Img/car.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { useRef } from "react";
import NavLink from "../UI/NavLink";
import Footer from "../UI/Footer";

export default function Home() {
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const nextSlide2 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const prevSlide2 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const travelData = [
    {
      destination: "Paris",
      rating: 1,
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      destination: "Rome",
      rating: 1.5,
      price: 900,
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
    },
    {
      destination: "Dubai",
      rating: 5,
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=800&q=80",
    },
    {
      destination: "London",
      rating: 4.5,
      price: 1300,
      image:
        "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80",
    },
    {
      destination: "Paris",
      rating: 1,
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      destination: "Rome",
      rating: 3,
      price: 900,
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
    },
    {
      destination: "Miami",
      rating: 2,
      price: 1150,
      image:
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="p-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" />
          <p className="font-semibold text-2xl">Soar-Far</p>
        </div>
        <NavLink />
        <div className="flex items-center space-x-4">
          <Button type="login">Login</Button>
          <Button type="signUp">Sign Up</Button>
        </div>
      </header>

      <main className="pl-20">
        {/* Hero */}
        <section className="flex items-start justify-between pr-20">
          <div className="pt-10 w-[40%] flex flex-col space-y-8">
            <h1 className="text-8xl font-[700]">
              Make your every trip memorable
            </h1>
            <p className="text-2xl font-medium text-black w-[80%]">
              Plan, and get inspiration from our most affordable travel plans to
              have a memorable time
            </p>
            <Button type="getStarted">Get Started</Button>
          </div>
          <div className="w-[60%]">
            <img src={coverImg} className="w-full" alt="cover-img" />
          </div>
        </section>

        {/* Trending Carousel */}
        <section className="overflow-hidden">
          <div className="flex pb-20 items-center justify-between pt-20">
            <h2 className="font-bold text-4xl">Trending</h2>
            <div className="pr-40">
              <Button isButton={false} onPrev={prevSlide} onNext={nextSlide} />
            </div>
          </div>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto items-center pb-20 pr-20 gap-6 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {travelData.map((data, i) => (
              <Card
                key={i}
                price={data.price}
                cardImg={data.image}
                destination={data.destination}
                starRating={data.rating}
              />
            ))}
          </div>
        </section>

        {/* Available Destination Carousel */}
        <section>
          <div className="flex pb-20 items-center justify-between pt-20">
            <h2 className="font-bold text-4xl">Available Destination</h2>
            <div className="pr-40">
              <Button
                isButton={false}
                onPrev={prevSlide2}
                onNext={nextSlide2}
              />
            </div>
          </div>
          <div
            ref={carouselRef2}
            className="flex overflow-x-auto items-center pb-6 pr-20 gap-6 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {travelData.map((data, i) => (
              <Card
                key={i}
                price={data.price}
                cardImg={data.image}
                destination={data.destination}
                starRating={data.rating}
              />
            ))}
          </div>
        </section>

        {/* Vehicle Rent */}
        <section className="flex items-center justify-around pr-20">
          <div className="w-[70%]">
            <img src={car} alt="car" className="object-cover w-full h-full" />
          </div>
          <div className="w-[30%] flex flex-col space-y-6">
            <h2 className="text-4xl text-secondary-blue font-bold">
              Rent a Vehicle with ease at any location
            </h2>
            <p className="text-3xl font-medium italic">
              Available for customers only
            </p>
            <Button type="getStarted">Rent now</Button>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="flex flex-col items-center">
        <section className="w-[90%] bg-primary-blue pt-10 flex flex-col items-center justify-center h-96 rounded-3xl space-y-4">
          <h2 className="text-secondary-blue font-bold text-5xl">
            Subscribe to our Newsletter
          </h2>
          <p className="text-secondary-blue text-2xl">
            To get more exciting offers and updates
          </p>
          <input
            type="text"
            className="w-[35%] bg-white rounded-2xl h-14 p-3 text-2xl text-center border-0 outline-0"
            placeholder="Your E-mail Address"
          />
          <button className="gradient-btn rounded-full text-lg py-3 px-8">
            Subscribe
          </button>
        </section>x
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-20 px-48 flex items-start justify-around w-full">
        <Footer />
      </footer>
    </>
  );
}
