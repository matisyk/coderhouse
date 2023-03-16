interface FavsProps {}

const Favs: React.FC<FavsProps> = () => {
  const arrayList = [
    { id: 0, nombre: 'matias' },
    { id: 1, nombre: 'federico' },
  ];

  return (
    <div>
      <ul>
        {arrayList.map((item, index) => (
          <>
            <li key={index}>{item.id}</li>
            <li>{item.nombre}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Favs;
