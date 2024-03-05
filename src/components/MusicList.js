import styled from "styled-components";
import { useEffect, useState } from "react";

import {
  getMusicDetails,
  getMusicSnippets,
} from "../services/firebase/providers";

import EditIcon from "../assets/icons/editar.png";
import DeleteIcon from "../assets/icons/trash.png";

function MusicList() {
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    async function getAll() {
      try {
        const response = await getMusicSnippets();
        setSnippets(response);
      } catch (error) {
        alert(error.message);
        console.log("ERROR => ", error.message);
      }
    }
    getAll();
  }, []);

  function getItemDetails(id) {
    getMusicDetails(id).then((response) => {
      console.log(response);
    });
  }
  return (
    <ListContainer>
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
              <Icon
                src={EditIcon}
                onClick={() => {
                  console.log(snippet.music_details_id);
                  getItemDetails(snippet.music_details_id);
                }}
              />
              <Icon src={DeleteIcon} />
            </IconCointainer>
          </ListItem>
        );
      })}
    </ListContainer>
  );
}

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

const ListContainer = styled.ul`
  width: 60%;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  margin: 10px;
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

export default MusicList;
