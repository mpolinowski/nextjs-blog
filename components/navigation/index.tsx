import Link from 'next/link'
import styles from '@styles/Navigation.module.css'
import {IoHomeSharp as Home} from 'react-icons/io5' 

const Navigation = () => (
    <nav className={styles.navigation}>
        <Link href="/">
            <a aria-label="Home">
                <Home />
            </a>
        </Link>
        <Link href="/blog/">
            <a aria-label="Home">
                Blog
            </a>
        </Link>
        <Link href="/photos/">
            <a aria-label="Home">
                Photos
            </a>
        </Link>
        <Link href="/about/">
            <a aria-label="Home">
                About
            </a>
        </Link>
    </nav>
)

export default Navigation