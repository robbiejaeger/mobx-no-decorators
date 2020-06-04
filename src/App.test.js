import React from 'react';
import App from './App';

import { waitFor, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Provider } from 'mobx-react';
import IdeasStore from './ideasStore';
import 'mobx-react-lite/batchingForReactDom';

describe('App', () => {
  it('should render the App', () => {
    render(<Provider ideasStore={new IdeasStore()}>
      <App />
    </Provider>);
  });

  it('should add an idea', async () => {
    const {debug, getByPlaceholderText, getByText} = render(<Provider ideasStore={new IdeasStore()}>
                                                      <App />
                                                    </Provider>);

    await userEvent.type(getByPlaceholderText('Title...'), 'Cool!');
    // fireEvent.change(getByPlaceholderText('Title...'), {event: {value: 'Cool!'}});
    debug();
    userEvent.click(getByText('Add Idea'));

    expect(getByText('Cool!')).toBeInTheDocument();
  })
});
