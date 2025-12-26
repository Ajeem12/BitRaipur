import React from "react";
import { motion } from "framer-motion";

const NotificationBar = () => {
  const notifications = [
    { id: 1, text: "Admission Open: MBA 2026 – Apply Now", type: "alert" },
    { id: 2, text: "CAT 2025 Result Expected Soon", type: "news" },
    {
      id: 3,
      text: "Scholarship Alert: Up to 100% Fee Waiver",
      type: "scholarship",
    },
    { id: 4, text: "Featured College Promotion", type: "sponsored" },
  ];

  const typeStyles = {
    alert: "border-l-4 border-primary",
    news: "border-l-4 border-blue-600",
    scholarship: "border-l-4 border-green-600",
    sponsored: "border-l-4 border-secondary",
  };

  return (
    <section className="bg-soft border-y border-border overflow-hidden -mt-2">
      <motion.div
        className="flex gap-5 whitespace-nowrap px-6 py-3"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-2 bg-light px-4 py-2 rounded-full shadow-soft text-sm ${
              typeStyles[item.type]
            }`}
          >
            {item.type === "sponsored" && (
              <span className="bg-secondary text-dark text-xs px-2 py-0.5 rounded font-semibold">
                Sponsored
              </span>
            )}
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default NotificationBar;
