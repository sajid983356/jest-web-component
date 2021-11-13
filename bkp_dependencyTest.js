/**
 * @jest-environment jsdom
 */
const Dependency = require('./Dependency')

describe('My Test', () => {
    let sut;
    let events = {};

    beforeEach(() => {
        sut = new Dependency();

        console.log(sut)

        // Empty our events before each test case
        events = {};

        // Define the addEventListener method with a Jest mock function
        document.addEventListener = jest.fn((event, callback) => {
            events[event] = callback;
        });

        console.log(" 1 events -> ", events)
        document.removeEventListener = jest.fn((event, callback) => {
            delete events[event];
        });

        console.log(" 2 events -> ", events)

    });

    test('Test Keypress fires callback', () => {
        // Watch the function that gets called when our event fires

        // add listener

        // clear body contents
        document.body.innerHTML.div = "";

        // dispatch click event to listener
        const addEvt = new Event('click');
        document.dispatchEvent(addEvt);

        // check for existence of "P" element
        // const bodyEl = document.body.firstChild;
        // expect(bodyEl).not.toEqual(null);
        // expect(bodyEl.tagName).toBe('P');
        // document.body.innerHTML = "";
        // jest.spyOn(sut, 'pressed');
        // jest.spyOn(sut, 'getPrint');

        // // A method inside of our dependency that sets up event listeners
        // sut.setupEvents();

        // // Fire the keypress event
        // events.click({ key: 'Enter' });

        // // We fired an event, so this should have been called
        // expect(sut.pressed).toHaveBeenCalled();
        // expect(sut.getPrint).toHaveBeenCalled();
    });
});