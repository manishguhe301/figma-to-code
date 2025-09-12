export const getStatusColors = (status) => {
  const colors = {
    paid: { text: "text-[#34C759]", bg: "bg-[#9CEFB8]" },
    unpaid: { text: "text-[#999999]", bg: "bg-[#F2F2F2]" },
    disputed: { text: "text-[#FF2D55]", bg: "bg-[#FFB1B1]" },
    "partially paid": { text: "text-[#FFCC00]", bg: "bg-[#FFFAE5]" },
    overdue: { text: "text-[#FF2D55]", bg: "bg-[#FFB1B1]" },
    awaited: { text: "text-[#FFCC00]", bg: "bg-[#FFFAE5]" },
    draft: { text: "text-[#999999]", bg: "bg-[#F2F2F2]" },
  };

  return (
    colors[status.toLowerCase()] || {
      text: "text-gray-600",
      bg: "bg-gray-100",
    }
  );
};
