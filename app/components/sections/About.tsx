interface AboutProps {
  locale: string;
}
export default async function About({ locale }: AboutProps) {
    return (
      <section id="about" className="min-h-screen bg-bg-soft p-8">
        <h1 className="font-heading text-4xl text-text-primary mb-4">
          {locale === 'sv' ? 'Om mig' : 'About'}
        </h1>
        <p className="font-body text-base text-text-secondary">
          About content will go here.
        </p>
      </section>
    );
  }