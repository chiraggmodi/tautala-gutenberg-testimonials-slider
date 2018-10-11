import times from 'lodash/times';
import classnames from 'classnames';

const { Component } = wp.element;
const { __ } = wp.i18n;

export default class tautalaSave extends Component {
	render() {
		const {
			attributes: { delay, slides, imgSize, hasCircleImg },
			attributes,
			className,
		} = this.props;

		const classes = classnames(
			'siema client--slides-container list-unstyled',
			`columns-${ slides }`,
			{ 'has-large-image': imgSize > 150 },
			{ 'has-small-image': imgSize <= 150 },
			{ 'has-circular-image': hasCircleImg }
		);

		return (
			<div className={ className }>
				<ul data-delay={ delay } className={ classes }>
					{ times( slides, function( i ) {
						const content = attributes[ 'slide_' + i + '_content' ];
						const author = attributes[ 'slide_' + i + '_author' ];
						const title = attributes[ 'slide_' + i + '_title' ];
						const imgURL = attributes[ 'slide_' + i + '_url' ];

						return (
							<li key={ i }>
								<div className="tautala-text">
									<p
										className={ `tautala-text-content tautala-text-content-${ i }` }
									>
										{ content }
									</p>
								</div>
								<div className="tautala-user">
									<div className="tautala-image-wrapper">
										<img
											src={ imgURL }
											className="tautala-avatar"
											alt=""
											width={ imgSize }
											height={ imgSize }
											style={ {
												maxWidth: imgSize,
											} }
										/>
									</div>

									<div className="tautala-testimonial-info">
										<h3
											className={ `tautala-testimonial-author tautala-testimonial-author-${ i }` }
										>
											{ author }
										</h3>
										<small
											className={ `tautala-testimonial-title tautala-testimonial-title-${ i }` }
										>
											{ title }
										</small>
									</div>
								</div>
							</li>
						);
					} ) }
				</ul>
				<div className="tautala-pagination" />
			</div>
		);
	}
}
