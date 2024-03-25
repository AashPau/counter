let count = 0;
const add = document.querySelector(".btn-danger");
const sub = document.querySelector(".btn-success");
const reset = document.querySelector(".btn-secondary");
let value = document.getElementById("count");

const increase = () => {
	count++;
	value.innerText = count;

	if (count > 0) {
		value.style.color = "red";
	}
	if (count < 0) {
		value.style.color = "green";
	}
	if (count === 0) {
		value.style.color = "black";
	}
};
const decrease = () => {
	count--;
	value.innerText = count;

	if (count > 0) {
		value.style.color = "red";
	}
	if (count < 0) {
		value.style.color = "green";
	}
	if (count === 0) {
		value.style.color = "black";
	}
};
const setZero = () => {
	count = 0;
	value.innerText = count;
	value.style.color = "black";
};
reset.addEventListener("click", setZero);
add.addEventListener("click", increase);

sub.addEventListener("click", decrease);

const number = parseInt(value.innerText);

if (count > 0) {
	value.style.color = "red";
}
if (count < 0) {
	value.style.color = "green";
}
console.log(count < 0);
if (count === 0) {
	value.style.color = "black";
}
