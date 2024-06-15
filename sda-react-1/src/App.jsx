import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TextSection from "./components/textSection/TextSection";
import { TEXTS } from "./translations";
import Counter from "./components/counter/counter";

function App() {
  return (
    <>
      <Header title={TEXTS.header.title}></Header>
      <TextSection content={TEXTS.textSection.text1}></TextSection>
      <TextSection content={TEXTS.textSection.text2}></TextSection>

      <Footer
        copyrightInfo={TEXTS.footer.copyrightInfo}
        author={TEXTS.footer.authorInfo}
      ></Footer>
      <Counter />
    </>
  );
}

export default App;
