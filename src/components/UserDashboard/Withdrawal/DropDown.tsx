import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Option {
  text: string;
  svg?: string;
}

interface DropDownProps {
  selectedValue: Option | null;
  setSelectedValue: React.Dispatch<React.SetStateAction<Option | null>>;
  options: Option[];
}

const DropDown: React.FC<DropDownProps> = ({
  selectedValue,
  setSelectedValue,
  options,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative w-full">
      {/* Selected item */}
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="h-[60px] rounded-[12px] border border-[rgb(var(--border))] py-[14px] px-[16px] bg-[rgb(var(--bg))] flex items-center justify-between cursor-pointer"
      >
        <div className="flex gap-[12px] items-center">
          {selectedValue?.svg && (
            <img
              className="h-[32px] w-[32px]"
              src={selectedValue?.svg}
              alt="Icon"
            />
          )}
          <p className="bd-nrm-reg text-[rgb(var(--primary-text))]">
            {selectedValue?.text || "Select..."}
          </p>
        </div>
        <RiArrowDropDownLine
          className={`w-[30px] h-[30px] text-[rgb(var(--primary-text))] transition-transform duration-300 ${
            showOptions ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Options */}
      <div
        className={`absolute left-0 right-0 mt-1 rounded-[12px] border border-[rgb(var(--border))] bg-[rgb(var(--bg))] overflow-hidden transition-all duration-300 z-50 shadow ${
          showOptions ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedValue(item);
              setShowOptions(false);
            }}
            className="h-[60px] border-b border-[rgb(var(--border))] py-[14px] px-[16px] flex items-center gap-[12px] hover:[background:var(--bg-secondary)] cursor-pointer"
          >
            {item?.svg && (
              <img className="h-[32px] w-[32px]" src={item?.svg} alt="Icon" />
            )}
            <p className="bd-nrm-reg text-[rgb(var(--primary-text))]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
