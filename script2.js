let count = 0;

const value = document.getElementById("count");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const styles = e.currentTarget.classList;
		if (styles.contains("btn-success")) {
			count--;
		}
		if (styles.contains("btn-danger")) {
			count++;
		}
		if (styles.contains("btn-secondary")) {
			count = 0;
		}
		if (count > 0) {
			value.style.color = "red";
		}
		if (count < 0) {
			value.style.color = "green";
		}
		if (count === 0) {
			value.style.color = "black";
		}
		value.innerText = count;
	});
});
