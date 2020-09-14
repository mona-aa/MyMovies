
import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import './index.css'
import {  Link } from 'react-router-dom';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function CreateFilm(props) {  

        const [Film, setfilm] = useState({Id:'', Titel: '', Beskrivning: '', Aldergrans: '', Genre: '', Sprak: '', Huvudregissor: '' }); 

        
        const Insertfilm = (e) => {  

          e.preventDefault();  

          const data = { Titel:Film.Titel, Beskrivning: Film.Beskrivning, Aldergrans: Film.Aldergrans, Genre:Film.Genre, Sprak: Film.Sprak, Huvudregissor: Film.Huvudregissor};  

          axios.post('http://193.10.202.71/Filmservice/film/PostFilm', data)  

            .then((result) => {  

              props.history.push('/filmLista')  

            });  

        };  
        

        const onChange = (e) => {  

          e.persist();  

          setfilm({...Film, [e.target.name]: e.target.value});  

        }  

        
        return (  


          <div>
              <Link to={'/filmLista'} className="nav-link">Alla filmer</Link> 
              <br/>
                <div id="create" className="app flex-row align-items-center">  

                <Container>  

                  <Row className="justify-content-center">  

                    <Col md="12" lg="10" xl="8">  

                      <Card className="mx-4">  

                        <CardBody className="p-4">  

                          <Form onSubmit={Insertfilm}>  

                            <h1>Lägg till film</h1>  
                    
                            <InputGroup className="mb-3">  
                              <Input type="text" name="Titel" id="Titel" placeholder="Titel" value={Film.Titel} onChange={ onChange }  />  
                            </InputGroup>  

                             <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Beskrivning" name="Beskrivning" id="Beskrivning" value={Film.Beskrivning} onChange={ onChange }/>  
                            </InputGroup>  

                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Åldergrans" name="Aldergrans" id="Aldergrans"  value={Film.Aldergrans} onChange={ onChange }  />  
                            </InputGroup>  

                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="Genre" name="Genre" id="Genre" value={Film.Genre} onChange={ onChange }  />  
                            </InputGroup>  

                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="Språk" name="Sprak" id="Sprak" value={Film.Sprak} onChange={ onChange } />  
                            </InputGroup>  

                            <InputGroup className="mb-4">   
                               <Input type="text" placeholder="Huvudregissör" name="Huvudregissor" id= "Huvudregissor" value={Film.Huvudregissor} onChange={ onChange } />  
                            </InputGroup>   

                      <CardFooter className="p-4">  

                          <Row>  

                            <Col xs="12" sm="6">  

                              <Button type="submit" className="btn btn-info mb-1" block><span>Spara</span></Button>  

                            </Col>  

                            <Col xs="12" sm="6">  

                              <Button className="btn btn-info mb-1" onClick = {'/filmLista'} block><span>Avbryt</span></Button>  

                            </Col>  

                          </Row>  

                        </CardFooter>  

                          </Form>  

                        </CardBody>                 

                      </Card>  

                    </Col>  

                  </Row>  

                </Container>  

                </div>  
              </div>  
        )  

}  

export default CreateFilm 