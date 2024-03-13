import { useContext, useState } from "react";

import { InspirationContext } from "../store/inspiration-context";
import Input from "./UI/Input";
import Form from "./UI/Form";
import InputContainer from "./UI/InputContainer";

import { handleOnChangeDate, handleOnChangeText } from "../helpers";

function Inspiration() {
  const { content, interview, addContent, updateInterview } =
    useContext(InspirationContext);
  const [values, setValues] = useState({
    content,
    author: interview.author,
    date: interview.date,
  });

  function handleSubmit(event) {
    event.preventDefault();
    addContent(values.content);
    updateInterview(values.author, values.date);
  }

  function handleReset() {
    setValues({ content, author: interview.author, date: interview.date });
  }

  return (
    <Form onReset={handleReset} onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          labelText={"Conteúdo"}
          type="text"
          id="content"
          name="content"
          value={values.content}
          onChange={(event) => {
            handleOnChangeText(event, setValues);
          }}
          bottomText={values.content}
        />
      </InputContainer>
      <InputContainer>
        <Input
          labelText={"Entrevistado"}
          type="text"
          id="author"
          name="author"
          value={values.author}
          onChange={(event) => {
            handleOnChangeText(event, setValues);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          labelText={"Data da entrevista"}
          type="date"
          id="date"
          name="date"
          value={values.date.toDate().toISOString().split("T")[0]}
          onChange={(event) => handleOnChangeDate(event, setValues)}
        />
      </InputContainer>
    </Form>
  );
}

export default Inspiration;
