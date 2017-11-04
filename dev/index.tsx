import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DemoPage } from './demo-page';

ReactDOM.render(<DemoPage/>, document.getElementById('app'));

declare var module: any;
module.hot.accept();
