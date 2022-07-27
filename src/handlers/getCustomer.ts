"use strict";

class Customer {
    id: number;
    name: string;
    email: string;
    company: string;
}

module.exports.main = async (event) => {

    const id: number = event.pathParameters.id
    console.log(`id = ${id}`)
    const customersDb: Array<Customer> = []

    const customer = new Customer()
    customer.id = 123
    customer.name = 'Johnny Man'
    customer.email = 'johnny@me.com'
    customer.company = 'ABC Healthcare System'
    
    customersDb.push(customer);
    
    const response = customersDb.find(x => {return x.id == id})
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
