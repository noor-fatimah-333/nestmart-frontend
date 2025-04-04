import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <header className="bg-gray-800 p-4">
          <nav className="container mx-auto">
            <h1 className="text-xl font-bold">🛒 NestMart</h1>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4">{children}</main>

        <footer className="bg-gray-800 text-center p-3 mt-4">
          <p>© 2025 NestMart. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
