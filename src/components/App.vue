<template>
    <main>
        <CellRender/>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-component-decorator'
import CellRender from './CellRender.vue'

@Component({
    components: {
        CellRender
    }
})
export default class App extends Vue { }
</script>