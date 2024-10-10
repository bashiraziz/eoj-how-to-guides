'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css'; // Assuming you have a CSS module for styling

// Define a type for the section keys
type SectionKey = 
  'contacts' | 'banking' | 'investments' | 'insurances' | 'otherAssets' | 
  'debts' | 'creditCards' | 'socialMedia' | 'emailAccounts' | 'myDomains' | 
  'cloudAccounts';

const Sidebar = () => {
  // Define the state for toggling sections
  const [openSections, setOpenSections] = useState<{ [key in SectionKey]: boolean }>({
    contacts: false,
    banking: false,
    investments: false,
    insurances: false,
    otherAssets: false,
    debts: false,
    creditCards: false,
    socialMedia: false,
    emailAccounts: false,
    myDomains: false,
    cloudAccounts: false,
  });

  // Toggle the section open/close state
  const toggleSection = (key: SectionKey) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.heading}>Help</h3>
      <ul className={styles.menu}>
        {/* Contacts Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('contacts')}>
            Contacts {openSections.contacts ? '-' : '+'}
          </div>
          {openSections.contacts && (
            <ul className={styles.submenu}>
              <li><Link href="/help/contacts-add" className={styles.link}>Contacts - Add</Link></li>
              <li><Link href="/help/contacts-list" className={styles.link}>Contacts - List</Link></li>
            </ul>
          )}
        </li>

        {/* Banking Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('banking')}>
            Banking {openSections.banking ? '-' : '+'}
          </div>
          {openSections.banking && (
            <ul className={styles.submenu}>
              <li><Link href="/help/banking-add" className={styles.link}>Banking - Add</Link></li>
              <li><Link href="/help/banking-list" className={styles.link}>Banking - List</Link></li>
            </ul>
          )}
        </li>

        {/* Investments Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('investments')}>
            Investments {openSections.investments ? '-' : '+'}
          </div>
          {openSections.investments && (
            <ul className={styles.submenu}>
              <li><Link href="/help/investments-add" className={styles.link}>Investments - Add</Link></li>
              <li><Link href="/help/investments-list" className={styles.link}>Investments - List</Link></li>
            </ul>
          )}
        </li>

        {/* Insurances Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('insurances')}>
            Insurances {openSections.insurances ? '-' : '+'}
          </div>
          {openSections.insurances && (
            <ul className={styles.submenu}>
              <li><Link href="/help/insurances-add" className={styles.link}>Insurances - Add</Link></li>
              <li><Link href="/help/insurances-list" className={styles.link}>Insurances - List</Link></li>
            </ul>
          )}
        </li>

        {/* Other Assets Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('otherAssets')}>
            Other Assets {openSections.otherAssets ? '-' : '+'}
          </div>
          {openSections.otherAssets && (
            <ul className={styles.submenu}>
              <li><Link href="/help/otherAssets-add" className={styles.link}>Other Assets - Add</Link></li>
              <li><Link href="/help/otherAssets-list" className={styles.link}>Other Assets - List</Link></li>
            </ul>
          )}
        </li>

        {/* Debts Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('debts')}>
            Debts {openSections.debts ? '-' : '+'}
          </div>
          {openSections.debts && (
            <ul className={styles.submenu}>
              <li><Link href="/help/debtOwedToUs-add" className={styles.link}>Debt Owed To Us - Add</Link></li>
              <li><Link href="/help/debtOwedToUs-list" className={styles.link}>Debt Owed To Us - List</Link></li>
              <li><Link href="/help/debtOwedByUs-add" className={styles.link}>Debt Owed By Us - Add</Link></li>
              <li><Link href="/help/debtOwedByUs-list" className={styles.link}>Debt Owed By Us - List</Link></li>
            </ul>
          )}
        </li>

        {/* Credit Cards Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('creditCards')}>
            Credit Cards {openSections.creditCards ? '-' : '+'}
          </div>
          {openSections.creditCards && (
            <ul className={styles.submenu}>
              <li><Link href="/help/creditCards-add" className={styles.link}>Credit Cards - Add</Link></li>
              <li><Link href="/help/creditCards-list" className={styles.link}>Credit Cards - List</Link></li>
            </ul>
          )}
        </li>

        {/* Social Media Accounts Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('socialMedia')}>
            Social Media Accounts {openSections.socialMedia ? '-' : '+'}
          </div>
          {openSections.socialMedia && (
            <ul className={styles.submenu}>
              <li><Link href="/help/socialMediaAccounts-add" className={styles.link}>Social Media Accounts - Add</Link></li>
              <li><Link href="/help/socialMediaAccounts-list" className={styles.link}>Social Media Accounts - List</Link></li>
            </ul>
          )}
        </li>

        {/* Email Accounts Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('emailAccounts')}>
            Email Accounts {openSections.emailAccounts ? '-' : '+'}
          </div>
          {openSections.emailAccounts && (
            <ul className={styles.submenu}>
              <li><Link href="/help/emailAccounts-add" className={styles.link}>Email Accounts - Add</Link></li>
              <li><Link href="/help/emailAccounts-list" className={styles.link}>Email Accounts - List</Link></li>
            </ul>
          )}
        </li>

        {/* My Domains Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('myDomains')}>
            My Domains {openSections.myDomains ? '-' : '+'}
          </div>
          {openSections.myDomains && (
            <ul className={styles.submenu}>
              <li><Link href="/help/myDomains-add" className={styles.link}>My Domains - Add</Link></li>
              <li><Link href="/help/myDomains-list" className={styles.link}>My Domains - List</Link></li>
            </ul>
          )}
        </li>

        {/* Cloud Accounts Section */}
        <li className={styles.menuItem}>
          <div className={styles.sectionHeader} onClick={() => toggleSection('cloudAccounts')}>
            Cloud Accounts {openSections.cloudAccounts ? '-' : '+'}
          </div>
          {openSections.cloudAccounts && (
            <ul className={styles.submenu}>
              <li><Link href="/help/cloudAccounts-add" className={styles.link}>Cloud Accounts - Add</Link></li>
              <li><Link href="/help/cloudAccounts-list" className={styles.link}>Cloud Accounts - List</Link></li>
            </ul>
          )}
        </li>

        {/* Setup Section */}
        <li className={styles.menuItem}>
          <Link href="/help/setup" className={styles.link}>
            Setup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
