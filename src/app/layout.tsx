import { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Krysto',
  description: 'La gestion de business tout en un',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <Head>
        <script>
          {`
            document.addEventListener('DOMContentLoaded', function() {
              document.querySelectorAll('html, body').forEach(el => {
                el.removeAttribute('cz-shortcut-listen');
              });
            });
          `}
        </script>
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
