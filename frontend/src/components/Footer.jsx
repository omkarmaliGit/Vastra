import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <hr className="mt-20" />
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.vastraLogo1Black} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Vastra, we craft everyday Indian wear that blends comfort and
            style effortlessly. Our collection celebrates simplicity with
            designs made for modern living. Discover outfits that keep you
            looking fresh and feeling confident, wherever life takes you.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-88888-09985</li>
            <li>contact@vastra.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ vastra - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
