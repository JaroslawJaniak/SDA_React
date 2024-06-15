import styles from "./textSection.module.css";

const TextSection = ({ content }) => {
  return (
    <section className={styles.sectionContent}>
      <p>{content}</p>
    </section>
  );
};

export default TextSection;

// const TextSection = (props) => {
//   return (
//     <section className={styles.sectionContent}>
//       <p>{props.content}</p>
//     </section>
//   );
// };

// export default TextSection;
