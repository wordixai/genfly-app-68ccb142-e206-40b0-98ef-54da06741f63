import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedModelsProps {
  desktop?: boolean;
}

export default function FeaturedModels({ desktop = false }: FeaturedModelsProps) {
  const models = [
    {
      name: "Gemini 2.5 Pro Preview 06-05",
      provider: "google",
      providerName: "google",
      icon: "https://openrouter.ai/images/icons/GoogleGemini.svg",
      tokens: "15.4B",
      latency: "2.2s",
      growth: "--",
      growthColor: "text-slate-9",
      isNew: true,
      href: "https://openrouter.ai/google/gemini-2.5-pro-preview",
    },
    {
      name: "GPT-4.1",
      provider: "openai",
      providerName: "openai",
      icon: "https://openrouter.ai/images/icons/OpenAI.svg",
      tokens: "47.0B",
      latency: "771ms",
      growth: "-1.71%",
      growthColor: "text-red-10",
      featured: true,
      href: "https://openrouter.ai/openai/gpt-4.1",
    },
    {
      name: "Claude Sonnet 4",
      provider: "anthropic",
      providerName: "anthropic",
      icon: "https://openrouter.ai/images/icons/Anthropic.svg",
      tokens: "214.4B",
      latency: "1.6s",
      growth: "-18.11%",
      growthColor: "text-red-10",
      href: "https://openrouter.ai/anthropic/claude-sonnet-4",
    },
  ];

  if (desktop) {
    return (
      <>
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button
            variant="link"
            size="sm"
            className="h-6 px-1.5 text-xs text-primary hover:underline"
          >
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        <div className="space-y-3">
          {models.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
      </>
    );
  }

  // Mobile version - show only featured model
  const featuredModel = models.find(m => m.featured);
  if (!featuredModel) return null;

  return (
    <>
      <ModelCard model={featuredModel} />
      <div className="flex items-center justify-between px-2 pt-4">
        <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
        <a className="text-primary text-xs hover:underline" href="#">
          View Trending
          <ExternalLink className="inline-block ml-px size-3" />
        </a>
      </div>
    </>
  );
}

function ModelCard({ model }: { model: any }) {
  return (
    <Card className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${model.featured ? 'md:border-primary' : 'border-slate-6'}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href={model.href}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{model.name}</h3>
                {model.isNew && (
                  <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 text-[10px]">
                    New
                  </span>
                )}
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className={`overflow-hidden rounded-full ${model.provider === 'openai' ? 'dark:invert' : ''}`}>
                  <img
                    width="256"
                    height="256"
                    alt={`Favicon for ${model.provider}`}
                    src={model.icon}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by{" "}
              <a className="text-primary hover:underline" href={`#${model.provider}`}>
                {model.providerName}
              </a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{model.tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{model.latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${model.growthColor}`}>{model.growth}</p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </Card>
  );
}