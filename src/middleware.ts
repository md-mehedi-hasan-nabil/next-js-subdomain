import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''; // e.g., "shop.localhost:3000"
  const isLocalhost = host.includes('localhost');

  let subdomain = '';

  if (isLocalhost) {
    subdomain = host.split('.')[0]; // Extract subdomain (e.g., "shop")
  } else {
    subdomain = host.split('.')[0]; // For live domains (e.g., "shop.example.com")
  }

  // Skip rewriting for primary domains (e.g., "localhost", "www", or your root domain)
  if (['localhost', 'www', 'example'].includes(subdomain)) {
    return NextResponse.next();
  }

  console.log('Middleware:', host, subdomain); // Debugging logs

  // Attach the subdomain to the query parameters
  request.nextUrl.searchParams.set('subdomain', subdomain);

  return NextResponse.rewrite(request.nextUrl);
}
