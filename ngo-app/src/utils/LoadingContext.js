import React ,{ useState, createContext } from "react";

export const LoadingContext = createContext();

export function LoadingProvider(props) {
  // Page Loading:true , Done Loading : false
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
}
