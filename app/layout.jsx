import Navbar from '@/components/Nav'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import Bottom from '@/components/Bottom'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  title: 'TENZINDELEK',
  description: 'PERSONAL PORTFOLIO OF TENZIN DELEK',
  icons: {

    icon: "/icon.png",
    
    },
}
export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className=' flex flex-col '>
      
      <Navbar/>
        {children}
        <Bottom/>
      </main>
       
       </body>
       
    </html>
  )
}
