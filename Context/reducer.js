export const initialState = {
	user: {
		success: true,
		token:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYmQxYmExZTdkYzExY2NhYzE2YjMiLCJpYXQiOjE1OTkxNTIwNjYsImV4cCI6MTU5OTE1NTY2Nn0.JBRTzeO5V_lhk6Jql_YsNEwwpxO32duHbQhMcMTQxGY",
		user: {
			nickname: "Armored",
			posts: [],
			// pic: "/images/uploads/f09aa0faee9db41bfd1e33f19db56ba0",
			pic: null,
			admin: false,
			_id: "5f50bd1ba1e7dc11ccac16b3",
			username: "chandrasarat74@gmail.com",
			chats: [],
			__v: 0,
			hash:
				"d5d42af8713a04a0f15a37b082f9e2f08aaf0199d926943e7ef9b56f59f81d1a9c746f15f8ef79031f553f5389fccd62c87fdec899c2615b2d70e93849e07772a39b2e7f24d1560cab11d6735369b232726d38b31805d984f9f2dcd62e7d88e28af37d40dc0b8c0ce3b4e9e00c592859529f6e6191a9c7eb3faf4e33e960490ec058f47c3845edeb3759885c6998e13538908a749551b8af541fa9f362e1f85fc09f4f028d09db3731c57e4b2cfa0adfd69f34797e05a01922c74fc9a3b92d68886985c1531ca12ec705ea0c2675999f2c66fd85f07d9d8564c515db59edc3634b2a7ebb5da4112b912d6ac83a6ccca7c7532561ec0f8ff1329e9bbfd4c18cdc03011792c3843f4d619fb5046ad906adf2a38c30e7016089b4a4cc35ed3f1c749b6d773cc4076da29c3f0daf8f5b42d5ac8aa23b7c5c11799b0f2eb5af84780a501d23871e91edfb112b68bf323e781436956a4fc8f58298f6de47115ae3527f99adeb7eea99a845fdacace6623344be62164c353d135f65df747bbdf0738d939d0f8b047d50f83d81095d36b980070eb1d747e99594f9e3f2121352774ba741c4322ce903e56aa41a0c8ecbb02dc30232d6d8674e9accd67f1d8c0dbe1896271eb39e0346c5a5c3ba5640192343bd0c947de7b04cc127b8690a23527449637c7328d6c3356ece93b1827878dccd41638169a436b89b62d33ddc742948710c12",
			salt: "60247ab507709b6693d2f58d59f9c2337d0c6ce17884facd83bfc6fca84ff2eb",
		},
	},
};

export const actionTypes = {
	SET_USER: "SET_USER",
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
