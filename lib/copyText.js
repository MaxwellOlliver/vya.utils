const copyText = (text) => {
  try {
    if (navigator.clipboard) {
      await navigator.permissions.query({ name: 'clipboard-write' })
      await navigator.clipboard.writeText(text)
      return true
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = text
  
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
  
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
  
      document.execCommand('copy')
  
      document.body.removeChild(textArea)
    }
  } catch (error) {
    return false 
  }
}

export default copyText