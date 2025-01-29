const useChromeStorage = () => {
  return {
    setKeyModel: async (apiKey: string) => {
      await chrome.storage.local.set({ apiKey }); // Ensure 'await' for async storage setting
    },
  };
};

export default useChromeStorage;
