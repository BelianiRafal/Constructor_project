export class SlugImage {
  query = true;
  href = {
    type: "",
    relyOn: "",
    placeholderPosition: "",
    value: "",
  };
  constructor({ value }) {
    this.query = true;
    this.href = {
      placeholderPosition: 45,
      relyOn: "slug",
      type: "relation",
      value,
    };
  }
}
