
import { createContext, useContext, useState } from 'react';

export const IngredientContext = createContext();


export const IngredientProvider = ({
    children
}) => {

    const [ingredientInputs, setIngredientInputs] = useState([]);


    const oldStateIsValid = () => {
        if (ingredientInputs.length === 0) {
            return true;
        };
    
        const someEmpty = ingredientInputs.some((item) =>
            item.Ingredient === ''
            || item.Unit === ''
            || item.Quantity === ''
        );
    
        if (someEmpty) {
            ingredientInputs.map((item, index) => {
                const allOldState = [...ingredientInputs];
    
                if (ingredientInputs[index].Ingredient === '') {
                    allOldState[index].errors.Ingredient = 'Ingredient is required';
                }
    
                if (ingredientInputs[index].Unit === '') {
                    allOldState[index].errors.Unit = 'Unit is required';
                }
    
                if (ingredientInputs[index].Quantity === '') {
                    allOldState[index].errors.Quantity = 'Quantity is required';
                }
    
                return setIngredientInputs(allOldState);
            });
        }
    
        return !someEmpty;
    };


    const addIngredientHandler = (e) => {
        e.preventDefault();
        const ingredientInputState = {
            Ingredient: '',
            Unit: '',
            Quantity: '',
            errors: {
                Ingredient: null,
                Unit: null,
                Quantity: null,
            }
        };
    
        if (oldStateIsValid()) {
            setIngredientInputs(oldState => [...oldState, ingredientInputState]);
        }
    
    };


    const onChangeIngredients = (index, event) => {
        event.preventDefault();
        event.persist();
    
        setIngredientInputs(oldState => {
            return oldState.map((item, i) => {
    
                if (i !== index) {
                    return item;
                };
    
                return {
                    ...item,
                    [event.target.name]: event.target.value,
                    errors: {
                        ...item.errors,
                        [event.target.name]: event.target.value.length > 0 ? null : [event.target.name] + ' Is required',
                    }
                };
            });
        });
    };
    
    
    const removeIngredientInputHandler = (e, index) => {
        e.preventDefault();
    
        setIngredientInputs(oldState => oldState.filter((item) => item !== oldState[index]))
    }

 
    return (
        <IngredientContext.Provider value={{ ingredientInputs, oldStateIsValid, addIngredientHandler, onChangeIngredients, removeIngredientInputHandler }}>
            {children}
        </IngredientContext.Provider>
    )
};

export const useIngredientContext = () => {
    const ingredientState = useContext(IngredientContext);

    return ingredientState;
}


