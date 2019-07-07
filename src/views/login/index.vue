<template>
    <div>
        <el-card class="login-form-layout">
            <el-form
                autoComplete="on"
                :model="loginForm"
                :rules="loginRules"
                ref="loginForm"
                label-position="left"
            >
                <h2 class="login-title color-main">用户登陆</h2>
                <el-form-item prop="username">
                    <el-input
                        name="username"
                        type="text"
                        v-model="loginForm.username"
                        autoComplete="on"
                        placeholder="请输入用户名"
                    >
                        <span slot="prefix">
                            <i class="fas fa-user-circle"></i>
                        </span>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        name="password"
                        :type="pwdType"
                        @keyup.enter.native="doLogin"
                        v-model="loginForm.password"
                        autoComplete="on"
                        placeholder="请输入密码"
                    >
                        <span slot="prefix">
                            <i class="fas fa-key"></i>
                        </span>
                        <span
                            slot="suffix"
                            @click="showPwd"
                        >
                            <i
                                class="fas"
                                :class="pwdShowIcon"
                            ></i>
                        </span>
                    </el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 60px">
                    <el-button
                        style="width: 100%"
                        type="primary"
                        :loading="loading"
                        @click.native.prevent="doLogin"
                    >
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        const validatePass = (rule, value, callback) => {
            if (value.length < 3) {
                callback(new Error('密码不能小于3位'));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                username: "",
                password: "",
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
                password: [{ required: true, trigger: 'blur', validator: validatePass }]
            },
            loading: false,
            pwdType: 'password',
            pwdShowIcon: 'fa-eye'
        };
    },
    mounted() { },
    methods: {
        showPwd() {
            if (this.pwdType === 'password') {
                this.pwdType = '';
                this.pwdShowIcon = 'fa-eye';
            } else {
                this.pwdType = 'password';
                this.pwdShowIcon = 'fa-eye-slash';
            }
        },
        doLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$auth.login(this.loginForm).then(() => {
                        this.$router.push('/');
                    }).catch((error) => {
                        if (error.response) {
                            this.$message.error('登陆失败！用户名或密码错误！');
                        }
                    }).finally(() => {
                        this.loading = false;
                    })
                } else {
                    this.$message.error('参数验证不合法！');
                    return false
                }
            })
        }
    },
    computed: {},
}

</script>

<style scoped>
.login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #a340ff;
}
.login-title {
    text-align: center;
}
</style>