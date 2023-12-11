<script>
    export let name;
    export let photo;
</script>

<div class="person flex justify-center" style="background-image: url('{photo}');">
    <h1>{name}</h1>
</div>

<style lang="postcss">
    .person {
        width: 10rem;
        height: 10rem;
        border: 1px solid theme(colors.black);
        border-radius: 5px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .person h1 {
        color: theme(colors.white);
        font-size: 1.5rem;
        text-shadow: 0 0 5px black;
    }
</style>
