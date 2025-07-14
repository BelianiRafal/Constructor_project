import getImageUrl from "./getImageUrl.js";

const translateImage = (imageName) => ({
  src: {
    type: 'relation',
    relyOn: 'slug',
    placeholderPosition: '38',
    value: getImageUrl(imageName, true),
  },
});

export default translateImage;
