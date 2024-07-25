import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>articlesStatic</Link>
        </li>
        <li>
          <Link href='/articlesServerside'>articlesServerside</Link>
        </li>
        <li>
          <Link href='/articlesClientside'>articlesClientside</Link>
        </li>
        <li>
          <Link href='/articlesISR'>articlesISR</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
