Math.roundTo = Math.roundTo || function roundTo(number, decimals) {
  const multiplier = 10 ** decimals;
  return Math.round(number * multiplier) / multiplier;
};
