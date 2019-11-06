<template>
    <div class="home">
        <Head />
        <Count />
        <Fouter />
    </div>
</template>
<script>
import Head from '../components/Head'
import Fouter from '../components/Fouter'
import Count from '../components/Count'
export default {
    name:'home',
    components:{
        Head,Fouter,Count
    },
    data(){
        return {

        }
    },
}
</script>
<style scoped lang="scss">

</style>