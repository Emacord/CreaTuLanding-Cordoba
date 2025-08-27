function ItemListContainer({ mensaje }) {
  return (
    <main style={styles.main}>
      <p style={styles.text}>{mensaje}</p>
    </main>
  )
}

const styles = {
  main: { padding: '24px' },
  text: { fontSize: '18px' },
}

export default ItemListContainer
