<script>
    import Header from '$lib/components/Header.svelte'
    import Item from '$lib/components/Item.svelte'
</script>

<Header />
<div class='groups'>
    <h1>Group: test</h1>
    <div class="item-list">
        <Item name='test' price='10,00' url='google.com'/>
    </div>
    <button class="md-4">Add item</button>
</div>
    

<style lang="postcss">
    .groups {
        width: 70%;
        height: 35rem;
        margin: 0 auto;
    }

    .item-list {
        margin: 0 auto;
        overflow-y: scroll;
        height: 35rem;
        max-width: 80rem;
        padding: 1px;
    }
</style>
