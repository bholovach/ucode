let Number = 123;
let BigInt = 1n;
let String = 'String';
let Boolean = true;
let Null = null;
let Undefined;
let Object = {};
let symbol = Symbol ("id");
(function (Function) { });
alert(` variable_name is Number; data_type is ${typeof Number}
\n variable_name is BigInt; data_type is ${typeof BigInt}
\n variable_name is String; data_type is ${typeof String}
\n variable_name is Booleng; data_type is ${typeof true}
\n variable_name is Null; data_type is ${typeof null}
\n variable_name is Undefined; data_type is ${typeof Undefined}
\n variable_name is Object; data_type is ${typeof Object}
\n variable_name is Symbol; data_type is ${typeof Symbol}
\n variable_name is function; data_type is ${typeof Function}`);