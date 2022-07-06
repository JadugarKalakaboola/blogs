import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[#0F172A] min-h-screen'>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
