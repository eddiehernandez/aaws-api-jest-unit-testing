"use strict";
import CustomersController from '../controllers/CustomersController';
import Customer from '../models/Customer'
import CustomerMockRepo from '../repos/CustomerMockRepo';
import ICustomerRepo from '../repos/ICustomerRepo';

// Eventually this can be replaced by a factory.  For now just directly instantiating for testing purposes.
const _customersRepo: ICustomerRepo = new CustomerMockRepo()
const _customersController: CustomersController = new CustomersController(_customersRepo)

module.exports.main = async (event) => {

    const id: number = event.pathParameters?.id
    if (!id) {
        return {
            statusCode: 404,
            body: JSON.stringify({message: `Customer id is missing in path parameter. (i.e. /customers/123)`})
        }
    }
    console.log(`id = ${id}`)

    // const response = customersDb.find(x => {return x.id == id})
    const response = _customersController.getCustomer(id)
    console.log('response = ', response)


    if (!response){
        return {
            statusCode: 404,
            body: JSON.stringify({message: `Customer not found for id of ${id}`})
        }
    }
    
    return {
        headers: { 'content-type': 'application/json'},
        statusCode: 200,
        body: JSON.stringify(
            {
            data: response
            })
    }

}
