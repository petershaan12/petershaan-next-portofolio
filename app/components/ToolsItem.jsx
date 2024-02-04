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
      className="relative group border rounded-md p-4 transition-all hover:border-black"
    >
      <Image src={imageSrc} width={50} height={50} />
      <p className="font-semibold">{toolName}</p>
      <p className="text-xs">{description}</p>
      <svg
        class="absolute  top-4 right-4 group-hover:scale-100 scale-0 transition rotate-180 group-hover:rotate-0 duration-300"
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="#FFFFFF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
  );
};

export default ToolsItem;
