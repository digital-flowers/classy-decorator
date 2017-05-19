# classy-decorator
Create an instance from your javascript class without `new` keyword because this is more classy ;)

very easy to use
 
```javascript
import classy from "classy";

@classy()
class IamClassy {
    constructor() {
        console.log("IamClassy Instance!");
    }
}

console.log(new IamClassy() instanceof IamClassy);  // true

console.log(IamClassy() instanceof IamClassy);  // true
```