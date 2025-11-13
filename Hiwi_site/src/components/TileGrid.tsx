import Tile from './Tile';
import styles from '../styles/TileGrid.module.css';

const tiles = Array.from({ length: 20 }, (_, i) => ({
  title: `Kachel ${i + 1}`,
  link: `/seite-${i + 1}`,
}));

export default function TileGrid() {
  return (
    <div className={styles.grid}>
      {tiles.map((tile) => (
        <Tile key={tile.title} title={tile.title} link={tile.link} />
      ))}
    </div>
  );
}

