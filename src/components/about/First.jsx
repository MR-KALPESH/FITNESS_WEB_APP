import styles from "./about.module.css";

const First = () => {
  return (
    <div
      className={`${styles.first} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">
        Start with us the body and
        <br />
        mind clensing
      </h1>
    </div>
  );
};

export default First;
