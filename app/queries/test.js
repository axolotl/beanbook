import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOGS = gql`
  {
    books {
      title
      author
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      console.log(data)
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <select name="dog" onChange={onDogSelected}>
          {data.books.map(book => (
            <option key={book.id} value={book.title}>
              {book.author}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

export default Dogs
