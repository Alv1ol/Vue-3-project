<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');

const emit = defineEmits(['transactionSubmitted']);

const toast = useToast();

const onSubmit = () => { 
    if(!text.value || !amount.value){ 
        toast.error('Both fields must be filled');
        return;
    } 
    const transactionData = { 
        text: text.value,
        amount: parseFloat(amount.value),
    }

    emit('transactionSubmitted', transactionData);

    text.value = ''; 
    amount.value = '';
};
</script>

<template>
    <h3>Добавьте новую транзакцию</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Текст</label>
            <input type="text" id="text" v-model="text" placeholder="Введите текст...">
        </div>
        <div class="form-control">
            <label for="amount">
                Сумма <br>
                (отрицательный - расход, положительный - доход)
            </label>
            <input type="number" id="amount" v-model="amount" placeholder="Введите сумму...">
        </div>
        <button class="btn">Добавить транзакцию</button>
    </form>
</template>