import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import People from '../../data/people';
import Houses from '../../data/houses';

import style from './lostItemsPerson.module.scss';

const LostItemPerson = (props) => {
	const {personId, items, onItemRemoved} = props;
	if(items.length === 0){
		return null;
	}
	const person = People.find(a => a.id === personId);
	if(!person){
		return null;
	}
	const house = Houses.find(h => h.id === person.house);

	return (
		<div className={classnames(style['lost-item-person'], style[house.cssClass])}>
			<div className={style['rest-of-card']}>
				<div className={style.name}>
					{person.name}
				</div>
				<div className={style['card-content']}>
					<div className={style.items}>
						{
							items.map(item => (
								<button onClick={() => onItemRemoved(personId, item)} className={style['item-button']} key={item}>
									<span>
										{item}
									</span>
									<div className={style.x}></div>
								</button>
							))
						}
					</div>
				</div>

			</div>
			<div className={style['portrait-wrapper']}>
				<div className={style['portrait']}>
					<div className={style['image-wrapper-wrapper']}>
						<div className={style['image-wrapper']}>
							<img src={person.portrait} alt={person.name} />
						</div>
					</div>
				</div>
			</div>

		</div>
	)
};

LostItemPerson.propTypes = {
	personId: PropTypes.number.isRequired,
	items: PropTypes.arrayOf(PropTypes.string),
	onItemRemoved: PropTypes.func,
};

LostItemPerson.defaultProps = {
	items: [],
	onItemRemoved: () => {
	},
};

export default LostItemPerson;