import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
