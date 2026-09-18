import "./App.css";
import { ZENELISTA } from "./adat";
import Zenek from "./components/Zenek";

export default function App() {
  return (
    <>
      <header>
        <h1>Táncoló Tehén Zenelejátszó</h1>
      </header>
      <article>
        <Zenek lista={ZENELISTA} />
      </article>
      <footer>
        <p>&copy;TancoloTehen</p>
      </footer>
    </>
  );
}