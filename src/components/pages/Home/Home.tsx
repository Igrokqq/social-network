import React, { Component, ReactNode } from 'react';
import { Layout } from 'antd';

import styles from './Home.css';

debugger;
export default class Home<T> extends Component {
	constructor(props: T) {
		super(props);
		this.state = {};
	}

	render(): ReactNode {
		return (
			<Layout>
				<Layout.Sider theme="light">Sidebar1</Layout.Sider>
				<Layout.Content>Content</Layout.Content>
			</Layout>
		)
	}
}