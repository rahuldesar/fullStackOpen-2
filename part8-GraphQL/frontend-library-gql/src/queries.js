import { gql } from '@apollo/client';

export const GET_BOOK_COUNT = gql `
  query BookCount{
    bookCount
  }
`

export const GET_AUTHOR_COUNT = gql`
  query AuthorCount{
    authorCount
  }
`
export const GET_ALL_AUTHORS = gql`
  query AllAuthors{
    allAuthors {
      name
      bookCount
      born
    }
  }
`

export const GET_ALL_BOOKS = gql`
  query allBooks {
    allBooks {
      title
      published
      author
      genres
    }
  }
`

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $publishedYear: Int!, $genres: [String!]!) {
    addBook(
      title: $title,
      author: $author,
      published: $publishedYear,
      genres: $genres
      ) {
      title
      published
      author
      id
    }
  }
`

export const UPDATE_AUTHOR_BIRTHYEAR = gql`
  mutation EditAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      bookCount
      id
      born
    }
  }
`



