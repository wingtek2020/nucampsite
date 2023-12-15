import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { selectAllPartners } from "./partnersSlice";
import Partner from "./Partner";
import Error from "../../components/Error";
import Loader from "../../components/Loading";

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <Loader type="Circles" color="#00BFFF" height={80} width={80} />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
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
