import styles from '../styles/Tile.module.css';

type TileProps = {
  title: string;
  link: string;
};

export default function Tile({ title, link }: TileProps) { 
  return (
    <a href={link} className={styles.tile}>
      <div>{title}</div>
    </a>
  );
}
