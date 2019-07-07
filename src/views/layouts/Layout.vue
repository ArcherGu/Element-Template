<template>
    <el-container>
        <el-header>
            <el-button type="primary" @click="goHomePage">Home Page</el-button>
            <el-button type="success" @click="goUserPage">User Page</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">Sidebar</el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    components: {},
    props: {},
    data() { return {} },
    mounted() { },
    methods: {
        goHomePage() {
            this.$router.push({path:'/'});
        },
        goUserPage() {
            this.$router.push({path:'/user'});
        }
    },
    computed: {},
}
</script>

<style>
</style>