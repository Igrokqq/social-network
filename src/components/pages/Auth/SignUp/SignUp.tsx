import React, { Component, ReactNode } from 'react';

export default class SignUp<T> extends Component {
	constructor(props: T) {
		super(props);
		this.state = {};
	}

	render(): ReactNode {
		return (
			<div>Sign up!</div>
		)
	}
}