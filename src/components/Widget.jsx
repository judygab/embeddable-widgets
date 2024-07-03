import styles from "./Widget.scss?inline";
import tailwindStyles from "../index.css?inline";
import { Button } from "@/components/ui/button";

export const Widget = () => {
  return (
    <>
      <style>{styles}</style>
      <style>{tailwindStyles}</style>
      <div className="widget">Widget</div>
      <Button className="bg-slate-800">Click me</Button>
    </>
  );
};
