import * as yup from 'yup'

const formSchema = yup.object().shape({
    choiceOfSauce: yup
        .string()
        .trim()
        .required('Choice of sauce is required')
        .min(1, 'Choice of min 1 sauce is required')
    choiceOfSize: yup
        .string()
        .size('You must choose a size for your pizza')
        .required('Size selection is required'),
    topping: yup
        .string()
        .max(10,['pepperoni', 'sausage', 'canadan bacon', 'spicy italian sausage','grilled chicken','onions','green papper', 'diced tomatos', 'black olives', 'roasted garlic','artichoke hearts','three cheese','pineapple','extra cheese'], 'Choose up to 10 toppings'),
    choiceOfSubstitue: yup
        .string()
        .oneOf(['gluten free crust'], 'Choose up to 1'),
    
})

export default formSchema