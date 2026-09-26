export default function CrystalCollectionGame() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "#000",
      }}
    >
      <iframe
        src="https://crystalcollectiongame.netlify.app/"
        title="Crystal Collection Game"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="fullscreen; autoplay"
      />
    </div>
  );
}