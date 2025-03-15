import { createClient } from 'next-sanity'
import { groq } from 'next-sanity'

export const client = createClient({
  projectId: '6mk1rm8s',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
})

export const getClient = () => client

// Queries GROQ
export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    title,
    mission,
    about,
    founderSection
  }
`

export const expertisesQuery = groq`
  *[_type == "expertise"] | order(order asc) {
    _id,
    title,
    description
  }
`

export const legalPageQuery = groq`
  *[_type == "legalPage"][0] {
    title,
    content,
    companyInfo
  }
`
