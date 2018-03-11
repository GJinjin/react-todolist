import { CHANGE_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes'

export const getInputChange = (value) => ({
	type: CHANGE_VALUE,
    value
})

export const addItem = () => ({
	type: ADD_ITEM
})

export const delItem = (value) =>({
	type: DEL_ITEM,
    value
})