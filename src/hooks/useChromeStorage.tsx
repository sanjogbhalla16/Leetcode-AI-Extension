const useChromeStorage = () => {
  return {
    setKeyModel: async (apiKey: string) => {
      await chrome.storage.local.set({ apiKey }); // Ensure 'await' for async storage setting
    },
    getKeyModel: async () => {
      const result = await chrome.storage.local.get("apiKey");
      return result.apiKey;
    },
  };
};

export default useChromeStorage;
