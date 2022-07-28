"use strict"

class UserStorage {
	static #users = {
		id: ["mher", "jhson", "kim"],
		psword: ["1234", "12345", "123456"],
		name: ["허민", "주성", "김영재"]
	};

	static getUsers(...fields) {
		const users = this.#users;
		const newUsers = fields.reduce((newUsers, field) => {
			if (users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}
			return (newUsers);
		}, {});
		return (newUsers);
	}
}

module.exports = UserStorage;
