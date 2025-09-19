import { useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Option {
  text: string;
  svg?: string;
}

interface DropDownProps {
  selectedValue: Option | null;
  setSelectedValue: React.Dispatch<React.SetStateAction<Option | null>>;
  options: Option[];
  id: string; // unique id for each dropdown
  openDropdownId: string | null;
  setOpenDropdownId: React.Dispatch<React.SetStateAction<string | null>>;
}

const DropDown: React.FC<DropDownProps> = ({
  selectedValue,
  setSelectedValue,
  options,
  id,
  openDropdownId,
  setOpenDropdownId,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isOpen = openDropdownId === id;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenDropdownId]);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Selected item */}
      <div
        onClick={
          () => setOpenDropdownId(isOpen ? null : id) // toggle open/close
        }
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
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Options */}
      <div
        className={`absolute left-0 right-0 mt-1 rounded-[12px] border border-[rgb(var(--border))] bg-[rgb(var(--bg))] overflow-hidden transition-all duration-300 z-50 shadow ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedValue(item);
              setOpenDropdownId(null);
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
