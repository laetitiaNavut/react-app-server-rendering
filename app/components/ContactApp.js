import React, {Component, PropTypes} from 'react'; 
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactApp extends Component { 

	constructor(){
		super(...arguments);
		this.state = {
			contacts: this.props.initialData || [],
			filterText: ''
		}
	}

	handleUserInput(searchTerm){
		this.setState({filterText: searchTerm })
	}

	render(){ 

		return(
			<div>
				<SearchBar filterText = { this.state.filterText} 
				onUserInput= { this.handleUserInput.bind(this) } />
				<ContactList contacts={ this.state.contacts } filterText={ this.state.filterText } />
			</div>
		)	
	}
};

ContactApp.PropTypes = {
	initialData: PropTypes.any
}

export default ContactApp;