export default localizedImage = (imageName) => ({
  src: {
    type: "relation",
    relyOn: "slug",
    placeholderPosition: "38",
    value: getImageUrl(imageName, true),
  },
})
