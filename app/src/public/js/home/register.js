"use strict";

const id = document.querySelector("#id"),
	name = document.querySelector("#name"),
	psword = document.querySelector("#psword"),
	confirmPsword = document.querySelector("#confirm-psword"),
	regsiterBtn = document.querySelector("#button");

regsiterBtn.addEventListener("click", regsiter);

function regsiter() {
	const req = {
		id: id.value,
		name: name.value,
		psword: psword.value,
		confirmPsword: confirmPsword.value
	};

	console.log(req);

	fetch("/regsiter", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(req),
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.success) {
				location.href = "/login";
			} else {
				alert(res.msg);
			}
		})
		.catch((error) => {
			console.log("회원가입 중 에러 발생"); 
		});
}
