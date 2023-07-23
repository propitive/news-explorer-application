import HeaderHome from "../HeaderHome/HeaderHome";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import MainProfile from "../MainProfile/MainProfile";

function Profile({
  isLoading,
  visible,
  showMoreItems,
  handleVisibleReset,
  handleSignOutClick,
}) {
  return (
    <>
      <HeaderProfile
        handleVisibleReset={handleVisibleReset}
        handleSignOutClick={handleSignOutClick}
      />
      <MainProfile
        isLoading={isLoading}
        visible={visible}
        showMoreItems={showMoreItems}
      />
    </>
  );
}

export default Profile;
