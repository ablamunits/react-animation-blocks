import * as React from 'react';
import { OpacityAnimation } from './opacity';

export class OpacityAnimationDemo extends React.Component<any, any> {
	state = {
		isShowing: true
	};

	toggleAnimation = () => {
		this.setState({isShowing: !this.state.isShowing});
	}

	render () {
		return (
			<div>
				<button onClick={this.toggleAnimation}>Toggle</button>
				<OpacityAnimation in={this.state.isShowing}>
					<div>Hello there</div>
				</OpacityAnimation>
			</div>
		);
	}
}
