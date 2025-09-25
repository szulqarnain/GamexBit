import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { AiOutlineClose } from "react-icons/ai"; // ✅ close icon

export default function LoginModal({ setShowLoginModal }: { setShowLoginModal: (v: boolean) => void }) {
  const { loginWithEmail } = useAuth();
  const [email, setEmail] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginWithEmail(email);
    setShowLoginModal(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setShowLoginModal(false)} // ✅ close on backdrop click
    >
      <div
        className="relative border-1 border-[rgb(var(--border))] no-scrollbar [background:var(--bg-secondary)] rounded-2xl shadow-xl p-6 w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={() => setShowLoginModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Title */}
        <h2 className="font-[700] text-[20px] leading-[24px] text-[rgb(var(--primary-text))] text-center mb-6">
          Login with Email
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[60px] rounded-[12px] border border-[#E5E5E5] py-[14px] px-[16px] bg-white w-full pr-[50px]"
            required
          />
          <button type="submit" className="h-[60px] cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-referal-btn text-[#FFFFFF] hover-button" > Send Magic Link </button>
        </form>
      </div>
    </div>
  );
}
