import { createContext, useReducer } from "react";

export const LyricsContext = createContext({
  lyrics: [],
  updateLyrics: () => {},
});

const lyricsReducer = (state, action) => {
  return [...action.payload.list];
};

export const LyricsContextProvider = ({ children, initialState }) => {
  const [lyricsState, lyricsDispatch] = useReducer(lyricsReducer, initialState);

  const handleUpLyrics = (list) => {
    lyricsDispatch({
      payload: { list },
    });
  };

  const ctxValue = {
    lyrics: lyricsState,
    updateLyrics: handleUpLyrics,
  };

  return (
    <LyricsContext.Provider value={ctxValue}>{children}</LyricsContext.Provider>
  );
};
