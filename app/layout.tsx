import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 p-4 shadow-lg">
          <nav className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              🛒 NestMart
            </h1>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center container mx-auto p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-center p-3 mt-4">
          <p className="text-gray-400 text-sm">
            © 2025 NestMart. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
