import * as React from 'react';
import { BaseAnimationProps, Animation } from '../animation/animation';

export type HeightAnimationProps = BaseAnimationProps;

export class HeightAnimation extends React.Component<HeightAnimationProps, any> {
	private heightContentElement: HTMLElement;

	state = {
		_heightContentSet: false
	};

	setHeightContentElement = (e: any) => {
		if (e) {
			this.heightContentElement = e;
			this.setState({_heightContentSet: true});
		}
	}

	createHeightAnimationKeyframes = (): AnimationKeyFrame[] => {
		const contentHeight = this.heightContentElement.getBoundingClientRect().height + 'px';

		return [
			{height: '0px', overflow: 'hidden', offset: 0},
			{height: contentHeight, overflow: 'hidden', offset: .99},
			{height: contentHeight, overflow: 'initial', offset: 1}
		];
	}

	render () {
		const props = this.props;

		const maybeWrapInAnimation = (content: any) => {
			return this.state._heightContentSet ? (
				<Animation
					animationName='height-animation'
					keyFrames={this.createHeightAnimationKeyframes()}
					style={{display: 'block'}}
					{...props}
				>
					{content}
				</Animation>
			) : content;
		};

		const heightContent = (
			<div className='height-animation-content' ref={this.setHeightContentElement}>
				{React.Children.only(props.children)}
			</div>
		);

		return maybeWrapInAnimation(heightContent);
	}
}
