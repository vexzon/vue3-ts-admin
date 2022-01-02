import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import hcRequest from './service/index'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}



hcRequest.get<DataType>({
  url: '/home/multidata',
}).then((res) => {
  console.log(res.data);
  console.log(res.returnCode);
  console.log(res.success);
})