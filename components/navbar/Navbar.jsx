import Link from 'next/link'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <DarkModeToggle />
      <Link href="/" className={styles.title}>Quiz App</Link>
    </nav>
  )
}

export default Navbar