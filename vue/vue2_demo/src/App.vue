<<template>
    <div>
        <h2>原生</h2>
        <button>原生按钮</button>
        <h2>Element UI</h2>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
            };
        }
    };
</script>

<style>
    
</style>