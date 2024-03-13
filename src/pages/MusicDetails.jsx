import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMusicDetails } from "../services/firebase/providers";
import { InspContextProvider } from "../store/inspiration-context";
import Loading from "../components/Loading";
import styled from "styled-components";

import Inspiration from "../components/Inspiration";
import Video from "../components/Video";
import Artist from "../components/Artist";
import Place from "../components/Place";
import Lyrics from "../components/Lyrics";
import { ArtistContextProvider } from "../store/artist-context";
import { LyricsContextProvider } from "../store/lyrics-context";

const SECTIONS = [
  { name: "lyrics", text: "Letra" },
  { name: "place", text: "Local" },
  { name: "artist", text: "Artista" },
  { name: "inspiration", text: "Inspiração" },
  { name: "video", text: "Vídeo" },
];

function MusicDetails() {
  const components = {
    inspiration: Inspiration,
    video: Video,
    artist: Artist,
    place: Place,
    lyrics: Lyrics,
  };
  const [details, setDetails] = useState();
  const [active, setActive] = useState("lyrics");
  const params = useParams();

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await getMusicDetails(params.musicId);
        console.log(response);
        setDetails(response);
      } catch (error) {
        alert(error.message);
        console.log("ERROR => ", error.message);
      }
    }
    getDetails();
  }, [params.musicId]);

  function handleClick(sectionName) {
    setActive(sectionName);
  }

  if (details) {
    const Content = components[active];
    return (
      <LyricsContextProvider initialState={details.lyrics}>
        <ArtistContextProvider initialState={details.artist}>
          <InspContextProvider initialState={details.inspiration}>
            <Menu>
              <List>
                {SECTIONS.map((section) => {
                  return (
                    <Item
                      key={section.name}
                      $active={active === section.name}
                      onClick={() => {
                        handleClick(section.name);
                      }}
                    >
                      {section.text}
                    </Item>
                  );
                })}
              </List>
            </Menu>
            <Content />
          </InspContextProvider>
        </ArtistContextProvider>
      </LyricsContextProvider>
    );
  }

  return <Loading />;
}

const Menu = styled.nav`
  position: relative;
  bottom: -1px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  gap: 2rem;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4rem;
  width: 12rem;
  background-color: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  border-top: ${({ $active }) => ($active ? "4px solid #0197b6" : "none")};
  color: ${({ $active }) => ($active ? "#0197b6" : "#000000")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};

  &:hover {
    border-top: 4px solid #0197b6;
    color: #0197b6;
  }
`;

export default MusicDetails;
