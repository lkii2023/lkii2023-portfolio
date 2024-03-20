import React from "react";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const [theme, setTheme] = React.useState("light");
  const [isExpanded, setExpanded] = React.useState(false);

  // Suppression de la logique du thème sombre

  const toggleExpanded = () => setExpanded((prevState) => !prevState);

  const closeExpanded = function () {
    setTimeout(function () {
      setExpanded(false);
    }, 250);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isExpanded,
        toggleExpanded,
        closeExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

export { AppContext, AppProvider };
