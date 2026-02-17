export default function VitalsCard({ title, value }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
