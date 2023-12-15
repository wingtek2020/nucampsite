import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { selectAllPartners } from "./partnersSlice";
import Partner from "./Partner";

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <h1> test </h1> 
  ) : errMsg ? (
    <h1>{errMsg}</h1> 
  ) : (
    <Col className="mt-4">
      <Row>
        {partners.map((partner) => {
          return (
            <div className="d-flex mb-5" key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Row>
    </Col>
  );
};

export default PartnersList;
