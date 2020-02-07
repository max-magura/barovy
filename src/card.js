import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Modal, ListGroup} from 'react-bootstrap';
import './card.css'

class CardPortfolio extends React.Component {  

  state = {
    showContactMe: false
  }

  render() {

    return (
    <>

    <Card className="card col-md-7 w-75 p-3">
      <Card.Body>
        <Card.Text as="h2"><b>Barovy</b><i> coming soon</i></Card.Text>
        <Card.Text>
          A place to save your favorite (and least favorite) drams, on the go.
        </Card.Text>
      </Card.Body>
    </Card>

    </>
    )
  }
}

export default CardPortfolio