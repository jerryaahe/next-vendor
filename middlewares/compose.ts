import { NextResponse } from 'next/server'
import type { MiddlewareFactory, MiddlewareHandler } from './types'

export function composeMiddlewares(...factories: MiddlewareFactory[]): MiddlewareHandler {
  return factories.reduceRight<MiddlewareHandler>(
    (next, factory) => factory(next),
    () => NextResponse.next(),
  )
}
