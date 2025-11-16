import styles from '../styles/Tile.module.css';

type TileProps = {
  title: string;
  link: string;
  image: string;
};

export default function Tile({title, link, image }: TileProps) { // das Tileprops weisst hier einfach den Parametern die vorher definierten Werte zu wie  title:str, link:string, image:string
  return (
    
    <a href={link} className={styles.tile}>
      <img src={image} alt={title}/>
      <span>{title}</span>
    </a>
  );
}
