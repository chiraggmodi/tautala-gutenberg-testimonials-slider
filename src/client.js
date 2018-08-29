jQuery( function( $ ) {
	const siema = document.querySelector( '.siema' );

	if ( siema ) {
		const slider = new Siema( {
			selector: siema,
			loop: true,
			onChange: onChangeCallback,
			duration: 300,
		} );

		setInterval(
			() => slider.next(),
			parseInt( slider.selector.dataset.delay ) * 1000
		);

		function onChangeCallback() {
			const btns = document.querySelectorAll( '.tautala-pagination-button' );
			btns.forEach( ( btn, i ) => {
				if ( btn.classList && this.currentSlide !== i ) {
					btn.classList.remove( 'active' );
				} else {
					btn.classList.add( 'active' );
				}
			} );
		}

		// Add a function that generates pagination to prototype
		Siema.prototype.addPagination = function() {
			for ( let i = 0; i < this.innerElements.length; i++ ) {
				const btn = document.createElement( 'button' );
				btn.className = 'tautala-pagination-button';
				if ( i === 0 ) {
					btn.className += ' active';
				}
				//btn.textContent = i;
				btn.addEventListener( 'click', () => {
					this.goTo( i );
				} );
				document.querySelector( '.tautala-pagination' ).appendChild( btn );
				//this.selector.appendChild( btn );
			}
		};

		// Trigger pagination creator
		slider.addPagination();
	}
} );
