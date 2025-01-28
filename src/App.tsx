import React, { useEffect, useState } from "react";
import BasicButtons from "./components/ui/button";
import FormPropsTextFields from "./components/ui/input";

const Popup: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //we need to store the api key in the chrome browser local storage
  const saveApiKey = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
    } catch {}
  };
  //when we load the popup we need to check if the api key is stored in the local storage
  useEffect(() => {}, []);

  return <div>Popup</div>;
};

export default Popup;
