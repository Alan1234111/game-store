import {Link} from "react-router-dom";

function HomeGalleryItem(props) {
  const styles = {
    backgroundImage: `url(img/${props.img})`,
  };

  return (
    <Link to={`/games/${props.id}`}>
      <div style={styles} className="gallery-game">
        <span className="price">{props.price}</span>
      </div>
    </Link>
  );
}

export default HomeGalleryItem;
