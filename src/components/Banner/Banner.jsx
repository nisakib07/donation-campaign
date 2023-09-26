const Banner = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
  };

  return (
    <div>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pjK3Xz8/382818708-3442082969437294-4030565122765922283-n.jpg)",
        }}>
        <div className="hero-overlay opacity-100"></div>
        <div className="hero-content text-center text-neutral-content">
          <form onSubmit={handleOnSubmit}>
            <input className="text-black" type="text" name="searchText" />
            <input className="bg-[blue]" type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
