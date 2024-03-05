import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "../../../App";

export const getMusicDetails = async (id) => {
  const docRef = doc(db, process.env.REACT_APP_DB_DETAILS, id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getMusicSnippets = async () => {
  try {
    const c = collection(db, process.env.REACT_APP_DB_SNIPPETS);
    const querySnapshot = await getDocs(c);
    const snippets = [];
    querySnapshot.forEach((doc) => {
      snippets.push({ id: doc.id, ...doc.data() });
    });
    return snippets;
  } catch (error) {
    const customError = new Error("Ocorreu um erro ao carregar as músicas.");
    customError.name = "GetMusicSnippetsError";
    throw customError;
  }
};
