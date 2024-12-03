<script setup>
const emit = defineEmits(['transactionDeleted']);

const props = defineProps({
    transactions: { 
        type: Array,
        required: true
    }
})

const deleteTransaction = (id) => { 
    emit('transactionDeleted', id);
}
</script>

<template>
    <h3>
        История
    </h3>
    <ul id="list" class="list">
        <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'minus' : 'plus'"
        >
            {{ transaction.text }} <span>₽{{ transaction.amount }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">X</button>
        </li>
    </ul>
</template>