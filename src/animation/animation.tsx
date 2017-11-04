import * as React from 'react';

export type AnimationProps = {
	keyFrames: AnimationKeyFrame[];
	options: AnimationEffectTiming;
	onFinish?: () => void;
	children?: any;
};

export class Animation extends React.Component<AnimationProps, {}> {
	animatedElement: Element;

	initializeAnimation = (e: HTMLElement) => {
		this.animatedElement = e;
		const ac = this.animatedElement.animate(this.props.keyFrames, this.props.options);
		ac.finish();
	}

	componentWillReceiveProps (nextProps: AnimationProps) {
		const {keyFrames, options} = nextProps;

		if (this.animatedElement) {
			const ac = this.animatedElement.animate(keyFrames, options);
			ac.onfinish = nextProps.onFinish;
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
