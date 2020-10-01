import Login from '../components/LoginForm'

describe('Login', () => {

    let component, userInput, handleSubmit, form;
    let fakeEvent = { preventDefault: () => "do nothing" }; 

    beforeEach(() => {
       
        component = shallow(<Login/>);
        handleSubmit = jest.fn();
    });

    test("it renders with state of username as an empty string", () => {
        expect(component.state('username')).toBe("")
    });

    test("the form renders", () => {
        // how we test it
        expect(component.find('form')).toHaveLength(1);
    });

    test("there are 5 input fields", () => {
        // how we test it
        expect(component.find('input')).toHaveLength(3)
    });

    test("updates state when a user enters input", () => {
        userInput = component.find('.formInput')
        const inputOne = userInput.at(0)
        inputOne.simulate("change", {target: {value: "B"}});
        expect(component.state('usernanme')).toBe('B');
    });

    test("calls on handleSubmit", () => {
        userInput = component.find('.formInput')
        form = component.find('form')
        const inputOne = userInput.at(0)
        inputOne.simulate("change", {target: {value: 'bhuma'}});
        form.simulate("submit", fakeEvent);
        expect(handleSubmit.mock.calls.length).toBe(1);
        expect(handleSubmit.mock.calls[0][0]).toBe('bhuma');
    });

})
