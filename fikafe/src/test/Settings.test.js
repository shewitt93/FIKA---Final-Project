import Settings from '../components/Settings'

describe('Settings', () => {
    let component, userInput, form, handleSubmit;
    let fakeEvent = { preventDefault: () => "do nothing" }; 

    beforeEach(() => {
        
        component = shallow(<Settings/>);
        handleSubmit = jest.fn();
    });

    test("it should contain a word", ()=>{
        expect(component.find('h1').text()).toContain('FIKA')
    });

    test("it should contain a word", ()=>{
        expect(component.find('h3').text()).toContain('Login')
    });

    test("it renders with state of username as an empty string", () => {
        expect(component.state('username')).toBe("")
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