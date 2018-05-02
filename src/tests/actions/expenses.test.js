import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('should setup remove expense action object', () => {

    const action = removeExpense({ id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'

    })

});

test('should update expense object', () => {

    const action = editExpense('123abc', { note: 'Shazam!' });
    expect(action).toEqual({

        id: '123abc',
        type: 'EDIT_EXPENSE',
        updates:{note: 'Shazam!'}

    });

});

test('should setup addExpense action object with provided values', () => {

    const expenseData = {

        description: 'some expense',
        amount: 1234,
        createdAt: 1000,
        note: 'it works'

    };

    const action = addExpense(expenseData);
    expect(action).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)

        }

        

    });



});

test('should setup addExpense action object with default values', () => {

    const action = addExpense();
    expect(action).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0

        }

    });

});