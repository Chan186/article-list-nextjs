import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>getStaticProps</Link>
        </li>
        <li>
          <Link href='/articlesServerside'>getServerSideProps</Link>
        </li>
        <li>
          <Link href='/articlesClientside'>Client-Side-Fetching</Link>
        </li>
        <li>
          <Link href='/articlesISR'>Incremental-Static-Regenaration</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
