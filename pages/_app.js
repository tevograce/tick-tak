import "../styles/global.css";

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap', })
 

export default function App({ Component, getProps }) {
  return  (
  <div className={inter.className}>
    <Component {...getProps} /> 
  </div>
  )
}

