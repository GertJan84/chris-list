<script>
    import Group from '$lib/components/Group.svelte'
    import Header from '$lib/components/Header.svelte'
</script>

<Header profile='' />

<div class="flex items-center justify-center align-center">
    <div>
        <h1 class="mb-4">Groups</h1>
        <hr class='mb-2' />
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-y-6 gap-x-9">
           <Group name='test name' />
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 2rem;  
    }
</style>
