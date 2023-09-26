import PropTypes from "prop-types";

const Banner = ({ handleOnSubmit }) => {
  const handleSubmit = (e) => {
    handleOnSubmit(e);
  };
  return (
    <div>
      <div
        className="hero min-h-[400px] "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pjK3Xz8/382818708-3442082969437294-4030565122765922283-n.jpg)",
        }}>
        <div className="hero-overlay opacity-100"></div>
        <div className="text-center text-neutral-content">
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="text-black h-12 rounded-s-lg placeholder: px-4"
              type="text"
              name="searchText"
              placeholder="Search here...."
            />
            <input
              className="bg-[#FF444A] h-12 px-7 rounded-e-lg font-semibold"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleOnSubmit: PropTypes.func,
};

export default Banner;
