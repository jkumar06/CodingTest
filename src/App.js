import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

URL = "https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true";

class App extends Component {
	state = {
		post: [],
		allPosts: []
  };
  
  
	componentDidMount() {
		axios
			.get(URL, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			})
			.then(({ data }) => {
				this.setState({
          post: data,
					allPosts: data 
				});
			})
			.catch(err => {});
	}

	_onKeyUp = e => {
    	const post = this.state.allPosts.filter(item =>
			item.mission_name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};
  
  _filterByYear = year => {
        const post = this.state.allPosts.filter(item =>
            item.launch_year === year
        );
        this.setState({ post });
}
_filterByLaunch = launch => {
	const post = this.state.allPosts.filter(item =>
	item.launch_success === launch
	);
	this.setState({ post });
	}
  _filterByLanding = landing => {
	const post = this.state.allPosts.filter(item =>
	item.launch_landing === landing
	);
	this.setState({ post });
	}
  
  	render() {
		return (
      
			<div className="container-fluid">
        <header>
  <h1>SpaceX Launch Programs</h1>
</header>
        <section>
        <nav>      
    <ul>
      <h1>Filters</h1>
    <p>Launch Year</p>
        <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2006')}>2006</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2007')}>2007</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2008')}>2008</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2009')}>2009</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2010')}>2010</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2011')}>2011</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2012')}>2012</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2013')}>2013</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2014')}>2014</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2015')}>2015</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2016')}>2016</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2017')}>2017</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2018')}>2018</button>
    <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2019')}>2019</button>
    
  </div>
  </div>
  <div className="w3-show-inline-block">
  <div className="w3-bar">
  <button className="w3-btn w3-teal"  onClick={() => this._filterByYear('2020')}>2020</button>
    
    
  </div>
  </div>
      <br/>
  <p>Successful Launch</p>
    
	  <div className="w3-show-inline-block">
  <div className="w3-bar">
  <button className="btn btn-success"  onClick={() => this._filterByLaunch(true)}>True</button>
  <button className="btn btn-success"  onClick={() => this._filterByLaunch(false)}>False</button>
    
  </div>
  </div>
  <br/>
  <p>Successful Landing</p>
    
	  <div className="w3-show-inline-block">
  <div className="w3-bar">
  <button className="btn btn-success"  onClick={() => this._filterByLanding(true)}>True</button>
  <button className="btn btn-success"  onClick={() => this._filterByLanding(false)}>False</button>
  </div>
  </div>
    </ul>
  </nav>
          
            
          <article>
   <ul className="data-list">

{this.state.post.map((item, index) => (
<li className={"block-" + index}>
<div className="title">
<img src={item.links.mission_patch_small} alt=""/>
<h3>{item.mission_name}</h3>
<h5>Mission Ids: {item.mission_id.length === 0 ? "0" : item.mission_id.map((id, index) => <span key={index}>{ (index ? ', ' : '') + id }</span>)}</h5>
<h5>Launch Year: {item.launch_year}</h5>
<h5>Successful Launch: {item.launch_success ? "True" : "False"}</h5>
<h5>Successful Landing: {item.launch_landing ? "True" : "False"}</h5>

</div>

</li>

))}
</ul>
<h3>Developed by: <strong>Jagadeesh Kumar</strong></h3>
  </article>
  <p>Hiiii</p>
  <p>@@@@@@</p>
  <p>Hii Jagadeesh</p>
        </section>
  </div>
		);
	}
}

export default App;
