import { CommunityItem } from "../entities";
import styles from "./CommunityList.module.css";

export const CommunityList = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <CommunityItem
        className={styles.item}
        title="Join our Discord"
        href="https://discord.gg/Y7fQNdevV2"
        color="purple"
      />
      <CommunityItem
        className={styles.item}
        title="Follow on X (Twitter)"
        href="https://twitter.com/Algem_io"
        color="green"
      />
      <CommunityItem
        className={styles.item}
        title="Join our Telegram"
        href="https://t.me/Algem_io"
        color="blue"
      />
      <CommunityItem
        className={styles.item}
        title="Subscribe to our Blog"
        href="https://blog.algem.io"
        color="orange"
      />
    </div>
  );
};
