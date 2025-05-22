export const Input = ({ typography, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className="p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]"
        placeholder="Placeholder"
      />
    </div>
  );
};

export const ImageInput = ({ typography, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <label htmlFor="file" className="h-[200px] w-full border">
        <input type={type} placeholder="Placeholder" id="file" />
      </label>
    </div>
  );
};
