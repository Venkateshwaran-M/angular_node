import { move } from "./move.js";
import { myFunction } from "./myfunction.js";
import { reset } from "./reset.js";
import { push } from "./push.js";
var obj = document.getElementById("btn").addEventListener("click", move);
push(obj);
document.getElementById("submit").addEventListener("click", myFunction);
document.getElementById("find").addEventListener("keyup", reset);