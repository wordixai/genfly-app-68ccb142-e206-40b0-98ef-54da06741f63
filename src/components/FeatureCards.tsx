import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FeatureCards() {
  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      href: "/models",
      linkText: "Browse all",
      visual: <ModelsVisual />,
    },
    {
      title: "Higher Availability",
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      href: "/docs/features/uptime-optimization",
      linkText: "Learn more",
      visual: <AvailabilityVisual />,
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
      href: "/docs/features/provider-routing#provider-sorting",
      linkText: "Learn more",
      visual: <PerformanceVisual />,
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine-grained data policies. Ensure prompts only go to the models and providers you trust.",
      href: "/docs/features/privacy-and-logging",
      linkText: "View docs",
      visual: <PrivacyVisual />,
    },
  ];

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <a key={index} href={feature.href} className="h-full">
            <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                {feature.visual}
              </div>
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.linkText}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

function ModelsVisual() {
  const providers = [
    { name: "Microsoft", src: "https://openrouter.ai/images/icons/Microsoft.svg" },
    { name: "Perplexity", src: "https://openrouter.ai/images/icons/Perplexity.svg" },
    { name: "OpenAI", src: "https://openrouter.ai/images/icons/OpenAI.svg", invert: true },
    { name: "Google", src: "https://openrouter.ai/images/icons/GoogleGemini.svg" },
    { name: "Anthropic", src: "https://openrouter.ai/images/icons/Anthropic.svg" },
  ];

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
      </div>
      <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
        {Array.from({ length: 25 }, (_, i) => {
          const provider = providers[i % providers.length];
          return (
            <div
              key={i}
              className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
              style={{
                animation: `float${i % 5} 4s ease-in-out infinite ${i * 150}ms`,
                opacity: 0.85,
              }}
            >
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AvailabilityVisual() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
        <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
          anthropic/claude-3.7-sonnet
        </div>
        <svg
          width="100%"
          height="70"
          viewBox="0 0 200 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground/60"
        >
          <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
          <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
          <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        <div className="flex justify-between w-full">
          <ProviderIcon src="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" />
          <ProviderIcon src="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" />
          <ProviderIcon src="https://openrouter.ai/images/icons/Bedrock.svg" alt="Amazon" />
        </div>
      </div>
    </div>
  );
}

function PerformanceVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-0 z-10">
        <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20"></div>
        <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20"></div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full h-32 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-lg flex items-end justify-center p-4">
          <div className="flex items-end gap-2 h-full">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="bg-primary/60 rounded-sm"
                style={{
                  width: '8px',
                  height: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivacyVisual() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary/60"></div>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function ProviderIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
      <div className="overflow-hidden rounded-full">
        <img
          width="256"
          height="256"
          alt={alt}
          src={src}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}