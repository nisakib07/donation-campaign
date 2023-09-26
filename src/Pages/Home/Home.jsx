import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const allCards = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allCards.map((card) => (
          <Cards card={card} key={card.id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
