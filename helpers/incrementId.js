export function incrementId(id, countriesOrdering) {
    const countries = countriesOrdering ? countriesOrdering : [
      "CHDE",
      "CHFR",
      "AT",
      "BENL",
      "BEFR",
      "CZ",
      "DE",
      "DK",
      "FI",
      "FR",
      "HU",
      "IT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "SE",
      "SK",
      "ES",
      "UK"
    ]

    const relativeIdToCountires = {}
    
    countries.forEach(country => {
        relativeIdToCountires[country] = Number(id)
        id++
    })

    return relativeIdToCountires
}