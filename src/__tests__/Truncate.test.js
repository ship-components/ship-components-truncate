// README FIRST:
// 1. Uncomment the codes below to use it as an example
// 2. You can change "Index" on line 10 to anything you wish to be called
// 3. Please note that a lot of the tests below are just for reference - may or maynot be relevent to your react app. Feel free to remove them.
// 4. Examples below are using Jest with enzyme but feel free to use anything you wish.

import React from 'react';
import Truncate from '../Truncate'
import renderer from 'react-test-renderer'

  describe('Truncate', () => {

    it('should be a function', () => {
      expect(typeof Truncate).toBe('function')
    });

    it('renders correctly', () => {
      const tree = renderer
        .create(<Truncate text="lorem ipsum something that i dont remember" characterLimit={20} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });




  });
  
