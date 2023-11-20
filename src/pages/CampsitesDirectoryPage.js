import { Container, Row, Col} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { useState } from 'react';

const CampsitesDirectoryPage = () => {

    const [campsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
             <Row>
                <Col sm='5' md='7'>
                    <CampsitesList></CampsitesList>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite}></CampsiteDetail>
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;