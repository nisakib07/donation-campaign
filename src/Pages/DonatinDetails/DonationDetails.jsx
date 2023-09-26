import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});
  const { details_image, name, text_color, price, description } = donation;

  const btn_bg = {
    backgroundColor: text_color,
  };

  const { id } = useParams();
  const intId = parseInt(id);

  const donations = useLoaderData();

  useEffect(() => {
    const selectedDonation = donations.find(
      (singleDonation) => singleDonation.id === intId
    );
    setDonation(selectedDonation);
  }, [intId, donations]);

  const handleDonateBtn = () => {
    const donatedArray = [];

    const donated = JSON.parse(localStorage.getItem("donatedItems"));
    if (!donated) {
      donatedArray.push(donation);
      localStorage.setItem("donatedItems", JSON.stringify(donatedArray));
      toast(`You have successfully donated $${price}`);
    } else {
      const exists = donated.find(
        (existingDonation) => existingDonation.id === intId
      );
      if (!exists) {
        donatedArray.push(...donated, donation);
        localStorage.setItem("donatedItems", JSON.stringify(donatedArray));
        toast(`You have successfully donated $${price}`);
      } else {
        toast("You have already donated here");
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[700px] rounded-lg"
          src={details_image}
          alt=""
        />
        <div className="w-full h-[130px] absolute bottom-0 left-0 bg-[#1f201fd9] flex items-center">
          <button
            onClick={handleDonateBtn}
            className="p-4 ml-9 rounded-lg text-xl font-semibold text-white"
            style={btn_bg}>
            Donate ${price}
          </button>

          <ToastContainer></ToastContainer>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-4xl font-bold mb-6">{name}</h1>
        <p className="text-[#0b0b0bb3]">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
