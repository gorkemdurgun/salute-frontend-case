import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 bg-white">{children}</main>
      </div>
    </div>
  );
}
