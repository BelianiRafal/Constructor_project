import generateLoginURL from "../utils/generateLoginURL.js";

export class GoogleAuth {
  static async login() {
    window.location.href = generateLoginURL();
  }
}
