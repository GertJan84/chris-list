<script>
    import Header from '$lib/components/Header.svelte'
    import User from '$lib/components/User.svelte'
    let user = {
        'first_name': 'test',
        'url': 'google.com',
    }
</script>

<Header />

<div class="flex items-center justify-center align-center">
    <div>
        <h1>Groups: Template</h1>
        <hr class='mb-2' />
         <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-x-8 gap-y-8 mt-3 mb-3">
            <User user={user}/>
        </div>
        <div class="flex justify-between">
            <button>Rename group</button>
            <button>Delete group</button>
        </div>
   </div>
</div>
