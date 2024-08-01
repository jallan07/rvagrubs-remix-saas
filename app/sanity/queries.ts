import { viewClient } from './client.server'

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
  const content = await viewClient.fetch(CONTENT_QUERY)
  return content
}
