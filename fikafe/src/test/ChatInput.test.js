import ChatInput from '../components/ChatInput'

describe('Chat Input', () => {
    let component, handleSubmit, userInput, form;
    let fakeEvent = { preventDefault: () => "do nothing" }; 
    

    beforeEach(() => {
       component = shallow(<ChatInput/>);
       handleSubmit = jest.fn();

    });

    test("the form renders", () => {
        expect(component.find('form')).toHaveLength(1);
    });

    test("there are 1 input fields", () => {
        expect(component.find('input')).toHaveLength(2);
    });

    test("updates state when a user enters input", () => {
        userInput = component.find('.formInput')
        userInput.simulate("change", {target: {value: "B"}});
        expect(component.state('message')).toBe('B');
    });

    test("calls on handleSubmit", () => {
        form = component.find('form')
        form.simulate("submit", fakeEvent);
        expect(handleSubmit.mock.calls.length).toBe(1);
        expect(handleSubmit.mock.calls[0][0]).toBe('bhuma');
    });




})