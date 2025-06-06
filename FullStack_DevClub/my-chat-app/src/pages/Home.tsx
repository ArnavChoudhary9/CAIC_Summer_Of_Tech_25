import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { SubmitButton } from "../components/submit-button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <form className="flex flex-col w-full max-w-96 sm:min-w-96 sm:max-w-96 mx-auto">
        <h1 className="text-2xl font-medium">Sign in</h1>
        <p className="text-sm text-foreground">
          Don't have an account?{" "}
          <a className="text-foreground font-medium underline" href="/sign-up">
            Sign up
          </a>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="username">Username</Label>
          <Input name="username" placeholder="yourusername" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <a
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </a>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In...">
            Sign in
          </SubmitButton>
        </div>
      </form>
    </div>
  )
}

export default Home;
