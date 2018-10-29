
import checkIfElementExists from '../lib/checkIfElementExists';
/**
 * Wait for the given element to be checked, enabled, selected, visible, contain
 * a text, contain a value or to exist
 * @param  {String}   elem                     Element selector
 * @param  {String}   ms                       Wait duration (optional)
 * @param  {String}   falseState               Check for opposite state
 * @param  {String}   state                    State to check for (default
 *                                             existence)
 */

 ///^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
module.exports =
() => {

    console.log('Two seconds later');

  var  elem = "body > div.desktop.container.forceStyle.oneOne.oneConsoleLayoutContainer2.oneAppLayoutHost.forceAccess.forceStyle.oneOne > div.viewport > div > div.flexipagePage > div.oneUtilityBarContainer.oneUtilityBar > div.oneUtilityBar.slds-utility-bar_container > ul > li:nth-child(1) > div > div > button > span" ;
  var  state = 'be visible';
  var ms= null;
  var falseState= null;
  
    /**
     * Maximum number of milliseconds to wait, default 3000
     * @type {Int}
     */
    const intMs = parseInt(ms, 10) || 3000;

    /**
     * Command to perform on the browser object
     * @type {String}
     */
    let command = 'waitForExist';

    /**
     * Boolean interpretation of the false state
     * @type {Boolean}
     */
    let boolFalseState = !!falseState;

    /**
     * Parsed interpretation of the state
     * @type {String}
     */
    let parsedState = '';

    if (falseState || state) {
        parsedState = state.indexOf(' ') > -1
            ? state.split(/\s/)[state.split(/\s/).length - 1]
            : state;

        // Check box checked state translates to selected state
        if (parsedState === 'checked') {
            parsedState = 'selected';
        }

        if (parsedState) {
            command = `waitFor${parsedState[0].toUpperCase()}` +
                `${parsedState.slice(1)}`;
        }
    }

    if (typeof falseState === 'undefined') {
        boolFalseState = false;
    }

    browser[command](elem, intMs, boolFalseState);




    var element = 'body > div.desktop.container.forceStyle.oneOne.oneConsoleLayoutContainer2.oneAppLayoutHost.forceAccess.forceStyle.oneOne > div.viewport > div > div.flexipagePage > div.oneUtilityBarContainer.oneUtilityBar > div.oneUtilityBar.slds-utility-bar_container > ul > li:nth-child(1) > div > div > button > span';

    const method = 'click';

    checkIfElementExists(element);

    browser[method](element);
    console.log('Two seconds later');









};
