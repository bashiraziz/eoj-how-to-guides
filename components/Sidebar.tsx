import Link from 'next/link';
import styles from '../styles/Sidebar.module.css'; // Import the CSS module

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.heading}>Help</h3>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/help/contacts-add" className={styles.link}>
            Contacts - Add
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/contacts-list" className={styles.link}>
            Contacts - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/banking-add" className={styles.link}>
            Banking - Add
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/banking-list" className={styles.link}>
            Banking - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/investments-add" className={styles.link}>
            Investments - Add 
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/investments-list" className={styles.link}>
            Investments - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/insurances-add" className={styles.link}>
            Insurances - Add 
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/insurances-list" className={styles.link}>
            Insurances - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/otherAssets-add" className={styles.link}>
            Other Assets - Add
          </Link>
        </li>
          <li className={styles.menuItem}>
          <Link href="/help/otherAssets-list" className={styles.link}>
            Other Assets - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/debtOwedToUs-add" className={styles.link}>
          Debt Owed To Us - Add
          </Link>
        </li>
          <li className={styles.menuItem}>
          <Link href="/help/debtOwedToUs-list" className={styles.link}>
            Debt Owed To Us - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/debtOwedByUs-add" className={styles.link}>
          Debt Owed By Us - Add
          </Link>
        </li>
          <li className={styles.menuItem}>
          <Link href="/help/debtOwedByUs-list" className={styles.link}>
            Debt Owed By Us - List
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/help/creditCards-add" className={styles.link}>
          Credit Cards - Add
          </Link>
        </li>
          <li className={styles.menuItem}>
          <Link href="/help/creditCards-list" className={styles.link}>
            Credit Cards - List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


