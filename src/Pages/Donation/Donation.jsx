import { useEffect, useState } from "react";
import SingleDonation from "./SingleDonation";

const Donation = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const donatedItemsFromLocalStorage = JSON.parse(
      localStorage.getItem("donatedItems")
    );
    if (donatedItemsFromLocalStorage) {
      setAllDonations(donatedItemsFromLocalStorage);
    } else {
      setNotFound("NO DATA FOUND");
    }
  }, []);

  const handleSeeAll = () => {
    setDataLength(allDonations.length);
  };

  return (
    <div>
      {notFound ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <p>{notFound}</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allDonations.slice(0, dataLength).map((singleDonation) => (
              <SingleDonation
                key={singleDonation.id}
                singleDonation={singleDonation}></SingleDonation>
            ))}
          </div>
          <div
            className={dataLength === allDonations.length ? "hidden" : "py-7"}>
            <button
              onClick={handleSeeAll}
              className="block mx-auto py-3 px-7 rounded-lg text-white font-semibold bg-[#009444]">
              See All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
