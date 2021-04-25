import {IoLogoGithub as Github} from 'react-icons/io'
import {FiTwitter as Twitter} from 'react-icons/fi'
import {IoLogoElectron as Home} from 'react-icons/io5'
import {IoLogoLinkedin as Linked} from 'react-icons/io5'
import metadata from 'utils/config'
import styles from '@styles/Footer.module.css'

const Footer = ( )=> (
    <footer className={styles.footer}>
        <ul>
            <li>
                <a
                    aria-label="Homepage"
                    href={metadata.author.homeURL}
                    target="_blank"
                    rel="noopener"
                >
                    <Home />
                </a>
            </li>
            <li>
                <a
                    aria-label="Github Profile"
                    href={metadata.author.githubURL}
                    target="_blank"
                    rel="noopener"
                >
                    <Github />
                </a>
            </li>
            <li>
                <a
                    aria-label="Twitter Profile"
                    href={metadata.author.twitterURL}
                    target="_blank"
                    rel="noopener"
                >
                    <Twitter />
                </a>
            </li>
            <li>
                <a
                    aria-label="LinkedIn Profile"
                    href={metadata.author.linkedinURL}
                    target="_blank"
                    rel="noopener"
                >
                    <Linked />
                </a>
            </li>
        </ul>
        <p>翻译：您可以帮助把翻译这个网站成其他语言吗？如果可以，请附详情电邮联系我们。</p>
      </footer>
)

export default Footer