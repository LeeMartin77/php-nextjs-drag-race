import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { InferGetServerSidePropsType } from 'next'
import fs from 'node:fs'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

type MockData = {
  "_id": string,
  "dob": string,
  "address": {
    "street": string,
    "town": string,
    "postode": string
  },
  "telephone": string,
  "pets": string[],
  "score": number,
  "url": string,
  "description": string,
  "verified": boolean,
  "salary": number
}

export const getServerSideProps = async () => {
  const data = fs.readFileSync("./mockdata_200.json");
  const mockData = JSON.parse(data.toString()) as MockData[]
  return {
    props: {
      rand: Math.random(),
      mockData
    }
  };
};

export default function Home({ rand, mockData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>{rand}</div>
        {mockData.map((md, i) => (
          <Suspense key={i} fallback={<p>Loading feed...</p>}>
            <div>
              <h1>{md.dob}</h1>
              <h2>{md.salary}</h2>
              <p>{md.description}</p>
              <ul>
                <li>{md.address.street}</li>
                <li>{md.address.town}</li>
                <li>{md.address.postode}</li>
              </ul>
              <button>{md.verified ? "Yes" : "No"}</button>
            </div>
          </Suspense>
        ))}
      </main>
    </>
  );
}
