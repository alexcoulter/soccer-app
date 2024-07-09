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
              <Link to="/soccer-app/" className="text-white footer-link">Home</Link>
              <Link to="/soccer-app/players" className="text-white footer-link">Players</Link>
              <Link to="/soccer-app/standings" className="text-white footer-link">Standings</Link>
              <Link to="/soccer-app/schedule" className="text-white footer-link">Schedule</Link>
            </Nav>
          </Col>
          <Col>
            <h4 className="footer-heading2">Contact us!</h4>
            <p>Email: Alex.DurhamSoccer@gmail.com</p>
            <p>Phone: (919) 555-5555</p>
          </Col>
          </Row>
      </Container>
    </footer>
  );
}