import Chat from '../components/Chat'

describe('Chat', () => {
    let component;

    beforeEach(() => {
       // some pre-test setup
       component = shallow(<Chat.WrappedComponent/>);
       

    });

    test("submitMessage", () => {
        const submit = jest.spyOn(component.instance(), 'submitMessage')
        expect(typeof submit).toBe( 'function' );
    })

})