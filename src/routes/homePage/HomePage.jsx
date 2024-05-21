import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Your Perfect Home with Our Real Estate Services.
          </h1>
          <p className="description">
            Welcome to Propware, your ultimate destination for buying and
            selling homes with ease. Whether you're looking to purchase your
            dream home or sell your current property, our comprehensive real
            estate services cater to all your needs.
            <br /> <br /> Explore our extensive listings of properties that fit
            every budget and preference. Our user-friendly platform allows you
            to filter your search by location, price, size, and amenities,
            ensuring you find the perfect match.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>8+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>500+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="propware real estate" />
      </div>
    </div>
  );
}

export default HomePage;
