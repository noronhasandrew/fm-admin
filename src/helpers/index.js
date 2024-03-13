import { Timestamp } from "firebase/firestore";

export function handleOnChangeDate(event, setState) {
  const key = event.target.name;
  let value = event.target.value;

  function dateIsValid(date) {
    return !Number.isNaN(new Date(date).getTime());
  }

  if (dateIsValid(value)) {
    if (value.length > 10) {
      return;
    }
    const date = new Date(value);
    value = Timestamp.fromDate(date);

    setState((prevState) => {
      return { ...prevState, [key]: value };
    });
  }
}

export function handleOnChangeText(event, setState) {
  const key = event.target.name;
  const value = event.target.value;
  setState((prevState) => {
    return { ...prevState, [key]: value };
  });
}

export function handleOnChangeRef(event, index, setState) {
  const value = event.target.value;
  const name = event.target.name;
  setState((prevState) => {
    return {
      ...prevState,
      references: [...prevState.references].map((item, idx) => {
        if (idx === index) {
          item[name] = value;
        }
        return item;
      }),
    };
  });
}

export function handleOnChangeLyrics(event, index, setState) {
  const value = event.target.value;
  setState((prevState) => {
    return [...prevState].map((item, idx) => {
      if (idx === index) {
        item = value;
      }
      return item;
    });
  });
}
