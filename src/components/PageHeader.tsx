interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-2xl animate-blob-float"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob-float-delayed"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-white max-w-3xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
