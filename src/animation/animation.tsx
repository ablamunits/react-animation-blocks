import * as React from 'react';

export type OptionalBaseAnimationProps = {
	duration?: number;
	onFinish?: () => void;
	className?: string;
	children?: any;
	style?: {[key: string]: any};
};

export type BaseAnimationProps = {
	animateIn: boolean;
} & OptionalBaseAnimationProps;

export type AnimationProps = {
	animationName: string;
	keyFrames: AnimationKeyFrame[];
} & BaseAnimationProps;

export class Animation extends React.Component<AnimationProps, {}> {
	animatedElement: Element;

	createAnimationOptions = (props: AnimationProps): AnimationEffectTiming => {
		return {
			duration: props.duration || 300,
			easing: 'ease-in-out',
			direction: props.animateIn ? 'normal' : 'reverse',
			fill: 'forwards'
		};
	}

	initializeAnimation = (e: HTMLElement) => {
		this.animatedElement = e;
		const options = this.createAnimationOptions(this.props);

		const ac = this.animatedElement.animate(this.props.keyFrames, options);
		ac.finish();
	}

	componentWillReceiveProps (nextProps: AnimationProps) {
		const {keyFrames, animateIn} = nextProps;
		const options = this.createAnimationOptions(nextProps);

		if (this.animatedElement && animateIn !== this.props.animateIn) {
			const ac = this.animatedElement.animate(keyFrames, options);
			ac.onfinish = nextProps.onFinish;
		}
	}

	render () {
		const props = this.props;
		const classNames = `animation-block-wrapper ${props.className || ''}`;
		const wrapperStyle = {
			display: 'inline-block',
			...props.style
		};

		return (
			<span style={wrapperStyle} className={classNames} ref={this.initializeAnimation} data-name={props.animationName}>
				{this.props.children}
			</span>
		);
	}
}
