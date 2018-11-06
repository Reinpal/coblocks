/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import './styles/style.scss';
import Edit from './components/edit';
import icons from './../../utils/icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;

/**
 * Block constants
 */
const name = 'accordion';

const title = __( 'Accordion' );

const icon = icons.accordion;

const keywords = [
	__( 'tabs' ),
	__( 'list' ),
	__( 'coblocks' ),
];

const settings = {

	title: title,

	description: __( 'Add an accordion.' ),

	icon: {
		src: icon,
	},

	keywords: keywords,

	supports: {
		align: [ 'wide', 'full' ],
	},

	edit: Edit,

	save() {

		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
};

export { name, title, icon, settings };
