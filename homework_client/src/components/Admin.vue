<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>Таблицы</template>
                    <el-menu-item-group>
                        <router-link to="/debts">
                          <el-menu-item index="2-1">Задолженность</el-menu-item>
                        </router-link>
                        <router-link to="/debts">
                          <el-menu-item index="2-2">Персоны</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
            </el-header>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>


</template>




<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>