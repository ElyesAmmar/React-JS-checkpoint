// import './logo.svg';
import './App.css';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div>
      <nav className="navbar1">
        <div className="nav1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactlogo"></img>
        </div>
        <div className='nav2'>
          <ul className='list'>
            <li><a href="Home">Home</a></li>
            <li><a href="Aboutus">About us</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      </div>
      

      <div className='cards'>
      <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://blog.ippon.fr/content/images/2016/04/react-javascript.png" />
           <Card.Body>
             <Card.Title>React JS</Card.Title>
             <Card.Text>
              React.js is an open-source JavaScript library that is used 
              for building user interfaces specifically for Single-Page Applications.
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://i.imgur.com/cLvlQM5.png" />
           <Card.Body>
             <Card.Title>Node JS</Card.Title>
             <Card.Text>
             Node. js is an open-source, cross-platform JavaScript runtime environment and
              library for running web applications outside the client's browser.
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://i.imgur.com/lwKa9a1.png" />
           <Card.Body>
             <Card.Title>Visual Studio Code</Card.Title>
             <Card.Text>
             Visual Studio Code is a streamlined code editor with support for 
             development operations like debugging, task running, and version control.
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
        </div>
        <div className='contact' name="Contact">
        <Form className="form_cont">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"white"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" style={{color:"white"}}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:"white"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"  style={{color:"white"}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>

        
       
    </div>
  );
}

export default App;
