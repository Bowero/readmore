import groq from 'groq'
import Head from 'next/head'
import { getClient, urlFor } from '../lib/sanity'
import styles from '../styles/Home.module.css'

// Pass books as props to the component
export default function Home({ books }) {
  console.log(books)
  return (
    <div className={styles.container}>
      <Head>
        <title>Readmore.so | A collection of amazing Ebooks by developers!</title>
        <meta name="description" content="Readmore.so | A collection of amazing Ebooks by developers!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.titleName}>Readmore.so!</span>
        </h1>

        <p className={styles.description}>
          Only the best ebooks, written by developers that we all love.
        </p>

        <div className={styles.grid}>
          {/* Map over books and create card for every book */}
          {books.map(book => (
            <a href={book.url} className={styles.card} key={book.title} target="_blank">
              {/* TODO: fix URL */}
              <img
                src={urlFor(book.cover).url()}
                className={styles.cardImage}
              />
              <h2>{book.title} &rarr;</h2>
              <h3 className={styles.author}>{book.author}</h3>
              <p>{book.description}</p>
              <p className={book.price > 0 ? styles.price : styles.free}>
                {/* If the price is more than 0, show the tag */}
                {book.price > 0 ? `$${book.price}` : 'Free'}
              </p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Readmore.so is made with &hearts; by Robin Martijn.
        </a>
      </footer>
    </div>
  )
}

const query = groq`
*[_type == "book"]
`

export async function getStaticProps() {
  const books = await getClient().fetch(query)

  console.log(books)

  return {
    props: {
      books: books
    },
    revalidate: 1
  }
}