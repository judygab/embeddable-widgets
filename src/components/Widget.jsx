import styles from "./Widget.scss?inline";

export const Widget = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="widget">Widget</div>
    </>
  );
};
