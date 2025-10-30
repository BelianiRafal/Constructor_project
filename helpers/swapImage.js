export const swapImage = ({ format, src }) => {
  try {
    const parsed = new URL(src);
    const split = parsed.pathname.split(".");
    if (split[1] === "gif") {
      return src;
    }
    return parsed.origin + split[0] + format;
  } catch (error) {
    throw new Error(error);
  }
};
