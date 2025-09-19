import React from "react";
import { IoMdLink } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";

interface TableCell {
  text?: string | number;
  color?: string;
  date?: string;
  icon?: string;
  sideText?: string | number;
  className?: string;

  copyable?: boolean;
  copyIcon?: string;

  url?: string;
  linkIcon?: string;
}

// Header type
interface TableHeader {
  key: string;
  label: string;
  className?: string;
}

// Row type: each key matches header.key
type TableRow = {
  [key: string]: string | number | TableCell;
};

interface DashboardTableProps {
  headers: TableHeader[];
  data: TableRow[];
}

const DashboardTable: React.FC<DashboardTableProps> = ({ headers, data }) => {
  return (
    <div className="w-full h-auto gap-[24px]">
      <div className="w-full h-auto  p-[16px] border border-[rgb(var(--border))] rounded-[16px] overflow-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="w-full h-[32px]">
              {headers.map((header: any, idx: any) => (
                <th
                  key={idx}
                  className={`bd-nrm-reg text-[rgb(var(--secondary-text))] ${
                    header.className || ""
                  }`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="w-full h-[52px]">
                {headers.map((header, colIndex) => {
                  const cell = row[header.key];
                  // If cell is object with text, icon, color, sideText
                  if (cell && typeof cell === "object") {
                    return (
                      <td
                        key={colIndex}
                        className={`bd-nrm-reg text-center ${
                          cell.className || ""
                        }`}
                      >
                        <div  className={`flex items-center gap-2 ${
    colIndex === 0
      ? "justify-start"
      // : colIndex === headers.length - 1
      // ? "justify-end"
      : "justify-center"
  }`}>
                          {/* Leading icon */}
                          {cell.icon && (
                            <img
                              src={cell.icon}
                              alt="icon"
                              className="w-[32px] h-[32px]"
                            />
                          )}

                          {/* Main text */}
                          <span className="flex items-center gap-2">
                            {/* Colored status dot */}
                            <span
                              className={`inline-block w-2 h-2 rounded-full ${
                                 cell.text === "Success"
                                  ? "bg-[#00B341]"
                                  : cell.text === "Rejected"
                                  ? "bg-[#FF3B30]"
                                  : cell.text === "Pending"
                                  ? "bg-[#FA8C16]"
                                  : cell.text === "Registered"
                                  ? "bg-[#00B341]"
                                  : cell.text === "Active"
                                  ? "bg-[#2DC7FF]"
                                  : null
                              }`}
                            ></span>
                            {/* Status text */}
                            <div>
                              <p className="bd-nrm-reg text-start text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                                {cell.text}
                              </p>
                              {cell.date && (
                                <p className="bd-sm-reg leading-[22px] text-[14px] text-[rgb(var(--secondary-text))]">
                                  {cell.date}
                                </p>
                              )}
                            </div>
                          </span>

                          {/* Copy icon */}
                          {cell.copyable && (
                            <MdOutlineContentCopy className="w-[20px] h-[20px] text-[rgb(var(--primary-text))]" />
                          )}

                          {/* Link icon */}
                          {cell.url && (
                            <a
                              href={cell.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IoMdLink className="w-[20px] h-[20px] text-[rgb(var(--primary-text))]" />
                            </a>
                          )}

                          {/* Optional side text */}
                          {cell.sideText && <span>{cell.sideText}</span>}
                        </div>
                      </td>
                    );
                  }

                  // Default plain text cell
                  return (
                    <td
                      key={colIndex}
                      className="bd-nrm-reg text-center text-[rgb(var(--primary-text))]"
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
