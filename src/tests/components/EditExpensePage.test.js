import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach( () => {

    editExpense = jest.fn();
    removeExpense =jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
                         editExpense={editExpense} 
                         removeExpense={removeExpense} 
                         history={history} 
                         expense={expenses[2]}
                         
                       />
                    );

});

test('should render Edit Expense Page correctly', () => {

    expect(wrapper).toMatchSnapshot();


});

test('should handle onSubmit', () => {

    const expense = expenses[2];
    const id = expenses[2].id;
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(id, expense);


});

test('should handle onRemove', () => {

    const id = {id: expenses[2].id};
    
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(id);


});