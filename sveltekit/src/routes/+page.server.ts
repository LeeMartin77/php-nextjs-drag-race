import fs from 'node:fs'
import { env } from "$env/dynamic/private";

export type MockData = {
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

export function load({ params }: any) {
  const data = fs.readFileSync(env.MOCK_FILE_PATH ?? "./mockdata_200.json");
  const mockData = JSON.parse(data.toString()) as MockData[]
  return {
    data: mockData,
    rand: Math.random()
  };
}