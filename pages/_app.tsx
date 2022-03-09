import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'


type NextPageWithLayout = NextPage & {                      // MyApp es una NextPage y devuelve un
    getLayout?: ( page: ReactElement ) => ReactNode         // getLayout que devuelve a su vez un ReactNode que 
}                                                           // el tipo predeterminado para el children atributo     

type AppPropsWithlayout = AppProps & {                      // Las props de MyApp son del tipo AppProps
    Component: NextPageWithLayout                           // y devuelven una NextPage
}

function MyApp({ Component, pageProps }: AppPropsWithlayout) {          // Next renderiza la app aquí
                                                                        // basados en el component y sus props
  const getLayout = Component.getLayout || ((page) => page)             // Recuperamos getLayout de cada componente

  return getLayout(<Component { ...pageProps } />)                      // Se aplica el layout al componente
                                                                        // a renderizar
  
}

export default MyApp
