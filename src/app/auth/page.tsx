import Image from "next/image";
import AuthButtons from "./AuthButtons";

const AuthPage = () => {
  return (
    <div className="h-screen w-full flex">
      {/* left side */}
      <div className=" flex flex-1 overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative justify-center items-center">
        <img
          src="./redis-logo.svg"
          alt="redis Logo"
          className="pointer-events-none select-none absolute -left-1/4 -bottom-52 opacity-25 -z-1 lg:scale-125 xl:scale-100 scale-[2]"
        />
        <div className="flex flex-col  p-4 z-50">
          <Image
            src={"/logo.png"}
            width={300}
            height={300}
            alt="logo"
            className="mb-6"
          />
          <p className="text-2xl md:text-3xl mb-5 font-bold">
            The
            <span className="bg-red-500 text-white px-2 font-bold mx-2">
              ULTIMATE
            </span>
            chat app
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-32">
            You
            <span className="bg-green-500/90 px-1 text-white font-bold mx-2">
              NEED TO
            </span>
            build
          </p>
          <AuthButtons />
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 relative">
        <Image
          src={"/hero-right.png"}
          fill
          alt="right logo"
          className="object-cover dark:opacity-60 opacity-90"
        />
      </div>
    </div>
  );
};
export default AuthPage;
