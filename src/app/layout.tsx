import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

export const metadata = {
  title: "Dashboard Pro",
  description: "Painel administrativo criado com Next.js, Tailwind e TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}