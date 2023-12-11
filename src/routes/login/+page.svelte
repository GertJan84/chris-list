<script>
    import { auth } from '$lib/utils/firebase.ts';
    import { GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence} from "firebase/auth";
    import { authUser } from '$lib/authStore'
    import { goto } from '$app/navigation';

    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');

        setPersistence(auth, browserSessionPersistence).then(async () => {
            
            const result = await signInWithPopup(auth, provider);

            try {
                const user = result.user

                $authUser = {
                    uid: user.uid,
                    name: user.displayName,
                    photo: user.photoURL
                }

                goto('/groups')

            } catch(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
            }

        })
    }


</script>


<div class="login flex items-center justify-center">
    <img src="tree.png" alt="logo"/>
    <h1>Login</h1>
    <button on:click={loginGoogle}>Google</button>
</div>

<style lang="postcss">
    .login {
        flex-direction: column;
        height: 100vh;
    }

    .login > img {
        margin-bottom: 2rem;
    }

    .login > h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    .login button {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        border: solid 1px black;
        background-color: theme(colors.red);
    }

    .login button:hover {
        background-color: rgb(141, 80, 61)    
    }
</style>
