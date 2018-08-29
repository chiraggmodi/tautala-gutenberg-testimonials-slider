export const attributes = {
	delay: {
		type: 'number',
		default: 10,
	},
	slides: {
		type: 'number',
		default: 2,
	},
	imgSize: {
		type: 'number',
		default: 60,
	},
	slide_0_author: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-author-0',
	},
	slide_0_content: {
		type: 'array',
		source: 'children',
		selector: '.tautala-text-content-0',
	},
	slide_0_title: {
		type: 'string',
		default: 'Put your title in here',
	},
	slide_0_id: {
		type: 'number',
	},
	slide_0_url: {
		type: 'string',
		default: '',
	},
	slide_1_author: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-author-1',
	},
	slide_1_content: {
		type: 'array',
		source: 'children',
		selector: '.tautala-text-content-1',
	},
	slide_1_title: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-title-1',
	},
	slide_1_id: {
		type: 'number',
	},
	slide_1_url: {
		type: 'string',
		default: '',
	},
	slide_2_author: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-author-2',
	},
	slide_2_content: {
		type: 'array',
		source: 'children',
		selector: '.tautala-text-content-2',
	},
	slide_2_title: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-title-2',
	},
	slide_2_id: {
		type: 'number',
	},
	slide_2_url: {
		type: 'string',
		default: '',
	},
	slide_3_author: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-author-3',
	},
	slide_3_content: {
		type: 'array',
		source: 'children',
		selector: '.tautala-text-content-3',
	},
	slide_3_title: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-title-3',
	},
	slide_3_id: {
		type: 'number',
	},
	slide_3_url: {
		type: 'string',
		default: '',
	},
	slide_4_author: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-author-4',
	},
	slide_4_content: {
		type: 'array',
		source: 'children',
		selector: '.tautala-text-content-4',
	},
	slide_4_title: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-title-4',
	},
	slide_4_id: {
		type: 'number',
	},
	slide_4_url: {
		type: 'string',
		default: '',
	},
	slide_5_author: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-author-5',
	},
	slide_5_content: {
		type: 'array',
		source: 'children',
		selector: '.tautala-text-content-5',
	},
	slide_5_title: {
		type: 'array',
		source: 'children',
		selector: '.tautala-testimonial-title-5',
	},
	slide_5_id: {
		type: 'number',
	},
	slide_5_url: {
		type: 'string',
		default: '',
	},
};
