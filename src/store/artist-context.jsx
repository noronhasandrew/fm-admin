import { createContext, useReducer } from "react";

export const ArtistContext = createContext({
  content: "",
  references: [],
  updateContent: () => {},
  updateReferences: () => {},
});

const artistReducer = (state, action) => {
  if (action.type === "UP_CONTENT") {
    return {
      ...state,
      content: action.payload.text,
    };
  }

  if (action.type === "UP_REFERENCES") {
    return {
      ...state,
      references: action.payload.list,
    };
  }
  return state;
};

export const ArtistContextProvider = ({ children, initialState }) => {
  const [artState, artDispatch] = useReducer(artistReducer, initialState);

  const handleUpContent = (text) => {
    artDispatch({
      type: "UP_CONTENT",
      payload: {
        text,
      },
    });
  };

  const handleUpReferences = (list) => {
    artDispatch({
      type: "UP_REFERENCES",
      payload: { list },
    });
  };

  const ctxValue = {
    content: artState.content,
    references: artState.references || [],
    updateContent: handleUpContent,
    updateReferences: handleUpReferences,
  };

  return (
    <ArtistContext.Provider value={ctxValue}>{children}</ArtistContext.Provider>
  );
};
