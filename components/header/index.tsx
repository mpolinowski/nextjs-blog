import {IoLogoNodejs as Node} from 'react-icons/io5'
import styles from '@styles/Header.module.css'

const AppHeader = () => (
    <>
        <header className={styles.header}>
            <h1 className={styles.title}>
                Welcome to
                    <span className={styles.logo}>
                        Next.<Node className={styles.node}/>!
                    </span>
            </h1>
        </header>
    </>
)

export default AppHeader