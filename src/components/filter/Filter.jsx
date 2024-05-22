import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search Location <b>Pakistan</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="rent">Apartment</option>
            <option value="buy">House</option>
            <option value="rent">Condo</option>
            <option value="rent">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">MinPrice</label>
          <input type="number" id="minPrice" name="minPrice" min={0} placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">MaxPrice</label>
          <input type="number" id="maxPrice" name="maxPrice" min={0} placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="search property" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
