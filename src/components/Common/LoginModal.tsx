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
        className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md"
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
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Login with Email
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-500"
            required
          />
          <button type="submit" className="h-[60px] cursor-pointer text-center gap-[8px] border-[0.4px] rounded-[8px] px-[12px] py-[8px] user-referal-btn text-[#FFFFFF] hover-button" > Send Magic Link </button>
        </form>
      </div>
    </div>
  );
}
