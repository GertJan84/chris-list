<script>
    import Icon from './Icon.svelte'

    export let name;
    export let price;
    export let url;

    let icon_space = '1.5rem'
</script>

<div class="item flex flex-row justify-between items-center mb-0.5 p-1">
    <div class="flex flex-row items-center space-x-1">
        <div class="checkbox"></div>
        <span>{name}</span>
    </div>
    <div class="flex flex-row items-center space-x-2">
        <span>€ {price}</span>
        <a href={url} target="_blank">
            <Icon name='link' width={icon_space} height={icon_space}/>
        </a>
        <Icon name='pen' width={icon_space} height={icon_space}/>
    </div>
</div>

<style lang="postcss">
    .item {
        height: 3rem;
        background-color: theme(colors.blue-gray);
    }

    .checkbox {
        width: 2rem;
        height: 2rem;
        margin: 0 0.5rem;
        border: solid 1px theme(colors.black); 
    }   
</style>
