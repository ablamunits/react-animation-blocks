import * as React from 'react';
import { ScaleAnimation } from './scale';

export class ScaleAnimationDemo extends React.Component<any, any> {
	state = {
		isShowing: true
	};

	toggleAnimation = () => {
		this.setState({isShowing: !this.state.isShowing});
	}

	onComplete = () => {
		console.log(`Scale Animation Complete: ${this.state.isShowing ? 'In' : 'Out'}`);
	}

	render () {
		const style = {
			background: 'green',
			padding: '10px',
			width: '50px'
		};

		return (
			<div className='opacity-animation-demo'>
				<button onClick={this.toggleAnimation}>Toggle</button>
				<ScaleAnimation animateIn={this.state.isShowing} onFinish={this.onComplete}>
					<div style={style}>Hi! This is a scale example</div>
				</ScaleAnimation>
			</div>
		);
	}
}
