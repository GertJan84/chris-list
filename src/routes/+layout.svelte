<script>
  import "../app.css";
</script>

<slot />

<style lang='postcss'>
    :global(body) {
        background-color: theme(colors.dark);
    }
    
    :global(*) {
        color: theme(colors.silver);
    }

    :global(button) {
        padding: 0.3rem;
        border-radius: 5px;
        border: 1px solid black;
        background-color: theme(colors.blue-gray);
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
</style>
