"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { Provider as LyketProvider } from "@lyket/react";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LyketProvider apiKey={process.env.NEXT_PUBLIC_LYKET_API_KEY}>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </LyketProvider>
  );
};

export default Provider;
