import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';

// Styling
import '../../stories.scss';

// README
import ChromeDoc from '../../docs/repos/Chrome/DOC.md';
import ProxyDoc from '../../docs/repos/Proxy/DOC.md';
import StarterAppDoc from '../../docs/repos/StarterApp/DOC.md';
import { doc }  from 'storybook-readme';

storiesOf('Repos', module)
    .add('Starter App', doc(StarterAppDoc))
    .add('Chrome', doc(ChromeDoc))
    .add('Proxy', doc(ProxyDoc));