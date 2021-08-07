/** @jsxImportSource theme-ui */

import { Link } from 'gatsby'

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>이런!</title>
      <h1 style={headingStyles}>페이지를 찾을 수 없습니다.</h1>
      <p style={paragraphStyles}>
        죄송합니다{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        방문하신 페이지는 존재하지 않습니다.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">메인으로</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
