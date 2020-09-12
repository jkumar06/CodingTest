import React from 'react';


function Landing( ) {

   return (

    <article>
    <ul className="data-list">
 {/* post items mapped in a list linked to onKeyUp function */}
 {this.state.post.map((item, index) => (
 <li className={"block-" + index}>
 <div className="title">
 <img src={item.links.mission_patch_small} alt="" />
 <h3>{item.mission_name}</h3>
 <h5>Mission Ids: {item.mission_id.length === 0 ? "0" : item.mission_id.map((id, index) => <span key={index}>{ (index ? ', ' : '') + id }</span>)}</h5>
 <h5>Launch Year: {item.launch_year}</h5>
 <h5>Successful Launch: {item.launch_success ? "True" : "False"}</h5>
 <h5>Successful Landing: {item.launch_landing ? "True" : "False"}</h5>
 </div>
 </li>
 ))}
 </ul>
   </article>
   )
}
export default Landing;