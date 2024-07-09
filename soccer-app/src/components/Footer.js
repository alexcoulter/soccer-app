import { Container, Row, Col, Stack, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
export function Footer() {
  return (
    <footer className="footer py-4">
      <Container fluid className="mb-5">
        <Row className="text-white">
          <Col className="mx-5">
            <Stack>
              <h2 className="footer-heading">Durham Soccer League</h2>
              <p>Soccer is our business</p>
              <p>Let's kick it together!</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <h4 className="footer-heading2">Useful Links</h4>
              <Link to="/" className="text-white footer-link">Home</Link>
              <Link to="Players" className="text-white footer-link">Players</Link>
              <Link to="Standings" className="text-white footer-link">Standings</Link>
              <Link to="Schedule" className="text-white footer-link">Schedule</Link>
            </Nav>
          </Col>
          <Col>
            <h4 className="footer-heading2">Contact us!</h4>
            <p>Email: Rob.DurhamDude@gmail.com</p>
            <p>Phone: (919) 222-5678</p>
          </Col>
          </Row>
      </Container>
    </footer>
  );
}