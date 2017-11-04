import * as React from 'react';
import { Animation } from '../animation/animation';

export type OpacityAnimationProps = {
	animateIn: boolean;
	duration?: number;
	onComplete?: () => void;
	className?: string;
	children?: any;
};

export const OpacityAnimation: React.SFC<OpacityAnimationProps> = (props) => {
	const opacityKeyframes: AnimationKeyFrame[] = [
		{opacity: 0},
		{opacity: 1}
	];

	const opacityOptions: AnimationEffectTiming = {
		duration: props.duration || 300,
		easing: 'ease-in-out',
		direction: props.animateIn ? 'normal' : 'reverse',
		fill: 'forwards'
	};

	const animationProps = {
		animationName: 'opacity-animation',
		animateIn: props.animateIn,
		keyFrames: opacityKeyframes,
		options: opacityOptions,
		onFinish: props.onComplete,
		className: props.className
	};

	return (
		<Animation {...animationProps}>
			{props.children}
		</Animation>
	);
};
