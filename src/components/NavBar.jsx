import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    <header style={styles.header}>
      <h1 style={styles.brand}>ANIMUS</h1>
      <CartWidget />
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid #eee',
    background: '#fff',
    width: '100%',
    position: 'sticky', 
    top: 0,
    zIndex: 1000,
  },
  brand: { margin: 0, fontSize: '20px', fontWeight: 'bold' },
}

export default NavBar
