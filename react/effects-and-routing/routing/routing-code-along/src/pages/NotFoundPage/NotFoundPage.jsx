import React from 'react'
import notFoundKitten from './ErrorKitten.jpg'

const NotFoundPage = () => {
  return (
    <>
    <img src={notFoundKitten} alt="Not Found" />
    <div>NotFoundPage</div>
    </>
  )
}

export default NotFoundPage