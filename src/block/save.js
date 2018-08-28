import times from 'lodash/times';

const { Component } = wp.element;
const { __ } = wp.i18n;

export default class tautalaSave extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes: { delay, slides, imgSize },
			attributes,
			className,
		} = this.props;

		return (
			<div className={ className }>
				<ul
					data-delay={ delay }
					className={ `siema client--slides-container list-unstyled columns-${ slides }` }
				>
					{ times( slides, function( i ) {
						const content = attributes[ 'slide_' + i + '_content' ];
						const author = attributes[ 'slide_' + i + '_author' ];
						const title = attributes[ 'slide_' + i + '_title' ];
						const imgURL = attributes[ 'slide_' + i + '_url' ];

						return (
							<li key={ i }>
								<div className="tautala-text">
									<p>{ content }</p>
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
										<h3 className="tautala-testimonial-author">{ author }</h3>
										<small className="tautala-testimonial-title">{ title }</small>
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
