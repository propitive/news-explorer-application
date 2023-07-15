import HeaderHome from "../HeaderHome/HeaderHome";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import MainProfile from "../MainProfile/MainProfile";

function Profile(isLoading, visible, showMoreItems) {
  return (
    <>
      <HeaderProfile />
      <MainProfile
        isLoading={isLoading}
        visible={visible}
        showMoreItems={showMoreItems}
      />
    </>
  );
}

export default Profile;
