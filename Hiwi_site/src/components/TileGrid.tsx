import Tile from './Tile';
import styles from '../styles/TileGrid.module.css';

const tiles = Array.from({ length: 15 }, (_, i) => ({  // das array was durchläufen wird mit array.map() und in map() kommt das objekt innerhalb des arrays rein. => map(tiles) also zusammen array.map(objekt im array)
  title: `Bild ${i + 1}`,
  link: `/Seite-${i + 1}`,
  image: `/images/bild${i + 1}.png`,
}));

export default function TileGrid() {
  return (
    <div className={styles.grid}>  
      {tiles.map((tile) => (  // starte das durchlaufenvon tile mit map (for schleife) ALSO array.map(i) => <objektname parameterkey = {i.index1} WICHTIG !!!!
        <Tile key={tile.title} title={tile.title} link={tile.link} image={tile.image} /> // übergebe diese Parameter beim durchlauf
      ))}
    </div>
  );
}



