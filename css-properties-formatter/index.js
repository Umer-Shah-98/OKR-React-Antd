function convertCSSProperties(cssString) {
  const properties = cssString.split(/;\s*|\n\s*/);
  const convertedProperties = {};

  properties.forEach((property) => {
    if (property.trim() !== "") {
      const [propertyName, propertyValue] = property.split(":");
      const camelCaseName = propertyName.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase().trim()
      );
      let formattedValue = propertyValue.trim();
      convertedProperties[camelCaseName] = formattedValue;
    }
  });

  return convertedProperties;
}

// Example usage:
const css = `font-family: Outfit;
font-size: 26px;
font-weight: 500;
line-height: 33px;
letter-spacing: 0em;
text-align: left;


























`;

const convertedCSS = convertCSSProperties(css);
console.log(convertedCSS);

function generateShortUniqueId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 16; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}
