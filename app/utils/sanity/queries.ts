import { client } from './client'

export async function getBlogPosts() {
  const CONTENT_QUERY = `*[_type == "post"] {
      ...,
      author->,
      mainImage {
        ...,
        asset->
      },
      categories[]->,
      body
    }
    `
  const content = await client.fetch(CONTENT_QUERY)
  return content
}
