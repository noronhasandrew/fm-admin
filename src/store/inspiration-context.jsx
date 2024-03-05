import { createContext, useReducer } from "react";

export const InspirationContext = createContext({
  content: "",
  addContent: () => {},
  deleteContent: () => {},
  references: undefined,
  image: undefined,
  interview: undefined,
});

const inspirationReducer = (state, action) => {
  if (action.type === "ADD_CONTENT") {
    return {
      ...state,
      content: action.payload.text,
    };
  }

  if (action.type === "DELETE_CONTENT") {
    return {
      ...state,
      content: action.payload.text,
    };
  }
  return state;
};

export const InspContextProvider = ({ children, initialState }) => {
  const [inspState, inspDispatch] = useReducer(
    inspirationReducer,
    initialState
  );

  const handleAddContent = (text) => {
    inspDispatch({
      type: "ADD_CONTENT",
      payload: {
        text,
      },
    });
  };

  const handleDeleteContent = () => {
    inspDispatch({
      type: "DELETE_CONTENT",
      payload: {
        text: "",
      },
    });
  };

  const ctxValue = {
    content: inspState.content,
    interview: inspState.interview,
    addContent: handleAddContent,
    deleteContent: handleDeleteContent,
  };

  return (
    <InspirationContext.Provider value={ctxValue}>
      {children}
    </InspirationContext.Provider>
  );
};
