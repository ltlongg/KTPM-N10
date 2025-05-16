import {Menu} from "@/components/Menu";
import {Navbar} from "@/components/Navbar";
import Image from 'next/image';
import Link from 'next/link';



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className = 'h-screen flex'>
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] l:w-[16%] xl:w-[14%] ">
        <Link 
            href="/" 
            className='flex items-center justify-center lg:justify-start gap-2'
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block">SchooLama</span> 
        </Link>
       <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[84%] md:w-[92%] l:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div> 
    // h-screen: chiều cao toàn màn hình
    //bg-blue: cài màu màn hình
  );
}
