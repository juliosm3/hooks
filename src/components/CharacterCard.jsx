import PropTypes from "prop-types";
import "./CharacterCard.css";

function CharacterCard({ name, image }) {
  return (
    <div className="character-card">
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;