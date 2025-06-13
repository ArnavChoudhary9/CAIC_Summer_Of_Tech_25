import { LoginForm } from "@/components/login-form"
import { useUser } from "@/hooks/use-user"

import { Navigate } from "react-router-dom";

export default function Login() {
  const { user } = useUser()

  if (user) {
    // Redirect to home if user is already logged in
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
