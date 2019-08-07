import React from 'react';
import LostItemsData from '../data/lostItems';
import style from './lostItems.module.scss';
import LostItemPerson from './lostItemPerson';

export default class LostItems extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			availableItems: Object.keys(LostItemsData),
			people: [],
		};
	}

	updatePerson(updatedPerson) {
		const {people} = this.state;
		const newPeople =  people.map((person) => {
			if (person.id !== updatedPerson.id) {
				return person;
			}
			return updatedPerson;
		});
		this.setState({
			people: newPeople
		});
	}

	handleItemSelected = (item) => {
		const personId = LostItemsData[item];
		const {people, availableItems} = this.state;
		const matchingPerson = people.find(person => person.id === personId);
		this.setState({
			availableItems: availableItems.filter(i => i !== item)
		});
		if (!matchingPerson) {
			const newPeople = [...people, {id: personId, items: [item]}];
			this.setState({
				people: newPeople
			});
			return;
		}
		matchingPerson.items.push(item);
		this.updatePerson(matchingPerson);
	};

	onItemRemoved = (personId, item) => {
		const {people, availableItems} = this.state;
		const matchingPerson = people.find(person => person.id === personId);
		if (!matchingPerson) {
			return;
		}
		matchingPerson.items = matchingPerson.items.filter(i => i !== item);
		this.setState({
			availableItems: [...availableItems, item].sort()
		});
		if (matchingPerson.items.length !== 0) {
			this.updatePerson(matchingPerson);
			return;
		}
		this.setState({
			people: people.filter((person) => {
				return person.id !== personId;
			})
		});
	};

	render() {
		const {availableItems, people} = this.state;
		return (
			<div className={style['lost-items']}>
				<h1>
					Lost Items
				</h1>
				<div>
					<select className={style['item-select']} value='' onChange={(event) => this.handleItemSelected(event.target.value)}>
						<option value='' disabled>Please Select a Lost Item</option>
						{
							availableItems.map(item => (
								<option value={item} key={item} onClick={() => this.handleItemSelected(item)}>{item}</option>
							))
						}
					</select>
				</div>
				<div className={style['people-list']}>
					{
						people.map(({id, items}) => (
							<LostItemPerson
								personId={id}
								items={items}
								onItemRemoved={this.onItemRemoved}
								key={id}
							/>
						))
					}
				</div>
			</div>
		)
	}
}