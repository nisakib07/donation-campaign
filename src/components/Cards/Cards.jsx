import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const {
    card_bg_color,
    card_image,
    category,
    category_bg_color,
    id,
    name,
    text_color,
  } = card;

  const cat_bg = {
    backgroundColor: category_bg_color,
  };

  const card_bg = {
    backgroundColor: card_bg_color,
  };

  const t_color = {
    color: text_color,
  };
  return (
    <Link to={`/donation/${id}`}>
      <div>
        <img className="w-full" src={card_image} alt="" />
        <div className="p-4 rounded-b-lg h-32" style={card_bg}>
          <div style={t_color}>
            <button
              className="text-sm font-medium px-4 py-1 rounded-lg mb-2"
              style={cat_bg}>
              {category}
            </button>
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};

export default Cards;
