import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OR</span>
            </div>
            <span className="font-semibold text-lg">OpenRouter</span>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search" 
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Models
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Chat
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Rankings
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Docs
          </a>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}