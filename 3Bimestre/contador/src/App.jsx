import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <div>
      <h1>Contador</h1>
      <div>0</div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
      <button>Reset</button>
    </div>
  );
}
