import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import data from "../data/data.json";
import HomeGalleryItem from "../components/HomeGalleryItem";
function Home() {
  const [games, setGames] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setGames(data);
  }, []);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const displayedGames = games.map((game) => {
    return <HomeGalleryItem key={game.id} id={game.id} img={game.img} price={game.price} />;
  });

  return (
    <main className="main">
      <div className="event-baner">
        <div className="event-information">
          <h2>Summer Sale</h2>
          <h3>up to -70%</h3>
          <Link to="games">
            <button className="event-btn">Check Out</button>
          </Link>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider">{displayedGames}</div>
      </div>

      <div className="game-category-select">
        <h3>Search By Category</h3>
        <Link to="/games?category=adventure" className="adventure">
          Adventure
        </Link>
        <Link to="/games/?category=sport" className="sport">
          Sports
        </Link>
        <Link to="/games/?category=racing" className="racing">
          Racing
        </Link>
        <Link to="/games/?category=action" className="action">
          Action
        </Link>
        <Link to="/games/?category=horror" className="horror">
          Horror
        </Link>
        <Link to="/games/?category=strategy" className="strategy">
          Strategy
        </Link>
      </div>
    </main>
  );
}

export default Home;
