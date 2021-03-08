import React, { Component, ReactNode } from 'react';

export default class SignIn<T> extends Component {
	constructor(props: T) {
		super(props);
		this.state = {};
	}

	render(): ReactNode {
		return (
			<div>Sign in!</div>
		)
	}
}