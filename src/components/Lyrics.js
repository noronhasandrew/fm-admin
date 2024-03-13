import { useContext, useState } from "react";
import Form from "./UI/Form";
import Input from "./UI/Input";
import InputContainer from "./UI/InputContainer";
import { LyricsContext } from "../store/lyrics-context";
import { handleOnChangeLyrics } from "../helpers";
import styled from "styled-components";

function Lyrics() {
  const { lyrics, updateLyrics } = useContext(LyricsContext);
  const [stanzas, setStanzas] = useState(lyrics);

  function handleSubmit(event) {
    event.preventDefault();
    updateLyrics(stanzas);
  }

  function handleReset() {
    setStanzas(stanzas);
  }

  return (
    <Form onReset={handleReset} onSubmit={handleSubmit}>
      {stanzas.map((item, index) => {
        const verses = item.split("/");
        return (
          <InputContainer key={`stanza_container_${index}`}>
            <Input
              key={`stanza_${index}`}
              labelText={`Estrofe ${index + 1}`}
              type="text"
              id={`stanza_${index}`}
              name={`stanza_${index}`}
              value={item}
              onChange={(event) => {
                handleOnChangeLyrics(event, index, setStanzas);
              }}
            />
            <Verses>
              {verses.map((verse, idx) => {
                return <p key={`stanza_${index}_${idx}`}>{verse}</p>;
              })}
            </Verses>
          </InputContainer>
        );
      })}
    </Form>
  );
}

const Verses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Lyrics;
