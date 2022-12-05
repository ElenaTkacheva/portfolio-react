import './style.css';
import gitHubItem from "./../../img/icons/gitHub-black.svg";

const BtnGitHub = ( {link} ) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubItem} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
