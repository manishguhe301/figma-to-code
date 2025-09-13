import { useMemo } from "react";

export const useDemoData = () => {
  const data = useMemo(() => [
    {
      label: "Income",
      data: [
        { primary: new Date(2024, 0, 1), secondary: 2000 },
        { primary: new Date(2024, 1, 1), secondary: 4000 },
        { primary: new Date(2024, 2, 1), secondary: 6000 },
        { primary: new Date(2024, 3, 1), secondary: 3000 },
        { primary: new Date(2024, 4, 1), secondary: 8000 },
      ]
    },
    {
      label: "MomGrowth",
      secondaryAxisId: "growth",
      data: [
        { primary: new Date(2024, 0, 1), secondary: -0 },
        { primary: new Date(2024, 1, 1), secondary: 100 },
        { primary: new Date(2024, 2, 1), secondary: 50 },
        { primary: new Date(2024, 3, 1), secondary: -25 },
        { primary: new Date(2024, 4, 1), secondary: 75 },
        { primary: new Date(2024, 5, 1), secondary: -100 },
      ]
    }
  ], []);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.primary,
      formatters: {
        scale: (value) => {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
          return months[value] || '';
        }
      }
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        elementType: "bar",
        position: "left",
        formatters: {
          scale:
            (value) =>
              `$${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`
        },
        min: 0,
        max: 8000,
        style: {
          fill: "#A743EF",
        }
      },
      {
        id: "growth",
        getValue: (datum) => datum.secondary,
        elementType: "line",
        position: "right",
        formatters: {
          scale: (value) => `${value}%`
        },
        min: -100,
        max: 100,
        style: {
          stroke: "#8B0000",
          strokeWidth: 3
        }
      },
    ],
    []
  );

  return { data, primaryAxis, secondaryAxes };

}