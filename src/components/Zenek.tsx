import { type ZeneTipus } from "../adat";
import Zene from "./Zene";
import "./Zenek.css";

interface ZeneListaProps {
  lista: ZeneTipus[];
}

export default function Zenek({ lista }: ZeneListaProps) {
  return (
    <div className="zene-grid">
      {lista.map((e) => (
        <Zene key={e.id} zenem={e} />
      ))}
    </div>
  );
}