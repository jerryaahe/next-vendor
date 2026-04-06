import type { NextRequest, NextResponse } from 'next/server'

export type MiddlewareHandler = (request: NextRequest) => NextResponse | Promise<NextResponse>

export type MiddlewareFactory = (next: MiddlewareHandler) => MiddlewareHandler
