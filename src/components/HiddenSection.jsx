import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

const HiddenSection = function () {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Row className="justify-content-center pt-3">
        <Col xs={12} md={6} className="text-center">
          <h2>Componente da testare</h2>
          <Button
            onClick={() => {
              setShow(!show)
            }}
          >
            {show ? 'NASCONDI' : 'MOSTRA'}
          </Button>
          {show && (
            <div className="mt-3">
              <Card>
                <Card.Img src="https://placecats.com/400/400" alt="gattino" />
                <Card.Body>
                  <Card.Title>Gattino peloso</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    alias nam itaque omnis nemo amet voluptate reprehenderit
                    expedita consectetur veritatis neque nihil corrupti,
                    suscipit accusantium harum ut quia. Quos, quibusdam?
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HiddenSection
