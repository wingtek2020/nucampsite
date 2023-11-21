import { Col, Row, Container } from 'reactstrap';
import { CampsiteCard } from '../features/campsites/CampsiteCard';
import { selectAllCampsites } from '../features/campsites/campsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();

    return (
        <Container>
            <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
        </Container>
    )
};

export default CampsitesList;

