import "./Zene.css";
import { type ZeneTipus } from "../adat";

interface ZeneKartyaProps {
  zenem: ZeneTipus;
}

export default function Zene({ zenem }: ZeneKartyaProps) {
  return (
    <div className="zene">
      <h2>{zenem.cim}</h2>
      <p>
        <span>Előadó: </span>
        {zenem.eloado}
      </p>
      <p>
        <span>Műfaj: </span>
        {zenem.mufaj}
      </p>
      <p>
        <span>Kiadás éve: </span>
        {zenem.kiadasEve}
      </p>
      <p className="leiras">{zenem.leiras}</p>
      <button>Lejátszás</button>
    </div>
  );
}