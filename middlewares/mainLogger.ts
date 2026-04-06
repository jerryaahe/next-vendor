import type { MiddlewareFactory } from './types'

export const mainLoggerMiddleware: MiddlewareFactory = (next) => (request) => {
  console.log(123)
  return next(request)
}
