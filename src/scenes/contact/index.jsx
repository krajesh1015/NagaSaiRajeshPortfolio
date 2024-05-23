import {
  Column,
  LeftSide,
  RightSide,
  RightSideContent,
  SceneLayout,
} from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import Divider from "./../../components/common/Divider";
import profile from "./../../assets/svg/contact.svg";
import { Button, FormGroup, Input, Label, TextArea } from "./components/style";
import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import Toast from "./components/toast";

const Contact = ({ language }) => {
  const desktop = useMediaQuery("(min-width: 1019px)");
  const [toast, setToast] = useState(false);
  const [state, handleSubmit] = useForm("xwkgjbpr");

  if (state.succeeded) {
    return <Toast />;
  }

  if (state.errors) {
    console.log(state.errors);
    setToast(true);
    return;
  }

  return (
    <SceneLayout
      className="md"
      id="contact"
      style={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      {toast && <Toast />}
      <Column width={desktop ? "50%" : "100%"}>
        <PageTitle>{texts[language].contact.title}</PageTitle>
        <Divider width={"30%"} />
      </Column>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: desktop ? "row" : "column",
        }}
      >
        <RightSide>
          <RightSideContent>
            <img src={profile} alt="Beatriz Neaime" />
          </RightSideContent>
        </RightSide>
        <LeftSide>
          <p>{texts[language].contact.text}</p>
          <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
            <Column>
              <FormGroup>
                <Label>{language === "en" ? "Name" : "Nome"}</Label>
                <Input
                  type="text"
                  placeholder={language === "en" ? "Name" : "Nome"}
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label>E-mail</Label>
                <Input type="email" placeholder="e-mail" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label>{language === "en" ? "Message" : "Mensagem"}</Label>
                <TextArea
                  type="text"
                  placeholder={language === "en" ? "Message" : "Mensagem"}
                  cols={30}
                  rows={10}
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormGroup>
              <Button type="submit">
                {language === "en" ? "Send" : "Enviar"}
              </Button>
            </Column>
          </form>
        </LeftSide>
      </div>
    </SceneLayout>
  );
};

export default Contact;
