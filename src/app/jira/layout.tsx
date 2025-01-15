import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-white p-4">{children}</main>
      </div>
    </div>
  );
}
