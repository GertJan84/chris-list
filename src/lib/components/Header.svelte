<script>
    import { authUser } from '$lib/authStore'
    import { goto } from '$app/navigation'

    const gotoGroups = () => {
        goto('/groups')
    }
</script>

<header class="flex flex-row items-center justify-between">
    <img src="tree.png" id="logo" alt="logo" on:click={gotoGroups} />
    <img src="{$authUser?.photo}" id="profile-picture" alt="profile" />
</header>

<style>
    header {
        padding: 1rem 2rem;
    }

    #logo {
        width: 5rem;
        height: 5rem;
    }

    #profile-picture {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
    }
</style>
