import React from 'react'

export default (props) => {
	const { list, inputValue, inputChangeHandler, subClickHandler, delClickHandler } = props
	return (
		<div>
	        <input type="text" 
	               value={inputValue} 
	               onChange={inputChangeHandler} 
	         />
	        <button onClick={subClickHandler}>提交</button>
	        <ul>
	          {
	            list.map((value, index) => {
	              return (
	                <li key={index}>
	                  {value}
	                  <span data-index={index}
	                        onClick={delClickHandler}
	                  >delete</span>
	                </li>
	              )
	            })
	          }  
	        </ul>
	    </div>
	)
}