import { socialImgs } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
                <a href={socialImg.imgLink} target="blank">
              <img src={socialImg.imgPath} alt="social icon" />
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
