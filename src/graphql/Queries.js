import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      title
      slug
      author {
        ... on Author {
          name
          avatar {
            url
          }
          id
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    
      authors {
               name
               field
               id
               slug
               avatar {
                        url
                      }
              }
    
  }
`;


const GET_AUTHOR_INFO = gql`
query getAuthorInfo($slug:String!){
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    post {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}
   
`;

const GET_BLOG_INFO = gql`
   query getBlogInfo($slug: String!) {
    
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        name
        field
        avatar {
          url
        }
      }
    }
    slug
    content {
      html
    }
    coverPhoto {
      url
    }
    title
  }
}  
`

const GET_BLOG_COMMENTS = gql`
query GetBlogComments($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
    name
    text
    id
  }
}
`
 
export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO, GET_BLOG_COMMENTS };
