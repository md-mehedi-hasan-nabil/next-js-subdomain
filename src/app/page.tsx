export default async function SubdomainPage({ searchParams }: { searchParams: { subdomain?: string } }) {
  const subdomain = searchParams.subdomain || 'default';

  return (
    <div>
      <h1>Welcome to the {subdomain} subdomain!</h1>
      <p>This is content customized for the "{subdomain}" subdomain.</p>
    </div>
  );
}
