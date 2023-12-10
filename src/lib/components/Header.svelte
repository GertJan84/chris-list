<script>
    export let profile = ''
</script>

<header class="flex flex-row items-center justify-between">
    <a href="/groups"><img src="tree.png" id="logo" alt="logo"/></a>
    <img src="{profile}" id="profile-picture" alt="profile"/>
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
