import { addParams } from "../../helpers/getQueryLink.js";






export function handleLinks(state) {
    return state.template === "newsletter" ? addParams(state.links, state.ids[state.country], state.country) : state.links
}