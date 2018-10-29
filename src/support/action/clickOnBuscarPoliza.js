
import checkIfElementExists from '../lib/checkIfElementExists';
import checkContainsText from '../check/checkContainsText';
function waitForElememnt(elem) {
      var  state = 'be visible';
  var ms= null;
  var falseState= null;
  const intMs = parseInt(ms, 10) || 3000;
  let command = 'waitForExist';
  let boolFalseState = !!falseState;
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
}



module.exports =(policy) => {

    console.log('Two seconds later');


  var buscarClientePolizaButton = 'body > div.desktop.container.forceStyle.oneOne.oneConsoleLayoutContainer2.oneAppLayoutHost.forceAccess.forceStyle.oneOne > div.viewport > div > div.flexipagePage > div.oneUtilityBarContainer.oneUtilityBar > div.oneUtilityBar.slds-utility-bar_container > ul > li:nth-child(1) > div > div > button > span';
  var buscarPorPolizaButton = '#modal-content-id-1 > fieldset > div > div.slds-form-element__row.searchPolicyGroup > div > lightning-radio-group > fieldset > div > div > span:nth-child(2) > label > span';
  var buscarField ='#modal-content-id-1 > fieldset > div > div:nth-child(3) > div > div > div > input';

  var buscarButton = '#modal-content-id-1 > fieldset > div > div:nth-child(5) > div.slds-form-element.slds-size_1-of-3 > div > button';

  var polizaNumber = '#brandBand_3 > div > div > header > div > div > header > div.slds-page-header.forceHighlightsStencilDesktop > div > div.slds-grid.slds-col.slds-has-flexi-truncate.slds-media--center > div.slds-media__body > h1 > span';

    waitForElememnt(buscarClientePolizaButton);
    checkIfElementExists(buscarClientePolizaButton);    
    browser.click(buscarClientePolizaButton);


    waitForElememnt(buscarPorPolizaButton);
    checkIfElementExists(buscarPorPolizaButton);
    browser.click(buscarPorPolizaButton);
   

    waitForElememnt(buscarField);
    checkIfElementExists(buscarField);
    browser.setValue(buscarField,policy);

    waitForElememnt(buscarButton);
    checkIfElementExists(buscarButton);
    browser.click(buscarButton);
   

    waitForElememnt(buscarClientePolizaButton);
    checkIfElementExists(buscarClientePolizaButton);    
    browser.click(buscarClientePolizaButton);


    var text = browser.getText(polizaNumber);
    console.log(text);

    checkContainsText('element', polizaNumber, policy);
};
