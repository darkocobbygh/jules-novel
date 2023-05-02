import React from 'react'
import Book from '../components/Book'
import './styling/booklist.css'

import { data } from './books';
const BookList = () => {
  return (
    <section className='booklist'>
      {data.map((book,id)=>{
        console.log(book);
        return(
        <Book key={id} {...book} />
        )
      })}
    </section>
  )
}


export default BookList;