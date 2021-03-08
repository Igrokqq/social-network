import React, { Component, ReactNode } from 'react';

export default class Auth<T> extends Component {
	constructor(props: T) {
		super(props);
		this.state = {};
	}

	render(): ReactNode {
		return (
			<div>Auth</div>
		)
	}
}