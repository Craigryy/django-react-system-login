import React, {useState} from 'react';
import APIservice from '../APIService';

function Form(props) {
  const [title,setTitle]= useState(props.article.title)
  const [description,setDescription]= useState(props.article.description)
  const updateArticle = ()=>{
    APIservice.UpdateArticle(props.article.id,{title,description})
    .then(resp => console.log(resp))

  }
  return (
    <div>
      {props.article ? (
        <div className='mb-3'>
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className='form-control'
            id="title"
            name="title"
            placeholder="Please Enter Title"
            value={title}
            onChange={e=> setTitle(e.target.value)}
          />
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            type="text"
            className='form-control'
            id="description"
            rows= '5'
            value={description}
            onChange={e=> setDescription(e.target.value)}
            >
            </textarea>
            <br/>
            <button onClick={updateArticle} className='btn btn-success'>Update Article</button>
        </div>
      ) : null}

      {/* The following h1 element is outside the conditional rendering */}
     
    </div>
  );
}

export default Form;
