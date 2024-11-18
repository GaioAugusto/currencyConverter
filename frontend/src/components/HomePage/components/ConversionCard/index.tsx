import { ConversionCardProps } from "./types";
import { ConversionCardView } from "./view";

type ComponentType = React.FC<ConversionCardProps>;
export const ConversionCard: ComponentType = () => {
  return <ConversionCardView />;
};
