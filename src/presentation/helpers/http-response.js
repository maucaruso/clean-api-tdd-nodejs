const MissigParamError = require('./missing-param-error')

module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissigParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}
