import { useEffect, useState } from "react";
import { getLatestHealth } from "../api";
import VitalsCard from "./VitalsCard";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    fetchData();
    socket.on("alert", (msg) => setAlert(msg.message));
  }, []);

  const fetchData = async () => {
    const res = await getLatestHealth();
    setData(res.data);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Whole Body Monitoring Dashboard</h1>
      {alert && <div style={{ color: "red" }}>{alert}</div>}

      <VitalsCard title="Steps" value={data.steps} />
      <VitalsCard title="Calories" value={data.calories} />
      <VitalsCard title="Heart Rate" value={data.heartRate} />
      <VitalsCard title="SpO2" value={data.spo2} />
      <VitalsCard title="Stress" value={data.stressLevel} />
      <VitalsCard title="Energy Score" value={data.energyScore} />
    </div>
  );
}
