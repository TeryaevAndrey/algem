import { CommunityItem } from "../entities";
import styles from "./CommunityList.module.css";

export const CommunityList = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <CommunityItem
        className={styles.item}
        title="Join our Discord"
        href="#"
        color="purple"
      />
      <CommunityItem
        className={styles.item}
        title="Follow on Twitter"
        href="#"
        color="green"
      />
      <CommunityItem
        className={styles.item}
        title="Join our Telegram"
        href="#"
        color="blue"
      />
      <CommunityItem
        className={styles.item}
        title="Subscribe to our Blog"
        href="#"
        color="orange"
      />
    </div>
  );
};
