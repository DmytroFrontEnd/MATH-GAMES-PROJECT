import { Link } from "react-scroll";
const BackToGames = () => {
  return (
    <Link to="games" smooth={true} duration={1500}>
      <div className="backToGames">
        Back to Games <i className="fas fa-arrow-up"></i>
      </div>
    </Link>
  );
};
export default BackToGames;
