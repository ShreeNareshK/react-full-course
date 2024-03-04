import React, { useEffect, useState } from "react";
import "./useeffectsearchAPI.css";
import Usestate from "./Usestate";

var URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function UseeffectsearchAPI() {
  const [drinks, setDrinks] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  async function fetchDrinks(URL) {
    try {
      setLoading(true);
      setIsError({ status: false, msg: "" });
      var response = await fetch(URL);
      var data = await response.json();
      console.log(data);
      setDrinks(data.drinks);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (!data.drinks || data.drinks.length === 0) {
        throw new Error("Data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong",
      });
    }
  }

  useEffect(() => {
    var searchURL = `${URL}${filter}`;
    fetchDrinks(searchURL);
  }, [filter]);

  return (
    <>
      <form className="search">
        <div className="searchs">
          <input
            type="text"
            className="search"
            placeholder="search your favourite drink here"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </form>
      {loading && !isError?.status && <h2>Loading....</h2>}
      {isError?.status && <h2>{isError.msg}</h2>}
      {!loading && !isError?.status && (
        <div className="drinks-list">
          {drinks.map((eachDrink) => {
            const {
              idDrink,
              strAlcoholic,
              strCategory,
              strDrink,
              strDrinkThumb,
            } = eachDrink;
            return (
              <div className="each-drink" key={idDrink}>
                <img src={strDrinkThumb} alt={strDrink} className="image" />
                <h1 className="name">{strDrink}</h1>
                <h3 className="category">{strCategory}</h3>
                <p className="type">{strAlcoholic}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
export default UseeffectsearchAPI;
