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

	static getUserInfo(id) {
		const users = this.#users;
		const idx = users.id.indexOf(id);
		const usersKey = Object.keys(users);
		const userInfo = usersKey.reduce((newUsers, info) => {
			newUsers[info] = users[info][idx];
			return (newUsers);
		}, {});
		return (userInfo);
	}

	static save(userInfo) {
		const users = this.#users;
		users.id.push(userInfo.id);
		users.psword.push(userInfo.psword);
		users.name.push(userInfo.name);
		return ({ success: true });
	}
}

module.exports = UserStorage;
