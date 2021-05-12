const fileExtName = (fileName) => {
  return /\.[0-9a-z]+$/i.exec(fileName)[0]
}

export default fileExtName