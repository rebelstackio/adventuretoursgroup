import { MetaComponent } from '@rebelstack-io/metaflux';
import './depart-select';
import './day-incrementer';
import './pax-selector';
import './date-picker';
import './tag-selector';
import './index.css';
class Filter extends MetaComponent {
	constructor() {
		super(global.storage)
	}
	// eslint-disable-next-line class-method-use-this
	render(){
		return `
			<div>
				<div class="departs">
					<div id="dropdown-target" class="depart-type">
						<i class="fas fa-info-circle"></i>
						<span>Depart Month</span> 
					</div>
					<pretty-dropdown target="dropdown-target">
						<div class="p-menu-item">Depart month</div>
						<div class="p-menu-devider"></div>
						<div class="p-menu-item">Depart day</div>
					</pretty-dropdown>
					<depart-select></depart-select>
					<date-picker></date-picker>
				</div>
				<day-incrementer></day-incrementer>
				<div class="pax">
					<span>Guests</span>
					<pax-selector></pax-selector>
				</div>
				<div class="tags">
					<tag-selector></tag-selector>
				</div>
			</div>
		`
	}
	// Is mandatory only if the storage parameter is pass in the constructor
	// expect to return an object, here is where you listen the store changes
	handleStoreEvents() {
		return {
			
		}
	}
	// Optional, here you can define the DOM Events
	addListeners() {
		// DEPART TYPE
		this.querySelectorAll('.p-menu-item').forEach(el => {
			el.addEventListener('click', () => {
				this.querySelector('.depart-type > span').innerHTML = el.innerHTML;
				this.togglePicker(el.innerHTML);
			})
		});
	}
	/**
	 * toggle between datepicker or monthpicker
	 */
	togglePicker (inner) {
		if (inner === 'Depart day') {
			this.querySelector('depart-select > .select-box').classList.add('hide');
			this.querySelector('date-picker > .date-picker').classList.remove('hide');
		} else {
			this.querySelector('depart-select > .select-box').classList.remove('hide');
			this.querySelector('date-picker > .date-picker').classList.add('hide');
		}
	}
}
// Define our new webcomponent
window.customElements.define('main-filter', Filter);