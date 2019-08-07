import ja from '../translations/ja';

const languageToTranslationMap = {
	ja,
};

const defaultLanguage = 'en';

class TranslationService {
	constructor() {
		const navigatorLanguage = window.navigator.language || defaultLanguage;
		const nonLocaleLanguage = navigatorLanguage.split('-')[0];
		this.currentLanguage = nonLocaleLanguage;
	}

	getTranslatedText(string) {
		const currentTranslation = languageToTranslationMap[this.currentLanguage];
		if (!currentTranslation) {
			return string;
		}
		return currentTranslation[string] || string;
	}
}

export default new TranslationService();