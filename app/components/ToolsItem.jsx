import Image from 'next/image';

const ToolsItem = ({ url, darkImageSrc, lightImageSrc, currentTheme, toolName, description }) => {
  const imageSrc = darkImageSrc && currentTheme === "dark" ? darkImageSrc : lightImageSrc;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
    >
      <Image
        src={imageSrc}
        width={50}
        height={50}
      />
      <p className="font-semibold">{toolName}</p>
      <p className="text-xs">{description}</p>
    </a>
  );
};

export default ToolsItem;
