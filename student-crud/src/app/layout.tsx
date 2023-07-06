import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Student Crud Application",
  description: "This is Demo Application for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}
