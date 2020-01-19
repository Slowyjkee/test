<template>
    <section>
    </section>
</template>

<script>
    import {api} from "../../utils/api";

    export default {
        name: "Persons",
        mounted() {
            this.$store.dispatch('persons/GET_TABLE', {table:'persons'})
        }
    }
</script>

<style scoped>

</style>