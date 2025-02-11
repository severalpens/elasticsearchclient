import React from 'react';
import { createIndex } from '../actions';
export function Form() {
  return (
    <form action={createIndex} method="post">
      <input type="text" name="indexName" />
      <input type="text" name="embeddingType" />
      <button type="submit">Create</button>
    </form>
  )
}