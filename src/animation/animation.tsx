import * as React from 'react';
import { KeyFrame } from '../keyframe/keyframe.i';

export type AnimatedElement = {
	animate: (keyframes: KeyFrame[], options: any) => any
} & HTMLElement;

export type AnimationProps = {
	keyFrames: KeyFrame[];
	options: any;
	children?: any;
};

export type AnimationControl = {
	play: () => void;
	pause: () => void;
	finish: () => void;
};

export class Animation extends React.Component<AnimationProps, {}> {
	animatedElement: AnimatedElement;

	initializeAnimation = (e: HTMLElement) => {
		this.animatedElement = e as AnimatedElement;
		const ac = this.animatedElement.animate(this.props.keyFrames, this.props.options) as AnimationControl;
		ac.finish();
	}

	componentWillReceiveProps (nextProps: AnimationProps) {
		const {keyFrames, options} = nextProps;
		if (this.animatedElement) {
			this.animatedElement.animate(keyFrames, options);
		}
	}

	render () {
		return (
			<div className='animation-block-wrapper' ref={this.initializeAnimation}>
				{this.props.children}
			</div>
		);
	}
}
