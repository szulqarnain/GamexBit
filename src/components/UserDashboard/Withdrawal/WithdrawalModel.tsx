import { VscClose } from "react-icons/vsc";
import DropDown from "./DropDown";
import { useState } from "react";
import TetherIcon from "../../../assets/icons/Tether.svg";
import Bitcoin from "../../../assets/icons/bitcoin.svg";
import Ethereum from "../../../assets/icons/ethereum.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface cryptoOption {
  text: string;
  svg?: string;
}

interface networkOption {
  text: string;
  svg?: string;
}
interface Inputs {
  crypto: cryptoOption;
  network: networkOption;
  amount: number;
  wallet_address: string;
}

const cryptoOptions = [
  {
    svg: TetherIcon,
    text: "USDT - 1",
  },
  {
    svg: Bitcoin,
    text: "USDT - 2",
  },
  {
    svg: Ethereum,
    text: "USDT - 3",
  },
];

const networkOptions = [
  {
    text: "Tron (TRC20) - 1",
  },
  {
    text: "Tron (TRC20) - 1",
  },
  {
    text: "Tron (TRC20) - 1",
  },
];

interface WithdrawalModelProps {
  setShowWithdrawalModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const WithdrawalModel = ({ setShowWithdrawalModel }: WithdrawalModelProps) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      crypto: {
        svg: TetherIcon,
        text: "USDT - 1",
      },
      network: {
        text: "Tron (TRC20) - 1",
      },
      amount: 100,
      wallet_address: "TL5x7z8n4eX2Y3q1vR9sW6bUcA1dM2kLpN",
    },
  });

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setValue("wallet_address", text);
    } catch (err) {
      console.error("Failed to read clipboard: ", err);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("dskjfhjksd", data);
    toast.success("Withdrawal request submitted!");
    setShowWithdrawalModel(false);
  };

  return (
    <div
      className="fixed inset-0 flex md:items-center items-end justify-center bg-[#00000099] backdrop-blur-[3px]"
      onClick={() => setShowWithdrawalModel(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:h-[80%] h-[85%] md:w-[584px] w-full overflow-y-scroll rounded-[16px] md:p-[32px] py-[32px] px-[24px] [background:var(--bg-secondary)] border-1 border-[rgb(var(--border))] no-scrollbar"
      >
        <div className="flex items-center justify-between">
          <p className="font-[700] text-[24px] leading-[24px] text-[rgb(var(--primary-text))]">
            Withdrawals
          </p>
          <VscClose
            onClick={() => setShowWithdrawalModel(false)}
            className="w-[24px] h-[24px] cursor-pointer text-[rgb(var(--primary-text))]"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[40px] flex flex-col gap-[24px] "
        >
          <div className="flex flex-col gap-[5px]">
            <label className="bd-nrm-med text-[rgb(var(--secondary-text))] ">
              Crypto
            </label>
            <Controller
              name="crypto"
              control={control}
              rules={{ required: "Please select a crypto" }}
              render={({ field }) => (
                <DropDown
                  id="dropdown1"
                  value={field.value}
                  onChange={field.onChange}
                  options={cryptoOptions}
                  openDropdownId={openDropdownId}
                  setOpenDropdownId={setOpenDropdownId}
                  error={errors?.crypto?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center justify-between">
              <p className="bd-nrm-med text-[rgb(var(--secondary-text))] ">
                Amount
              </p>
              <div className="flex items-center gap-[12px]">
                <p className="bd-sm-reg text-[rgb(var(--secondary-text))] ">
                  Available:
                </p>
                <p className="bd-sm-reg text-[rgb(var(--secondary-text))] ">
                  500 USDT
                </p>
                <img
                  src={TetherIcon}
                  className="h-[24px] w-[24px]"
                  alt="TetherIcon"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  className="h-[60px] rounded-[12px] border border-[rgb(var(--border))] py-[14px] px-[16px] bg-[rgb(var(--bg))] w-full pr-[50px] text-[rgb(var(--primary-text))]"
                  placeholder="Enter amount"
                  type="number"
                  {...register("amount", { required: "Amount is required" })}
                />
                <p className="bd-nrm-reg absolute right-[16px] top-1/2 -translate-y-1/2 text-[#2DC7FF] cursor-pointer">
                  MAX
                </p>
              </div>
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="bd-nrm-med text-[rgb(var(--secondary-text))] ">
              Network
            </label>
            <Controller
              name="network"
              control={control}
              rules={{ required: "Please select a network" }}
              render={({ field }) => (
                <DropDown
                  id="dropdown2"
                  value={field.value}
                  onChange={field.onChange}
                  options={networkOptions}
                  openDropdownId={openDropdownId}
                  setOpenDropdownId={setOpenDropdownId}
                  error={errors?.network?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex flex-col gap-[5px]">
              <label className="bd-nrm-med text-[rgb(var(--secondary-text))] ">
                Wallet Address
              </label>
              <div>
                <div className="relative">
                  <input
                    className="h-[60px] rounded-[12px] border border-[rgb(var(--border))] py-[14px] px-[16px] bg-[rgb(var(--bg))] w-full pr-[70px] text-[rgb(var(--primary-text))] truncate"
                    placeholder="Enter Wallet Address "
                    {...register("wallet_address", {
                      required: "Wallet Address is required",
                    })}
                  />
                  <p
                    onClick={handlePasteClick}
                    className="bd-nrm-reg absolute right-[16px] top-1/2 -translate-y-1/2 text-[#2DC7FF] cursor-pointer"
                  >
                    PASTE
                  </p>
                </div>
                {errors.wallet_address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.wallet_address.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end gap-[12px] bd-nrm-med text-[rgb(var(--secondary-text))] ">
              <IoIosInformationCircleOutline />
              <p>Minimum Withdrawal 5 USDT</p>
            </div>
          </div>
          <button
            type="submit"
            className="h-[60px] cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-withdrawal-btn text-[#FFFFFF] "
          >
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawalModel;
