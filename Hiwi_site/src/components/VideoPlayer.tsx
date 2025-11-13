import styles from './videoPlayer.module.css';

type VideoPlayerProps = {
  url: string;
};

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={url}
        title="Schulungsvideo"
        allowFullScreen
        className={styles.iframe}
      />
    </div>
  );
}
