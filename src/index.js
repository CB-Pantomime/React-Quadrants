import React, { Component } from "react";
import ReactDOM from "react-dom";
// import GetGiphy from "./GetGiphy";
import GetString from "./GetString";
import GetLorem from "./GetLorem";
import "./styles.css";
import MyGhost from './MyGhost';
import Button from './Button';

// const apiKey = process.env.REACT_APP_API_KEY;
// const searchTerm = "art";
const fetchUrl = "https://ciprand.p3p.repl.co/api?len=20&count=1";

// `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;

const fetchLoremPicsum = 'https://picsum.photos/200/300'; 

class ArtApi extends Component {

	constructor(props){
		super(props)
		this.state = { 		
			apiData1: [],
			apiBool1: false,
			apiData2: [],
			apiBool2: false,			
		}
	}

	changeToTrue = () => {

		// FETCH STRING
		fetch(fetchUrl)
			
			.then(res => res.json())	
			.then(json => this.setState({ apiData1: Object.values(json)[0] }))
			.then(() => this.setState({apiBool1: true}));

		// FETCH LOREM PICSUM		
		fetch(fetchLoremPicsum)

			.then(res => 
				{this.setState({apiData2: res.url})
					console.log(res)
			})
			.then(() => this.setState({apiBool2: true}))
	
	}

	componentDidMount(){
		// FETCH STRING
		console.log("STRING component successfully mounted");
		fetch(fetchUrl)
			.then(res => res.json())
			.then(json => this.setState({ apiData1: json.data }))
			.then(() => this.setState({apiBool1: true}));

		// FETCH LOREM PICSUM
		console.log("LOREM component successfully mounted");
		fetch(fetchLoremPicsum)

			.then(res => 
				{this.setState({apiData2: res.url})
					console.log(res)
			})
			.then(() => this.setState({apiBool2: true}))

	}

	render() {
		return (
			<div className="main">
				{/* <GetGiphy apiData={this.state.apiData1} />				 */}
				<GetString apiData={this.state.apiData1}/>
				<GetLorem apiData={this.state.apiData2} />
				{this.state.apiBool1 && this.state.apiBool2 ? <MyGhost mood={'blissful'}/> : <MyGhost mood={'sad'} />}
				<Button changeToTrue={this.changeToTrue} /> 
			</div>
		);
	}
}

export default ArtApi;
const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);



