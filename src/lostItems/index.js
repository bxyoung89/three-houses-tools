import React from 'react';
import Houses from '../data/houses';
import LostItemsData from '../data/lostItems';
import People from '../data/people';
import style from './lostItems.module.scss';

export default class LostItems extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			availableItems: Object.keys(LostItemsData),
			people: [],
		};
	}

	handleItemSelected = (event) => {
		debugger;
	};

	render(){
		const {availableItems, people} = this.state;
		return (
			<div>
				<h1>
					Lost Items
				</h1>
				<div>
					<select onChange={this.handleItemSelected}>
						<option value='' disabled selected>Please Select a Lost Item</option>
						{
							availableItems.map(item => (
								<option value={item}>{item}</option>
							))
						}
					</select>
				</div>
				<div className={style['people-list']}>

				</div>
			</div>
		)
	}
}