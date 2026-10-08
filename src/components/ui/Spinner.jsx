export default function Spinner({ label = "Loading..." }) {
  return (
    <div className="spinner-wrap">
      <div className="spinner"></div>
      <p className="muted">{label}</p>
    </div>
  );
}
