import * as React from 'react';
import { Animation, AnimationProps, BaseAnimationProps } from '../animation/animation';

export type ScaleAnimationProps = BaseAnimationProps;

export const ScaleAnimation: React.SFC<ScaleAnimationProps> = (props) => {
	const scaleKeyframes: AnimationKeyFrame[] = [
		{transform: 'scale(0)'},
		{transform: 'scale(1)'}
	];

	return (
		<Animation animationName='scale-animation' keyFrames={scaleKeyframes} {...props}>
			{props.children}
		</Animation>
	);
};
