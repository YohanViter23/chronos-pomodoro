import type { Homeprops } from '../../pages/Home';
import styles from './styles.module.css';

export function CountDown({ state }: Homeprops) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
