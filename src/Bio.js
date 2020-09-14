import React,{Component} from 'react'
import axios from 'axios'
import './index.css'




class Bio  extends Component
{

  state = {
    FilmLista:[]
  }


  componentDidMount()
  {

    axios.get('http://193.10.202.71/Filmservice/film').then(res=>{
      console.log(res.data)
      this.setState({
        FilmLista:res.data
      });
    });
  };


  render(){

    if (!this.state.FilmLista)
    {
      return <div>Ingen film hittades</div>
    }

    return(   
     
  <section id="Bio">
<h1>På bio nu</h1>
<div className="container mt-5">
    <div className="row justify-content-center">
      
      {this.state.FilmLista.map(filmer =>
        {
          return(

        <div key={filmer.id} className="card movie_card">
          <img src={filmer.Filmbild} class="card-img-top" alt="..."/>
          <div key={filmer.id}  className="card-body">
            <h5 className="card-title">{filmer.Titel}</h5>
          <span className="movie_info float-right"><i class="fa fa-star"/>8.5</span>
          </div>
          <div key={filmer.id} className="description">
          <i className="fa fa-heart play_button" data-toggle="tooltip" data-placement="bottom" title="Min lista">
            </i>
              <div className="d-text">
                <h6><strong>Handling</strong></h6>
                <p>{filmer.Beskrivning}</p>
                <h6><strong>Regisör</strong></h6>
                <p>{filmer.Huvudregissor}</p>
                <h6><strong>Premiär</strong></h6>
                <p>{filmer.Utgivningsdatum}</p>
                <h6><strong>Åldersgräns</strong></h6>
                <p>{filmer.Aldergrans}</p>
              </div>

        </div>

        </div>

 

          )
        }
        )}
     
     </div>
</div>
</section>
    );
    }
}

export default Bio;
