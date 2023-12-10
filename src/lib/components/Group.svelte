<script>
    export let name;
</script>

<div class="group p-1 shadow"> 
    <h1>{name}</h1>
</div>

<style lang='postcss'>
    .group {
        width: 17rem;
        height: 12rem;
        border: 1px solid theme(colors.blue-gray);
        border-radius: 5px;
        background-image: url('background-placeholder.jpg');
        background-size: cover;
        background-position: center;
    }

    .group > h1 {
        font-size: 1.5rem;
        box-shadow: 1rem;
        color: theme(colors.silver);
    }
</style>
