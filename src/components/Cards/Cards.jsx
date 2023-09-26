import PropTypes from "prop-types";

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
    backgroundColor: card_bg_color,
  };

  const card_bg = {
    backgroundColor: card_bg_color,
  };

  const t_color = {
    color: text_color,
  };
  return (
    <div className="flex flex-col">
      <img className="w-full" src={card_image} alt="" />
      <div className="p-4 rounded-b-lg flex-grow" style={card_bg}>
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
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};

export default Cards;
