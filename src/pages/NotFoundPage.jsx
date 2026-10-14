import { Home } from "lucide-react";
import Button from "../components/common/Button";
import usePageTitle from "../hooks/usePageTitle";

export function NotFoundPage() {
  usePageTitle("Page Not Found");

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-8xl font-black text-[#171717] tracking-tight">404</div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#171717]">Page Not Found</h1>
          <p className="text-sm text-[#686868]">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button to="/projects" variant="secondary" size="md">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
