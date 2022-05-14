import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Button from '../components/Button'
import Col from '../components/Col'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import TracksByGenre from '../components/TracksByGenre'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a summary of my site."></meta>
      </Head>
      <section>
        <Container>
          <Row>
            <Col sm="6" md="4" lg="3">Col 1</Col>
            <Col sm="6" md="4" lg="3">Col 2</Col>
            <Col sm="6" md="4" lg="3">Col 3</Col>
            <Col sm="6" md="4" lg="3">Col 4</Col>
          </Row>
        </Container>
      </section>
      <TracksByGenre />
    </Layout>
  )
}
