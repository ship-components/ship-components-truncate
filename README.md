# ship-components-truncate
Exports a component that can be used for truncating string and text inputs (comments, descriptions, etc.)

[![npm](https://img.shields.io/npm/v/ship-components-truncate.svg)](https://www.npmjs.com/package/ship-components-truncate)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-truncate/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-truncate)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-truncate.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-truncate)

### Install dependencies and modules
To get started, navigate to the root directory of the project and run the following command to install the packages with npm:

```shell
$ npm install
```
### Running
After running the command above, run the following command in and navigate to http://localhost:8080.
```shell
$ npm run start
```

Examples can be found in the `examples/` folder.

## Changelog

- 0.1.5: Removed node deps, fixed security issue, removed extra white spaces
- 0.1.3: Initial commit

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import Truncate from 'ship-components-truncate';

export default class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
	      <Truncate
	       key="short-text"
	       characterLimit={50}
		   text={"some text..."}
		   onClick={someFunction}
	       />
      </div>
    );
  }
}
```

Replace the prop values with accordance to your expectations for user behavior.

## License
The MIT License (MIT)

Copyright (c) 2019

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
