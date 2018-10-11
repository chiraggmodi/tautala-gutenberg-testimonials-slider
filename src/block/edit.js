//import Inspector from './inspector';
import times from 'lodash/times';
import icons from './icons';

const { Component } = wp.element;

const { InspectorControls, RichText, MediaUpload } = wp.editor;
const { RangeControl, Button, ToggleControl } = wp.components;

const { __ } = wp.i18n;

import classnames from 'classnames';

export default class tautalaEdit extends Component {
	constructor() {
		super( ...arguments );
		//this.onChangeImage = this.onChangeImage.bind( this );

		this.state = {};
	}

	render() {
		const {
			attributes: { delay, slides, imgSize, hasCircleImg },
			attributes,
			className,
			setAttributes,
			isSelected,
		} = this.props;

		const classes = classnames(
			'editor--slides-container list-unstyled',
			`columns-${ slides }`,
			{ 'has-large-image': imgSize > 150 },
			{ 'has-circular-image': hasCircleImg }
		);

		return (
			<div className={ className }>
				<InspectorControls>
					<RangeControl
						label={ __( 'Slides' ) }
						value={ slides }
						onChange={ nextSlides => {
							setAttributes( {
								slides: nextSlides,
							} );
						} }
						min={ 1 }
						max={ 6 }
					/>
					<RangeControl
						label={ __( 'Delay (seconds)' ) }
						value={ delay }
						onChange={ nextdelay => {
							setAttributes( {
								delay: nextdelay,
							} );
						} }
						min={ 1 }
						max={ 12 }
					/>

					<RangeControl
						label={ __( 'Image Size (px)' ) }
						value={ imgSize }
						onChange={ nextImg => {
							setAttributes( {
								imgSize: nextImg,
							} );
						} }
						min={ 10 }
						max={ 500 }
						step={ 10 }
					/>
					<ToggleControl
						label="Circular Image?"
						checked={ hasCircleImg }
						onChange={ hasCircleImg => {
							setAttributes( {
								hasCircleImg: hasCircleImg,
							} );
						} }
					/>
				</InspectorControls>

				<ul className={ classes }>
					{ times( slides, function( i ) {
						const content = attributes[ 'slide_' + i + '_content' ];
						const author = attributes[ 'slide_' + i + '_author' ];
						const title = attributes[ 'slide_' + i + '_title' ];
						const imgID = attributes[ 'slide_' + i + '_id' ];
						const imgURL = attributes[ 'slide_' + i + '_url' ];

						const onChangeImage = img => {
							const image = new wp.api.models.Media( { id: img.id } )
								.fetch()
								.done( res => {
									const thumbSize = imgSize > 150 ? 'full' : 'thumbnail'; // use full size if too big
									const thumb = res.media_details.sizes[ thumbSize ].source_url;
									setAttributes( {
										[ 'slide_' + i + '_id' ]: img.id,
										[ 'slide_' + i + '_url' ]: thumb,
									} );
								} );
						};

						return (
							<li key={ i }>
								<div className="tautala-text">
									<RichText
										tagName="p"
										className="tautala-text-content"
										placeholder={ __( 'Add the testimonial content' ) }
										onChange={ content =>
											setAttributes( { [ 'slide_' + i + '_content' ]: content } )
										}
										value={ content }
									/>
								</div>
								<div className="tautala-user">
									{ ! imgID ? (
										<MediaUpload
											className="tautala-avatar"
											onSelect={ onChangeImage }
											type="image"
											value={ imgID }
											render={ ( { open } ) => (
												<Button
													className="components-button button button-large upload-image has-svg"
													onClick={ open }
												>
													{ icons.upload }
												</Button>
											) }
										/>
									) : (
										<div className="tautala-image-wrapper">
											<img
												src={ imgURL }
												className="tautala-avatar"
												alt=""
												width={ imgSize }
												height={ imgSize }
											/>

											{ isSelected ? (
												<Button
													className="remove-image has-svg"
													onClick={ () => {
														setAttributes( {
															[ 'slide_' + i + '_id' ]: '',
															[ 'slide_' + i + '_url' ]: '',
														} );
													} }
												>
													{ icons.remove }
												</Button>
											) : null }
										</div>
									) }

									<div className="tautala-testimonial-info">
										<RichText
											tagName="h3"
											className="tautala-testimonial-author"
											placeholder={ __( 'Add the testimonial author' ) }
											onChange={ author =>
												setAttributes( { [ 'slide_' + i + '_author' ]: author } )
											}
											value={ author }
										/>

										<RichText
											tagName="small"
											className="tautala-testimonial-title"
											placeholder={ __( 'Add the testimonial title' ) }
											onChange={ title =>
												setAttributes( { [ 'slide_' + i + '_title' ]: title } )
											}
											value={ title }
										/>
									</div>
								</div>
							</li>
						);
					} ) }
				</ul>
			</div>
		);
	}
}
