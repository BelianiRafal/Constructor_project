const translateLink = (value, type = 'relation', relyOn = 'origin', placeholderPosition = '0') => ({
  query: true,
  href: {
    type: type,
    relyOn: relyOn,
    placeholderPosition: placeholderPosition,
    value: value,
  },
});

export default translateLink;
