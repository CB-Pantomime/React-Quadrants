import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class GetString extends Component {
	state = {
		data: "",
	};

	generateContent = () => {
		if (!this.props.apiData) {
			// this.getRandomImage(this.props.apiData);
			return <Loader styles={contentStyles} />;
		} else {
			return (
				<div style={contentStyles}>
					<p>{this.props.apiData}</p>
				</div>
			);
		}
	};

	render() {
		return (
			<section className="section" onClick={this.handleOnClick}>
				{this.generateContent()}
			</section>
		);
	}
}

export default GetString;