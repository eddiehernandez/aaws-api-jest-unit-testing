import CustomersController from '../../src/controllers/CustomersController'



test ('sample test', () => {
    const customersController = new CustomersController();
    const id: string = '123';
    expect(customersController.getCustomer(id)).toBe('this is a test response');
})