<template>
    <section>
        <el-table
                :data="data"
                style="width: 100%">
            <el-table-column
                    prop="id_debt"
                    label="ID_DEBT"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="id_person"
                    label="ID_PERSON"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="id_portfolio"
                    label="ID_PORTFOLIO">
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Debts",
        computed: {
            ...mapState("persons", {
                data: s => s.debts,
            }),
        },
        mounted() {
            this.$store.dispatch('persons/GET_TABLE', {table:'debts'})
        }
    }
</script>

<style scoped>

</style>