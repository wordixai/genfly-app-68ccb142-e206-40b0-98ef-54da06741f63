import { User, CreditCard, Key, Mail } from "lucide-react";

export default function GetStartedSection() {
  const steps = [
    {
      number: 1,
      title: "Signup",
      description: "Create an account to get started. You can set up an org for your team later.",
      icon: User,
      visual: <SignupVisual />,
    },
    {
      number: 2,
      title: "Buy credits",
      description: "Credits can be used with any model or provider.",
      icon: CreditCard,
      visual: <CreditsVisual />,
    },
    {
      number: 3,
      title: "Get your API key",
      description: (
        <>
          Create an API key and start making requests.{" "}
          <a href="#" className="text-primary hover:underline">
            Fully OpenAI compatible
          </a>
          .
        </>
      ),
      icon: Key,
      visual: <ApiKeyVisual />,
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
                {step.number}
              </div>
              <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
            </div>
            <div className="min-h-10 md:min-h-12">
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
            <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
              {step.visual}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SignupVisual() {
  return (
    <>
      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-primary" />
        <div className="h-4 w-6 flex flex-col justify-center">
          <div className="h-1 bg-primary/20 rounded"></div>
          <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
        </div>
        <div className="h-4 w-12 flex flex-col justify-center">
          <div className="h-1 bg-primary/20 rounded"></div>
          <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
        </div>
      </div>
      <div className="flex flex-row gap-2 max-w-56">
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
          <GoogleIcon />
        </div>
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
          <GitHubIcon />
        </div>
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
          <MetaMaskIcon />
        </div>
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
          <Mail className="w-5 h-5 text-primary" />
        </div>
      </div>
    </>
  );
}

function CreditsVisual() {
  return (
    <>
      <div className="flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-primary" />
        <div className="h-4 w-6 flex flex-col justify-center">
          <div className="h-1 bg-primary/20 rounded"></div>
          <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
        </div>
        <div className="h-4 w-6 flex flex-col justify-center">
          <div className="h-1 bg-primary/20 rounded"></div>
          <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
        </div>
        <div className="h-4 w-6 flex flex-col justify-center">
          <div className="h-1 bg-primary/20 rounded"></div>
          <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
        </div>
        <div className="h-4 w-6 flex flex-col justify-center">
          <div className="h-1 bg-primary/20 rounded"></div>
          <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-6 bg-primary/5 rounded flex items-center px-2">
          <span className="text-xs text-muted-foreground">Apr 1</span>
          <div className="flex-1 flex items-center gap-2 mx-2">
            <div className="h-2 flex-1 bg-primary/10 rounded"></div>
            <div className="h-2 flex-1 bg-primary/10 rounded"></div>
          </div>
          <span className="text-sm font-medium">$99</span>
        </div>
        <div className="h-6 bg-primary/5 rounded flex items-center px-2">
          <span className="text-xs text-muted-foreground">Mar 30</span>
          <div className="flex-1 flex items-center gap-2 mx-2">
            <div className="h-2 flex-1 bg-primary/10 rounded"></div>
            <div className="h-2 flex-1 bg-primary/10 rounded"></div>
          </div>
          <span className="text-sm font-medium">$10</span>
        </div>
      </div>
    </>
  );
}

function ApiKeyVisual() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Key className="w-5 h-5 text-primary" />
        <div className="h-6 flex-1 bg-primary/5 rounded flex items-center px-2">
          <span className="text-xs text-muted-foreground tracking-wide">
            OPENROUTER_API_KEY
          </span>
        </div>
      </div>
      <div className="h-6 bg-primary/5 rounded flex items-center px-2">
        <span className="text-xs tracking-wider">••••••••••••••••</span>
      </div>
    </>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 11V8l5 4-5 4v-3H8v-2h4Z" fill="#4285F4" />
      <path d="M12 5c1 0 2 .2 3 .5 1 .4 1.8.9 2.5 1.5L20 4.7a11.3 11.3 0 0 0-15.2-.1L7 6.9c.8-.6 1.6-1.1 2.5-1.5 1-.3 2-.5 3-.5L12 5Z" fill="#EA4335" />
      <path d="M5 12c0-1 .2-2 .5-3C6 8 6.4 7.2 7 6.5L4.7 4a11.3 11.3 0 0 0-.1 15.2L6.9 17a7.6 7.6 0 0 1-1.5-2.5c-.3-1-.5-2-.5-3l.1.5Z" fill="#FBBC05" />
      <path d="M12 19c-1 0-2-.2-3-.5-1-.4-1.8-.9-2.5-1.5L4 19.3a11.3 11.3 0 0 0 15.2.1L17 17.1c-.8.6-1.6 1.1-2.5 1.5-1 .3-2 .5-3 .5l.5-.1Z" fill="#34A853" />
      <path d="M19 12c0 1 0 2-.4 3s-.9 1.8-1.5 2.5l2.3 2.4a11.3 11.3 0 0 0 .1-15.2L17.2 7c.6.8 1.1 1.6 1.5 2.5.3 1 .5 2 .5 3L19 12Z" fill="#4285F4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.782 9.512 20.082 9.508 19.272C6.726 19.859 6.139 17.967 6.139 17.967C5.685 16.812 5.029 16.51 5.029 16.51C4.121 15.889 5.098 15.901 5.098 15.901C6.101 15.971 6.629 16.926 6.629 16.926C7.521 18.455 8.97 18.013 9.539 17.762C9.631 17.129 9.889 16.689 10.175 16.419C7.954 16.146 5.62 15.319 5.62 11.534C5.62 10.42 6.01 9.513 6.649 8.809C6.546 8.559 6.203 7.58 6.747 6.189C6.747 6.189 7.586 5.925 9.497 7.234C10.3 7.014 11.15 6.904 12 6.9C12.85 6.904 13.7 7.014 14.503 7.234C16.414 5.925 17.253 6.189 17.253 6.189C17.797 7.58 17.454 8.559 17.351 8.809C17.99 9.513 18.38 10.42 18.38 11.534C18.38 15.329 16.046 16.143 13.825 16.416C14.171 16.75 14.509 17.429 14.509 18.458C14.509 19.92 14.499 20.692 14.499 21.017C14.499 21.278 14.681 21.581 15.181 21.489C19.155 20.166 22.02 16.418 22.02 12C22.02 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function MetaMaskIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.2 3.54 13.1 8.1l1.3-2.93 4.8-1.62Z" fill="#E17726" />
      <path d="m4.8 3.54 6.05 4.6-1.24-2.98L4.8 3.54ZM16.83 15.9l-1.78 3.08 3.8 1.18 1.07-4.22-3.1-.05Zm-12.74.04 1.07 4.22 3.8-1.18-1.79-3.09-3.08.05Z" fill="#E27625" />
    </svg>
  );
}