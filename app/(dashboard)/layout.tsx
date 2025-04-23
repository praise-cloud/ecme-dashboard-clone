import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* left */}
      <div className="hidden md:flex md:w-[16%] bg-red-50">
        <Link href="/" className="flex items-start justify-center p-4">
            <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}/>
        </Link>
        <Menu/>
      </div>
      {/* right */}
      <div className="w-full md:w-[92%] lg:w-[86%] xl:w-[86%] bg-blue-50">
        <Navbar/>
      </div>
    </div>
  );
}
