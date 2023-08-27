import styles from "./blogSimgle.module.css";
import photo from "../../assets/blog9.png";

const Third = () => {
  return (
    <div className={`${styles.third} sections-padding`}>
      <img src={photo} alt="" />
      <h4>Benjamin Gray</h4>
      <p>Professional Trainer</p>
      <p>
        When an unknown printegalley of type and scrambled it to make a type
        specimen book. It has but also leap into electronic typesetting.
      </p>
      <a href="https://www.linkedin.com/in/kalpesh-katariya01/" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Third;
