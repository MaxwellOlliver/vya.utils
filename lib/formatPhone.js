const formatPhone = (phone) => {
  const numberReg = /^(\d{2})(\d{2})(\d{5}|\d{4})(\d{4})$/

  const [, ...number] = numberReg.exec(phone) || []

  return number.length > 0 ? `+${number.join(' ')}` : phone
}

module.exports = formatPhone