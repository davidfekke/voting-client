import React from 'react/addons';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} 
    = React.addons.TestUtils;

describe('Voting', () => {
  
  it('renders a pair of buttons', () => 
    let votedWith;
    const vote = (entry) => votedWith = entry;
    
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} 
              vote={vote} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Trainspotting');
  });
  
});