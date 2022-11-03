# Safe-url
Returns a safe url of the given string

## Motivation
Solves potential XSS vulnerabilities when `javascript:` is used as a protocol.

## Installation

```
yarn add @kaliber/safe-url
```

## Usage
This function should be used when you want to navigate a user to a other url especially when you take the value form the url. A use case would be to check a returnUrl.

```js
import { safeUrl } from '@kaliber/safe-url'

const { returnUrl } = req.query // useQueryString()

// Allowed protocols
window.location.href = safeUrl(returnUrl) // returnUrl = 'https://kaliber.net'

// This throws a error
window.location.href = safeUrl(returnUrl) // returnUrl =  'javascript:confirm(document.domain)'
```

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
