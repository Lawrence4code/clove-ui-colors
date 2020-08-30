import React, { useState, createContext } from "react";

export const SoundContext = createContext();

export const SoundContextProvider = (props) => {
  const [soundState, setSoundState] = useState(true);

  const toggleSound = () => {
    setSoundState(!soundState);
  };

  return (
    <SoundContext.Provider value={{ soundState, toggleSound }}>
      {props.children}
    </SoundContext.Provider>
  );
};
