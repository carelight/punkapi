import React, { Component } from 'react'
import './Item.css';
export class Item extends Component {
  render() {
    let {title,descrip,urle,newrl}=this.props;
   
    return (
    <div className="my-3 " >
         <div className="card h-100" >
            <img className="img-size "  src={!urle?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":urle} alt="..."/>
     <div className="card-body">
               <h5 className="card-title">{title}</h5>
            <p className="card-text">{descrip}</p>
            <p href="/" class="btn btn-primary"> Feel :{newrl}</p>
     </div>
    </div>
</div>
    )
  }
}

export default Item
