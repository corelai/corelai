<script setup lang="ts">
import { useCounterStore} from "@/stores/counter.ts";
import {storeToRefs} from "pinia";

const counterStore = useCounterStore();
const increment = counterStore.increment;
const { count } = storeToRefs(counterStore)

</script>

<template>
  <div class="about sm:h-vh sm:flex sm:flex-col sm:align-middle sm:items-center">
    <h1>This is an about page</h1>
    <button class="
        cursor-pointer
         rounded-4xl
         border-2
         border-teal-300
         p-2
         hover:bg-teal-500
         hover:text-teal-800
    "
    @click="increment"
    >Press me for changing actual value
    </button>
    <p>{{ count }}</p>
  </div>
</template>

<style>

</style>
