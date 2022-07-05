const Tombol = (props) => {
  return (
    <button
      onClick={() => {
        alert(`Anda telah mengklik tombol ${props.name}`);
      }}
    >
      {props.name}
    </button>
  );
};

export default Tombol;

