import Layout from "components/layout/Layout";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  };
  return (
    <Layout
      title="Google V3"
      description="Google clone created with next js and Tailwind css"
    >
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg.png"
          height={100}
          objectFit="cover"
          width={300}
          alt="Google"
        />
        <div className="flex items-center w-full mt-5 mx-auto border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl">
          <AiOutlineSearch className="h-5 text-gray-500 mr-2" />
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
          />
          <BiMicrophone className="h-5 ml-2 text-gray-500" />
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 mt-8 sm:space-y-0 justify-center">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </Layout>
  );
}
