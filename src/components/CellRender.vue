<template>
    <div class="cellrender">
        <p v-for="result in results" :key=result>
            {{ result }}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-component-decorator'

import { CellState } from '../libraries/Cell'
import { newState } from '../libraries/State'
import { survive } from '../libraries/Rule30'

@Component
export default class App extends Vue {
    sample: CellState = newState(120)

    get results () {
        let results: string[] = Array()
        let next: CellState

        results.push(this.sample.join(''))

        next = survive(this.sample)

        Array(100).fill(0).forEach((_, i) => {
            next = survive(next)
            results.push(next.join(''))
        })

        return results
    }
}
</script>