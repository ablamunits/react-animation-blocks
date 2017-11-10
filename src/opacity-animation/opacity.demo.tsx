import * as React from 'react';
import { OpacityAnimation } from './opacity';

export class OpacityAnimationDemo extends React.Component<any, any> {
	state = {
		isShowing: true
	};

	toggleAnimation = () => {
		this.setState({isShowing: !this.state.isShowing});
	}

	onComplete = () => {
		console.log(`Opacity Animation Complete: ${this.state.isShowing ? 'In' : 'Out'}`);
	}

	render () {
		return (
			<div className='opacity-animation-demo'>
				<button onClick={this.toggleAnimation}>Toggle</button>
				<OpacityAnimation animateIn={this.state.isShowing} onFinish={this.onComplete}>
					<div>Hi! This is an opacity example</div>
				</OpacityAnimation>
			</div>
		);
	}
}
