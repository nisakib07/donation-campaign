// import { useEffect, useState } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Statistics = () => {
//   const [allDonations, setAllDonations] = useState([]);

//   useEffect(() => {
//     const donatedItemsFromLocalStorage = JSON.parse(
//       localStorage.getItem("donatedItems")
//     );
//     setAllDonations(donatedItemsFromLocalStorage);
//   }, []);

//   const myDonation = allDonations.length;
//   const remainingDonation = 12 - myDonation;

//   const data = {
//     datasets: [
//       {
//         data: [myDonation, remainingDonation],
//       },
//     ],
//     labels: ["Your Donation", "Total Donation"],
//   };
//   const options = {};

//   return (
//     <div className="w-52">
//       <Pie data={data} options={options}></Pie>
//     </div>
//   );
// };

// export default Statistics;

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [allDonations, setAllDonations] = useState([]);

  useEffect(() => {
    const donatedItemsFromLocalStorage = JSON.parse(
      localStorage.getItem("donatedItems")
    );
    setAllDonations(donatedItemsFromLocalStorage);
  }, []);

  const myDonation = allDonations.length;
  const remainingDonation = 12 - myDonation;
  const data = [
    { name: "myDonation", value: myDonation },
    { name: "remainingDonation", value: remainingDonation },
  ];

  const COLORS = ["#00C49F", "#FF444A", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  return (
    <div>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center gap-14">
        <div className="flex items-center gap-4">
          <h4>Your Donation</h4>
          <div className="w-[100px] h-3 bg-[#00C49F;]"></div>
        </div>
        <div className="flex items-center gap-4">
          <h4>Your Donation</h4>
          <div className="w-[100px] h-3 bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
