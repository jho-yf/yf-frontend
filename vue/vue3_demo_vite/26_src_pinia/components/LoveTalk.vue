<template>
  <div>
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
        <li v-for="t in talkList" key="t.id">{{ t.content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { useLoveTalkStore } from '@/store/loveTalk';
    import { storeToRefs } from 'pinia';

    const loveTalkStore = useLoveTalkStore()
    let {talkList} = storeToRefs(loveTalkStore)

    loveTalkStore.$subscribe((mutate, state) => {
      console.log('talkList changed.')
      console.log('mutate', mutate)
      console.log('state', state)
    })

    function getLoveTalk() {
      loveTalkStore.addTalk()
    }
</script>
