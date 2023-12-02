import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectCampsiteById, selectAllCampsites } from "./campsitesSlice";

const CampsiteList = () => {
  const campsites = selectAllCampsites();

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
