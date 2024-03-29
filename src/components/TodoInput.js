import React, { Component } from 'react'

export default class TodoInput extends Component {


    render() {
        const {item, handleChange, handleSubmit, isEdited} = this.props;
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book' />
                            </div>
                        </div>
                        <input type='text' className='form-control text-capitalize' 
                               placeholder='add a todo item' onChange={handleChange} value={item}/>
                    </div>
                    <button type='submit' 
                            className={isEdited ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3'}>
                            {isEdited ? 'Edit Item' : 'Add Item'}</button>
                </form>
            </div>
        )
    }
}
