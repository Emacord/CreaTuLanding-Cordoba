function CartWidget() {
  return (
    <button style={styles.btn} aria-label="Carrito">
      Carrito <span style={styles.badge}>0</span>
    </button>
  )
}

const styles = {
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    background: '#fff',
    cursor: 'pointer',
  },
  badge: {
    fontWeight: 700,
  },
}

export default CartWidget
