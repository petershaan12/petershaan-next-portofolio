const SectionHeader = ({ title }) => {
    return (
      <div className="mt-10 mb-5 flex flex-row items-center gap-4">
        <div className="border-b border-dashed w-[20px] border-gray-200 dark:border-slate-700"></div>
        <h1 className="bg-neutral-200 rounded-md dark:bg-slate-700 px-2 py-1 text-sm">
          {title}
        </h1>
        <div className="border-b grow border-dashed border-gray-200 dark:border-slate-700"></div>
      </div>
    );
  };
  
  export default SectionHeader;
  