const escapeRegex = (regexToEscape) => {
  return regexToEscape.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default escapeRegex