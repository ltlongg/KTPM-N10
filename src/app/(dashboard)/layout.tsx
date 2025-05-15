export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className = 'h-screen flex'>
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] l:w-[16%] xl:w-[14%] bg-red-50">
        l
      </div>
      {/* RIGHT */}
      <div className="w-[84%] md:w-[92%] l:w-[84%] xl:w-[86%] bg-blue-50">
        r
      </div>
    </div> 
    // h-screen: chiều cao toàn màn hình
  );
}
