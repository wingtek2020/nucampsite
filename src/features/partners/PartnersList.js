import { Col } from "reactstrap";
import { selectAllPartners } from "./partnersSlice";
import Partner from "./Partner";

const PartnersList = () => {
  const partners = selectAllPartners();
  return (
    <Col className="mt-4">
      {partners.map((partner) => {
        return (
          <div className="d-flex mb-5" and key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnersList;
