import { Toaster } from '../components/ui/sonner'

const ToastProvider = () => {
  return (
    <div>
        <Toaster
        theme='light'
        richColors
        position='top-right'
        className='bg-neutral-100 shadow-md'

        />
    </div>
  )
}

export default ToastProvider