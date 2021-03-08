import React, { Component, ReactNode } from 'react';

export default class NotFound<T> extends Component {
	constructor(props: T) {
		super(props);
		this.state = {};
	}

	render(): ReactNode {
		return (
			<div>Not Found 404 :(</div>
		);
	}
}