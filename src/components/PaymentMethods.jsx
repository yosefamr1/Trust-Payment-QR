import { useState } from "react";
// import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import logoImg from "../assets/images/logo.png";

export default function PaymentMethods() {
  const company = {
    // name: "Trust",
    logo: logoImg,
  };

  const accounts = [
    {
      bank: "National Bank Of Egypt",
      account: "2363070889390201019",
    },
    {
      bank: "CIB Bank",
      account: "100064584493",
    },
    {
      bank: "Banque Misr",
      account: "470001000004947",
    },
  ];

  const [copied, setCopied] = useState(null);

  const copyAccount = async (account, index) => {
    await navigator.clipboard.writeText(account);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 w-full">
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur rounded-2xl shadow-xl p-6"
      >
        {/* Branding */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={company.logo}
            // alt={company.name}
            className="w-24 h-20 mb-2"
          />
          <h1 className="text-white text-xl font-bold">{company.name}</h1>
          <p className="text-gray-400 text-sm">Payment Methods</p>
        </div>

        <div className="space-y-4">
          {accounts.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Landmark className="text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-sm">
                    {item.bank}
                  </h2>
                  <p className="text-gray-400 text-xs mt-1 select-all">
                    {item.account}
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyAccount(item.account, index)}
                className="ml-3 px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-black transition"
              >
                {copied === index ? "Copied ✔" : "Copy"}
              </button>
            </div>
          ))}
        </div>
        {/* // any commint */}
        <div className="mt-6 text-center text-xs text-gray-400">
          اسم المستفيد : امجد أحمد عبدالسلام
        </div>
      </div>
    </div>
  );
}
