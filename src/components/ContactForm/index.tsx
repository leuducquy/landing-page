import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer,SocialLink } from "./styles";
import Container from "../../common/Container";
import { FooterContainer } from "../Footer/styles";
import { SvgIcon } from "../../common/SvgIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import zaloIcon from "../../img/icons8-zalo-48.png"
interface SocialLinkProps {
  href: string;
  icon: any;
}
const Contact = ({ title, content, id, t,image }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  // const SocialLink = ({ href, icon }: SocialLinkProps) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
       
  //     >
  //        <FontAwesomeIcon icon={faZalo} /> Liên hệ qua Zalo
  //     </a>
  //   );
  // };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
          <Col span={12}>
          <Row justify="space-between" align="middle">
          <SocialLink href="tel:+84966494779">  <FontAwesomeIcon size="2x" icon={faPhone} />  {t("callUs")}</SocialLink>
        <SocialLink href="https://api.whatsapp.com/send?phone=+84966494779">
          <FontAwesomeIcon size="2x"  icon={faWhatsapp} />  {t("wachtups")}
        </SocialLink>
        <SocialLink href="https://m.me/leuducquy">
          <FontAwesomeIcon size="2x" icon={faFacebookMessenger} />  {t("fbContact")}
        </SocialLink>
        <SocialLink href="https://zalo.me/0966494779">
        <SvgIcon
                    src="zalo.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  /> {t("zaloContact")}
        </SocialLink>
              </Row>
              </Col>
        </Col>
       
              
             
          
        
 
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
