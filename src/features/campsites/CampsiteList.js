import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectCampsiteById, selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const CampsiteList = () => {
  const campsites = useSelector(selectAllCampsites);
  console.log("campsites: " + campsites);
  
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }
  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col
            md="5"
            className="m-4"
            key={campsite.id}
            onClick={() => selectCampsiteById(campsite.id)}
          >
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsiteList;
