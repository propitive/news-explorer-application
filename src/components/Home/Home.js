import HeaderHome from "../HeaderHome/HeaderHome";
import MainHome from "../MainHome/MainHome";
import About from "../About/About";

function Home({ isLoading, visible, showMoreItems, handleSignInClick }) {
  return (
    <>
      <HeaderHome handleSignInClick={handleSignInClick} />
      <MainHome
        isLoading={isLoading}
        visible={visible}
        showMoreItems={showMoreItems}
      />
      {visible === 3 && <About />}
    </>
  );
}

export default Home;
