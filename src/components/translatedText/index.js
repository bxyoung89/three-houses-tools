import React from 'react';
import PropTypes from 'prop-types';
import TranslationService from '../../services/translationService';

const TranslatedText = ({string}) => {
	return (
		<span>
			{TranslationService.getTranslatedText(string)}
		</span>
	);
};

TranslatedText.propTypes = {
	string: PropTypes.string,
};

export default TranslatedText;