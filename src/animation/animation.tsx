import * as React from 'react';

export type AnimationProps = {
	animateIn: boolean;
	keyFrames: AnimationKeyFrame[];
	options: AnimationEffectTiming;
	animationName: string;
	onFinish?: () => void;
	className?: string;
	children?: any;
	// wrapperStyle?: any;
};

export class Animation extends React.Component<AnimationProps, {}> {
	animatedElement: Element;

	initializeAnimation = (e: HTMLElement) => {
		this.animatedElement = e;
		const ac = this.animatedElement.animate(this.props.keyFrames, this.props.options);
		ac.finish();
	}

	componentWillReceiveProps (nextProps: AnimationProps) {
		const {keyFrames, options, animateIn} = nextProps;

		if (this.animatedElement && animateIn !== this.props.animateIn) {
			const ac = this.animatedElement.animate(keyFrames, options);
			ac.onfinish = nextProps.onFinish;
		}
	}

	render () {
		const props = this.props;
		const classNames = `animation-block-wrapper ${props.className || ''}`;
		const wrapperStyle = {
			display: 'inline-block'
		};

		return (
			<span style={wrapperStyle} className={classNames} ref={this.initializeAnimation} data-name={props.animationName}>
				{this.props.children}
			</span>
		);
	}
}
