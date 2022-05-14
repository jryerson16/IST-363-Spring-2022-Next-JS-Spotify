import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Row from '../../components/Row'
import Image from 'next/image'
import Paragraph from '../../components/Paragraph'
import Col from '../../components/Col'
import Link from 'next/link'

import { getArtists } from '../../lib/api'

export async function getStaticProps() {
    const artists = await getArtists();
    console.log({artists});
    return {
        props: {
            artists
        }
    }
}

const ArtistsLandingPage = ({ artists }) => {
    console.log({ artists });
    return <Layout>
        <Heading level="1">Artists</Heading>
        <Row> 
        {artists.map((artist, index) => {
            const { title, slug, featuredImage } = artist.node;
            const { sourceUrl, altText, mediaDetails } = featuredImage.node;
            return <Col key={index} xs="6" sm="6">
                <Image
                    src={sourceUrl}
                    alt={altText}
                    width={mediaDetails.width}
                    height={mediaDetails.height}
                />
                <Heading level="3">{title}</Heading>
                <Paragraph>
                    <Link href={`/artists/${slug}`}>
                        <a>
                            Read more
                        </a>
                    </Link>
                </Paragraph>
            </Col>
        })}
        </Row>
    </Layout>
}
export default ArtistsLandingPage;