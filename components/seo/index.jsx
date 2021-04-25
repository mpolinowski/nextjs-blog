import Head from 'next/head'
import metadata from 'utils/config'

const SeoHeader = ({title, description}) => {

    const pageTitle = title ? `${title} :: ${metadata.siteName}` : metadata.siteName

    const pageDescription = description ? description : metadata.description

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og.title" content={pageTitle} />
            <meta property="og.description" content={pageDescription} />
            <meta property="og.type" content="website" />
            <meta property="twitter.site" content={metadata.author.twitter} />
            <meta property="twitter.title" content={pageTitle} />
            <meta property="twitter.description" content={pageDescription} />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}

export default SeoHeader