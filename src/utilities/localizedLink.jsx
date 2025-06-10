export default localizedLink = (value) => ({
  query: true,
  href: {
    type: "relation",
    relyOn: "origin",
    placeholderPosition: "0",
    value,
  },
})
