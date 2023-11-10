import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import homeimage from "../../img/homeimage.jpeg"
import grapimage from "../../img/grapimage.jpg"
import productLuach from "../../img/productLuach.jpeg"
import equiptment from "../../img/equiptment.png"
import contactUs from "../../img/contactUs.jpeg"
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
        image={homeimage}
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
        image={grapimage}
        id="about"
      />
      <ContentBlock
        type="left"
        title={"misionTitle"}
        content={"misionText"}
        icon="product-launch.svg"
        image={productLuach}
        id="mission"
      />
      <ContentBlock
        type="left"
        title={"productTitle"}
        content={"productText"}
        icon="waving.svg"
        image={equiptment}
        id="product"
      />
      <Contact
        title={"contactTitle"}
        content={"contactText"}
        id="contact"
        image={contactUs}
      />
    </Container>
  );
};

export default Home;
