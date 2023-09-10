"use client"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center'>
      <div className="m-5">
        <h1 className='display-1 text-danger'> Not Found </h1>
        <p className='text-light'> Could not find requested resource </p>
        <Link href="/" className='text-info'>Home</Link>
      </div>
    </div>
  );
}