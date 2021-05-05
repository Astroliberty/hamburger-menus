import useClipboard from "vue-clipboard3";

export const useFunctions = () => {
  const { toClipboard } = useClipboard();

  const copy = (text) => {
    const copyText = async () => {
      try {
        await toClipboard(text);
      } catch (e) {
        console.error(e);
      }
    };
    copyText();
  };
  const setEmoji = (array) => {
    const emoji = array[Math.floor(Math.random() * array.length)];
    return emoji;
  };

  return {
    copy,
    setEmoji,
  };
};
