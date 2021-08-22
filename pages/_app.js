function MyApp({Component, pageProps}) {
  return (
    <div>
      <div>header</div>
      <Component {...pageProps} />
      <div>footer</div>
    </div>
  )
}

export default MyApp
