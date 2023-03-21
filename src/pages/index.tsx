import ItemListContainer from '../../components/ItemListContainer';
import NavBar from '../../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </>
  );
}
