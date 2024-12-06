export default async function SubdomainPage({ searchParams }: { searchParams: { subdomain?: string } }) {
  const subdomain = searchParams.subdomain || 'default';

  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome to the {subdomain} subdomain!</h1>
      <p className="text-lg">This is content customized for the &quot;{subdomain}&quot; subdomain.</p>
    </div>
  );
}
