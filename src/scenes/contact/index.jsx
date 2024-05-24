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
  const [toastData, setToastData] = useState({
    type: "",
    message: "",
    code: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  if (state.succeeded) {
    setToast(true);
    setToastData({
      type: "success",
      message: texts[language].contact.success,
      code: "",
    });
  }

  if (state.errors) {
    console.log(state.errors);
    setToast(true);
    setToastData({
      type: "error",
      message: texts[language].contact.error,
      code: state.errors.getFormErrors(),
    });
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
      <Toast />
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
          <form
            action="https://formsubmit.co/beatrizneaime@outlook.com"
            method="POST"
            style={{
              margin: "2rem 0",
            }}
          >
            {" "}
            <Column>
              <FormGroup>
                <Label htmlFor="name">
                  {language === "en" ? "Name" : "Nome"}
                </Label>
                <Input
                  type="text"
                  placeholder={language === "en" ? "Name" : "Nome"}
                  name="name"
                  id="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">
                  {language === "en" ? "Message" : "Mensagem"}
                </Label>
                <TextArea
                  type="text"
                  placeholder={language === "en" ? "Message" : "Mensagem"}
                  cols={30}
                  rows={10}
                  name="message"
                  id="message"
                  required
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
