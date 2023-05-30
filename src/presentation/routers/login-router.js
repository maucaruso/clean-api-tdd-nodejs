const HttpResponse = require('../helpers/http-response')
const MissigParamError = require('../helpers/missing-param-error')

module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body

      if (!email) {
        return HttpResponse.badRequest(new MissigParamError('email'))
      }

      if (!password) {
        return HttpResponse.badRequest(new MissigParamError('password'))
      }

      const accessToken = await this.authUseCase.auth(email, password)

      if (!accessToken) {
        return HttpResponse.unauthorizedError()
      }

      return HttpResponse.ok({ accessToken })
    } catch (err) {
      return HttpResponse.serverError()
    }
  }
}
