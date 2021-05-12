const escapeRegex = (regexToEscape) => {
  return regexToEscape.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = escapeRegex