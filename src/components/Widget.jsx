import styles from "./Widget.scss?inline";
import { Button } from "@/components/ui/button";

export const Widget = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="widget">Widget</div>
      <Button>Click me</Button>
    </>
  );
};
