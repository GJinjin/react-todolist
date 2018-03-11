import { Dispatcher } from 'flux'
import store from './store'
import { CHANGE_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes'

const dispatcher = new Dispatcher()

dispatcher.register((action) => {
	switch (action.type) {
		case CHANGE_VALUE:
			store.changeInput(action.value)
		break
		case ADD_ITEM:
			store.addItem()
		break
		case DEL_ITEM:
			store.deleteItem(action.value)
		break
		default: 
			store.getState()
	}
})

export default dispatcher