import clsx from "clsx";
import Image from "next/image";
import React from "react";

type StatCardPropsType = {
  count: number | string;
  label: string;
  icon: string;
  type: "appointments" | "cancelled" | "pending";
};

function StatCard({ count = 0, label, icon, type }: StatCardPropsType) {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-cancelled": type === "cancelled",
        "bg-pending": type === "pending",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt={label}
          className="size-8 "
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>

      <p className="text-14-regular">{label}</p>
    </div>
  );
}

export default StatCard;
