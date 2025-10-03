import { getState } from "../main/initApp.js";
import { swapImage } from "./swapImage.js";

export function optimize(component) {
  return (...args) => {
    const { src, ...other } = args[0];
    const isNeedToOptimizeImg = getState("optimizeImg");
    let newSrc = src;
    if (isNeedToOptimizeImg) {
      newSrc =
        getState("template").type === "newsletter"
          ? src
          : swapImage({ format: ".webp", src: src });
    }
    
    return component({ src: newSrc, ...other });
  };
}

export function isAllowToRender(fn) {
  return (...args) => {
    if (args && args.length > 0 && "is_active" in args[0]) {
      const { is_active } = args[0];
      if (is_active === false) return "";
      return fn(...args);
    } else {
      return fn(...args);
    }
  };
}
