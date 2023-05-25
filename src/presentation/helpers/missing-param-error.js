module.exports = class MissigParamError extends Error {
  constructor (paramName) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissigParamError'
  }
}
