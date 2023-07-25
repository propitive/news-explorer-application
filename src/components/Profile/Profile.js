import HeaderProfile from "../HeaderProfile/HeaderProfile";
import MainProfile from "../MainProfile/MainProfile";

function Profile({
  isLoading,
  visible,
  handleVisibleReset,
  handleSignOutClick,
}) {
  return (
    <>
      <HeaderProfile
        handleVisibleReset={handleVisibleReset}
        handleSignOutClick={handleSignOutClick}
      />
      <MainProfile isLoading={isLoading} visible={visible} />
    </>
  );
}

export default Profile;
