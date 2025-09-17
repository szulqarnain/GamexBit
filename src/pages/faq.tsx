import { IoIosArrowUp } from "react-icons/io";

export default function Faq() {
  // 0 = first item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Gamexbit?",
      answer:
        "Gamexbit is a platform that allows users to participate in gaming pools, earn rewards, and manage digital assets. It offers features like deposits, withdrawals, referrals, and a vault system.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by signing up on our website using your email.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Currently, Gamexbit is web-based. A mobile app is in development.",
    },
    {
      question: "What currencies does Gamexbit support?",
      answer:
        "Gamexbit supports multiple cryptocurrencies including BTC, ETH, and USDT.",
    },
    {
      question: "How do deposits work?",
      answer:
        "You can deposit by navigating to the wallet section and selecting your preferred method.",
    },
  ];

  return (
    <div className="mx-auto p-4 space-y-4 ">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="p-6 cursor-pointer group rounded-xl border border-[#E5E5E5] shadow-[inset_0px_16px_100px_0px_#8A21FF0A] bg-white"
          >
            <div
              className="flex justify-between items-center text-[18px] font-bold text-gray-800"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {faq.question}
              <div className="w-10 h-10 flex items-center justify-center bg-[#E5E5E5] rounded-2xl transition-transform duration-300">
                <IoIosArrowUp
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Smooth collapsible content */}
            <div
              className={`overflow-hidden transition-all duration-300 mt-2`}
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="text-gray-600 bd-nrm-med">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
