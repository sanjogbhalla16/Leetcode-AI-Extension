import React, { useEffect, useState } from "react";
import BasicButtons from "./components/ui/button";
import FormPropsTextFields from "./components/ui/input";
import useChromeStorage from "./hooks/useChromeStorage";

const Popup: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sendMessage, setSendMessage] = useState<{
    status: "error" | "success";
    message: string;
  } | null>(null);

  //we need to store the api key in the chrome browser local storage
  const saveApiKey = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { setKeyModel } = useChromeStorage();
      if (apiKey) {
        await setKeyModel(apiKey);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };
  //when we load the popup we need to check if the api key is stored in the local storage
  useEffect(() => {
    //check if the api key is stored in the local storage when we fist load the popup
    const loadChromeStorage = async () => {
      //first we check if chrome is there or not
      if (!chrome) return;
      const apiKey = await useChromeStorage();
    };
  }, []);

  return <div>Popup</div>;
};

export default Popup;
