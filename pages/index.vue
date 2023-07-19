<template>
  <div class="container">
    <div class="card">
      <DataTable :value="todo" table-style="min-width: 50rem">
        <template #header>
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">ЗАДАЧА</span>
            <Button icon="pi pi-user" rounded raised />
          </div>
        </template>
        <Column v-for="item in columns" class="text-white" :field="item.field" :header="item.header"></Column>
        <Column header="actions">
          <template #body="{data}">
            <Button label="Редактировать" icon="pi pi-pencil" @click="update(data.id)" />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
  <Dialog  v-model:visible="visible" modal header="Редактировать" :style="{ width: '50vw' }">
    <label for="input">Изменить значение :</label>
    <InputText id="input" v-model="newvalue.value" class="w-full outline-none mt-4" type="text" />
    <template #footer>
      <Button label="Отмена" icon="pi pi-times" text @click="visible = false" />
      <Button label="Сохранить" icon="pi pi-check" autofocus @click="save(newvalue.id)" />
    </template>
  </Dialog>
</template>
<script setup lang="ts">
const newvalue = ref({
  name: '',
  value: ''
})
const visible = ref(false)
const columns = ref([
  {
    header: 'Name',
    field: 'name'
  },
  {
    header: 'Value',
    field: 'value'
  }
])

const update = (id:number) => {
  visible.value = true
  const findedTodo = todo.value.find(el => el.id === id)
  Object.assign(newvalue.value, findedTodo)
}
const save = (id:number) => {
  const findedTodo = todo.value.find(el => el.id === id)
  Object.assign(findedTodo, newvalue.value)
  visible.value=false
}
const todo = ref(
  [
    {
      id: 1,
      name: 'foo1',
      value: 'boo1'
    },
    {
      id: 2,
      name: 'foo2',
      value: 'boo2'
    },
    {
      id: 3,
      name: 'foo3',
      value: 'boo3'
    },
    {
      id: 4,
      name: 'foo4',
      value: 'boo4'
    },
    {
      id: 5,
      name: 'foo5',
      value: 'boo5'
    },
    {
      id: 6,
      name: 'foo6',
      value: 'boo6'
    },
    {
      id: 7,
      name: 'foo7',
      value: 'boo7'
    },
    {
      id: 8,
      name: 'foo8',
      value: 'boo8'
    },
    {
      id: 9,
      name: 'foo9',
      value: 'boo9'
    },
    {
      id: 10,
      name: 'foo10',
      value: 'boo10'
    },
    {
      id: 11,
      name: 'foo11',
      value: 'boo11'
    },
    {
      id: 12,
      name: 'foo12',
      value: 'boo12'
    },
    {
      id: 13,
      name: 'foo13',
      value: 'boo13'
    },
    {
      id: 14,
      name: 'foo14',
      value: 'boo14'
    },
    {
      id: 15,
      name: 'foo15',
      value: 'boo15'
    },
    {
      id: 16,
      name: 'foo16',
      value: 'boo16'
    },
    {
      id: 17,
      name: 'foo17',
      value: 'boo17'
    },
    {
      id: 18,
      name: 'foo18',
      value: 'boo18'
    },
    {
      id: 19,
      name: 'foo19',
      value: 'boo19'
    },
    {
      id: 20,
      name: 'foo20',
      value: 'boo20'
    },
    {
      id: 21,
      name: 'foo21',
      value: 'boo21'
    },
    {
      id: 22,
      name: 'foo22',
      value: 'boo22'
    },
    {
      id: 23,
      name: 'foo23',
      value: 'boo23'
    },
    {
      id: 24,
      name: 'foo24',
      value: 'boo24'
    },
    {
      id: 25,
      name: 'foo25',
      value: 'boo25'
    },
    {
      id: 26,
      name: 'foo26',
      value: 'boo26'
    },
    {
      id: 27,
      name: 'foo27',
      value: 'boo27'
    },
    {
      id: 28,
      name: 'foo28',
      value: 'boo28'
    },
    {
      id: 29,
      name: 'foo29',
      value: 'boo29'
    },
    {
      id: 30,
      name: 'foo30',
      value: 'boo30'
    }
  ]
)
</script>
