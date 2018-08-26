import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// This is important for meteor to render main.html file.
import './main.html';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});