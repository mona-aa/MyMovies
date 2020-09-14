import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import { BrowserRouter as Link } from 'react-router-dom';  

function FilmLista(props) {  

  const [data, setData] = useState([]);  



  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('http://193.10.202.71/Filmservice/film');  

      setData(result.data);  

    };  
    GetData();  

  }, []);
  


  const deletefilm = (id) => {  

    debugger;  

    axios.delete('http://193.10.202.71/Filmservice/film/DeleteFilm?id=' + id)  

      .then((result) => {  

        props.history.push('/bio')   

      });  

  };  

  const editfilm = (id) => {  

    props.history.push({  

      pathname: '/edit/' + id  

    });  

  };  

  

  return (  

    <div id="filmLista"> 
        <Link to={'/createFilm'} className="nav-link">Lägg till film</Link> 

    <div className="animated fadeIn">  

      <Row>  

        <Col>  

          <Card>  

            <CardHeader >  

              <i className="fa fa-align-justify"></i>  Filmlista

              </CardHeader>  

            <CardBody id="cardBody">  

              <Table hover responsive size="sm" className="table">  

                <thead>  

                  <tr>  

                    <th>Titel</th>  

                    <th>Beskrivning</th>  

                    <th>Åldersgräns</th>  

                    <th>Genre</th>  

                    <th>Språk</th>  

                    <th>Huvudregissor</th>  
                  </tr>  

                </thead>  

                <tbody  >  

                  {  

                    data.map((item, idx) => {  

                      return <tr key={item.id}>  

                        <td>{item.Titel}</td>  

                        <td>{item.Beskrivning}</td>  

                        <td>{item.Aldergrans}</td>  

                        <td>{item.Genre}</td>  

                        <td>{item.Huvudregissor}</td>  

                        <td>  

                          {item.Sprak}  

                        </td>  

                        <td>  

                          <div class="btn-group">  

                            <button className="btn btn-warning" onClick={() => { editfilm(item.Id) }}>Redigera</button>  

                            <button  className="btn btn-warning" onClick={() => { deletefilm(item.Id) }}>Radera</button>  

                          </div>  

                        </td>  

                      </tr>  

                    })}  

                </tbody>  

              </Table>  

            </CardBody>  

          </Card>  

        </Col>  

      </Row>  


    </div>    
    </div>

  )  

} 

  

export default FilmLista  