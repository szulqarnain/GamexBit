import { useEffect, useState } from "react";
import Card from "../components/UserDashboard/Redeem/Card";
import Table from "../components/UserDashboard/Redeem/Table";
import RedeemModal from "../components/UserDashboard/Redeem/RedeemModal";
import RedeemMobHistory from "../components/UserDashboard/Redeem/RedeemMobHistory";
import Pagination from "../components/Common/Pagination.tsx";

export default function Redeem() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showRedeemModel, setShowRedeemModel] = useState(false);

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
      <Card setShowRedeemModel={setShowRedeemModel} />
      <div className="lg:hidden">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <RedeemMobHistory />
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
      {showRedeemModel && (
        <RedeemModal setShowRedeemModel={setShowRedeemModel} />
      )}
    </div>
  );
}
