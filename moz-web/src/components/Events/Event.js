import React from 'react'


function Event({event, onClick})
{
    return(
    //     <div class="container">
    // <div class="row">
    //   <div class="col-lg-10 col-md-10 mx-auto">
    //   <div class="card-columns" style={{display: 'inline-block'}}>      
    //       <div class="card" style={{width:"300px"}}>
    //       <img class="card-img-top" src="https://picsum.photos/1000/700/?random={event.title}" alt="Card image" style={{width:"100%"}}/>
    //       <div class="card-body">
    //         <h4 class="card-title">{event.title}</h4>
    //         <p class="card-text">{event.hashtags}</p>
    //         <a href="#" class="btn btn-primary stretched-link">Read More..</a>
    //       </div>
    //     </div>
     
    //   </div>
    //   </div>
    //   </div>
    //   </div>
    <div class="col-sm-4">        
    <div class="card-deck">
    <div class="card text-white bg-dark mb-3">
      {/* <img src={`https://picsum.photos/1000/700/?random=${event.title}`} className="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <p class="card-text text-white">{event.hashtags}</p>
        <a onClick={onClick} class="btn btn-primary stretched-link">Learn More</a>
      </div>
    </div>
  </div>
  <br/>
  </div>
        /* // <Paper className='job' onClick={onClick}>
        //     <div>
        //         <Typography variant='h5'>{event.title}</Typography>
        //         <Typography variant='h6'>{event.hashtags}</Typography>
        //     </div>
        //     {/*<div>
        //         <Typography>{job.created_at.split(" ").slice(0, 3).join(' ')}</Typography>
        //     </div>
         </Paper> 
         
         
         
         
         <p class="card-text text-white">{event.description}</p>
        <p class="card-text text-white"><small class="text-muted text-white">{event.hashtags}</small></p>*/

    );
}
export default Event;