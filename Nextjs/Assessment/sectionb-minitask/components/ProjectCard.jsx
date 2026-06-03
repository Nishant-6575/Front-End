import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
  year,
}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{year}</span>
    </div>
  );
}