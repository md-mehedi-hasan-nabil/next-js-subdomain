import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let host = request.headers.get('host') || ''; // e.g., "www.shop.localhost:3000" or "abc.localhost:3000"
  const isLocalhost = host.includes('localhost');

  let subdomain = '';

  // Remove "www." prefix if it exists
  if (host.startsWith('www.')) {
    host = host.slice(4); // Remove the "www." part
  }

  if (isLocalhost) {
    // Extract subdomain (e.g., "shop" from "shop.localhost")
    subdomain = host.split('.')[0];
  } else {
    // For live domains (e.g., "shop.example.com")
    subdomain = host.split('.')[0];
  }

  // Skip rewriting for primary domains (e.g., "localhost", "example")
  if (['localhost', 'example'].includes(subdomain)) {
    return NextResponse.next();
  }

  // Attach the subdomain to the query parameters
  request.nextUrl.searchParams.set('subdomain', subdomain);

  console.log('Middleware:', host, subdomain); // Debugging logs

  return NextResponse.rewrite(request.nextUrl);
}


// http://www.shop.localhost:3000/ -> subdomain = defaut
// http://abc.localhost:3000/ ->      subdomain = abc