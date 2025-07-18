import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        {/* You could replace this with an Image component if you have a logo */}
        <h1 className="text-xl font-bold">tsender</h1>
        
        <a 
          href="https://github.com/NuwanHarshanaFernando/html-ts-coffee-cu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          <FaGithub size={24} />
        </a>
      </div>
      
      <div className="flex items-center">
        <ConnectButton />
      </div>
    </header>
  );
}
