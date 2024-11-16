import { InstructionsProps } from "./types";
import { InstructionsView } from "./view";

type ComponentType = React.FC<InstructionsProps>;
export const Instructions: ComponentType = () => {
  return <InstructionsView />;
};
