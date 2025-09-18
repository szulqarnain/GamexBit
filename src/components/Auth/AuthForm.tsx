import styles from "./AuthForm.module.css";
import React from "react";
import brandLogo from "../../assets/logos/LightLogo.png";
interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode: _mode }) => {
  return (
    <div className={`${styles.authFormContainer} mx-auto w-[664px] p-[60px]`}>
      <img
        src={brandLogo}
        alt="Gamexbit"
        className="w-[200px] mx-auto pb-[56px]"
      />
      <form className="">
        <div className="flex flex-col gap-[6px] pb-[32px]">
          <label className="bd-nrm-med text-secondary">Email</label>
          <input
            className="p-[16px] border-[2px] rounded-[12px]"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="bd-nrm-med text-secondary">Password</label>
          <input
            className="p-[16px] border-[2px] rounded-[12px]"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button
          type="submit"
          className={`${styles.authBtn} w-full p-[16px] rounded-[12px] mt-[42px]`}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
