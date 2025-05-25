import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { Separator } from "@/components/ui/separator"
import { CarFront } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Image or Icon */}
        <div className="hidden md:flex w-1/2 m-4 rounded-2xl bg-[url('https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <CardHeader className="text-center">
            <CarFront className="mx-auto text-primary w-10 h-10" />
            <CardTitle className="text-3xl font-bold text-slate-800">
              Welcome to <span className="text-primary">TrackerX</span>
            </CardTitle>
            <CardDescription className="text-slate-600 mt-2">
              A smarter way to track, analyze, and grow your car sales.
            </CardDescription>
          </CardHeader>

          <Separator className="my-4" />

          <CardContent className="flex flex-col items-center gap-6">
            <p className="text-sm text-slate-500 text-center max-w-sm">
              Join hundreds of sellers who use TrackerX to stay organized and close deals faster.
            </p>
            <SignInButton mode="modal">
              <Button className="w-full max-w-sm text-base py-6 font-medium tracking-wide shadow-md transition hover:scale-[1.02]">
                Get Started
              </Button>
            </SignInButton>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default LandingPage
