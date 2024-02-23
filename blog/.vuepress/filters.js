module.exports = {
  capitalize(value) {
    return value.split('-').map(t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()).join(' ')
  }
}
