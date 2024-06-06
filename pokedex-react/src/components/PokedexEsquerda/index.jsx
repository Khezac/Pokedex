import { Pad } from "../Pad";
import { VisorInferiorEsq } from "../VisorInferiorEsquerda";
import { VisorSuperiorEsquerdo } from '../VisorSuperiorEsquerdo/index.jsx'

export const PokedexEsquerda = () => {
  return (
    <div>
      <Pad/>
      <VisorInferiorEsq/>
      <VisorSuperiorEsquerdo/>
    </div>
  );
};
