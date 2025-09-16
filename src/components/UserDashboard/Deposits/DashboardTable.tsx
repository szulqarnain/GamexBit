import React from "react";

interface TableCell {
  text?: string | number;
  color?: string;
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
    <div className="w-[1192px] h-auto gap-[24px]">
      <div className="w-[1192px] h-auto gap-[8px] p-[16px] border border-[#E5E5E5] rounded-[8px] overflow-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="w-full h-[32px]">
              {headers.map((header: any, idx: any) => (
                <th
                  key={idx}
                  className={`bd-nrm-reg ${header.className || ""}`}
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
                        <div className="flex items-center justify-center gap-2">
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
                                  : null
                              }`}
                            ></span>
                            {/* Status text */}
                            <span
                              className={`bd-nrm-reg ${cell.className || ""}`}
                            >
                              {cell.text}
                            </span>
                          </span>

                          {/* Copy icon */}
                          {cell.copyable && cell.copyIcon && (
                            <img
                              src={cell.copyIcon}
                              alt="copy"
                              className="w-[14px] h-[14px] cursor-pointer hover:opacity-80"
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  cell.text?.toString() || ""
                                )
                              }
                              title="Copy"
                            />
                          )}

                          {/* Link icon */}
                          {cell.url && cell.linkIcon && (
                            <a
                              href={cell.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={cell.linkIcon}
                                alt="link"
                                className="w-[14px] h-[14px] hover:opacity-80"
                                title="Open link"
                              />
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
                    <td key={colIndex} className="bd-nrm-reg text-center">
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
