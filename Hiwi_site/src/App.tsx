import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Willkommen zur Schulungsplattform</h1>
      <VideoPlayer url="/public/VID-20251031-WA0003.mp4"/>
      <p>Hier findest du Videos, Module und interaktive Inhalte.</p>
    </div>
  );
}

export default App;
