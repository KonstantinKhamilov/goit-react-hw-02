import style from "./description.module.css";

export default function Description({ name, text }) {
  return (
    <div className={style.box1}>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
}
