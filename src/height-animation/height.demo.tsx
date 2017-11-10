import * as React from 'react';
import { HeightAnimation } from './height';

export class HeightAnimationDemo extends React.Component<any, any> {
	state = {
		isShowing: true
	};

	toggleAnimation = () => {
		this.setState({isShowing: !this.state.isShowing});
	}

	onComplete = () => {
		console.log(`Height Animation Complete: ${this.state.isShowing ? 'In' : 'Out'}`);
	}

	render () {
		return (
			<div className='opacity-animation-demo'>
				<button onClick={this.toggleAnimation}>Toggle</button>
				<HeightAnimation animateIn={this.state.isShowing} onFinish={this.onComplete}>
					<div>
						<div>Hi! This is a height example</div>
						<div>Hi! This is a height example</div>
						<div>Hi! This is a height example</div>
						<div>Hi! This is a height example</div>
					</div>
				</HeightAnimation>
				<div>
					Here is more text...
				</div>
			</div>
		);
	}
}
