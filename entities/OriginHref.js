export class OriginHref {
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
      placeholderPosition: 0,
      relyOn: "origin",
      type: "relation",
      value,
    };
  }
}
