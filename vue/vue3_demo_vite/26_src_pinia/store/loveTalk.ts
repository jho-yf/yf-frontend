import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { reactive } from 'vue'

// 组合式写法
export const useLoveTalkStore = defineStore('loveTalk', () => {
  const talkList = reactive([]);

  async function addTalk() {
    let {data:{content}} = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')
    talkList.push({ id:nanoid(), content })
  }
  
  return {
    talkList,
    addTalk
  }
})