import { reactive } from "vue";
import scssFiles from "./scss";
import cssFiles from "./css";
import htmlFiles from "./html";

export const useData = () => {
  const initialEffects = reactive([
    {
      className: "fadeOut",
      isToggleMenuActive: false,
    },
    {
      className: "fadeOutReverse",
      isToggleMenuActive: false,
    },
    {
      className: "rotate3D",
      isToggleMenuActive: false,
    },
    {
      className: "rotate2D",
      isToggleMenuActive: false,
    },
    {
      className: "rotateLine",
      isToggleMenuActive: false,
    },
    {
      className: "minus",
      isToggleMenuActive: false,
    },
    {
      className: "squeeze",
      isToggleMenuActive: false,
    },
    {
      className: "squeezeVertical",
      isToggleMenuActive: false,
    },
  ]);
  const effects = reactive(
    initialEffects.map((effect) => ({
      ...effect,
      scss: scssFiles[effect.className].default,
      css: cssFiles[effect.className].default,
      html: htmlFiles[effect.className].default,
    }))
  );

  const emojis = ["🤞", "👌", "👍", "🥳", "🤩", "✨", "🎉", "🎁"];

  return {
    emojis,
    effects,
    initialEffects,
  };
};
