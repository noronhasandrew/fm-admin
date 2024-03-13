import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EditIcon from "../assets/icons/editar.png";
import DeleteIcon from "../assets/icons/trash.png";
import { getMusicSnippets } from "../services/firebase/providers";

function Home() {
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    async function getAll() {
      try {
        const response = await getMusicSnippets();
        setSnippets(response);
      } catch (error) {
        alert(error.message);
      }
    }
    getAll();
  }, []);

  return (
    <>
      <Total>Total de Músicas ({snippets.length})</Total>
      <ul>
        {snippets.map((snippet) => {
          return (
            <ListItem key={snippet.id}>
              <Image src={snippet.place.image_uri} />
              <SnippetInfo>
                <h3>{snippet.name.ui}</h3>
                <p>{snippet.authors.join(", ")}</p>
                <Place>{snippet.place.name}</Place>
              </SnippetInfo>
              <IconCointainer>
                <Link to={`/musicas/${snippet.music_details_id}`}>
                  <Icon src={EditIcon} />
                </Link>
                <Icon src={DeleteIcon} />
              </IconCointainer>
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}

const Total = styled.h4`
  align-self: end;
  margin-top: 1rem;
`;

const IconCointainer = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  flex-wrap: nowrap;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const ListItem = styled.li`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #cccccc;
`;

const Place = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #054f77;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const SnippetInfo = styled.div`
  flex-direction: collumn;
`;

export default Home;
