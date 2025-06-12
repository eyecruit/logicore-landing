import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Handle the root path
  if (url.pathname === '/') {
    return NextResponse.next();
  }

  // Handle other routes
  const routes = ['/about', '/contact', '/projects', '/pricing'];
  
  if (routes.some(route => url.pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Redirect to home for any other route
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 