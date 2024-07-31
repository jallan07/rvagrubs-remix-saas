export type BlogPost = {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: {
    asset: {
      url: string
    }
  }
  author: {
    name: string
    slug: {
      current: string
      _type: string
    }
  }
}
