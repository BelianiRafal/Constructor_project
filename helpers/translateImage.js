import getImageUrl from './getImageUrl.js';

const translateImage = ({
  value,
  type = 'relation',
  relyOn = 'slug',
  placeholderPosition = '38',
}) => ({
  src: {
    type: type,
    relyOn: relyOn,
    placeholderPosition: placeholderPosition,
    value: getImageUrl(value, true),
  },
});

export default translateImage;
