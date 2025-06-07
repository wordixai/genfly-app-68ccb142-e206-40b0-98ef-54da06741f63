interface ProviderIconsProps {
  mobile?: boolean;
}

export default function ProviderIcons({ mobile = false }: ProviderIconsProps) {
  const providers = [
    { name: "Google", src: "https://openrouter.ai/images/icons/GoogleGemini.svg" },
    { name: "OpenAI", src: "https://openrouter.ai/images/icons/OpenAI.svg", invert: true },
    { name: "Anthropic", src: "https://openrouter.ai/images/icons/Anthropic.svg" },
  ];

  if (mobile) {
    return (
      <div className="grid grid-cols-3 gap-4 pb-3">
        {providers.map((provider) => (
          <button
            key={provider.name}
            className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4"
            type="button"
          >
            <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
              <div className={`overflow-hidden rounded-full ${provider.invert ? 'dark:invert' : ''}`}>
                <img
                  width="256"
                  height="256"
                  alt={`Favicon for ${provider.name.toLowerCase()}`}
                  src={provider.src}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return null;
}