import React from 'react';

import { storiesOf } from '@storybook/react';
import LostItemPerson from './index';

storiesOf('Lost Item Person')
	.add('Claude', () => (<LostItemPerson personId={16} items={['test 1', 'test 2']}/>))
	.add('Edelgard', () => (<LostItemPerson personId={0} items={['test 1', 'test 2']}/>))
	.add('Dimitri', () => (<LostItemPerson personId={8} items={['test 1', 'test 2']}/>))
	.add('Rhea', () => (<LostItemPerson personId={24} items={['test 1', 'test 2']}/>));