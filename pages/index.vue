<template>
  <div class="container">
    <h1>hello world</h1>
    <div class="card">
      <DataTable :value="customers" paginator :rows="5" :rows-per-page-options="[5, 10, 20, 50]" table-style="min-width: 50rem">
        <Column field="name" header="Name" style="width: 33.3333%" />
        <Column field="country.name" header="Country" style="width: 33.3333%" />
        <Column field="company" header="Company" style="width: 33.3333%" />
      </DataTable>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { CustomerService } from '@/service/CustomerService'

onMounted(() => {
  CustomerService.getCustomersMedium().then(data => (customers.value = data))
})
const customers = ref()
</script>
