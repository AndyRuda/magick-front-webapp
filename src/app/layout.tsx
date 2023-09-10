"use client"
import './global.scss'
import { store } from './../redux/store'
import { Provider } from 'react-redux'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-dark' >
      <Provider store={store}>
        {children}
      </Provider>
      </body>
    </html>
  );
}