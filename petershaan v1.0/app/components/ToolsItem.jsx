import Image from "next/image";

const ToolsItem = ({
  url,
  darkImageSrc,
  lightImageSrc,
  currentTheme,
  toolName,
  description,
}) => {
  const imageSrc =
    darkImageSrc && currentTheme === "dark" ? darkImageSrc : lightImageSrc;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group border dark:border-gray-400 rounded-md p-4 transition-all hover:border-black"
    >
      <Image
        src={imageSrc}
        width={50}
        height={50}
        alt={`project_${toolName.replace(/\s+/g, "").toLowerCase()}`}
      />
      <p className="font-semibold dark:text-gray-400">{toolName}</p>
      <p className="text-xs dark:text-gray-400">{description}</p>
      <svg
        className="absolute  top-4 right-4 group-hover:scale-100 scale-0 transition rotate-180 group-hover:rotate-0 duration-300"
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </a>
  );
};

export default ToolsItem;
