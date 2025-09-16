
import ReferralsRewards from "../components/UserDashboard/Referals/referalsRewards";
import InviteReferals from "../components/UserDashboard/Referals/InviteReferals";


export default function Referrals() {
  return(
    <div className="w-auto h-auto fill-white">
      <div className="w-[1192px] h-auto gap-[40px]">
        <div className="w-[1192px] h-[437px] gap-[24px]">
          <div className="w-[1192px] h-[396px] gap-[24px] flex flex-row">
            <ReferralsRewards/>
             <InviteReferals/>
        </div>
        </div>
      </div>
    </div>
  )
}
