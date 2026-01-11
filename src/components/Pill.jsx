function Pill({ color, children }) {
  return (
    <div
      style={{
        display: 'inline-block',
        fontFamily: 'Playfair Display, serif',
        backgroundColor: color,
        padding: '6px 16px',
        border: '1px solid black',
        borderRadius: '20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      }}
    >
      {children}
    </div>
  );
}

export default Pill;
