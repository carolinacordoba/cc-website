export default async function ContactPage({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    
    return (
      <section id="contact" className="min-h-screen bg-bg-soft p-8">
        <h1 className="font-heading text-4xl text-text-primary mb-4">
          {locale === 'sv' ? 'Kontakt' : 'Contact'}
        </h1>
        <p className="font-body text-base text-text-secondary">
          Contact form will go here.
        </p>
      </section>
    );
  }