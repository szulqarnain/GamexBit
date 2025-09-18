const rows = [
  {
    dateTime: "2025-01-20 14:30",
    points: "0 Points",
    status: "Success",
  },
  {
    dateTime: "2025-02-02 11:15",
    points: "50 Points",
    status: "Pending",
  },
  {
    dateTime: "2025-03-05 09:45",
    points: "100 Points",
    status: "Rejected",
  },
  {
    dateTime: "2025-01-20 14:30",
    points: "0 Points",
    status: "Success",
  },
  {
    dateTime: "2025-02-02 11:15",
    points: "50 Points",
    status: "Pending",
  },
  {
    dateTime: "2025-03-05 09:45",
    points: "100 Points",
    status: "Rejected",
  },
];

// Status color handler
const getStatusColor = (status: string) => {
  switch (status) {
    case "Success":
      return "bg-[#00B341]";
    case "Rejected":
      return "bg-[#FF3B30]";
    case "Pending":
      return "bg-[#FA8C16]";
    default:
      return "bg-gray-400";
  }
};

const Table = () => {
  return (
    <div className="w-full h-auto gap-[24px]">
      <div className="w-full h-auto p-[16px] border border-[rgb(var(--border))] rounded-[16px] overflow-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="h-[32px]">
              <th className="bd-nrm-reg text-left text-[rgb(var(--secondary-text))]">
                Date & Time
              </th>
              <th className="bd-nrm-reg text-center text-[rgb(var(--secondary-text))]">
                <div className="inline-flex w-[150px]">Points Redeem</div>
              </th>
              <th className="bd-nrm-reg text-right text-[rgb(var(--secondary-text))] ">
                <div className="inline-flex w-[100px]">Status</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="h-[52px]">
                {/* Date & Time */}
                <td className="text-left">
                  <p className="text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                    {row.dateTime}
                  </p>
                </td>

                {/* Points Redeem */}
                <td className="text-center">
                  <div className="inline-flex w-[150px]">
                    <p className="text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                      {row.points}
                    </p>
                  </div>
                </td>

                {/* Status */}
                <td className="text-right">
                  <div className="inline-flex items-center gap-2 w-[100px]">
                    <span
                      className={`w-2 h-2 rounded-full ${getStatusColor(
                        row.status
                      )}`}
                    ></span>
                    <p className="text-[16px] leading-[24px] text-[rgb(var(--primary-text))]">
                      {row.status}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
