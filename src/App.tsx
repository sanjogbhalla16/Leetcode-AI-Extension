import React, { useEffect, useState } from "react";
import LoadingButton from "./components/ui/LoadingButton";
import ApiKeyInput from "./components/ui/ApiKeyInput";
import leetCode from "./assets/leetcode.png";
import useChromeStorage from "./hooks/useChromeStorage";
import Show from "./components/Show";

const Popup: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{
    status: "error" | "success";
    message: string;
  } | null>(null);

  //we need to store the api key in the chrome browser local storage
  const saveApiKey = async () => {
    try {
      setIsLoading(true);
      const { setKeyModel } = useChromeStorage();
      if (apiKey) {
        await setKeyModel(apiKey);
      }
      //now we give the message for successful storage of the api key
      setSubmitMessage({
        status: "success",
        message: "API key stored successfully",
      });
    } catch (err: any) {
      setSubmitMessage({
        status: "error",
        message: err.message,
      });
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
      const { getKeyModel } = await useChromeStorage();
      setApiKey(await getKeyModel());
      setIsLoaded(true);
    };
    loadChromeStorage();
  }, []);

  //now we write the tsx code for the popup
  return (
    <div className="relative p-4 w-[350px] bg-background">
      <Show show={isLoaded}>
        <div className="w-full h-20 overflow-hidden">
          <img
            className="mx-auto h-20 w-auto"
            src={leetCode}
            width={150}
            height={150}
            alt="LeetCode"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            LeetCode <span className="text-orange-500">AI Extension</span>
          </h1>
          <p className="text-sm text-gray-400">
            Get step-by-step help to boost problem-solving skills effectively
          </p>
        </div>
        <form className="mt-10 flex flex-col gap-4 w-full">
          <ApiKeyInput
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <LoadingButton isLoading={isLoading} onClick={saveApiKey}>
            Save API Key
          </LoadingButton>
        </form>
        {submitMessage && (
          <div
            className={`mt-2 text-center text-sm p-2 rounded ${
              submitMessage.status === "error"
                ? "bg-red-100 text-red-500"
                : "bg-green-100 text-green-500"
            }`}
          >
            {submitMessage.message}
          </div>
        )}
      </Show>
    </div>
  );
};

export default Popup;
