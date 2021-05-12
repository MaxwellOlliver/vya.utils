const pad = (str, length, insertOn = 'right') => {
  str = String(str)
  const left = (str, numbers) => {
    let padStr = str
    for (let i = 0; i <= numbers; i++) {
      padStr = `0${padStr}`
    }

    return padStr
  }

  const right = (str, numbers) => {
    let padStr = str
    for (let i = 0; i <= numbers; i++) {
      padStr += '0'
    }

    return padStr
  }
  const strLength = str.length

  if (strLength >= length) {
    return str
  }

  const rest = length % strLength

  if (insertOn === 'left') {
    return left(str, rest)
  } else if (insertOn === 'right') {
    return right(str, rest)
  } else {
    throw new Error('insertOn value must be left or right.')
  }
}

module.exports = pad