import { Container } from "reactstrap";
import CampsitesList from "../features/campsites/CampsiteList";
import SubHeader from "../components/SubHeader";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <CampsitesList></CampsitesList>
    </Container>
  );
};

export default CampsitesDirectoryPage;
