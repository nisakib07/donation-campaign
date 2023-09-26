import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const allCards = useLoaderData();
  const [matched, setMatched] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    const matchedDonations = allCards.filter(
      (card) => card.category === searchText
    );
    if (matchedDonations.length > 0) {
      setMatched(matchedDonations);
    } else {
      console.log("h");
    }
  };

  return (
    <div>
      <Banner handleOnSubmit={handleOnSubmit}></Banner>
      {matched.length === 0 ? (
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-40">
          {allCards.map((card) => (
            <Cards card={card} key={card.id}></Cards>
          ))}
        </div>
      ) : (
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
          {matched.map((card) => (
            <Cards card={card} key={card.id}></Cards>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
