<div class="login flex items-center justify-center">
    <img src="tree.png" alt="logo"/>
    <h1>Login</h1>
    <button on:click={login}>Google</button>
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
