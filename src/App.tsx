import Home from "./pages/Home";
import { Cloud } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Card className="rounded-none border-x-0 border-t-0 bg-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Cloud className="h-8 w-8 text-blue-400" />
            <img 
              src="https://images.squarespace-cdn.com/content/v1/588259e5893fc087ee049fb8/1498747416631-N4TM2JEP9HHNE1FHQXUA/Intercap_logo_Rev-final-805.png?format=1500w"
              alt="Intercap Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-2xl font-bold text-white">
              Cloud 9 Forecasts
            </h1>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <main className="flex-1">
        <Home />
      </main>

      {/* Separator */}
      <Separator />

      {/* Footer */}
      <Card className="rounded-none border-x-0 border-b-0 bg-muted/50">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            By Tyrone Melkioty
          </p>
        </div>
      </Card>
    </div>
  )
}
 
export default App