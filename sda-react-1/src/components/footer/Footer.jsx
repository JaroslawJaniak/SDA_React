import styles from "./footer.module.css";

const Footer = ({ copyrightInfo, author }) => {
  return (
    <footer className={styles.footerContainer}>
      {copyrightInfo} {author}
    </footer>
  );
};

export default Footer;
