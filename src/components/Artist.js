import { useContext, useState } from "react";
import { ArtistContext } from "../store/artist-context";
import Form from "./UI/Form";
import Input from "./UI/Input";
import InputContainer from "./UI/InputContainer";
import { handleOnChangeText, handleOnChangeRef } from "../helpers";

function Artist() {
  const { content, references, updateContent, updateReferences } =
    useContext(ArtistContext);
  const [values, setValues] = useState({
    content,
    references,
  });

  function handleSubmit(event) {
    event.preventDefault();
    updateContent(values.content);
    updateReferences(values.references);
  }

  function handleReset() {
    setValues({ content, references });
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
      {values.references.map((item, index) => {
        return (
          <InputContainer key={`ref_${index}`}>
            <Input
              key={`reference_${index}`}
              labelText={`Referência ${index + 1}`}
              type="text"
              id={`reference_${index}`}
              name={"content"}
              value={item.content}
              onChange={(event) => {
                handleOnChangeRef(event, index, setValues);
              }}
            />
            <Input
              key={`refLink_${index}`}
              labelText={`Link da referência ${index + 1}`}
              type="text"
              id={`refLink_${index}`}
              name={"url"}
              value={item.url}
              onChange={(event) => {
                handleOnChangeRef(event, index, setValues);
              }}
            />
          </InputContainer>
        );
      })}
    </Form>
  );
}

export default Artist;
