import Styles from "./DownloadCVButton.module.css";

const DownloadCVButton = () => {
  return (
    <div className={Styles.container}>
      <a
        href="/assets/CV-DianaCuellar.pdf"
        download="CV-DianaCuellar.pdf"
        className={Styles.button}
      >
        Download My CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
