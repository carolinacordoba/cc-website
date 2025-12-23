export default async function ServicesPage({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    
    return (
      <main className="min-h-screen bg-bg-soft p-8">
        <h1 className="font-heading text-4xl text-text-primary mb-4">
          {locale === 'sv' ? 'Tjänster' : 'Services'}
        </h1>
        <p className="font-body text-base text-text-secondary">
          Services will be listed here.
        </p>
      </main>
    );
  }