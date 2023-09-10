# or-throw

Returns the value if truthy or throws an error.

```typescript
import { orThrow } from 'or-throw';

let foo = null;

orThrow(foo) // throws `new Error()`
orThrow(foo, 'error message') // throws `new Error('error message')`

foo = 1

orThrow(foo) // returns 1
```

```typescript
import { orThrowDeferred } from 'or-throw';

let foo = null;

orThrowDeferred(foo) // throws `new Error()` after a setTimeout with delay set to 0
orThrowDeferred(foo, 'error message') // throws `new Error('error message')` after a setTimeout with delay set to 0

foo = 1

orThrowDeferred(foo) // returns 1
```

## Install

You can get `or-throw` via [npm](http://npmjs.com).

```
npm i or-throw
```
