import styles from '@styles/Layout.module.css'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SeoHeader from '@components/seo'
import Footer from '@components/footer'

const Page = ({meta, children}) => (
    <>
      <SeoHeader {...meta} />
      <Header  />
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          
            {children}

        </div>
      </main>
      <Footer />
  </>
)

export default Page