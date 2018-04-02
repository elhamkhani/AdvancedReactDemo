import  React from 'react';
import ArticleList from '../ArticleList';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('ArticleList', () => {
  Enzyme.configure({adapter: new Adapter()});

  const testProps = {
    articles:{
      a: {id:'a', authorId:''},
      b: {id:'b'},
    },
  };

  it('renders correctly', () =>  {
    const wrapper = Enzyme.shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();

  });
});
