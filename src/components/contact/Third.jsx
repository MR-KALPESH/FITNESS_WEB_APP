import styles from "./contact.module.css";

const Third = () => {
  return (
    <div className={`${styles.third}  sections-padding`} data-aos="zoom-in">
      <div className={`${styles.third_content} container`}>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>Capitalized on hanging frut to identify with additional</p>
          <p>+91 9512985665</p>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>Capitalized on hanging frut to identify with additional</p>
          <p>Strengthy@gmai.com</p>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <h4>Location</h4>
          <p>Capitalized on hanging frut to identify with additional</p>
          <p>surat,gujrat</p>
        </div>
      </div>
    </div>
  );
};

export default Third;
