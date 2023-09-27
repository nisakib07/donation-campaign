import PropTypes from "prop-types";
const SingleDonation = ({ singleDonation }) => {
  const {
    card_bg_color,
    donation_image,
    category,
    category_bg_color,
    price,
    name,
    text_color,
  } = singleDonation;
  const cat_bg = {
    backgroundColor: category_bg_color,
    color: text_color,
  };

  const t_color = {
    color: text_color,
  };

  const card_bg = {
    backgroundColor: card_bg_color,
  };

  const details_bg = {
    backgroundColor: text_color,
  };

  return (
    <div className="flex gap-6 items-center rounded-lg" style={card_bg}>
      <div className="h-[200px]">
        <img className="h-full" src={donation_image} alt="" />
      </div>
      <div>
        <div>
          <button
            className="text-sm font-medium px-4 py-1 rounded-lg"
            style={cat_bg}>
            {category}
          </button>
        </div>
        <h2 className="text-lg md:text-2xl font-semibold my-2">{name}</h2>
        <h3 style={t_color} className="text-base font-semibold">
          ${price}
        </h3>
        <button
          className="mt-5 px-4 py-2 rounded-lg text-lg text-white font-semibold"
          style={details_bg}>
          View Details
        </button>
      </div>
    </div>
  );
};

SingleDonation.propTypes = {
  singleDonation: PropTypes.object,
};

export default SingleDonation;
