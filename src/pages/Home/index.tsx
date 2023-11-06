import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={"introTitle"}
        content={"introText"}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={"middleTitle"}
        content={"middleText"}
        content1={"middleText1"}
        button={"middleButton"}
      />
      
      <ContentBlock
        type="left"
        title={"aboutTitle"}
        content={"aboutText"}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={"misionTitle"}
        content={"misionText"}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={"productTitle"}
        content={"productText"}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={"contactTitle"}
        content={"contactText"}
        id="contact"
      />
    </Container>
  );
};

export default Home;
