type LogPrefix = "[INFO]" | "[ERROR]" | "[WARN]" | "[DEBUG]"

const COLORS: Record<LogPrefix, string> = {
  "[INFO]": "color: white; font-weight: bold",
  "[ERROR]": "color: red; font-weight: bold",
  "[WARN]": "color: orange; font-weight: bold",
  "[DEBUG]": "color: purple; font-weight: bold",
}

type TableArg = { table: any }

const log = (prefix: LogPrefix, args: any[]) => {
  const color = COLORS[prefix] || COLORS["[INFO]"]
  const hasTable = args.some((arg) => arg && typeof arg === "object" && "table" in arg)

  if (hasTable) {
    args.forEach((arg) => {
      if (arg && typeof arg === "object" && "table" in arg) {
        const filteredArgs = args.filter((a) => a !== arg)
        if (filteredArgs.length) {
          // @ts-ignore
          // eslint-disable-next-line no-console
          console.log(`%c${prefix}`, color, ...filteredArgs)
        } else {
          // eslint-disable-next-line no-console
          console.log(`%c${prefix}`, color)
        }
        // eslint-disable-next-line no-console
        console.table(arg.table)
      }
    })
  } else {
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.log(`%c${prefix}`, color, ...args)
  }
}

export const createLogger = () => ({
  info: (...messages: any[]) => log("[INFO]", messages),
  error: (...messages: any[]) => log("[ERROR]", messages),
  warn: (...messages: any[]) => log("[WARN]", messages),
  debug: (...messages: any[]) => log("[DEBUG]", messages),
})

const logger = createLogger()
export default logger
