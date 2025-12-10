import type { OverviewStat } from "../constants/constants";
import type { ComponentType } from "react";

type Props = { stat: OverviewStat };

const DashboardOverviewStats = ({ stat }: Props) => {
  // cast to a more permissive component type so we can pass `size` and `className`
  const Icon = stat.icon as ComponentType<any> | undefined;

  const colorMap: Record<string, { squareBg: string; iconColor: string }> = {
    blue: { squareBg: "bg-blue-100", iconColor: "text-blue-600" },
    teal: { squareBg: "bg-teal-100", iconColor: "text-teal-600" },
    orange: { squareBg: "bg-orange-100", iconColor: "text-orange-600" },
    pink: { squareBg: "bg-pink-100", iconColor: "text-pink-600" },
  };

  const colors = colorMap[stat.color ?? "blue"] ?? colorMap.blue;

  return (
    <>
      <div className="bg-white border border-gray-100 rounded-md p-4 shadow-sm flex items-start gap-4">
        {/* Icon square */}
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${colors.squareBg}`}
          aria-hidden
        >
          {Icon ? <Icon size={18} className={`${colors.iconColor}`} /> : null}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-medium text-gray-700 truncate">
              {stat.title}
            </h2>
            <span className="text-gray-300 select-none">⋯</span>
          </div>

          <p className="text-2xl font-extrabold text-gray-900 mt-2">
            {stat.value}{" "}
            {stat.subtitle ? (
              <span className="font-semibold text-xs text-gray-600">
                {stat.subtitle}
              </span>
            ) : null}
          </p>

          <div className="mt-1">
            {stat.footnote ? (
              <p className="text-xs text-gray-400 mt-1">{stat.footnote}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverviewStats;
