import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="pt-10">
      <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
      <div className="w-full">
        <a
          href="https://facebook.com"
          className="flex items-center gap-3 p-4 border-[1px] border-[#E7E7E7] w-full hover:bg-gray-50"
        >
          <FaFacebook className="text-blue-600 text-xl" />
          <span>Facebook</span>
        </a>
        <a
          href="https://twitter.com"
          className="flex items-center gap-3 p-4 border-x-[1px] border-b-[1px] border-[#E7E7E7] w-full hover:bg-gray-50"
        >
          <FaTwitter className="text-blue-400 text-xl" />
          <span>Twitter</span>
        </a>
        <a
          href="https://instagram.com"
          className="flex items-center gap-3 p-4 border-x-[1px] border-[#E7E7E7] w-full hover:bg-gray-50"
        >
          <FaInstagram className="text-pink-500 text-xl" />
          <span>Instagram</span>
        </a>
        <a
          href="https://github.com"
          className="flex items-center gap-3 p-4 border-[1px] border-[#E7E7E7] w-full hover:bg-gray-50"
        >
          <FaGithub className="text-gray-800 text-xl" />
          <span>Github</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;
