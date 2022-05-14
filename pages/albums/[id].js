import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import Image from 'next/image'
import { getAllAlbumSlugs, getSingleAlbumData } from'../../lib/api'
import Row from "../../components/Row";
import Col from '../../components/Col'
import Link from 'next/link'
 
export async function getStaticPaths() {
    const paths = await getAllAlbumSlugs();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const albumData= await getSingleAlbumData(params.id);
    return {
        props: {
            albumData
        }
    }
}
const SingleAlbumPage = ({ albumData }) => {
    const{ title, featuredImage, albumInformation } = albumData;
    const{ sourceUrl, altText, mediaDetails} = featuredImage.node;
    const{ year, songsToAlbums, artistsToAlbums } = albumInformation;
    return <Layout>
        <Image
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height}
        />
        <Heading level="1">{title}</Heading>
        <Heading level="2">{year}</Heading>
        {artistsToAlbums.map((artist, index) => {
            const { title, slug } = artist;
            return <Heading level="2">
                <Link href={`/artists/${slug}`}>
                    <a>
                    {title}
                    </a>
                </Link>
            </Heading>
        })}
        <section>
            <Heading level="2">Songs</Heading>
            <Row>
                {songsToAlbums.map((song, index) => {
                    const { title } = song;
                    return <Col key={index} xs="12" sm="12">
                        <Heading level="3">{title}</Heading>
                    </Col>
                })}
            </Row>
        </section>
    </Layout>
}
export default SingleAlbumPage