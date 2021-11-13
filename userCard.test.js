/**
 * @jest-environment jsdom
 */
const userCard = require('./userCard')

describe('My Test', () => {
    let sut;
    let events = {};

    beforeEach(() => {
        sut = new userCard();

        // Empty our events before each test case
        events = {};

        // Define the addEventListener method with a Jest mock function
        document.addEventListener = jest.fn((event, callback) => {
            events[event] = callback;
        });

        document.removeEventListener = jest.fn((event, callback) => {
            delete events[event];
        });
    });

    test('Test Keypress fires callback', () => {
        // Watch the function that gets called when our event fires
        jest.spyOn(sut, 'pressed');

        // A method inside of our userCard that sets up event listeners
        sut.setupEvents();

        // Fire the keypress event
        events.keypress({ key: 'Enter' });


        // We fired an event, so this should have been called
        expect(sut.pressed).toHaveBeenCalled();
    });
});