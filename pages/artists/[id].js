import Heading from '../../components/Heading'
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'

import { getAllArtistSlugs, getSingleArtistData } from '../../lib/api'

export async function getStaticPaths() {
    const paths = await getAllArtistSlugs();
    return{
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const artistData= await getSingleArtistData(params.id);
    return {
        props: {
            artistData
        }
    }
}


const SingleArtistPage = ({ artistData }) => {
    const { title, featuredImage, artistInformation } = artistData;
    const { sourceUrl, altText, mediaDetails} = featuredImage.node;
    const { artistsToAlbums } = artistInformation
    return <Layout>
        <Image
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height}
        />

        <Heading level="1">{title}</Heading>
        <section>
            <Heading level="2">Albums</Heading>
            <Row>
            {artistsToAlbums.map((album) => {
                const { title, slug, featuredImage } = album;
                const { sourceUrl, altText, mediaDetails} = featuredImage.node;
                return <Col xs="6" sm="4" md="3">
                    <Link href ={`/albums/${slug}`}>
                    <a>
                        <Image
                            src={sourceUrl}
                            alt={altText}
                            width={mediaDetails.width}
                            height={mediaDetails.height}
                     />  
                        </a>
                     </Link>
                    <Heading level="3">A{title}</Heading>
                </Col>
            })}
            </Row>
        </section>
        <Paragraph>
            <Link href="/artists">
            <a>
                Back to Artists
            </a>
            </Link>
        </Paragraph>
</Layout>
}
export default SingleArtistPage;