import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {

    const state = expensesReducer(undefined, { type: '@@INT' });

    expect(state).toEqual([]);

});

test('should remove expense by id', () => {

    const action = {

        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expense if id not found', () => {

    const action = {

        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);

});

test('should add expense', () => {

    const action = { 
        
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: 'Cable Bill',
            note: 'must have',
            amount: '2889',
            createdAt: 0

        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]); 

});

test('should edit expense', () => {

    const action = {

        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { 

            amount: 350,
            
        } 
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toBe(350);


});

test('should not edit expense if id not found', () => {

    const action = {

        type: 'EDIT_EXPENSE',
        id: 'hamburger',
        updates: { 

            amount: 350,
            

        } 
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);


});