export function isQuotaExceededError(err) {
  return (
    err instanceof DOMException &&
    // everything except Firefox
    (err.code === 22 ||
      // test name field too, because code might not be present
      // everything except Firefox
      err.name === "QuotaExceededError")
  );
}
