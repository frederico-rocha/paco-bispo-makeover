import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-2 text-xl">{t.notFound.title}</p>
        <p className="mb-6 text-muted-foreground">{t.notFound.text}</p>
        <a href={import.meta.env.BASE_URL} className="text-primary underline hover:text-primary/90">
          {t.notFound.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
