const getRandomHex = () => {
  const hex = ((Math.random() * 0xffffff) << 0).toString(16);

  return `#${hex}`;
};

module.exports = getRandomHex;
