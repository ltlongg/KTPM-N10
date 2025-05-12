export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className = 'h-screen flex'>
      {/* LEFT */}
      <div className="w-1/6 bg-red-50">
        l
      </div>
      {/* RIGHT */}
      <div className="w-5/6 bg-blue-50">
        r
      </div>
    </div> 
    // h-screen: chiều cao toàn màn hình
  );
}
