import {obj} from './func.js';
import * as My from './func.js';
import obj1 from './2.js';

alert(obj.name);
alert(My.obj2.name);
alert(obj1.name+` is ${obj1.age} y.o.
She's the ${obj1.sayLady()}`);