// TODO: Refactor this

import logger from "./logger"

// temporary to get the img url...
const localizedImage = (data) => {
  const new_url = import.meta.env.VITE_PICTURE_SERVER_URL + data
  logger.debug(`Localized image ${data} [new url: ${new_url}]`)
  return new_url
}

export default localizedImage
