

// const URL = 'http://localhost:3000'
// const API_URL = '/api/users'

// const createUser = async newData =>{
//     try {
// 		const firebaseResponse = await createUserWithEmailAndPassword(
// 			auth,
// 			newData.email,
// 			newData.pass
// 		);
// 		console.log('user registered');
// 		event.target.reset();
// 		const id = firebaseResponse.user.uid;

// 		conectar a mongo para que envie la info
// 		await fetch(URL+API_URL, {
// 			method: 'POST',
// 			body: JSON.stringify({_id:id},newData),
// 			headers: { 'Content-Type': 'application/json' }
// 		});
// 		Navigate('/');
// 	} catch (err) {
// 		console.error('ERROR registering user: ', err.code, err.message);
// 	}
// }
// const registerUser = async (event, navigate) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const pass = event.target.pass.value;
//     try {
//         const firebaseResponse = await createUserWithEmailAndPassword(
//             auth,
//             email,
//             pass
//         );
//         console.log('user registered');
//         event.target.reset();
//         const id = firebaseResponse.user.uid;

//         conectar a mongo para que envie la info
//         await fetch(URL+API_URL, {
//             method: 'POST',
//             body: JSON.stringify({ _id: id, email }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         navigate('/');
//     } catch (err) {
//         console.error('ERROR registering user: ', err.code, err.message);
//     }
// };

// export {createUser}