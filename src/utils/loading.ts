import { ElLoading } from 'element-plus'

let loading

export const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: '加载中......',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

export const endLoading = () => {
  loading.close()
}