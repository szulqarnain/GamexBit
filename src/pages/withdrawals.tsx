import Cards from "../components/UserDashboard/Withdrawal/Cards";
import WithdrawalHistory from "../components/UserDashboard/Withdrawal/WithdrawalHistory";
import Pagination from "../components/Common/Pagination.tsx.tsx";
import { useEffect, useState } from "react";
import WithdrawalModel from "../components/UserDashboard/Withdrawal/WithdrawalModel.tsx";
import Table from "../components/UserDashboard/Withdrawal/Table.tsx";

export default function Withdrawls() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showWithdrawalModel, setShowWithdrawalModel] = useState(false);

  const getData = async (page: number) => {
    // setData1(res); // your response format
    setTotalPages(5);
    setCurrentPage(page);
  };

  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div className="lg:py-[57px] lg:px-[16px]">
      <h1 className="lg:hidden font-[700] text-[24px] leading-[24px] text-[rgb(var(--primary-text))] mb-[24px]">
        Withdrawals History
      </h1>
      <Cards setShowWithdrawalModel={setShowWithdrawalModel} />
      <h1 className="lg:hidden bd-lrg-sem font-[600] text-[16px] leading-[28px] text-[rgb(var(--primary-text))] mt-[24px]">
        Withdrawals History
      </h1>
      <div className="lg:hidden">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <WithdrawalHistory />
        ))}
      </div>
      <div className="mt-[78px] lg:block hidden">
        <Table />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={getData}
        class1={"pageBtn"}
      />
      {showWithdrawalModel && (
        <WithdrawalModel setShowWithdrawalModel={setShowWithdrawalModel} />
      )}
    </div>
  );
}
